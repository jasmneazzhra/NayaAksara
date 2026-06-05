# Naya Aksara AI Service
Berikut informasi dari AI service kami

| Komponen  | Spesifikasi |
| --- | --- |
| Layanan | AI inference service for Naya Aksara image classification.| 
| Base URL | https://ikchandra-nayaaksara.hf.space | 
| Endpoint | POST /predict |
| Request Format | multipart/form-data | 
| Field name | image |
| Supported Input | jpg, jpeg, png | 

# Lainnya
| Nama | Link|
| --- | --- |
| Model AI (.keras)| https://drive.google.com/file/d/1wDodWPUJ-4Wea57yhgyQrl9lXCZT03TH/view?usp=sharing| 

Note: Jika tim assesor ingin mencoba secara lokal, silahkan gunakan akun capstone@student.devacademy.id untuk mengunduh

## Response Format (Example)
```json 
{
  "prediction": "ha",
  "confidence": 0.91
}
