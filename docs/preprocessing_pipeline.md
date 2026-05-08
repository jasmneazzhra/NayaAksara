# Image Preprocessing Pipeline - NayaAksara AI

Pipeline preprocessing digunakan untuk menstandarkan gambar aksara sebelum masuk ke model CNN.

## Tujuan

Preprocessing diperlukan karena input gambar dapat berasal dari berbagai sumber, seperti:

1. Tulisan tangan.
2. Gambar digital.
3. Foto kamera pengguna.
4. Dataset Google Drive.
5. Gambar inference demo.

## Tahapan Preprocessing

1. Load image.
2. Convert image to grayscale.
3. Resize image to 128 x 128 pixels.
4. Normalize pixel values to range 0-1.
5. Expand channel dimension for CNN input.

## Format Output

image_size = 128 x 128  
color_mode = grayscale  
shape = 128, 128, 1  
pixel_range = 0 sampai 1  

## File Utama

src/preprocessing.py

## Cara Test Lokal

Letakkan satu gambar sample di:

dataset/raw/sample.png

Lalu jalankan:

python src/preprocessing.py

Jika berhasil, hasil preview preprocessing akan tersimpan di:

reports/preprocessed_sample.png
