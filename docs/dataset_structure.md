# Dataset Structure - NayaAksara AI

Dataset NayaAksara digunakan untuk melatih model CNN agar mampu mengenali aksara Jawa berdasarkan gambar tulisan tangan atau gambar digital.

## Struktur Dataset Lokal

dataset/
- raw/
- cleaned/
- augmented/

## Penjelasan Folder

dataset/raw/
Berisi data mentah dari Google Drive, scraping, font-generated image, atau tulisan tangan.

dataset/cleaned/
Berisi data yang sudah dibersihkan dan siap digunakan untuk training model.

Struktur wajib dataset/cleaned/:

- ha/
- na/
- ca/
- da/
- dha/
- ga/
- ja/
- ka/
- la/
- ma/
- nga/
- nya/
- pa/
- ra/
- sa/
- ta/
- tha/
- wa/
- ya/

Setiap folder merepresentasikan satu kelas aksara.

dataset/augmented/
Berisi hasil augmentasi gambar, seperti rotasi, blur, noise, brightness adjustment, dan shifting.

## Format Input Model

image_size = 128 x 128
color_mode = grayscale
pixel_range = 0 sampai 1
label = nama folder

## Catatan

Dataset utama tidak dimasukkan langsung ke GitHub karena ukuran file gambar dapat besar. GitHub hanya menyimpan struktur folder, dokumentasi, template metadata, dan source code AI.
