# Javex

> Responsive Bootstrap 5 e-learning template and practice quiz application.

Javex is a responsive Bootstrap 5 web template designed for spreadsheet learning and e-learning coursework. Styled with custom OneUI-inspired card elements and navigation primitives (`assets/css/oneui.css`), it features structured curriculum modules, competency standards alignment (Kompetensi Dasar), interactive practice drills, automated evaluation quizzes, formulas cheatsheet, video lessons, and academic bibliography pages.

[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)

---

## Showcase

### 1. Welcome Portal & Competency Alignment (`index.html`, `kd.html`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Welcome Portal & Audio Narration**<br>![Javex Homepage Desktop](screenshots/Javex%20Homepage%20&%20Portal%20Desktop.png) | **Welcome Portal & Audio Narration**<br>![Javex Homepage Mobile](screenshots/Javex%20Homepage%20&%20Portal%20Mobile.png) |
| **Kompetensi Dasar (KD 3.4 & 4.4) & IPK**<br>![Javex Kompetensi Dasar Desktop](screenshots/Javex%20Kompetensi%20Dasar%20&%20IPK%20Desktop.png) | **Kompetensi Dasar (KD 3.4 & 4.4) & IPK**<br>![Javex Kompetensi Dasar Mobile](screenshots/Javex%20Kompetensi%20Dasar%20&%20IPK%20Mobile.png) |

### 2. Spreadsheet Learning Modules & Formatting (`materi.html`, `pendahuluan.html`, `mulai.html`, `format.html`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Excel Learning Curriculum Syllabus**<br>![Javex Materi Kurikulum Desktop](screenshots/Javex%20Materi%20Kurikulum%20Desktop.png) | **Excel Learning Curriculum Syllabus**<br>![Javex Materi Kurikulum Mobile](screenshots/Javex%20Materi%20Kurikulum%20Mobile.png) |
| **Spreadsheet Introductory Concepts**<br>![Javex Pendahuluan Excel Desktop](screenshots/Javex%20Pendahuluan%20Excel%20Desktop.png) | **Spreadsheet Introductory Concepts**<br>![Javex Pendahuluan Excel Mobile](screenshots/Javex%20Pendahuluan%20Excel%20Mobile.png) |
| **Ribbon Tabs & Commands Guide**<br>![Javex Ribbon Desktop](screenshots/Javex%20Ribbon%20&%20Antarmuka%20Desktop.png) | **Ribbon Tabs & Commands Guide**<br>![Javex Ribbon Mobile](screenshots/Javex%20Ribbon%20&%20Antarmuka%20Mobile.png) |
| **Workbook Formatting Guide with Pill Tabs**<br>![Javex Format Workbook Desktop](screenshots/Javex%20Format%20Workbook%20Tabs%20Desktop.png) | **Workbook Formatting Guide with Pill Tabs**<br>![Javex Format Workbook Mobile](screenshots/Javex%20Format%20Workbook%20Tabs%20Mobile.png) |

### 3. Formulas Cheatsheet & Practical Worksheets (`rumus.html`, `latsoal.html`, `mulailatsoal.html`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Formulas & Functions Cheatsheet**<br>![Javex Rumus Cheatsheet Desktop](screenshots/Javex%20Rumus%20&%20Fungsi%20Cheatsheet%20Desktop.png) | **Formulas & Functions Cheatsheet**<br>![Javex Rumus Cheatsheet Mobile](screenshots/Javex%20Rumus%20&%20Fungsi%20Cheatsheet%20Mobile.png) |
| **Hands-On Practical Case Study Worksheet**<br>![Javex Lembar Kerja Praktik Desktop](screenshots/Javex%20Lembar%20Kerja%20Praktik%20Desktop.png) | **Hands-On Practical Case Study Worksheet**<br>![Javex Lembar Kerja Praktik Mobile](screenshots/Javex%20Lembar%20Kerja%20Praktik%20Mobile.png) |

