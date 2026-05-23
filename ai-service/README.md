# Naya Aksara AI Service

AI inference service for Naya Aksara image classification.

## Endpoint

POST /predict

## Request Format

multipart/form-data

Field name:

image

Supported input:

jpg, jpeg, png

## Response Format

```json
{
  "prediction": "ha",
  "confidence": 0.91
}
