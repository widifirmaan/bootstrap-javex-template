# Javex

> Template media pembelajaran interaktif Microsoft Excel berbasis Bootstrap 5 dengan modul kurikulum, latihan soal, dan quiz evaluasi interaktif.

[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id-10B981?style=flat-square)](https://widifirmaan.web.id/bootstrap-javex-template/)

---

## Live URL

- **Production URL**: [https://widifirmaan.web.id/bootstrap-javex-template/](https://widifirmaan.web.id/bootstrap-javex-template/)

---

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Portal Selamat Datang & Audio Pengantar**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Portal Selamat Datang & Audio Pengantar**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **Kompetensi Dasar (KD 3.4 & 4.4) & IPK**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Desktop.png) | **Kompetensi Dasar (KD 3.4 & 4.4) & IPK**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Mobile.png) |
| **Katalog Silabus Modul Excel**<br>![Materi](screenshots/Materi%20Desktop.png) | **Katalog Silabus Modul Excel**<br>![Materi](screenshots/Materi%20Mobile.png) |
| **Pendahuluan & Konsep Spreadsheet**<br>![Pendahuluan](screenshots/Pendahuluan%20Desktop.png) | **Pendahuluan & Konsep Spreadsheet**<br>![Pendahuluan](screenshots/Pendahuluan%20Mobile.png) |
| **Panduan Ribbon Tab & Antarmuka**<br>![Antarmuka](screenshots/Antarmuka%20Desktop.png) | **Panduan Ribbon Tab & Antarmuka**<br>![Antarmuka](screenshots/Antarmuka%20Mobile.png) |
| **Format Workbook & Tab Pill Navigasi**<br>![Format](screenshots/Format%20Desktop.png) | **Format Workbook & Tab Pill Navigasi**<br>![Format](screenshots/Format%20Mobile.png) |
| **Cheatsheet Rumus & Fungsi Logika**<br>![Rumus](screenshots/Rumus%20Desktop.png) | **Cheatsheet Rumus & Fungsi Logika**<br>![Rumus](screenshots/Rumus%20Mobile.png) |
| **Lembar Kasus Praktik Mandiri**<br>![Latihan](screenshots/Latihan%20Desktop.png) | **Lembar Kasus Praktik Mandiri**<br>![Latihan](screenshots/Latihan%20Mobile.png) |
| **Arena Ujian Kuis 20 Soal & Skoring**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **Arena Ujian Kuis 20 Soal & Skoring**<br>![Quiz](screenshots/Quiz%20Mobile.png) |
| **Video Pembelajaran Responsif 16:9**<br>![Video](screenshots/Video%20Desktop.png) | **Video Pembelajaran Responsif 16:9**<br>![Video](screenshots/Video%20Mobile.png) |
| **Daftar Pustaka & Modal Kutipan**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Desktop.png) | **Daftar Pustaka & Modal Kutipan**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Mobile.png) |
| **Profil Tim Pengembang & Pembimbing**<br>![Profil](screenshots/Profil%20Desktop.png) | **Profil Tim Pengembang & Pembimbing**<br>![Profil](screenshots/Profil%20Mobile.png) |

---

## Fitur

