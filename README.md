# Javex

> Interactive Microsoft Excel e-learning web template built with Bootstrap 5 featuring structured curriculum modules, hands-on practical worksheets, and automated evaluation quizzes.

[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id-10B981?style=flat-square)](https://widifirmaan.web.id/bootstrap-javex-template/)

---

## Live URL

- **Production URL**: [https://widifirmaan.web.id/bootstrap-javex-template/](https://widifirmaan.web.id/bootstrap-javex-template/)

---

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Welcome Portal & Audio Narration**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Welcome Portal & Audio Narration**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **Basic Competencies (KD 3.4 & 4.4) & IPK**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Desktop.png) | **Basic Competencies (KD 3.4 & 4.4) & IPK**<br>![Kompetensi Dasar](screenshots/Kompetensi%20Dasar%20Mobile.png) |
| **Curriculum Syllabus Directory**<br>![Materi](screenshots/Materi%20Desktop.png) | **Curriculum Syllabus Directory**<br>![Materi](screenshots/Materi%20Mobile.png) |
| **Introductory Spreadsheet Concepts**<br>![Pendahuluan](screenshots/Pendahuluan%20Desktop.png) | **Introductory Spreadsheet Concepts**<br>![Pendahuluan](screenshots/Pendahuluan%20Mobile.png) |
| **Ribbon Tabs & Commands Guide**<br>![Antarmuka](screenshots/Antarmuka%20Desktop.png) | **Ribbon Tabs & Commands Guide**<br>![Antarmuka](screenshots/Antarmuka%20Mobile.png) |
| **Workbook Formatting & Pill Tabs**<br>![Format](screenshots/Format%20Desktop.png) | **Workbook Formatting & Pill Tabs**<br>![Format](screenshots/Format%20Mobile.png) |
| **Formulas & Logical Functions Cheatsheet**<br>![Rumus](screenshots/Rumus%20Desktop.png) | **Formulas & Logical Functions Cheatsheet**<br>![Rumus](screenshots/Rumus%20Mobile.png) |
| **Worksheet Instructions & Submission Guide**<br>![Petunjuk Latihan](screenshots/Petunjuk%20Latihan%20Desktop.png) | **Worksheet Instructions & Submission Guide**<br>![Petunjuk Latihan](screenshots/Petunjuk%20Latihan%20Mobile.png) |
| **Hands-On Practical Case Study Worksheet**<br>![Latihan](screenshots/Latihan%20Desktop.png) | **Hands-On Practical Case Study Worksheet**<br>![Latihan](screenshots/Latihan%20Mobile.png) |
| **Quiz Instructions & Assessment Rules**<br>![Petunjuk Quiz](screenshots/Petunjuk%20Quiz%20Desktop.png) | **Quiz Instructions & Assessment Rules**<br>![Petunjuk Quiz](screenshots/Petunjuk%20Quiz%20Mobile.png) |
| **20-Question Examination Arena & Scoring**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **20-Question Examination Arena & Scoring**<br>![Quiz](screenshots/Quiz%20Mobile.png) |
| **Quiz Result Modal & Pass/Fail Score**<br>![Quiz Result Modal](screenshots/Quiz%20Result%20Modal%20Desktop.png) | **Quiz Result Modal & Pass/Fail Score**<br>![Quiz Result Modal](screenshots/Quiz%20Result%20Modal%20Mobile.png) |
| **Embedded 16:9 Video Tutorial**<br>![Video](screenshots/Video%20Desktop.png) | **Embedded 16:9 Video Tutorial**<br>![Video](screenshots/Video%20Mobile.png) |
| **Academic Bibliography & Book Collection**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Desktop.png) | **Academic Bibliography & Book Collection**<br>![Daftar Pustaka](screenshots/Daftar%20Pustaka%20Mobile.png) |
| **Book Detail & Citation Modal**<br>![Daftar Pustaka Modal](screenshots/Daftar%20Pustaka%20Modal%20Desktop.png) | **Book Detail & Citation Modal**<br>![Daftar Pustaka Modal](screenshots/Daftar%20Pustaka%20Modal%20Mobile.png) |
| **Development Team & Academic Advisors**<br>![Profil](screenshots/Profil%20Desktop.png) | **Development Team & Academic Advisors**<br>![Profil](screenshots/Profil%20Mobile.png) |

