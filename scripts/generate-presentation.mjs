import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';

function encodeImage(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Encoding Javex OneUI screenshots...');

const images = {
  berandaDesktop: encodeImage('Beranda Desktop.png'),
  berandaMobile: encodeImage('Beranda Mobile.png'),
  kdDesktop: encodeImage('Kompetensi Dasar Desktop.png'),
  kdMobile: encodeImage('Kompetensi Dasar Mobile.png'),
  antarmukaDesktop: encodeImage('Antarmuka Desktop.png'),
  antarmukaMobile: encodeImage('Antarmuka Mobile.png'),
  rumusDesktop: encodeImage('Rumus Desktop.png'),
  rumusMobile: encodeImage('Rumus Mobile.png'),
  latihanDesktop: encodeImage('Latihan Desktop.png'),
  latihanMobile: encodeImage('Latihan Mobile.png'),
  quizDesktop: encodeImage('Quiz Desktop.png'),
  quizMobile: encodeImage('Quiz Mobile.png'),
  quizResultDesktop: encodeImage('Quiz Result Modal Desktop.png'),
  quizResultMobile: encodeImage('Quiz Result Modal Mobile.png'),
  videoDesktop: encodeImage('Video Desktop.png'),
  videoMobile: encodeImage('Video Mobile.png'),
  pustakaDesktop: encodeImage('Daftar Pustaka Modal Desktop.png'),
};

console.log('Assembling English Samsung OneUI & Excel Green Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Javex - Samsung OneUI E-Learning Web Architecture</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --oneui-bg: #f2f2f6;
      --oneui-card-bg: #ffffff;
      --oneui-text-primary: #000000;
      --oneui-text-secondary: #8e8e93;
      --oneui-accent: #01723A;   /* Excel Green */
      --oneui-blue: #0072DE;     /* Samsung Blue */
      --oneui-radius: 28px;
      --oneui-subradius: 18px;
      --oneui-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
      --font-main: 'Poppins', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-family: var(--font-main);
    }

    body {
      background-color: var(--oneui-bg);
      color: var(--oneui-text-primary);
      line-height: 1.45;
    }

    @page {
      size: 297mm 210mm;
      margin: 0;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      background-color: var(--oneui-bg);
      display: flex;
      flex-direction: column;
      padding: 15mm 18mm;
      overflow: hidden;
    }

    /* OneUI Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5.5mm;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--oneui-card-bg);
      padding: 8px 18px;
      border-radius: 50px;
      box-shadow: var(--oneui-shadow);
      border: 1px solid rgba(0, 0, 0, 0.04);
    }

    .brand-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--oneui-accent);
    }

    .brand-title {
      font-size: 13.5px;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--oneui-text-primary);
    }

    .brand-subtitle {
      font-size: 12px;
      color: var(--oneui-text-secondary);
      font-weight: 500;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      padding-left: 10px;
      margin-left: 2px;
    }

    .badge-pill {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-accent);
      background: rgba(1, 114, 58, 0.08);
      padding: 6px 14px;
      border-radius: 50px;
    }

    /* Content Area */
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title-banner {
      margin-bottom: 5mm;
    }

    .slide-category {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-accent);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }

    .slide-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--oneui-text-primary);
      line-height: 1.18;
    }

    .slide-subtitle {
      font-size: 13.5px;
      color: var(--oneui-text-secondary);
      margin-top: 4px;
      max-width: 900px;
      font-weight: 500;
    }

    /* OneUI Squircle Cards */
    .oneui-card {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius);
      box-shadow: var(--oneui-shadow);
      padding: 18px 22px;
      border: 1px solid rgba(0, 0, 0, 0.03);
    }

    .oneui-card-accent {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius);
      box-shadow: var(--oneui-shadow);
      padding: 18px 22px;
      border-left: 5px solid var(--oneui-accent);
    }

    /* Split Layouts */
    .layout-split {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 18px;
      align-items: stretch;
      flex: 1;
    }

    .layout-split-reversed {
      display: grid;
      grid-template-columns: 0.92fr 1.08fr;
      gap: 18px;
      align-items: stretch;
      flex: 1;
    }

    .layout-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
    }

    .layout-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      flex: 1;
    }

    /* Visual Stage */
    .visual-stage {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius);
      box-shadow: var(--oneui-shadow);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 290px;
      padding: 12px;
      border: 1px solid rgba(0, 0, 0, 0.03);
    }

    .visual-stage img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
    }

    /* Feature Items */
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .feature-box {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-subradius);
      box-shadow: var(--oneui-shadow);
      padding: 14px 18px;
      border: 1px solid rgba(0, 0, 0, 0.03);
    }

    .feature-box-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--oneui-text-primary);
      margin-bottom: 3px;
    }

    .feature-box-desc {
      font-size: 12px;
      color: var(--oneui-text-secondary);
      line-height: 1.45;
      font-weight: 500;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3.5mm;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      font-size: 11px;
      color: var(--oneui-text-secondary);
      font-family: var(--font-mono);
      font-weight: 600;
    }

    .tech-pill {
      display: inline-block;
      padding: 3px 10px;
      background: #e3e3e8;
      border-radius: 50px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-text-primary);
      margin-right: 6px;
      margin-top: 4px;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Javex Interactive Learning</div>
        <div class="brand-subtitle">Samsung OneUI E-Learning Architecture</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-01 / 10</div>
    </div>

    <div class="slide-content">
      <div class="layout-split">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="tech-pill">Bootstrap 5</span>
            <span class="tech-pill">Vanilla JS ES6</span>
            <span class="tech-pill">Samsung OneUI</span>
            <span class="tech-pill">Excel Education</span>
          </div>
          <h1 style="font-size: 40px; font-weight: 800; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 16px;">
            Interactive Excel E-Learning &amp; OneUI Web Architecture
          </h1>
          <p style="font-size: 14.5px; color: var(--oneui-text-secondary); line-height: 1.55; margin-bottom: 24px; font-weight: 500;">
            A modern educational web platform engineered with Samsung OneUI ergonomics (28px squircle cards, soft elevation) and Microsoft Excel Green palette to deliver frictionless spreadsheet mastery and interactive knowledge assessments.
          </p>

          <div class="oneui-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">DESIGN SYSTEM</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--oneui-accent); margin-top: 2px;">Samsung OneUI</div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary);">28px Squircles</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">EVALUATION</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--oneui-text-primary); margin-top: 2px;">Real-Time</div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary);">Dynamic Quiz Engine</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">PERFORMANCE</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--oneui-text-primary); margin-top: 2px;">Zero Dependency</div>
              <div style="font-size: 11px; color: var(--oneui-text-secondary);">Sub-100KB Engine</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.berandaDesktop}" alt="Javex Beranda Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; INTERACTIVE LEARNING PLATFORM</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: EDUCATIONAL ERGONOMICS & ONEUI -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Architecture &amp; Rationale</div>
        <div class="brand-subtitle">Educational Ergonomics</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Design Foundations</div>
        <h2 class="slide-title">Human-Centered Design for Spreadsheet Competency</h2>
        <p class="slide-subtitle">Combining Samsung OneUI visual reachability with structured learning modules for high-retention technical education.</p>
      </div>

      <div class="layout-grid-3">
        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">01 &bull; CHALLENGE</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Spreadsheet Cognitive Load</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            Dense desktop spreadsheet interfaces often intimidate beginner students with overcrowded ribbons and complex nested formula dialogs.
          </p>
        </div>

        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">02 &bull; SOLUTION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">OneUI Card Segmentation</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            Curriculum concepts isolated into clean 28px squircle cards on soft slate background (#f2f2f6) reduce visual friction and guide student focus.
          </p>
        </div>

        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">03 &bull; OUTCOME</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Immediate Competency Gains</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            Step-by-step practical simulations allow learners to validate cell coordinates, mathematical operators, and logic functions with zero installation.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; EDUCATIONAL ERGONOMICS</div>
      <div>ONEUI DESIGN SYSTEM</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: SYLLABUS & CORE COMPETENCY MATRIX -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Curriculum Structure</div>
        <div class="brand-subtitle">Core Competency Matrix</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Pedagogical Framework</div>
        <h2 class="slide-title">Modular Syllabus &amp; National Competency Mapping</h2>
        <p class="slide-subtitle">Structured course navigation mapped to vocational curriculum standards (KD 3.1 - 4.2) for spreadsheet literacy.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.kdDesktop}" alt="Javex Core Competency Matrix Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Knowledge Domain (KD 3.1 &amp; 3.2)</div>
            <div class="feature-box-desc">
              Foundational understanding of workbook architecture, cell referencing, data types, and standard mathematical operator precedence.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Practical Domain (KD 4.1 &amp; 4.2)</div>
            <div class="feature-box-desc">
              Hands-on mastery of statistical functions (SUM, AVERAGE, MIN, MAX), conditional logic (IF, AND, OR), and lookup tables.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Progressive Unlocking Architecture</div>
            <div class="feature-box-desc">
              Linear progression ensures prerequisite concept mastery before students advance into complex formula nesting and timed assessments.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; CURRICULUM ARCHITECTURE</div>
      <div>COMPETENCY MATRIX ENGINE</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: SPREADSHEET INTERFACE ANATOMY -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Interactive Simulator</div>
        <div class="brand-subtitle">Interface Anatomy &amp; Ribbon Exploration</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Interface Exploration</div>
        <h2 class="slide-title">Interactive Excel Workspace &amp; Tool Anatomy</h2>
        <p class="slide-subtitle">Interactive visual dissecting the Title Bar, Ribbon Menu, Formula Bar, Active Cell coordinates, and Status Bar.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Hotspot Tooltip Architecture</div>
            <div class="feature-box-desc">
              Interactive hotspot pins across the spreadsheet surface reveal detailed anatomical descriptions on hover or touch without layout shift.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">High-Fidelity Excel Asset Rendering</div>
            <div class="feature-box-desc">
              Vector SVG markers and sharp screenshots capture authentic Excel styling, reinforcing exact software familiarity for learners.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Keyboard Navigation &amp; Focus Indicators</div>
            <div class="feature-box-desc">
              W3C-compliant accessible focus rings allow assistive screen readers and keyboard users to inspect each interface segment cleanly.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.antarmukaDesktop}" alt="Javex Interface Anatomy Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; WORKSPACE SIMULATION</div>
      <div>EXCEL ANATOMY MODULE</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 5: DYNAMIC FORMULA ENGINE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Formula Engine</div>
        <div class="brand-subtitle">Mathematical &amp; Logical Function Lab</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Computation Engine</div>
        <h2 class="slide-title">Formula Syntax Inspector &amp; Dynamic Calculator</h2>
        <p class="slide-subtitle">Interactive breakdown of mathematical formulas (Addition, Subtraction, Multiplication) and Excel function syntax.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.rumusDesktop}" alt="Javex Rumus Formula Lab Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Color-Coded Syntax Highlighting</div>
            <div class="feature-box-desc">
              Formulas dissected into distinct color tokens (Equal sign, Function name, Parentheses, Cell arguments) to clarify expression anatomy.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Live Dynamic Argument Computation</div>
            <div class="feature-box-desc">
              Immediate client-side JavaScript execution parses student sample values and displays calculated spreadsheet output in real time.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Instant Error Diagnostics (#DIV/0!, #VALUE!)</div>
            <div class="feature-box-desc">
              Simulates standard spreadsheet error conditions, teaching students how to identify syntax mismatches and invalid numeric types.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; FORMULA PARSER</div>
      <div>SYNTAX TOKENIZER</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 6: GUIDED PRACTICE LAB -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Practice Studio</div>
        <div class="brand-subtitle">Hands-On Interactive Spreadsheet Challenges</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Practical Application</div>
        <h2 class="slide-title">Step-by-Step Interactive Laboratory Workstation</h2>
        <p class="slide-subtitle">Engaging students with guided table exercises, practical bookkeeping challenges, and instant validation checks.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Authentic Table Data Entry Grids</div>
            <div class="feature-box-desc">
              Students practice on realistic inventory, sales, and payroll tables with live data input fields directly inside the browser viewport.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Dynamic Validation &amp; Hint Modals</div>
            <div class="feature-box-desc">
              Context-aware hint dialogs provide algorithmic guidance when incorrect formula operators are detected, steering independent learning.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Video Masterclass Integration</div>
            <div class="feature-box-desc">
              Embedded educational video tutorials offer multi-modal reinforcement, allowing visual learners to watch expert demonstration clips.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.latihanDesktop}" alt="Javex Latihan Workstation Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; PRACTICE LABORATORY</div>
      <div>INTERACTIVE EXERCISE ENGINE</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 7: AUTOMATED QUIZ & ASSESSMENT ENGINE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Evaluation Engine</div>
        <div class="brand-subtitle">Automated Quiz &amp; Scorecard Analytics</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Knowledge Assessment</div>
        <h2 class="slide-title">Dynamic Examination Engine with Real-Time Scorecards</h2>
        <p class="slide-subtitle">Timed multiple-choice evaluation module with randomized questions, immediate scoring, and mastery certificate modals.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.quizDesktop}" alt="Javex Quiz Examination Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Countdown Timer &amp; State Persistence</div>
            <div class="feature-box-desc">
              High-accuracy countdown timer with local state safeguards prevents exam loss if the browser tab is accidentally refreshed.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Instant Comprehensive Scorecard Modal</div>
            <div class="feature-box-desc">
              Generates immediate performance breakdown displaying total score, percentage mastery, correct answer tally, and remedial tips.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Zero Server Processing Overhead</div>
            <div class="feature-box-desc">
              Entire grading pipeline executes client-side via JavaScript data arrays, eliminating server dependency and backend latency.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; EVALUATION ENGINE</div>
      <div>AUTOMATED GRADING PIPELINE</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 8: RESPONSIVE TOUCH & ONEUI REACHABILITY -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Mobile Ergonomics</div>
        <div class="brand-subtitle">OneUI Reachability &amp; Single-Hand Thumb Zones</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Mobile Optimization</div>
        <h2 class="slide-title">Smartphone Experience Engineered for Thumb-Zone Ease</h2>
        <p class="slide-subtitle">Adopting Samsung OneUI reachability standards to place interactive elements comfortably within natural thumb range.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Upper Viewing / Lower Interaction Separation</div>
            <div class="feature-box-desc">
              Upper viewport zone reserved for visual learning material, while interactive action buttons occupy the lower half for one-handed operation.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Squircle Pill Navigation &amp; Drawer Controls</div>
            <div class="feature-box-desc">
              Smooth bottom-sheet modals and off-canvas drawers provide quick course navigation without occluding active exercise tables.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Dynamic Fluid Typography &amp; Touch Targets</div>
            <div class="feature-box-desc">
              Minimum 48px touch targets ensure reliable tapping across quiz options and spreadsheet cells on compact mobile screens.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.berandaMobile}" alt="Javex Beranda Mobile OneUI View">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; MOBILE ERGONOMICS</div>
      <div>ONEUI REACHABILITY STANDARDS</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 9: WEB PERFORMANCE & ZERO-JANK RUNTIME -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Performance Engineering</div>
        <div class="brand-subtitle">Core Web Vitals &amp; Runtime Efficiency</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Speed &amp; Reliability</div>
        <h2 class="slide-title">Lightweight Asset Architecture &amp; 60 FPS Fluidity</h2>
        <p class="slide-subtitle">Engineered with vanilla ES6 and modular CSS to ensure instantaneous loading on low-power student devices.</p>
      </div>

      <div class="layout-grid-3">
        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">BUNDLE WEIGHT</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Sub-100KB Footprint</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            Zero heavy framework runtimes. Clean vanilla ES6 modules deliver complete interactive educational functionality with instantaneous initial load.
          </p>
        </div>

        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">LAYOUT STABILITY</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Zero CLS Score</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            Explicit dimensional constraints across all graphic tables, video containers, and modal dialogs eliminate annoying content shifts entirely.
          </p>
        </div>

        <div class="oneui-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--oneui-accent); font-weight: 700; margin-bottom: 8px;">SMOOTH RENDERING</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">GPU Compositing</h3>
          <p style="font-size: 12.5px; color: var(--oneui-text-secondary); line-height: 1.5;">
            CSS transforms and opacity transitions handled on GPU compositor layers prevent main thread blocking during interactive quiz answering.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; PERFORMANCE AUDIT</div>
      <div>CORE WEB VITALS BENCHMARKS</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: ARCHITECTURAL SUMMARY & DEPLOYMENT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Milestone Summary</div>
        <div class="brand-subtitle">Production Specifications &amp; Quality Audit</div>
      </div>
      <div class="badge-pill">DECK-JAVEX-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Production Readiness</div>
        <h2 class="slide-title">Comprehensive Project Implementation Summary</h2>
        <p class="slide-subtitle">A state-of-the-art interactive learning platform proven across desktop monitors, classroom projectors, and student smartphones.</p>
      </div>

      <div class="layout-grid-4">
        <div class="oneui-card">
          <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">FRAMEWORK</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--oneui-accent); margin-top: 4px; margin-bottom: 4px;">Bootstrap 5</div>
          <p style="font-size: 12px; color: var(--oneui-text-secondary); line-height: 1.45;">Modern responsive grid with custom OneUI utility extensions.</p>
        </div>

        <div class="oneui-card">
          <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">DESIGN SYSTEM</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--oneui-text-primary); margin-top: 4px; margin-bottom: 4px;">Samsung OneUI</div>
          <p style="font-size: 12px; color: var(--oneui-text-secondary); line-height: 1.45;">28px squircle cards, soft elevation, and Excel Green accents.</p>
        </div>

        <div class="oneui-card">
          <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">ASSESSMENT</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--oneui-accent); margin-top: 4px; margin-bottom: 4px;">Quiz Engine</div>
          <p style="font-size: 12px; color: var(--oneui-text-secondary); line-height: 1.45;">Automated client-side grading with scorecard analytics.</p>
        </div>

        <div class="oneui-card">
          <div style="font-size: 11px; color: var(--oneui-text-secondary); font-family: var(--font-mono);">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: #16A34A; margin-top: 4px; margin-bottom: 4px;">Production</div>
          <p style="font-size: 12px; color: var(--oneui-text-secondary); line-height: 1.45;">100% test coverage across modern desktop and mobile browsers.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.quizResultDesktop}" alt="Javex Quiz Result Modal Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX &bull; PROJECT COMPLETION</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render English OneUI PDFs...');

async function renderPDF() {
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const slidePdfPath = path.join(downloadsDir, 'Javex.pdf');
  const continuousPdfPath = path.join(downloadsDir, 'Javex-Continuous.pdf');

  // 1. Multi-Page Deck Mode (10 Slides A4 Landscape)
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background-color: #f2f2f6 !important;
      }
      .slide {
        page-break-after: unset !important;
        page-break-inside: avoid !important;
        margin-bottom: 0px !important;
        box-shadow: none !important;
      }
    `
  });

  await page.waitForTimeout(500);

  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.pdf({
    path: continuousPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    pageRanges: '1',
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(continuousPdfPath);

  console.log('\nJavex English PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
