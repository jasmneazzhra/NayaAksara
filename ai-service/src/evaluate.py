import tensorflow as tf
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix


DATASET_DIR = "dataset"
IMG_SIZE = (128, 128)
BATCH_SIZE = 32
MODEL_PATH = "ai-service/models/baseline_cnn.keras"


def main():
    test_ds = tf.keras.utils.image_dataset_from_directory(
        f"{DATASET_DIR}/test",
        image_size=IMG_SIZE,
        color_mode="grayscale",
        batch_size=BATCH_SIZE,
        label_mode="categorical",
        shuffle=False
    )

    class_names = test_ds.class_names

    normalization_layer = tf.keras.layers.Rescaling(1.0 / 255)
    test_ds = test_ds.map(lambda x, y: (normalization_layer(x), y))

    model = tf.keras.models.load_model(MODEL_PATH)

    y_true = []
    y_pred = []

    for images, labels in test_ds:
        predictions = model.predict(images)
        y_true.extend(np.argmax(labels.numpy(), axis=1))
        y_pred.extend(np.argmax(predictions, axis=1))

    print("Classification Report:")
    print(classification_report(y_true, y_pred, target_names=class_names))

    print("Confusion Matrix:")
    print(confusion_matrix(y_true, y_pred))


if __name__ == "__main__":
    main()
