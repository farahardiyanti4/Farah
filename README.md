# Kopi Farah

Website statis untuk **Kopi Farah**, specialty coffee dari petani Bondowoso dan Dampit yang disangrai di Sidoarjo.

Dibuat dengan HTML, CSS, JavaScript, dan Bootstrap 5.3 (via CDN). Tanpa proses build.

## Struktur

```
kopi-farah/
├── index.html
├── css/style.css
├── js/script.js
├── assets/img/        # hero.jpg, arabika.jpg, robusta.jpg, blend.jpg
├── .nojekyll
└── README.md
```

## Menjalankan secara lokal

Buka `index.html` di browser, atau jalankan server sederhana:

```bash
python3 -m http.server 8000
```

Lalu buka http://localhost:8000.

## Publikasi dengan GitHub Pages

1. Buat repository baru di GitHub (misalnya `kopi-farah`).
2. Unggah semua isi folder ini ke branch `main`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Situs akan aktif beberapa menit kemudian di `https://USERNAME.github.io/kopi-farah/`.

## Catatan

- Formulir pesanan hanya validasi di sisi browser dan belum mengirim data ke mana pun. Untuk menerima pesanan sungguhan, sambungkan ke layanan seperti Formspree, Google Forms, atau tautan WhatsApp.
- Foto asli dari Pexels dimuat dari internet. Jika gagal dimuat, gambar lokal di `assets/img/` dipakai.
