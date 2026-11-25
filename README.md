# Javex

Interactive Microsoft Excel learning web template built with Bootstrap 5 featuring structured curriculum modules, practice worksheets, and an evaluation quiz.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.0--beta2-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?style=flat-square&logo=html5&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-5.15.3-528DD7?style=flat-square&logo=fontawesome&logoColor=white)

## Live URL

- **Production**: [https://widifirmaan.web.id/bootstrap-javex-template/](https://widifirmaan.web.id/bootstrap-javex-template/)

## Features

- **Learning Modules (`materi.html`, `pendahuluan.html`, `mulai.html`, `format.html`)**: Guided Microsoft Excel lessons covering spreadsheet basics, Ribbon tabs, Name Box, Formula Bar, and cell formatting with horizontal pill tab auto-scroll.
- **Formulas & Functions Guide (`rumus.html`)**: Syntax rules and visual examples for arithmetic operations, `SUM`, `AVERAGE`, `MAX`, `MIN`, `COUNT`, and `IF` logical statements.
- **Practical Worksheets (`latsoal.html`, `mulailatsoal.html`)**: Case-study spreadsheet exercises (`m/b (1).png`, `m/b (2).png`) with an external assignment submission link.
- **20-Question Evaluation Quiz (`quiz.html`, `mulaiquiz.html`)**: Client-side JavaScript grading across 20 multiple-choice questions, missing-answer validation, `>= 14` (`70%`) pass threshold check, and a Bootstrap 5 result modal.
- **Embedded Video Tutorial (`video.html`)**: Responsive `16:9` Bootstrap ratio container wrapping an embedded YouTube tutorial.
- **Curriculum Alignment (`kd.html`)**: Basic Competencies (KD 3.4 & 4.4) and achievement indicators (IPK).
- **OneUI-Inspired Styling (`assets/css/oneui.css`)**: Card layout with `28px` rounded corners (`--oneui-radius: 28px`), floating icon navigation bar, and welcome-page HTML5 audio playback (`audio.mp3`).
- **Bibliography & Team Profiles (`daftarpustaka.html`, `profilpengembang.html`)**: Textbook modals and author/advisor cards.

## Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.0.0-beta2` | Grid system, pill tabs, modals, and `ratio-16x9` helpers |
| **Styling & Typography** | OneUI CSS (`assets/css/oneui.css`), Poppins | Custom design tokens (`--oneui-radius: 28px`), animations, floating navbar |
| **Icons** | Font Awesome `5.15.3` | Subject cards and navigation bar icons |
| **Client Scripts & Media** | Vanilla JavaScript, HTML5 Audio, YouTube Iframe | Quiz scoring logic, tab auto-scroll, audio narration, tutorial video |

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Welcome Portal & Audio Narration**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Welcome Portal & Audio Narration**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **Basic Competencies (KD 3.4 & 4.4)**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Desktop.png) | **Basic Competencies (KD 3.4 & 4.4)**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Mobile.png) |
| **Curriculum Syllabus Directory**<br>![Materi](screenshots/Materi%20Desktop.png) | **Curriculum Syllabus Directory**<br>![Materi](screenshots/Materi%20Mobile.png) |
| **Introductory Spreadsheet Concepts**<br>![Pendahuluan](screenshots/Pendahuluan%20Desktop.png) | **Introductory Spreadsheet Concepts**<br>![Pendahuluan](screenshots/Pendahuluan%20Mobile.png) |
| **Ribbon Tabs & Interface Guide**<br>![Antarmuka](screenshots/Antarmuka%20Desktop.png) | **Ribbon Tabs & Interface Guide**<br>![Antarmuka](screenshots/Antarmuka%20Mobile.png) |
| **Workbook Formatting & Pill Tabs**<br>![Format](screenshots/Format%20Desktop.png) | **Workbook Formatting & Pill Tabs**<br>![Format](screenshots/Format%20Mobile.png) |
| **Formulas & Functions Cheatsheet**<br>![Rumus](screenshots/Rumus%20Desktop.png) | **Formulas & Functions Cheatsheet**<br>![Rumus](screenshots/Rumus%20Mobile.png) |
| **Worksheet Instructions**<br>![Petunjuk Latihan](screenshots/Petunjuk%20Latihan%20Desktop.png) | **Worksheet Instructions**<br>![Petunjuk Latihan](screenshots/Petunjuk%20Latihan%20Mobile.png) |
| **Practical Case Study Worksheet**<br>![Latihan](screenshots/Latihan%20Desktop.png) | **Practical Case Study Worksheet**<br>![Latihan](screenshots/Latihan%20Mobile.png) |
| **Quiz Instructions**<br>![Petunjuk Quiz](screenshots/Petunjuk%20Quiz%20Desktop.png) | **Quiz Instructions**<br>![Petunjuk Quiz](screenshots/Petunjuk%20Quiz%20Mobile.png) |
| **20-Question Quiz Arena**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **20-Question Quiz Arena**<br>![Quiz](screenshots/Quiz%20Mobile.png) |
| **Quiz Result Modal**<br>![Quiz Result Modal](screenshots/Quiz%20Result%20Modal%20Desktop.png) | **Quiz Result Modal**<br>![Quiz Result Modal](screenshots/Quiz%20Result%20Modal%20Mobile.png) |
| **Embedded 16:9 Video Tutorial**<br>![Video](screenshots/Video%20Desktop.png) | **Embedded 16:9 Video Tutorial**<br>![Video](screenshots/Video%20Mobile.png) |
| **Bibliography Catalog**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Desktop.png) | **Bibliography Catalog**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Mobile.png) |
| **Book Detail & Citation Modal**<br>![Daftar Pustaka Modal](screenshots/Daftar%20Pustaka%20Modal%20Desktop.png) | **Book Detail & Citation Modal**<br>![Daftar Pustaka Modal](screenshots/Daftar%20Pustaka%20Modal%20Mobile.png) |
| **Team & Advisors Profile**<br>![Profil](screenshots/Profil%20Desktop.png) | **Team & Advisors Profile**<br>![Profil](screenshots/Profil%20Mobile.png) |

## Local Setup

### Prerequisites

- Any modern web browser
- **Python 3** or **Node.js** (`npx serve`) to serve static HTML files over HTTP
- **No database or environment variables required**

### Run Locally

```bash
git clone https://github.com/widifirmaan/bootstrap-javex-template.git
cd bootstrap-javex-template

# Option A: Python 3
python3 -m http.server 8000

# Option B: npx serve
npx serve -l 8000 .
```

Open `http://localhost:8000` in your browser.

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
