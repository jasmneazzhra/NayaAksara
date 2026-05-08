import os
import argparse
import cv2
import pandas as pd


IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png", ".bmp", ".webp")


def calculate_blur_score(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return cv2.Laplacian(gray, cv2.CV_64F).var()


def calculate_brightness(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return gray.mean()


def classify_image_status(width, height, blur_score, brightness):
    if width < 64 or height < 64:
        return "too_small"
    if brightness < 40:
        return "too_dark"
    if blur_score < 50:
        return "blurry"
    return "ok"


def check_dataset_quality(dataset_dir):
    records = []

    if not os.path.exists(dataset_dir):
        raise FileNotFoundError(f"Dataset directory not found: {dataset_dir}")

    for label in sorted(os.listdir(dataset_dir)):
        label_path = os.path.join(dataset_dir, label)

        if not os.path.isdir(label_path):
            continue

        for filename in sorted(os.listdir(label_path)):
            if not filename.lower().endswith(IMAGE_EXTENSIONS):
                continue

            file_path = os.path.join(label_path, filename)
            image = cv2.imread(file_path)

            if image is None:
                records.append({
                    "filename": filename,
                    "label": label,
                    "file_path": file_path,
                    "status": "broken",
                    "width": None,
                    "height": None,
                    "blur_score": None,
                    "brightness": None
                })
                continue

            height, width = image.shape[:2]
            blur_score = calculate_blur_score(image)
            brightness = calculate_brightness(image)
            status = classify_image_status(width, height, blur_score, brightness)

            records.append({
                "filename": filename,
                "label": label,
                "file_path": file_path,
                "status": status,
                "width": width,
                "height": height,
                "blur_score": round(float(blur_score), 2),
                "brightness": round(float(brightness), 2)
            })

    return pd.DataFrame(records)


def summarize_quality_report(report):
    if report.empty:
        return pd.DataFrame()

    summary = (
        report
        .groupby(["label", "status"])
        .size()
        .reset_index(name="count")
        .sort_values(["label", "status"])
    )

    return summary


def main():
    parser = argparse.ArgumentParser(description="Check image dataset quality.")
    parser.add_argument(
        "--dataset_dir",
        default="dataset/raw",
        help="Path to dataset folder with label subfolders."
    )
    parser.add_argument(
        "--output",
        default="reports/data_quality_report.csv",
        help="Path to save detailed quality report."
    )
    parser.add_argument(
        "--summary_output",
        default="reports/data_quality_summary.csv",
        help="Path to save summary quality report."
    )

    args = parser.parse_args()

    os.makedirs(os.path.dirname(args.output), exist_ok=True)

    report = check_dataset_quality(args.dataset_dir)
    summary = summarize_quality_report(report)

    report.to_csv(args.output, index=False)
    summary.to_csv(args.summary_output, index=False)

    print("Data quality check completed.")
    print(f"Detailed report saved to: {args.output}")
    print(f"Summary report saved to: {args.summary_output}")

    if not report.empty:
        print("\nStatus summary:")
        print(report["status"].value_counts())
    else:
        print("No image files found.")


if __name__ == "__main__":
    main()
