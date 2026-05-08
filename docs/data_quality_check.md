# Data Quality Check - NayaAksara AI

Script ini digunakan untuk mengecek kualitas dataset gambar aksara sebelum masuk ke proses training CNN.

## Tujuan

Data quality check diperlukan karena dataset gambar dapat memiliki masalah seperti:

1. Gambar rusak.
2. Gambar terlalu kecil.
3. Gambar terlalu gelap.
4. Gambar terlalu blur.
5. Distribusi data per label tidak seimbang.

## File Utama

```text
src/data_quality_check.py
