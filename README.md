# Javex

> Interactive e-learning media and practice quiz application for Microsoft Excel built with Bootstrap 5 and OneUI design language.

Javex is an interactive e-learning and quiz web application for learning Microsoft Excel, built with Bootstrap 5 and styled with custom OneUI rounded card elements (`assets/css/oneui.css`). It features structured curriculum modules, an Excel formulas cheatsheet, video lessons, practice exercises with instant feedback, and a timed summative evaluation quiz.

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fjavex-10B981?style=flat-square&logo=googlechrome&logoColor=white)](http://widifirmaan.web.id/bootstrap-javex-template/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Design System](https://img.shields.io/badge/Design-OneUI_Pill_Cards-01723A?style=flat-square)](#features)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

---

## Live Production

- **URL:** [http://widifirmaan.web.id/bootstrap-javex-template/](http://widifirmaan.web.id/bootstrap-javex-template/)
- **Hosting:** Apache Web Server / Cloudflare Proxy
- **Target Audience:** Vocational high school (SMK) and introductory computer science students learning spreadsheet literacy

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Portal Welcome Home Desktop**<br>![Javex Portal Home Desktop](screenshots/Javex%20Portal%20Home%20Desktop.png) | **Portal Welcome Home Mobile**<br>![Javex Portal Home Mobile](screenshots/Javex%20Portal%20Home%20Mobile.png) |
| **Interactive Navigation Hub Desktop**<br>![Javex Interactive Menu Desktop](screenshots/Javex%20Interactive%20Menu%20Desktop.png) | **Interactive Navigation Hub Mobile**<br>![Javex Interactive Menu Mobile](screenshots/Javex%20Interactive%20Menu%20Mobile.png) |
| **Excel Learning Curriculum Desktop**<br>![Javex Excel Learning Desktop](screenshots/Javex%20Excel%20Learning%20Module%20Desktop.png) | **Excel Learning Curriculum Mobile**<br>![Javex Excel Learning Mobile](screenshots/Javex%20Excel%20Learning%20Module%20Mobile.png) |
| **Interactive Practice Exercises Desktop**<br>![Javex Practice Quiz Desktop](screenshots/Javex%20Interactive%20Quiz%20Desktop.png) | **Interactive Practice Exercises Mobile**<br>![Javex Practice Quiz Mobile](screenshots/Javex%20Interactive%20Quiz%20Mobile.png) |
| **Formulas & Functions Cheatsheet Desktop**<br>![Javex Formulas Reference Desktop](screenshots/Javex%20Formulas%20Reference%20Desktop.png) | **Formulas & Functions Cheatsheet Mobile**<br>![Javex Formulas Reference Mobile](screenshots/Javex%20Formulas%20Reference%20Mobile.png) |

---

## Features

- **Spreadsheet Curriculum Modules (`materi.html`, `format.html`)**: Modular lessons covering Excel interface fundamentals, ribbon navigation, cell formatting, data types, and keyboard shortcuts.
- **Formulas & Functions Cheatsheet (`rumus.html`)**: Quick reference guide with syntax and usage examples for SUM, AVERAGE, MIN, MAX, COUNT, and nested IF logic.
- **Interactive Practice Drills (`latsoal.html`, `mulailatsoal.html`)**: Formative exercise questions featuring real-time answer verification, instant feedback, and score calculations.
- **Summative Evaluation Examination (`quiz.html`, `mulaiquiz.html`)**: Timed end-of-course assessment measuring overall student mastery with automated scoring.
- **Embedded Video Lessons (`video.html`)**: HTML5 video player with guided spreadsheet tutorial demonstrations.
- **Curriculum Standards Alignment (`kd.html`)**: Indonesian vocational curriculum Kompetensi Dasar (KD) and competency indicators.
- **OneUI-Inspired Design Primitives**: Card-based interface with pill navigation, rounded corners, and green accent tokens (`assets/css/oneui.css`).
- **Academic Bibliography & Author Profile (`daftarpustaka.html`, `profilpengembang.html`)**: Reference citations and developer profile information.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.x` | Responsive layout grid, modals, and helper utilities |
| **Custom Styling** | OneUI CSS | Custom-built rounded card components and floating bottom navigation |
| **Typography** | Poppins Font | High-legibility modern sans-serif typography via Google Fonts |
| **Iconography** | Font Awesome `5.15.3` | Comprehensive vector icon set for subject chapters and quiz navigation |
| **Interactivity** | Vanilla JavaScript | Real-time quiz timers, question array randomization, and automated scoring |
| **Hosting** | Apache Web Server | Zero-dependency static HTML/CSS/JS delivery |

---

## Project Structure

```bash
/
├── index.html            # Welcome entrance portal
├── mulai.html            # Main navigation hub (KD, Materi, Latihan, Quiz)
├── kd.html               # Basic competencies & syllabus indicators
├── materi.html           # Excel material syllabus cards
├── pendahuluan.html      # Introduction to Microsoft Excel
├── format.html           # Workbook formatting guide
├── rumus.html            # Formulas & functions cheat sheet
├── latsoal.html          # Practice exercises entrance
├── mulailatsoal.html     # Interactive practice quiz engine
├── quiz.html             # Final examination entrance
├── mulaiquiz.html        # Final quiz engine with timer & scoring
├── video.html            # Video tutorial playback page
├── daftarpustaka.html    # Academic references and citations
├── profilpengembang.html # Developer author profile
├── assets/
│   └── css/oneui.css     # Custom OneUI stylesheet
├── screenshots/          # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

Static HTML/CSS/JS application. No compilers, Node modules, or package managers required.

### Local Development

> **Environment Variables:** No `.env` file or API keys are required. All interactive quizzes, scoring timers, and multimedia elements execute 100% locally in the browser.

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/bootstrap-javex-template.git
cd bootstrap-javex-template

# 2. Start local static server
python3 -m http.server 8000
# or using Node.js:
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your web browser.

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