- **Modul Pembelajaran Terstruktur (`pendahuluan.html`, `mulai.html`, `format.html`)**: Panduan langkah-demi-langkah penguasaan Microsoft Excel mulai dari pengenalan dasar, identifikasi elemen Ribbon (Name Box, Formula Bar), hingga teknik format cell dengan navigasi tab pill horizontal.
- **Cheatsheet Rumus & Sintaks (`rumus.html`)**: Katalog rumus aritmatika dan fungsi analitik populer (SUM, AVERAGE, MAX, MIN, COUNT, dan fungsi logika IF tunggal/majemuk) dilengkapi sintaks dan contoh kasus nyata.
- **Lembar Kasus Latihan (`latsoal.html`, `mulailatsoal.html`)**: Soal studi kasus praktik pengolahan data tabel spreadsheet yang terintegrasi dengan formulir pengumpulan tugas.
- **Engine Ujian Evaluasi Interaktif (`mulaiquiz.html`)**: Kuis 20 butir pilihan ganda dengan validasi kelengkapan jawaban, penghitungan skor otomatis di sisi client (JavaScript), evaluasi batas kelulusan (>= 70%), dan modal hasil akhir Bootstrap 5.
- **Pemutar Video Tutorial Tersemat (`video.html`)**: Kontainer rasio 16:9 responsif Bootstrap yang menyematkan video pembelajaran Excel dari YouTube.
- **Penyelarasan Standar Kurikulum (`kd.html`)**: Rincian Kompetensi Dasar (KD 3.4 & 4.4) dan Indikator Pencapaian Kompetensi (IPK) kurikulum kejuruan.
- **Desain UI Terinspirasi OneUI (`assets/css/oneui.css`)**: Tata letak kartu dengan sudut membulat halus khas Samsung OneUI (`border-radius: 24px`), tab navigasi pill, dan bottom navigation bar responsif.
- **Audio Sambutan Interaktif (`index.html`)**: Audio player latar HTML5 (`audio.mp3`) pada beranda untuk memandu pengguna yang baru pertama kali mengakses media.
- **Daftar Pustaka & Profil Tim (`daftarpustaka.html`, `profilpengembang.html`)**: Modal kutipan referensi buku akademik dan profil tim pengembang beserta dosen pembimbing.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.0.0-beta2` | Grid tata letak responsif, navigasi pill, rasio 16:9, dan modal dialog |
| **Scripting Library** | jQuery `3.3.1` | Manipulasi DOM dan dukungan plugin bawaan |
| **Styling Kustom** | OneUI CSS (`assets/css/oneui.css`) | Token desain sudut membulat, navbar mengambang, dan variabel CSS |
| **Tipografi** | Poppins Font | Font sans-serif modern Google Fonts |
| **Ikonografi** | Font Awesome `5.15.3` | Ikon vektor kategori materi dan tombol aksi navigasi |
| **Interaktivitas** | Vanilla JavaScript | Skoring kuis otomatis dan modal evaluasi kelulusan |
| **Multimedia** | HTML5 Audio & YouTube Iframe | Pemutar audio lokal dan video tutorial tersemat |

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- Browser web modern (Google Chrome, Firefox, Safari, Microsoft Edge).
- Python 3 (`python3`) atau Node.js (`npx serve`) untuk menyajikan file statis secara lokal.
- Database: **Tidak membutuhkan database** (aplikasi statis client-side).

### 2. Environment Variables

Tidak ada environment variable yang diperlukan.

### 3. Instalasi & Menjalankan Server Lokal

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/bootstrap-javex-template.git
cd bootstrap-javex-template

# 2. Jalankan static web server lokal
# Menggunakan Python 3:
python3 -m http.server 8000

# Atau menggunakan npx serve (jika terpasang Node.js):
npx serve .
```

Buka [http://localhost:8000](http://localhost:8000) di browser Anda.

### 4. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Portal Beranda & Audio** | Buka `http://localhost:8000`, klik tombol audio | Audio narasi pemandu terdengar dan kartu navigasi OneUI tampil proporsional |
| 2 | **Kompetensi Dasar** | Buka `/kd.html` | Matriks tabel KD 3.4 & 4.4 serta indikator IPK tampil rapi |
| 3 | **Modul Materi** | Buka `/materi.html` lalu pilih modul Format | Materi format cell tampil dengan tab pill yang dapat diklik bergantian |
| 4 | **Cheatsheet Rumus** | Buka `/rumus.html` | Rumus fungsi SUM, AVERAGE, MAX, MIN, IF tampil lengkap dengan sintaksnya |
| 5 | **Quiz Evaluasi** | Buka `/mulaiquiz.html`, jawab seluruh pertanyaan, klik Selesai | Skor terhitung otomatis dan modal Bootstrap 5 muncul menampilkan perolehan nilai serta status kelulusan |
| 6 | **Video Pembelajaran** | Buka `/video.html` | Video tutorial YouTube termuat responsif dalam rasio layar 16:9 |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
