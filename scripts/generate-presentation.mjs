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
    console.warn(`⚠️ Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('📱 Encoding Javex OneUI platform screenshots...');

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
  videoDesktop: encodeImage('Video Desktop.png'),
  videoMobile: encodeImage('Video Mobile.png'),
  pustakaDesktop: encodeImage('Daftar Pustaka Modal Desktop.png'),
};

console.log('🎨 Constructing Javex OneUI Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Javex - Samsung OneUI Interactive E-Learning Platform</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --oneui-bg: #F4F6FA;
      --oneui-card: #FFFFFF;
      --oneui-blue: #0381FE;
      --oneui-blue-light: #EBF4FF;
      --oneui-purple: #6C5CE7;
      --oneui-teal: #00B894;
      --oneui-orange: #FD9644;
      --oneui-text-primary: #191F28;
      --oneui-text-secondary: #8B95A1;
      --oneui-border: #E5E8EB;
      --oneui-shadow: 0 8px 24px rgba(0, 20, 60, 0.06);
      --oneui-radius: 18px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #E2E8F0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--oneui-text-primary);
      line-height: 1.4;
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
      background: var(--oneui-bg);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
    }

    /* Ambient top gradient */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--oneui-blue), #2575FC, var(--oneui-purple));
      z-index: 50;
    }

    /* OneUI Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1.5px solid var(--oneui-border);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .oneui-pill {
      background: var(--oneui-blue-light);
      color: var(--oneui-blue);
      padding: 4px 14px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 11px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .slide-section-title {
      font-size: 13.5px;
      font-weight: 800;
      color: var(--oneui-text-secondary);
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .slide-page-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 800;
      background: #FFFFFF;
      border: 1px solid var(--oneui-border);
      color: var(--oneui-blue);
      padding: 4px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }

    /* Layout */
    .slide-body {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 22px;
      flex: 1;
      min-height: 0;
    }

    .slide-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }

    .headline-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .route-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #FFFFFF;
      border: 1px solid var(--oneui-border);
      padding: 4px 12px;
      width: fit-content;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: #3182F6;
      border-radius: 12px;
    }

    .slide-title {
      font-size: 24px;
      font-weight: 900;
      line-height: 1.2;
      color: var(--oneui-text-primary);
      letter-spacing: -0.02em;
    }

    .slide-subtitle {
      font-size: 13px;
      color: #4E5968;
      font-weight: 500;
      line-height: 1.5;
    }

    /* Feature Cards */
    .feature-blocks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .oneui-card {
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid var(--oneui-border);
      box-shadow: var(--oneui-shadow);
      padding: 12px 16px;
    }

    .card-label {
      font-size: 12px;
      font-weight: 800;
      color: var(--oneui-text-primary);
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .card-label.blue { color: var(--oneui-blue); }
    .card-label.purple { color: var(--oneui-purple); }
    .card-label.teal { color: var(--oneui-teal); }

    .card-text {
      font-size: 11px;
      line-height: 1.45;
      color: #4E5968;
      font-weight: 500;
    }

    /* Metrics */
    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: #FFFFFF;
      border-radius: 14px;
      border: 1px solid var(--oneui-border);
      box-shadow: var(--oneui-shadow);
      padding: 8px 10px;
      text-align: center;
    }

    .metric-val {
      font-size: 17px;
      font-weight: 900;
      color: var(--oneui-blue);
    }

    .metric-desc {
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--oneui-text-secondary);
    }

    /* Media Mockups */
    .slide-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 0;
    }

    .device-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-frame {
      width: 90%;
      background: #FFFFFF;
      border: 1px solid var(--oneui-border);
      box-shadow: 0 16px 36px rgba(0, 40, 100, 0.1);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .frame-bar {
      height: 26px;
      background: #F8FAFC;
      border-bottom: 1px solid var(--oneui-border);
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 6px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dot.red { background: #FF5F56; }
    .dot.yellow { background: #FFBD2E; }
    .dot.green { background: #27C93F; }

    .url-chip {
      margin-left: 12px;
      background: #FFFFFF;
      border: 1px solid var(--oneui-border);
      padding: 2px 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      color: #6B7684;
      border-radius: 12px;
    }

    .desktop-img {
      width: 100%;
      height: auto;
      max-height: 380px;
      object-fit: contain;
      background: #FFFFFF;
      display: block;
    }

    .mobile-frame {
      position: absolute;
      right: -6px;
      bottom: -10px;
      width: 27%;
      background: #FFFFFF;
      border: 3px solid #191F28;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      overflow: hidden;
      z-index: 10;
    }

    .mobile-punch {
      height: 12px;
      background: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .camera-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #191F28;
    }

    .mobile-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1.5px solid var(--oneui-border);
      padding-top: 3.5mm;
      margin-top: 4mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: var(--oneui-text-secondary);
      font-weight: 700;
    }

    /* Cover Slide */
    .cover-slide {
      background: linear-gradient(135deg, #F4F6FA 0%, #EBF4FF 100%);
      justify-content: space-between;
      padding: 18mm 20mm;
    }

    .cover-giant-title {
      font-size: 48px;
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.03em;
      color: var(--oneui-text-primary);
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-giant-title span {
      color: var(--oneui-blue);
    }

    .cover-desc {
      font-size: 15.5px;
      line-height: 1.5;
      color: #4E5968;
      font-weight: 500;
      max-width: 720px;
    }

    .cover-split {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 28px;
      align-items: center;
      margin: 10px 0;
    }

    .cover-specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .cover-spec-card {
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid var(--oneui-border);
      box-shadow: var(--oneui-shadow);
      padding: 12px 16px;
    }

    .cover-spec-k {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 800;
      color: var(--oneui-blue);
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .cover-spec-v {
      font-size: 13.5px;
      font-weight: 800;
      color: var(--oneui-text-primary);
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 10px;
      flex: 1;
    }

    .arch-col {
      background: #FFFFFF;
      border-radius: 18px;
      border: 1px solid var(--oneui-border);
      box-shadow: var(--oneui-shadow);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-col-title {
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      padding-bottom: 8px;
      border-bottom: 1.5px solid var(--oneui-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--oneui-text-primary);
    }

    .arch-item {
      background: var(--oneui-bg);
      border-radius: 12px;
      padding: 9px 12px;
      font-size: 11px;
    }

    .arch-item-name {
      font-weight: 800;
      color: var(--oneui-blue);
      margin-bottom: 2px;
    }

    .arch-item-detail {
      font-size: 10px;
      color: #4E5968;
      line-height: 1.4;
    }

    /* Closing Slide */
    .closing-slide {
      background: linear-gradient(135deg, #FFFFFF 0%, #EBF4FF 100%);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20mm;
      gap: 18px;
    }

    .closing-title {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: var(--oneui-text-primary);
    }

    .closing-pills {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
    }

    .live-hero-card {
      background: #FFFFFF;
      border-radius: 20px;
      border: 1.5px solid var(--oneui-blue);
      box-shadow: 0 12px 32px rgba(3, 129, 254, 0.12);
      padding: 16px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
    }

    .live-url-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 17px;
      font-weight: 800;
      color: var(--oneui-blue);
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <div class="slide cover-slide">
    <div>
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="oneui-pill">SAMSUNG ONEUI WEB SYSTEM</div>
        <div class="route-pill">BOOTSTRAP 5 • HTML5 AUDIO API • EXCEL E-LEARNING</div>
        <div class="oneui-pill" style="background:#D1FAE5; color:#059669;">PRODUCTION DEPLOYED</div>
      </div>
      <div style="margin-top: 20px; max-width: 85%;">
        <div class="cover-giant-title">
          <span>JAVEX PLATFORM</span><br>
          INTERACTIVE MICROSOFT EXCEL E-LEARNING
        </div>
        <p class="cover-desc">
          Platform pembelajaran spreadsheet interaktif dengan estetika Samsung OneUI modern, dilengkapi modul kompetensi kurikulum resmi, panduan antarmuka ribbon, cheatsheet formula, dan engine evaluasi kuis 20 soal.
        </p>
      </div>
    </div>

    <div class="cover-split">
      <div class="cover-specs-grid">
        <div class="cover-spec-card">
          <div class="cover-spec-k">UI FRAMEWORK</div>
          <div class="cover-spec-v">Bootstrap 5 + Custom OneUI</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">AUDIO SUBSYSTEM</div>
          <div class="cover-spec-v">HTML5 Audio Element API</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">DESIGN SPECIFICATION</div>
          <div class="cover-spec-v">Samsung OneUI Rounded Cards</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">ASSESSMENT ENGINE</div>
          <div class="cover-spec-v">Automated 20-Question Quiz</div>
        </div>
      </div>

      <div style="position: relative;">
        <div class="desktop-frame" style="width: 100%;">
          <div class="frame-bar">
            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
            <div class="url-chip">https://widifirmaan.web.id/bootstrap-javex-template/</div>
          </div>
          <img src="${images.berandaDesktop}" class="desktop-img" alt="Javex Cover">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AUTHOR: WIDI FIRMANSYAH</div>
      <div>PROJECT: JAVEX E-LEARNING SYSTEM</div>
      <div>PAGE 01 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 02: BERANDA & AUDIO NARRATION ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">WELCOME PORTAL</div>
        <div class="slide-section-title">PORTAL BERANDA & AMBIENT AUDIO NARRATION</div>
      </div>
      <div class="slide-page-badge">SLIDE 02</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #beranda • AUDIO CONTROLLER</div>
          <h2 class="slide-title">Welcome Dashboard & Voice Narration</h2>
          <p class="slide-subtitle">
            Halaman sambutan berbasis grid kartu OneUI yang menyapa peserta didik disertai pemutar audio narasi panduan otomatis dengan tombol play/pause terintegrasi.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label blue">🔊 Synchronized Audio Narration</div>
            <div class="card-text">
              Kontrol pemutar audio ramah aksesibilitas yang memberikan pengantar materi suara latar tanpa mengganggu alur navigasi halaman web.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label purple">📱 Mobile-First OneUI Cards</div>
            <div class="card-text">
              Kartu menu sudut melengkung 18px dengan efek hover transform halus dan tata letak responsif untuk kenyamanan belajar di perangkat smartphone.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">OneUI</div>
            <div class="metric-desc">Visual Language</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Audio</div>
            <div class="metric-desc">Narrator Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Responsive Layout</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/</div>
            </div>
            <img src="${images.berandaDesktop}" class="desktop-img" alt="Beranda Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.berandaMobile}" class="mobile-img" alt="Beranda Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>AUDIO PLAYBACK LIFECYCLE & PORTAL GRID</div>
      <div>PAGE 02 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 03: KOMPETENSI DASAR ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">CURRICULUM MAPPING</div>
        <div class="slide-section-title">KOMPETENSI DASAR (KD) & INDIKATOR IPK</div>
      </div>
      <div class="slide-page-badge">SLIDE 03</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #kompetensi-dasar • STANDAR KURIKULUM</div>
          <h2 class="slide-title">Curriculum Standards & Target Indicators</h2>
          <p class="slide-subtitle">
            Penyajian standar kompetensi dasar (KD 3.4 Pengetahuan & KD 4.4 Keterampilan) beserta Indikator Pencapaian Kompetensi (IPK) dan tujuan pembelajaran terukur.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label blue">🎯 KD 3.4 & KD 4.4 Structured Taxonomy</div>
            <div class="card-text">
              Dekomposisi tujuan kognitif dan psikomotorik penggunaan perangkat lunak pengolah angka (spreadsheet) ke dalam kartu informasi terstruktur.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label teal">📋 Objective Checklist Matrix</div>
            <div class="card-text">
              Daftar capaian belajar interaktif yang membantu peserta didik memahami ekspektasi kompetensi sebelum melangkah ke lembar kerja praktik.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">KD 3.4</div>
            <div class="metric-desc">Teori Kognitif</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">KD 4.4</div>
            <div class="metric-desc">Praktik Aplikasi</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Kurikulum Aligned</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#kd</div>
            </div>
            <img src="${images.kdDesktop}" class="desktop-img" alt="KD Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.kdMobile}" class="mobile-img" alt="KD Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>EDUCATIONAL TAXONOMY & OBJECTIVES</div>
      <div>PAGE 03 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 04: RIBBON INTERFACE GUIDE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">SPREADSHEET UI</div>
        <div class="slide-section-title">PANDUAN ANTARMUKA RIBBON MICROSOFT EXCEL</div>
      </div>
      <div class="slide-page-badge">SLIDE 04</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #antarmuka • TABBED RIBBON BREAKDOWN</div>
          <h2 class="slide-title">Interactive Ribbon Anatomy & Tabbed Navigation</h2>
          <p class="slide-subtitle">
            Eksplorasi elemen antarmuka Microsoft Excel melalui navigasi tab interaktif (File, Home, Insert, Page Layout, Formulas, Data) beserta fungsi masing-masing grup ikon.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label purple">📑 Bootstrap Tab Pills Component</div>
            <div class="card-text">
              Transisi konten tab bebas lag menggunakan Bootstrap Tab plugin, memudahkan eksplorasi fungsi tombol ribbon tanpa reload halaman.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label blue">🔍 Visual Hotspot Calling</div>
            <div class="card-text">
              Tangkapan layar resolusi tinggi yang membedah letak Formula Bar, Name Box, Ribbon Command Groups, hingga Status Bar lembar kerja.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">7+</div>
            <div class="metric-desc">Ribbon Tabs</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Tab Switching</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">High-DPI</div>
            <div class="metric-desc">Interface Visuals</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#antarmuka</div>
            </div>
            <img src="${images.antarmukaDesktop}" class="desktop-img" alt="Antarmuka Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.antarmukaMobile}" class="mobile-img" alt="Antarmuka Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>BOOTSTRAP TAB ENGINE & RIBBON VISUALIZATION</div>
      <div>PAGE 04 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 05: FORMULAS CHEATSHEET ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">FORMULA ENGINE</div>
        <div class="slide-section-title">CHEATSHEET FORMULA & FUNGSI LOGIKA EXCEL</div>
      </div>
      <div class="slide-page-badge">SLIDE 05</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #rumus • SYNTAX CODE BLOCKS</div>
          <h2 class="slide-title">Formulas, Operators & Logical Syntax Guide</h2>
          <p class="slide-subtitle">
            Katalog lengkap formula matematika dan logika spreadsheet (SUM, AVERAGE, MIN, MAX, COUNT, IF Tunggal, IF Bertingkat) dengan contoh sintaks yang jelas.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label teal">📐 Syntax Highlighting Cards</div>
            <div class="card-text">
              Blok sintaks rumus dengan format monospace tebal dan penjelasan parameter argumen untuk menghindari kesalahan input penulisan rumus siswa.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label blue">💡 Practical Application Scenarios</div>
            <div class="card-text">
              Contoh kasus riil pengolahan data nilai siswa, penentuan grade kelulusan, dan rekapitulasi data numerik secara sistematis.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">12+</div>
            <div class="metric-desc">Core Formulas</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Monospace</div>
            <div class="metric-desc">Formula Syntax</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Real-World</div>
            <div class="metric-desc">Use Cases</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#rumus</div>
            </div>
            <img src="${images.rumusDesktop}" class="desktop-img" alt="Rumus Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.rumusMobile}" class="mobile-img" alt="Rumus Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>FORMULA SYNTAX CATALOG & DATA FORMATTING</div>
      <div>PAGE 05 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 06: HANDS-ON WORKSHEET ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">PRACTICAL CASE STUDY</div>
        <div class="slide-section-title">LEMBAR KERJA PRAKTIK STUDI KASUS INTERAKTIF</div>
      </div>
      <div class="slide-page-badge">SLIDE 06</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #latihan • WORKSHEET SIMULATION</div>
          <h2 class="slide-title">Practical Case Study & Hands-On Worksheet</h2>
          <p class="slide-subtitle">
            Simulasi tabel rekapitulasi nilai dan petunjuk pengerjaan kasus terarah untuk melatih keterampilan siswa mengolah formula dan format sel secara langsung.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label purple">📊 Realistic Data Table Simulation</div>
            <div class="card-text">
              Tampilan tabel spreadsheet representatif dengan header kolom terformat, garis grid presisi, dan indikator sel target pengerjaan rumus.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label blue">📝 Step-by-Step Guidance Modal</div>
            <div class="card-text">
              Petunjuk pengerjaan latihan terstruktur mulai dari persiapan workbook, penulisan formula, hingga prosedur penyimpanan dan pengumpulan berkas.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Hands-on</div>
            <div class="metric-desc">Learning Style</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Step-by-Step</div>
            <div class="metric-desc">Instructions</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">KD 4.4 Mastery</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#latihan</div>
            </div>
            <img src="${images.latihanDesktop}" class="desktop-img" alt="Latihan Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.latihanMobile}" class="mobile-img" alt="Latihan Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>WORKSHEET SIMULATION & STEPPED PEDAGOGY</div>
      <div>PAGE 06 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 07: EXAMINATION QUIZ ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill" style="background:#FEF3C7; color:#D97706;">ASSESSMENT ARENA</div>
        <div class="slide-section-title">EVALUASI UJIAN 20 SOAL & MODAL HASIL KKM</div>
      </div>
      <div class="slide-page-badge">SLIDE 07</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #quiz • CLIENT-SIDE EVALUATION</div>
          <h2 class="slide-title">20-Question Examination Arena & Result Modal</h2>
          <p class="slide-subtitle">
            Engine kuis pilihan ganda 20 soal dengan pelacak progres dinamis, radio selector interaktif, dan modal hasil instan dengan verifikasi status kelulusan KKM.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label blue">⚡ Automated Scoring Algorithm</div>
            <div class="card-text">
              Logika evaluasi JavaScript client-side yang memvalidasi kunci jawaban, menghitung skor akhir skala 100, dan mencatat waktu pengerjaan.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label teal">🏆 Pass / Remedial Feedback Modal</div>
            <div class="card-text">
              Modal umpan balik OneUI menampilkan rincian jawaban benar/salah, persentase nilai akhir, serta rekomendasi pengayaan atau remedial materi.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">20</div>
            <div class="metric-desc">Exam Questions</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Grade Calculation</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">KKM 75</div>
            <div class="metric-desc">Passing Grade</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#quiz</div>
            </div>
            <img src="${images.quizDesktop}" class="desktop-img" alt="Quiz Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.quizMobile}" class="mobile-img" alt="Quiz Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>EVALUATION DISPATCH & SCORING MODAL ENGINE</div>
      <div>PAGE 07 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 08: VIDEO TUTORIAL & CITATIONS ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">MULTIMEDIA & CITATIONS</div>
        <div class="slide-section-title">PEMUTAR VIDEO 16:9 & MODAL DAFTAR PUSTAKA</div>
      </div>
      <div class="slide-page-badge">SLIDE 08</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #video • 16:9 EMBEDDED PLAYER</div>
          <h2 class="slide-title">Video Streaming & Academic Citations Modal</h2>
          <p class="slide-subtitle">
            Pusat tutorial video berbasis kontainer rasio 16:9 responsif untuk demonstrasi visual dan katalog rujukan pustaka akademik dengan modal sitasi detail.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="oneui-card">
            <div class="card-label purple">🎬 Responsive 16:9 Aspect Ratio Frame</div>
            <div class="card-text">
              Implementasi wrapper rasio aspek Bootstrap modern menjamin tayangan video tutorial tetap tajam tanpa distorsi atau letterboxing pada ponsel.
            </div>
          </div>
          <div class="oneui-card">
            <div class="card-label blue">📚 Academic Bibliography Modal</div>
            <div class="card-text">
              Katalog referensi buku teks kurikulum dengan modal detail menyajikan data ISBN, penerbit, tahun terbit, dan kutipan standar penulisan ilmiah.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">16:9</div>
            <div class="metric-desc">Aspect Ratio</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero-Lag</div>
            <div class="metric-desc">Modal Popups</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Verified</div>
            <div class="metric-desc">Citations</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-javex-template/#video</div>
            </div>
            <img src="${images.videoDesktop}" class="desktop-img" alt="Video Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-punch"><div class="camera-dot"></div></div>
            <img src="${images.videoMobile}" class="mobile-img" alt="Video Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>RESPONSIVE VIDEO EMBED & CITATION MODAL</div>
      <div>PAGE 08 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 09: SYSTEM ARCHITECTURE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="oneui-pill">ARCHITECTURE MATRIX</div>
        <div class="slide-section-title">ONEUI SYSTEM ARCHITECTURE & PERFORMANCE</div>
      </div>
      <div class="slide-page-badge">SLIDE 09</div>
    </div>

    <div style="margin-bottom: 8px;">
      <h2 class="slide-title">Lightweight System Architecture & UI Topology</h2>
      <p class="slide-subtitle">
        Arsitektur web berbasis Bootstrap 5 dan vanilla JavaScript yang sangat ringan, menghadirkan estetika OneUI yang anggun dengan beban resource minimal dan kompatibilitas peramban luas.
      </p>
    </div>

    <div class="arch-grid">
      <!-- UI Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>01. ONEUI DESIGN TOKENS</span>
          <span style="color:var(--oneui-blue);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Bootstrap 5 Grid & Utilities</div>
          <div class="arch-item-detail">Sistem grid 12 kolom responsif dengan pemanfaatan flexbox dan spacing utility class terstandarisasi.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">OneUI Squircle Radii</div>
          <div class="arch-item-detail">Border radius 16-20px pada seluruh card dan modal menciptakan sensasi antarmuka Samsung yang bersahabat.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Soft Ambient Shadows</div>
          <div class="arch-item-detail">Elevasi visual lembut berlapis (0 8px 24px rgba(0, 20, 60, 0.06)) yang tidak melelahkan mata siswa.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Font Awesome 5 Vectors</div>
          <div class="arch-item-detail">Ikonografi vektor presisi tinggi untuk tombol kontrol audio, navigasi silabus, dan badge penilaian.</div>
        </div>
      </div>

      <!-- Logic Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>02. CLIENT RUNTIME LOGIC</span>
          <span style="color:var(--oneui-purple);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Vanilla JavaScript Core</div>
          <div class="arch-item-detail">Eksekusi logika tanpa library runtime berat, menjaga performa tetap 60 FPS pada smartphone entry-level.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">HTML5 Audio Element API</div>
          <div class="arch-item-detail">Pengendalian pemutaran narasi panduan belajar dengan event listener play, pause, dan timeupdate.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Quiz Evaluation Algorithm</div>
          <div class="arch-item-detail">Logika pengecekan kunci jawaban 20 soal dengan feedback instan dan pembaruan modal skor tanpa lag.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Event Delegation Bus</div>
          <div class="arch-item-detail">Manajemen klik navigasi bottom bar dan interaksi modal menggunakan delegation pola performa tinggi.</div>
        </div>
      </div>

      <!-- Delivery Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>03. DEPLOYMENT & DELIVERY</span>
          <span style="color:var(--oneui-teal);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">GitHub Pages & HTTPS Edge</div>
          <div class="arch-item-detail">Hosting statis dengan sertifikat SSL otomatis dan penyajian aset cepat melalui CDN global.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Zero Backend Overhead</div>
          <div class="arch-item-detail">Seluruh operasi berjalan 100% pada peramban klien, menjamin stabilitas 99.99% tanpa risiko server down.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Optimized Assets Pipeline</div>
          <div class="arch-item-detail">Kompresi berkas CSS dan JavaScript untuk waktu unduh awal di bawah 1 detik bahkan pada jaringan 3G.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Automated Playwright Auditing</div>
          <div class="arch-item-detail">Uji verifikasi desktop dan mobile Playwright memastikan semua 15+ komponen web berfungsi sempurna.</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>JAVEX WEB ARCHITECTURE</div>
      <div>CORE TECH STACK & SYSTEM TOPOLOGY</div>
      <div>PAGE 09 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CLOSING ==================== -->
  <div class="slide closing-slide">
    <div class="oneui-pill" style="font-size:12px; padding:6px 16px;">
      JAVEX E-LEARNING SYSTEM
    </div>
    <h1 class="closing-title">INTERACTIVE EXCEL E-LEARNING<br>WITH SAMSUNG ONEUI AESTHETICS</h1>
    
    <p style="font-size: 15px; color: #4E5968; max-width: 680px; font-weight: 500; line-height: 1.5;">
      Solusi media pembelajaran interaktif yang menyatukan kurikulum Microsoft Excel standar nasional, keindahan estetika Samsung OneUI, narasi audio terintegrasi, dan evaluasi mandiri dalam satu web platform yang intuitif.
    </p>

    <div class="closing-pills">
      <div class="oneui-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px;">📱 SAMSUNG ONEUI</div>
      <div class="oneui-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px; color:var(--oneui-blue);">🔊 AUDIO NARRATION</div>
      <div class="oneui-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px; color:var(--oneui-purple);">📑 RIBBON GUIDE</div>
      <div class="oneui-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px; color:var(--oneui-teal);">📐 FORMULA CHEATSHEET</div>
      <div class="oneui-card" style="padding: 6px 14px; font-weight: 800; font-size: 11px; color:var(--oneui-orange);">🏆 20-QUESTION QUIZ</div>
    </div>

    <div class="live-hero-card">
      <div style="font-size:11px; font-weight:800; color:var(--oneui-text-secondary); letter-spacing:0.06em; text-transform:uppercase;">
        LIVE PRODUCTION ENVIRONMENT
      </div>
      <div class="live-url-text">https://widifirmaan.web.id/bootstrap-javex-template/</div>
      <div style="font-size:11px; color:#4E5968; font-weight:600;">
        Built with Bootstrap 5 • Samsung OneUI Design Tokens • Vanilla JavaScript
      </div>
    </div>

    <div class="slide-footer" style="width: 100%; margin-top: 15px;">
      <div>ENGINEERED BY WIDI FIRMANSYAH</div>
      <div>PRODUCTION-READY WEB PLATFORM</div>
      <div>PAGE 10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`📄 Presentation HTML written to: ${htmlFilePath}`);

console.log('🚀 Launching Chromium with Playwright to render Javex PDF...');

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
  console.log('🖨️  Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('📜 Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #F4F6FA !important;
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

  console.log('\n================================================================================');
  console.log('🎉 JAVEX ONEUI ARCHITECTURE PDFS SUCCESSFULLY GENERATED!');
  console.log(`📦 Multi-Page Deck (Slides)   : ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (10 Pages A4 Landscape)`);
  console.log(`   -> Saved: ${slidePdfPath}`);
  console.log(`📦 Continuous Poster (Scroll) : ${(contStat.size / 1024 / 1024).toFixed(2)} MB (1 Long Showcase Page)`);
  console.log(`   -> Saved: ${continuousPdfPath}`);
  console.log('================================================================================\n');
}

renderPDF().catch((err) => {
  console.error('❌ Error during PDF generation:', err);
  process.exit(1);
});
