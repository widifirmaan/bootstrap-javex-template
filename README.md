# 📊 Javex - Interactive Learning Media Bootstrap Template with Quizzes

**Javex** is a fully static, client-side web application built with **HTML5**, **Bootstrap 5**, and **Vanilla JavaScript** — requiring zero backend infrastructure. It implements a custom **Samsung OneUI-inspired design system** (`oneui.css`) featuring CSS custom properties, responsive card-based layouts, and a fixed bottom navigation bar optimized for mobile viewports. Learning content is delivered as structured semantic HTML converted via OCR from source material images, ensuring optimal readability across all screen densities. Assessment logic is handled entirely in-browser using an event-driven quiz engine with modal-based score reporting.

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📸 Application Showcase

Explore the comprehensive features of **Javex** through our gallery.

| | |
|:---:|:---:|
| ![Dashboard](screenshots/Dashboard%20Page.png)<br>**Dashboard / Landing Page** | ![Kompetensi](screenshots/Kompetensi%20Page.png)<br>**Kompetensi Dasar** |
| ![Materi](screenshots/Materi%20Page.png)<br>**Halaman Materi** | ![Submateri](screenshots/Submateri%20Page.png)<br>**Submateri (HTML Text)** |
| ![Quiz Intro](screenshots/Quiz%20Intro%20Page.png)<br>**Halaman Quiz** | ![Quiz Result](screenshots/Quiz%20Result%20Popup.png)<br>**Hasil Quiz (Modal)** |

---

## 🚀 Features Overview

### 📖 Structured Learning
*   **Modular Content**: Covers everything from basic Excel history to advanced formula functions.
*   **HTML-first Content**: All learning materials converted from images to native HTML text — perfectly readable on any screen size.
*   **Competency Based**: Aligned with official educational standards (KD 3.4 & 4.4).

### ✍️ Interactive Practice
*   **Real-time Feedback**: Get instant results on practice questions.
*   **Scrollable Tabs**: Mobile-friendly horizontal tab navigation across all sub-pages.
*   **Excel Simulation**: Guidance on workbook formatting and function implementation.

### 🧪 Assessment & Evaluation
*   **Smart Quiz**: Automated scoring for multiple-choice questions.
*   **Score Modal**: Instant score popup with pass/fail feedback after quiz completion.
*   **Interactive UI**: Smooth animations and intuitive navigation for better engagement.

### 📱 Mobile-First Design
*   **Samsung OneUI Inspired**: Clean card-based layout with green accent color (`#01723A`).
*   **Bottom Navigation Bar**: Fixed bottom navbar on mobile devices for easy thumb access.
*   **Responsive Grid**: All content adapts seamlessly from mobile to desktop.

---

## 🛠️ Tech Stack

### Core Technologies
*   **Structure**: HTML5 (Semantic Elements)
*   **Styling**: CSS3, Bootstrap 5, Custom OneUI CSS (`assets/css/oneui.css`)
*   **Logic**: JavaScript (Vanilla), jQuery
*   **Typography**: Google Fonts (Poppins)
*   **Icons**: Font Awesome 5

---

## 📂 Project Structure

```bash
/
├── assets/
│   └── css/
│       └── oneui.css         # Custom OneUI design system
├── m/                        # Learning material images
├── screenshots/              # Documentation images
├── vendor/                   # Third-party dependencies (Bootstrap 5, jQuery)
├── index.html                # Landing / Dashboard Page
├── kd.html                   # Competency Standards (KD)
├── materi.html               # Learning Modules Hub
├── pendahuluan.html          # Sub-materi: Pengenalan Excel
├── mulai.html                # Sub-materi: Memulai Excel
├── format.html               # Sub-materi: Format Workbook
├── rumus.html                # Sub-materi: Rumus & Fungsi
├── latsoal.html              # Practice Exercise Menu
├── mulailatsoal.html         # Practice Exercise Content
├── quiz.html                 # Quiz Entry Page
├── mulaiquiz.html            # Interactive Quiz
├── profilpengembang.html     # Developer Profile
└── daftarpustaka.html        # References
```

---

## 📦 Getting Started

### Prerequisites
*   **Web Browser**: Chrome, Firefox, or Edge (Latest recommended)
*   **No server required**: The app is fully static HTML — just open `index.html`.

### Quick Start
```bash
# Clone the repository
git clone https://github.com/widifirmaan/javascript-excel-pintar-media-pembelajaran.git

# Navigate to directory
cd javascript-excel-pintar-media-pembelajaran

# Open in browser
xdg-open index.html   # Linux
open index.html        # macOS
start index.html       # Windows
```

---

## 👥 Authors

Developed with ❤️ by:
*   **Widi Firmansyah** - Lead Developer
*   **Donny Bimo Hendro Utomo** - Academic Advisor

---

## 📖 Educational Competencies

This application is designed to achieve the following Indonesian national education standards:
*   **KD 3.4**: Understanding features and functions of data processing applications.
*   **KD 4.4**: Using features and functions of data processing applications to process data.

---

## 📜 License

This project is developed for educational purposes. Any distribution or commercial use requires prior authorization from the development team.

---

**Developed for a better Excel learning experience** 🚀
