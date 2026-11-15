# Javex

> Interactive e-learning media and practice quiz application for Microsoft Excel built with Bootstrap 5 and OneUI design language.

Javex is a responsive, web-based educational multimedia learning platform designed to teach Microsoft Excel fundamentals, workbook formatting, formulas, and functions. Built with Bootstrap 5 and styled with Samsung OneUI aesthetic primitives, Javex provides interactive chapter modules, timed practice drills, graded multiple-choice quizzes, formula cheatsheets, and multimedia video tutorials.

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fjavex-10B981?style=flat-square&logo=googlechrome&logoColor=white)](http://widifirmaan.web.id/bootstrap-javex-template/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Design System](https://img.shields.io/badge/Design-OneUI_Pill_Cards-01723A?style=flat-square)](#features)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

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

## Core Features

- **Interactive Learning Modules (`materi.html`)**: Step-by-step Excel guides covering workbook creation, formatting, data types, and interface shortcuts.
- **Formulas & Quick Reference (`rumus.html`)**: Interactive formula cheat-sheet with examples for mathematical operators, SUM, AVERAGE, MIN, MAX, COUNT, and logical IF statements.
- **Timed Practice Drills (`latsoal.html`, `mulailatsoal.html`)**: Timed question evaluations with immediate correctness scoring, answer explanations, and recap tables.
- **Final Evaluation Quiz (`quiz.html`, `mulaiquiz.html`)**: Comprehensive summative assessment to test student proficiency.
- **OneUI-Inspired Design System**: Soft rounded card geometry, floating pill bottom navigation bars, and accessible green accent color schemes (`assets/css/oneui.css`).
- **Media Video Integrations (`video.html`)**: Embedded video tutorials explaining spreadsheet workflows visually.
- **Curriculum Standards Alignment (`kd.html`)**: Official Kompetensi Dasar (KD) and learning indicators reference aligned with Indonesian curriculum standards.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **CSS Framework** | Bootstrap `5.x` | Responsive layout grid, modals, and helper utilities |
| **Custom Styling** | OneUI CSS | Custom-built rounded card components and floating navigation |
| **Typography** | Poppins Font | Clean, highly legible sans-serif type via Google Fonts |
| **Icons** | Font Awesome `5.15.3` | Comprehensive icon set for menus and action indicators |
| **Interactive Scripting** | Vanilla JavaScript | Quiz timers, question randomized arrays, and score calculations |

---

## Project Structure

```text
bootstrap-javex-template/
├── index.html            # Welcome splash and entrance portal
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
├── raw_screenshots/      # High-resolution production screen captures
└── screenshots/          # MacBook Pro M4 & iPhone 16 Pro showcase mockups
```

---

## Getting Started & Local Development

### Prerequisites

Static HTML/CSS/JS application. No compilers or package managers required.

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/widifirmaan/bootstrap-javex-template.git
   cd bootstrap-javex-template
   ```

2. **Serve with a local static server**:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node.js
   npx serve .
   ```

3. **Open in browser**:
   Navigate to [http://localhost:8000](http://localhost:8000).

---

## License

This project is licensed under the [MIT License](LICENSE).
