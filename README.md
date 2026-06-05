# NAYAAKSARA - MASTER TECHNICAL HANDOVER DOCUMENT

Version: 1.0 Final Capstone
Tanggal: 5 Juni 2026

---

# 1. PROJECT OVERVIEW

Nama Project:
NayaAksara

Tagline:
AI Powered Handwritten Javanese Script Recognition for Interactive Learning

Tema:
Accessible & Adaptive Learning

Tujuan Utama:

Membantu pengguna mempelajari dan melestarikan Aksara Jawa melalui sistem pembelajaran interaktif berbasis Artificial Intelligence yang mampu mengenali tulisan tangan pengguna secara otomatis.

Masalah yang ingin diselesaikan:

* Minat belajar Aksara Jawa semakin menurun.
* Media pembelajaran masih dominan teori dan hafalan.
* Tidak tersedia validasi otomatis saat pengguna berlatih menulis.
* Pengguna sulit mengetahui apakah tulisan yang dibuat sudah benar atau belum.

Solusi:

Membangun aplikasi web yang dapat:

* Mengunggah gambar tulisan Aksara Jawa.
* Mengenali aksara menggunakan model AI.
* Memberikan skor confidence.
* Memberikan feedback valid atau tidak valid.
* Menampilkan informasi/trivia terkait aksara yang dikenali.

---

# 2. TIM PENGEMBANG

Project Lead:

Jasmine Az Zahra Ihsani

Project Initiator:

I Made Krishna Chandra

AI Engineer:

* I Made Krishna Chandra
* Harits Abdurrahman Aufa

Data Scientist:

* Jasmine Az Zahra Ihsani
* Pangestuti Bunga Yulianti

Frontend Engineer:

* Fauzan

Backend Engineer:

* Muhammad Andra Ariesfi

---

# 3. TEKNOLOGI YANG DIGUNAKAN

Frontend:

* ReactJS
* React Router

Backend:

* NodeJS
* ExpressJS
* Multer
* Axios

Database:

* MySQL

AI:

* TensorFlow / Keras
* CNN Model
* HuggingFace Space Deployment

Version Control:

* Git
* GitHub

---

# 4. ARSITEKTUR SISTEM

FLOW APLIKASI

User
↓
Frontend React
↓
Backend Express
↓
AI Inference API
↓
MySQL Database
↓
Response ke Frontend

Detail Flow:

1. User upload gambar.
2. Frontend mengirim file ke backend.
3. Backend menyimpan file sementara.
4. Backend mengirim file ke AI API.
5. AI mengembalikan prediction dan confidence.
6. Backend melakukan validasi confidence.
7. Backend mengambil trivia sesuai prediction.
8. Backend menyimpan hasil ke database.
9. Backend mengirim response ke frontend.
10. Frontend menampilkan hasil kepada user.

---

# 5. STRUKTUR PROJECT

Backend

backend/

├── app.js

├── config/

│ └── db.js

├── routes/

│ ├── submitRoutes.js

│ ├── triviaRoutes.js

│ └── questRoutes.js

├── services/

│ └── aiService.js

├── uploads/

├── package.json

└── .env

Frontend

frontend/

├── src/

│ ├── pages/

│ │ ├── UploadPage.jsx

│ │ ├── ScoringPage.jsx

│ │ ├── TriviaPage.jsx

│ │ └── HomePage.jsx

│ ├── components/

│ ├── services/

│ └── style/

└── package.json

---

# 6. DATABASE STRUCTURE

TABLE: submissions

