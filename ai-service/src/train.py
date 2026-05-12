import os
import tensorflow as tf
from model import build_baseline_cnn


DATASET_DIR = "dataset"
IMG_SIZE = (128, 128)
BATCH_SIZE = 32
EPOCHS = 10
MODEL_OUTPUT_PATH = "ai-service/models/baseline_cnn.keras"


def load_dataset():
    """
    Expected dataset structure:

    dataset/
      train/
        ha/
        na/
        ca/
      val/
        ha/
        na/
        ca/
    """

    train_ds = tf.keras.utils.image_dataset_from_directory(
        f"{DATASET_DIR}/train",
        image_size=IMG_SIZE,
        color_mode="grayscale",
        batch_size=BATCH_SIZE,
        label_mode="categorical"
    )

    val_ds = tf.keras.utils.image_dataset_from_directory(
        f"{DATASET_DIR}/val",
        image_size=IMG_SIZE,
        color_mode="grayscale",
        batch_size=BATCH_SIZE,
        label_mode="categorical"
    )

    class_names = train_ds.class_names

    normalization_layer = tf.keras.layers.Rescaling(1.0 / 255)

    train_ds = train_ds.map(lambda x, y: (normalization_layer(x), y))
    val_ds = val_ds.map(lambda x, y: (normalization_layer(x), y))

    return train_ds, val_ds, class_names


def main():
    os.makedirs("ai-service/models", exist_ok=True)

    train_ds, val_ds, class_names = load_dataset()

    model = build_baseline_cnn(
        input_shape=(128, 128, 1),
        num_classes=len(class_names)
    )

    model.summary()

    model.fit(
        train_ds,
        validation_data=val_ds,
        epochs=EPOCHS
    )

    model.save(MODEL_OUTPUT_PATH)

    print("Training completed.")
    print(f"Model saved to: {MODEL_OUTPUT_PATH}")
    print(f"Classes: {class_names}")


if __name__ == "__main__":
    main()
