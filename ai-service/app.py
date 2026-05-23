from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
import cv2
import json
from PIL import Image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model("v3.keras")

with open("class_mapping.json", "r") as f:
    idx_to_class = json.load(f)


def preprocess_image(image_file):
    image = Image.open(image_file).convert("L")
    image = image.resize((128, 128))

    img = np.array(image).astype(np.uint8)

    kernel = np.ones((2, 2), np.uint8)
    img = cv2.dilate(img, kernel, iterations=1)

    img = img.reshape(1, 128, 128, 1).astype(np.float32) / 255.0

    return img


@app.get("/")
def home():
    return {
        "status": "ok",
        "message": "Naya Aksara AI API is running"
    }


@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    img = preprocess_image(image.file)

    probs = model.predict(img, verbose=0)[0]

    pred_idx = int(np.argmax(probs))
    confidence = float(probs[pred_idx])
    prediction = idx_to_class[str(pred_idx)]

    return {
        "prediction": prediction,
        "confidence": round(confidence, 4)
    }