### 4. Interactive Examination, Video & Bibliography (`mulaiquiz.html`, `video.html`, `daftarpustaka.html`, `profilpengembang.html`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **20-Question Examination Arena & Scoring**<br>![Javex Arena Quiz Evaluasi Desktop](screenshots/Javex%20Arena%20Quiz%20Evaluasi%20Desktop.png) | **20-Question Examination Arena & Scoring**<br>![Javex Arena Quiz Evaluasi Mobile](screenshots/Javex%20Arena%20Quiz%20Evaluasi%20Mobile.png) |
| **Embedded 16:9 YouTube Tutorial Player**<br>![Javex Video Tutorial Desktop](screenshots/Javex%20Video%20Tutorial%2016-9%20Desktop.png) | **Embedded 16:9 YouTube Tutorial Player**<br>![Javex Video Tutorial Mobile](screenshots/Javex%20Video%20Tutorial%2016-9%20Mobile.png) |
| **Academic Textbook Bibliography References**<br>![Javex Daftar Pustaka Desktop](screenshots/Javex%20Daftar%20Pustaka%20Buku%20Desktop.png) | **Academic Textbook Bibliography References**<br>![Javex Daftar Pustaka Mobile](screenshots/Javex%20Daftar%20Pustaka%20Buku%20Mobile.png) |
| **Development Team & Academic Advisors**<br>![Javex Profil Pengembang Desktop](screenshots/Javex%20Profil%20Pengembang%20Desktop.png) | **Development Team & Academic Advisors**<br>![Javex Profil Pengembang Mobile](screenshots/Javex%20Profil%20Pengembang%20Mobile.png) |

---

## Features

