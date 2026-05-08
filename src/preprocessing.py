import os
import cv2
import numpy as np


def load_image(image_path):
    image = cv2.imread(image_path)

    if image is None:
        raise ValueError(f"Image cannot be loaded: {image_path}")

    return image


def convert_to_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


def resize_image(image, target_size=(128, 128)):
    return cv2.resize(image, target_size)


def normalize_image(image):
    return image.astype("float32") / 255.0


def preprocess_image(image_path, target_size=(128, 128), expand_dims=True):
    image = load_image(image_path)
    gray = convert_to_grayscale(image)
    resized = resize_image(gray, target_size)
    normalized = normalize_image(resized)

    if expand_dims:
        normalized = np.expand_dims(normalized, axis=-1)

    return normalized


def save_preprocessed_image(input_path, output_path, target_size=(128, 128)):
    image = load_image(input_path)
    gray = convert_to_grayscale(image)
    resized = resize_image(gray, target_size)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    cv2.imwrite(output_path, resized)

    return output_path


if __name__ == "__main__":
    sample_path = "dataset/raw/sample.png"
    output_path = "reports/preprocessed_sample.png"

    if os.path.exists(sample_path):
        processed = preprocess_image(sample_path)
        save_preprocessed_image(sample_path, output_path)

        print("Preprocessing success")
        print("Processed shape:", processed.shape)
        print("Saved preview to:", output_path)
    else:
        print("Sample image not found.")
        print("Put a sample image at dataset/raw/sample.png to test preprocessing.")