CREATE TABLE submissions (
id INT AUTO_INCREMENT PRIMARY KEY,
image_path VARCHAR(255),
prediction VARCHAR(50),
confidence FLOAT,
is_valid BOOLEAN,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Fungsi:

Menyimpan seluruh hasil prediksi user.

---

TABLE: trivia_pool

CREATE TABLE trivia_pool (
id INT AUTO_INCREMENT PRIMARY KEY,
aksara VARCHAR(50),
content TEXT
);

Fungsi:

Menyimpan trivia yang akan ditampilkan sesuai hasil prediksi aksara.

---

# 7. AI INTEGRATION

Endpoint Lama

Ngrok

Masalah:

* Sering mati
* Tidak stabil
* Harus dihidupkan manual

---

Endpoint Baru

Base URL:

https://ikchandra-nayaaksara.hf.space/

Inference Endpoint:

POST /predict

Request:

multipart/form-data

Field:

image

Response:

{
"prediction": "na",
"confidence": 0.8816
}

---

# 8. BACKEND LOGIC

File:

services/aiService.js

Fungsi:

Mengirim gambar ke AI API.

Flow:

Upload gambar
↓
Axios POST
↓
AI Endpoint
↓
Prediction + Confidence
↓
Return ke submitRoutes

---

# 9. VALIDATION LOGIC

Konfigurasi saat ini:

const MIN_CONFIDENCE = 0.60;

Valid:

confidence >= 0.60

Tidak Valid:

confidence < 0.60

Alasan:

Tim AI merekomendasikan threshold sekitar 60%.

Karena rata-rata confidence model berada di rentang tersebut.

---

# 10. PERUBAHAN BESAR YANG SUDAH DILAKUKAN

A. Integrasi AI

SEBELUM:

throw new Error("AI endpoint belum aktif");

SESUDAH:

AI endpoint aktif dan terhubung ke backend.

Status:

SELESAI

---

B. Perbaikan PredictImage Undefined

Masalah:

predictImage is not defined

Penyebab:

Import service belum sesuai.

Status:

SELESAI

---

C. Pergantian Endpoint AI

SEBELUM:

Ngrok

SESUDAH:

HuggingFace Space

Status:

SELESAI

---

D. Confidence Threshold

SEBELUM:

0.05

SESUDAH:

0.60

Status:

SELESAI

---

E. Trivia Random

SEBELUM:

SELECT *
FROM trivia_pool
ORDER BY RAND()
LIMIT 1

Masalah:

Prediction = NA
Trivia = HA

Tidak sinkron.

SESUDAH:

SELECT *
FROM trivia_pool
WHERE aksara = ?

Status:

SELESAI

---

F. Penambahan Trivia Hanacaraka

SEBELUM:

3 trivia

SESUDAH:

Seluruh aksara Hanacaraka memiliki trivia.

Status:

SELESAI

---

G. UI Scoring

SEBELUM:

* Kejelasan Tulisan
* Kerapihan Karakter
* Kesesuaian Bentuk

Masalah:

Tidak berasal dari output AI.

SESUDAH:

Menggunakan Confidence Score sebagai indikator utama.

Status:

SELESAI

---

# 11. HASIL TESTING

TEST AKSARA

NA

Prediction: NA

Confidence: 88.16%

Status: BERHASIL

---

CA

Prediction: CA

Confidence: 95.66%

Status: BERHASIL

---

RA

Prediction: RA

Confidence: 96.76%

Status: BERHASIL

---

KA

Prediction: KA

Confidence: 89.45%

Status: BERHASIL

---

DA

Prediction: DA

Confidence: 86.48%

Status: BERHASIL

---

# 12. TEMUAN BUG AI

Kasus Aksara HA

Input:

HA

Output:

PA

Confidence:

37.2%

Kesimpulan:

Masalah berada pada model AI atau dataset.

Bukan backend.

---

Kasus Random Image

Input:

Gambar non aksara

Output:

KA

Confidence:

98%-99%

Kesimpulan:

Model belum memiliki kelas:

"Bukan Aksara"

Sehingga semua input dipaksa masuk ke salah satu kelas yang tersedia.

Status:

BELUM DIPERBAIKI

Owner:

Tim AI

---

# 13. KNOWN LIMITATIONS

1. Random image masih bisa diprediksi sebagai aksara.

2. Belum ada kelas Unknown.

3. Database masih localhost.

4. Upload masih disimpan lokal.

5. AI belum stabil untuk seluruh aksara.

6. Belum ada autentikasi user.

---

# 14. DEPLOYMENT STATUS

Frontend

Status:

Belum Deploy

Rencana:

Vercel

---

Backend

Status:

Belum Deploy

Rencana:

Railway

---

Database

Status:

Masih localhost

DB_HOST=localhost

Belum cloud database.

---

AI

Status:

Sudah online di HuggingFace Space

---

# 15. FUTURE IMPROVEMENTS

Prioritas Tinggi

1. Deploy production.
2. Cloud database.
3. Cloud storage.
4. Perbaiki random image detection.

Prioritas Menengah

5. Tambah dataset.
6. Retraining model.
7. User account.
8. Progress tracking.

Prioritas Rendah

9. Leaderboard.
10. Achievement system.
11. Analytics dashboard.

---

# 16. KESIMPULAN AKHIR

Backend:

90% selesai

Frontend:

85% selesai

AI Integration:

90% selesai

Deployment:

Belum selesai

Project Status:

Layak demo, presentasi, review mentor, dan submit capstone.

Catatan Penting:

Sebagian besar bug yang tersisa saat ini berada pada area AI Model dan Deployment, bukan pada integrasi Backend maupun Frontend.
