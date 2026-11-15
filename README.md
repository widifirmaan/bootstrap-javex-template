# Javex

> Modern Bootstrap 5 e-learning template and practice quiz application inspired by Samsung OneUI design language.

Javex is a responsive Bootstrap 5 template designed for interactive e-learning media and spreadsheet education, styled with custom OneUI-inspired rounded card elements and navigation primitives (`assets/css/oneui.css`). It features structured curriculum modules, competency standards alignment (Kompetensi Dasar), interactive practice drills, automated evaluation quizzes, formulas cheatsheet, video lessons, and academic bibliography pages.

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fjavex-10B981?style=flat-square&logo=googlechrome&logoColor=white)](http://widifirmaan.web.id/bootstrap-javex-template/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Design System](https://img.shields.io/badge/Design-OneUI_Pill_Cards-01723A?style=flat-square)](#features)
[![Font Awesome](https://img.shields.io/badge/Icons-Font_Awesome_5-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

---

## Live Production

- **URL:** [http://widifirmaan.web.id/bootstrap-javex-template/](http://widifirmaan.web.id/bootstrap-javex-template/)
- **Deployment:** Apache Web Server / Cloudflare Proxy

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Homepage Desktop**<br>![Homepage Desktop](screenshots/Javex%20Homepage%20Desktop.png) | **Homepage Mobile**<br>![Homepage Mobile](screenshots/Javex%20Homepage%20Mobile.png) |
| **Kompetensi Dasar Desktop**<br>![Kompetensi Dasar Desktop](screenshots/Javex%20Kompetensi%20Dasar%20Desktop.png) | **Kompetensi Dasar Mobile**<br>![Kompetensi Dasar Mobile](screenshots/Javex%20Kompetensi%20Dasar%20Mobile.png) |
| **Materi Pembelajaran Desktop**<br>![Materi Pembelajaran Desktop](screenshots/Javex%20Materi%20Desktop.png) | **Materi Pembelajaran Mobile**<br>![Materi Pembelajaran Mobile](screenshots/Javex%20Materi%20Mobile.png) |
| **Latihan Soal Desktop**<br>![Latihan Soal Desktop](screenshots/Javex%20Latihan%20Soal%20Desktop.png) | **Latihan Soal Mobile**<br>![Latihan Soal Mobile](screenshots/Javex%20Latihan%20Soal%20Mobile.png) |
| **Quiz Evaluasi Desktop**<br>![Quiz Evaluasi Desktop](screenshots/Javex%20Quiz%20Evaluasi%20Desktop.png) | **Quiz Evaluasi Mobile**<br>![Quiz Evaluasi Mobile](screenshots/Javex%20Quiz%20Evaluasi%20Mobile.png) |
| **Daftar Pustaka Desktop**<br>![Daftar Pustaka Desktop](screenshots/Javex%20Daftar%20Pustaka%20Desktop.png) | **Daftar Pustaka Mobile**<br>![Daftar Pustaka Mobile](screenshots/Javex%20Daftar%20Pustaka%20Mobile.png) |

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
├── raw_screenshots/      # Source captures with notch offset
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
