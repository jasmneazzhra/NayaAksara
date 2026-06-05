# Naya Aksara AI Service

| Komponen  | Spesifikasi |
| --- | --- |
| Layanan | AI inference service for Naya Aksara image classification.| 
| Base URL (Hugging Face Space)| https://ikchandra-nayaaksara.hf.space | 
| Endpoint | POST /predict |
| Request Format | multipart/form-data | 
| Field name | image |
| Supported Input | jpg, jpeg, png | 

## Response Format (Example)
```json 
{
  "prediction": "ha",
  "confidence": 0.91
}