---

## Features

- **Step-by-Step Learning Modules (`pendahuluan.html`, `mulai.html`, `format.html`)**: Guided Excel tutorials covering introductory spreadsheet concepts, interface elements (Ribbon tabs, Name Box, Formula Bar), and workbook cell formatting with smooth horizontal pill tab navigation.
- **Formulas & Functions Cheatsheet (`rumus.html`)**: Reference catalog with syntax rules and practical examples for arithmetic formulas, SUM, AVERAGE, MAX, MIN, COUNT, and logical IF statements.
- **Hands-On Practical Worksheets (`latsoal.html`, `mulailatsoal.html`)**: Spreadsheet case study exercises with sample tables and external assignment submission links.
- **Evaluation Examination Arena (`mulaiquiz.html`)**: 20-question multiple-choice assessment engine featuring client-side JavaScript scoring, answer completion validation, pass/fail threshold calculation (>= 70%), and a Bootstrap 5 result modal.
- **Embedded Video Tutorial Player (`video.html`)**: Responsive 16:9 Bootstrap ratio container with an embedded YouTube spreadsheet tutorial video.
- **Curriculum Standards Alignment (`kd.html`)**: Alignment with vocational curriculum Kompetensi Dasar (KD 3.4 & 4.4) and competency achievement indicators (IPK).
- **OneUI-Inspired Design System (`assets/css/oneui.css`)**: Card-based interface styled with Samsung OneUI-inspired rounded corners (`border-radius: 24px`), pill tab navigation, and mobile bottom navigation controls.
- **Audio Narration Player (`index.html`)**: Embedded HTML5 background audio player (`audio.mp3`) on the welcome page to guide new students.
- **Academic Bibliography & Team Profile (`daftarpustaka.html`, `profilpengembang.html`)**: Textbook citation modals and academic advisor profiles.

---

## Tech Stack

| Category | Technology | Description / Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.0.0-beta2` | Responsive layout grid, pill navigation, 16:9 ratio, and modal components |
| **Scripting Library** | jQuery `3.3.1` | DOM manipulation and plugin helper script |
| **Custom Styling** | OneUI CSS (`assets/css/oneui.css`) | Custom rounded design tokens, floating navbar, and CSS variables |
| **Typography** | Poppins Font | Modern sans-serif Google Fonts |
| **Iconography** | Font Awesome `5.15.3` | Vector icons for subject categories and navigation buttons |
| **Interactivity** | Vanilla JavaScript | Quiz scoring calculation, modal triggering, and answer validation |
| **Multimedia** | HTML5 Audio & YouTube Iframe | Homepage audio player and responsive tutorial video player |

---

## Local Setup & Deployment

### 1. Prerequisites

- Any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).
- Python 3 (`python3`) or Node.js (`npx serve`) to serve static HTML files locally.
- Database: **No database required** (100% static client-side web template).

### 2. Environment Variables

No environment variables are required.

### 3. Installation & Running the Local Server

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/bootstrap-javex-template.git
cd bootstrap-javex-template

# 2. Start local static web server
# Option A: Using Python 3
python3 -m http.server 8000

# Option B: Using npx serve (if Node.js is installed)
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

### 4. Manual Testing Checklist

| No | Feature | Test Steps | Expected Result |
| :---: | :--- | :--- | :--- |
| 1 | **Welcome Portal & Audio** | Open `http://localhost:8000`, click audio button | Background narration plays and OneUI menu cards render cleanly |
| 2 | **Competencies Alignment** | Open `/kd.html` | KD 3.4 & 4.4 matrix and IPK indicators display in structured tables |
| 3 | **Learning Modules** | Open `/materi.html`, select Format Workbook | Displays formatting guide with clickable pill navigation tabs |
| 4 | **Formulas Cheatsheet** | Open `/rumus.html` | Displays syntax and examples for SUM, AVERAGE, MAX, MIN, and IF |
| 5 | **Interactive Quiz** | Open `/mulaiquiz.html`, answer all 20 questions, submit | Score calculates automatically; Bootstrap modal pops up with grade and pass/fail status |
| 6 | **Video Player** | Open `/video.html` | Embedded YouTube tutorial player loads responsively in 16:9 ratio |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