- **Spreadsheet Learning Modules (`pendahuluan.html`, `mulai.html`, `format.html`)**: Step-by-step Excel guides covering introductory concepts, interface elements (Ribbon tabs, Name Box, Formula Bar), workbook formatting, and data types with smooth horizontal pill tab navigation.
- **Formulas & Functions Cheatsheet (`rumus.html`)**: Reference catalog with syntax rules and practical examples for arithmetic formulas, SUM, AVERAGE, MAX, MIN, COUNT, and logical IF statements.
- **Hands-On Practical Worksheets (`latsoal.html`, `mulailatsoal.html`)**: Case study exercises with spreadsheet sample tables and an external Google Forms submission workflow.
- **Evaluation Examination (`quiz.html`, `mulaiquiz.html`)**: 20-question multiple-choice assessment with client-side JavaScript scoring, completion validation, pass/fail threshold evaluation (>= 70%), and a Bootstrap 5 modal result popup.
- **Embedded Video Tutorial (`video.html`)**: Responsive 16:9 Bootstrap ratio container with an embedded YouTube spreadsheet tutorial video.
- **Curriculum Standards Alignment (`kd.html`)**: Indonesian vocational curriculum Kompetensi Dasar (KD 3.4 & 4.4) and competency achievement indicators (IPK).
- **OneUI-Inspired Design System (`assets/css/oneui.css`)**: Card-based interface styled with Samsung OneUI rounded corners (`border-radius: 24px`), pill tab navigation, mobile bottom navigation bar, and CSS custom properties.
- **Audio Narration Player (`index.html`)**: Embedded HTML5 audio player (`audio.mp3`) providing introductory background audio on the welcome portal.
- **Academic Bibliography & Developer Profile (`daftarpustaka.html`, `profilpengembang.html`)**: Textbook citation modals and academic development team profile.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.0.0-beta2` | Responsive layout grid, tabbed pill navigation, responsive 16:9 ratio, and modals |
| **JavaScript Library** | jQuery `3.3.1` | DOM manipulation and legacy script support (`vendor/jquery/jquery.min.js`) |
| **Custom Styling** | OneUI CSS (`assets/css/oneui.css`) | Samsung OneUI-inspired design system, floating pill navbar, and CSS variables |
| **Typography** | Poppins Font | Modern sans-serif typography (300, 400, 500, 600, 700) via Google Fonts |
| **Iconography** | Font Awesome `5.15.3` | Vector icons for subject categories and navigation controls via CDNJS |
| **Interactivity** | Vanilla JavaScript | Quiz answer validation, automatic score tallying, and pass/fail modal triggering |
| **Multimedia** | HTML5 Audio & YouTube Iframe | Homepage audio player (`audio.mp3`) and embedded responsive tutorial video |

---

## Project Structure

```bash
/
├── index.html            # Main entrance portal with category cards and audio player
├── kd.html               # Basic competencies (KD 3.4 & 4.4) and indicators (IPK)
├── materi.html           # Excel learning curriculum syllabus cards
├── pendahuluan.html      # Introductory concepts and Excel advantages
├── mulai.html            # Interface elements, ribbon tabs, and menu commands guide
├── format.html           # Workbook formatting guide with pill tabs
├── rumus.html            # Formulas & functions cheat sheet (SUM, IF, AVERAGE)
├── latsoal.html          # Practice exercises instruction entrance
├── mulailatsoal.html     # Hands-on practice worksheet with Google Form submit link
├── quiz.html             # Final examination instruction entrance
├── mulaiquiz.html        # 20-question quiz engine with automatic scoring and modal
├── video.html            # Responsive 16:9 YouTube video tutorial player
├── daftarpustaka.html    # Academic textbook references and modal descriptions
├── profilpengembang.html # Developer author and academic advisor profiles
├── audio.mp3             # Background audio narration for the welcome page
├── assets/
│   ├── css/oneui.css     # Custom OneUI design tokens and navigation styles
│   └── dafpust.png       # Academic reference illustration
├── daftarpustaka/        # Textbook cover thumbnail assets
├── vendor/
│   ├── bootstrap/        # Bootstrap 5.0.0-beta2 CSS and JS bundle
│   └── jquery/           # jQuery 3.3.1 library
├── screenshots/          # Showcase mockups
└── README.md
```

---

## Local Setup & Deployment

### 1. Prerequisites

- Any modern web browser (Google Chrome, Firefox, Edge, Safari).
- Python 3 (`python3`) or Node.js (`npx serve`) to serve static HTML files locally.

### 2. Menjalankan Server Lokal

Template ini merupakan aplikasi web statis murni tanpa kebutuhan database eksternal:

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/bootstrap-javex-template.git
cd bootstrap-javex-template

# 2. Jalankan local static server
python3 -m http.server 8000

# Atau menggunakan npx serve (jika ada Node.js)
npx serve .
```

Buka [http://localhost:8000](http://localhost:8000) di browser Anda.

### 3. Panduan Uji Manual (Testing Checklist)

Lakukan verifikasi manual berikut di browser:

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Portal Utama & Audio** | Buka `http://localhost:8000`, putar tombol audio pengantar | Audio pemandu diputar lancar dan menu OneUI card responsif |
| 2 | **Kompetensi Dasar** | Buka `/kd.html` | Tabel KD 3.4 & 4.4 serta indikator IPK tertampil terstruktur |
| 3 | **Materi Pembelajaran** | Buka `/materi.html` lalu klik modul format workbook | Konten panduan Excel tampil dengan tab navigasi pill yang dapat berganti |
| 4 | **Cheatsheet Rumus** | Buka `/rumus.html` | Katalog fungsi SUM, AVERAGE, MAX, MIN, IF tampil jelas |
| 5 | **Quiz Interaktif** | Buka `/quiz.html` -> `/mulaiquiz.html`, jawab 20 pertanyaan, submit | Skor terhitung otomatis, modal Bootstrap 5 tampil menampilkan nilai & status lulus |
| 6 | **Video Player** | Buka `/video.html` | Embed iframe video tutorial YouTube termuat responsif dalam rasio 16:9 |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
