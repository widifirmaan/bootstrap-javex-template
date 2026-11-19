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
    console.warn(`Screenshot tidak ditemukan: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Memproses screenshot Javex OneUI...');

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

console.log('Menyusun HTML presentasi dengan style murni Samsung OneUI & Excel Green...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
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
      --oneui-border: rgba(0, 0, 0, 0.06);
      --oneui-radius: 28px;
      --oneui-radius-sm: 16px;
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
      padding: 14mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 100% 0%, rgba(1, 114, 58, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 0% 100%, rgba(0, 114, 222, 0.04) 0%, transparent 40%);
    }

    /* Soft OneUI Accent Top Pill */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18mm;
      right: 18mm;
      height: 4px;
      background: linear-gradient(90deg, var(--oneui-accent), var(--oneui-blue));
      border-radius: 0 0 4px 4px;
      z-index: 50;
    }

    /* Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      padding-bottom: 3.5mm;
      border-bottom: 1px solid var(--oneui-border);
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: rgba(1, 114, 58, 0.1);
      color: var(--oneui-accent);
      padding: 5px 14px;
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 50px;
    }

    .slide-section-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--oneui-text-secondary);
      letter-spacing: -0.01em;
      text-transform: uppercase;
    }

    .slide-number {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-accent);
      background: var(--oneui-card-bg);
      padding: 4px 12px;
      border-radius: 50px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    /* Body */
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
      gap: 6px;
    }

    .slide-title {
      font-size: 26px;
      font-weight: 800;
      line-height: 1.2;
      color: var(--oneui-text-primary);
      letter-spacing: -0.03em;
    }

    .slide-desc {
      font-size: 12px;
      color: var(--oneui-text-secondary);
      line-height: 1.55;
      font-weight: 400;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 8px 0;
    }

    .feature-card {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius-sm);
      padding: 12px 16px;
      box-shadow: var(--oneui-shadow);
      border: 1px solid var(--oneui-border);
      border-left: 4px solid var(--oneui-accent);
    }

    .feature-card.blue {
      border-left-color: var(--oneui-blue);
    }

    .feature-card-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--oneui-text-primary);
      margin-bottom: 2px;
      letter-spacing: -0.01em;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--oneui-text-secondary);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius-sm);
      padding: 10px 12px;
      text-align: center;
      box-shadow: var(--oneui-shadow);
      border: 1px solid var(--oneui-border);
    }

    .metric-val {
      font-family: var(--font-mono);
      font-size: 16px;
      font-weight: 800;
      color: var(--oneui-accent);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--oneui-text-secondary);
      margin-top: 2px;
    }

    /* Visual Stage */
    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--oneui-border);
      padding: 16px;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.08));
    }

    .screenshot-mobile {
      position: absolute;
      right: 14px;
      bottom: 8px;
      max-height: 270px;
      max-width: 29%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.12));
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3mm;
      border-top: 1px solid var(--oneui-border);
    }

    .footer-tech {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      color: var(--oneui-text-secondary);
    }

    .footer-url {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 700;
      color: var(--oneui-accent);
    }

    /* Cover Styling */
    .cover-body {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 30px;
      align-items: center;
      flex: 1;
      min-height: 0;
    }

    .cover-tagline {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-size: 38px;
      font-weight: 800;
      color: var(--oneui-text-primary);
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 12px;
    }

    .cover-desc {
      font-size: 13px;
      color: var(--oneui-text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .spec-card {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius-sm);
      padding: 10px 14px;
      box-shadow: var(--oneui-shadow);
      border: 1px solid var(--oneui-border);
    }

    .spec-k {
      font-size: 9px;
      font-weight: 600;
      color: var(--oneui-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .spec-v {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--oneui-accent);
      margin-top: 2px;
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
      min-height: 0;
      margin-top: 10px;
    }

    .arch-card {
      background: var(--oneui-card-bg);
      border-radius: var(--oneui-radius);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: var(--oneui-shadow);
      border: 1px solid var(--oneui-border);
    }

    .arch-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--oneui-text-primary);
      border-bottom: 1px solid var(--oneui-border);
      padding-bottom: 8px;
    }

    .arch-item {
      font-size: 11.5px;
      color: var(--oneui-text-secondary);
      line-height: 1.5;
    }

    .arch-item strong {
      color: var(--oneui-text-primary);
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SAMSUNG ONEUI E-LEARNING</span>
        <span class="slide-section-title">Dokumentasi Rekayasa Perangkat Lunak</span>
      </div>
      <div class="slide-number">01 / 10</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-tagline">OneUI Design & Interactive Education</div>
        <h1 class="cover-title">Javex Media Pembelajaran Microsoft Excel</h1>
        <p class="cover-desc">
          Media pembelajaran interaktif berbasis web dengan bahasa desain Samsung OneUI (radius 28px, kartu elevasi lembut, palet Excel Green #01723A). Menyajikan modul kompetensi, kamus rumus formula, pemutar video tutorial, dan kuis evaluasi 20 soal otomatis.
        </p>

        <div class="cover-specs">
          <div class="spec-card">
            <div class="spec-k">Design System</div>
            <div class="spec-v">Samsung OneUI (28px Squircle)</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Core Typography</div>
            <div class="spec-v">Poppins & JetBrains Mono</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Theme Palette</div>
            <div class="spec-v">Excel Green (#01723A)</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Engine</div>
            <div class="spec-v">Bootstrap 5.3 & Vanilla JS</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Javex Beranda">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Bootstrap 5.3 + OneUI CSS + Poppins + HTML5 Audio/Video</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 2: ARSITEKTUR & DESAIN ONEUI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ARCHITECTURE</span>
        <span class="slide-section-title">Fondasi Sistem & Desain Ergonomis OneUI</span>
      </div>
      <div class="slide-number">02 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 8px;">
      <h2 class="slide-title">Arsitektur Modular & Pengalaman Pengguna OneUI</h2>
      <p class="slide-desc">Desain antarmuka yang mengadaptasi prinsip OneUI: area tampilan besar di bagian atas, kartu interaksi terjangkau jempol di bagian bawah, dan elevasi lembut.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--oneui-accent);">Struktur View & Layout</div>
        <div class="arch-item"><strong>Kartu Squircle 28px:</strong> Sudut melengkung halus khas Samsung OneUI yang ramah visual dan nyaman dipandang.</div>
        <div class="arch-item"><strong>Grid Responsif 12-Kolom:</strong> Tata letak Bootstrap 5 yang menyesuaikan presisi dari ponsel hingga layar proyektor kelas.</div>
        <div class="arch-item"><strong>Navigasi Bawah Sentuh:</strong> Bottom navigation bar pada perangkat seluler untuk memudahkan transisi materi satu tangan.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--oneui-blue);">Logika Interaktif Sisi Klien</div>
        <div class="arch-item"><strong>Vanilla JavaScript Mandiri:</strong> Pengelolaan event DOM, validasi rumus, kalkulasi skor kuis, dan navigasi modal tanpa dependensi berat.</div>
        <div class="arch-item"><strong>Narasi Audio Latar:</strong> Pemutar audio ambient yang dapat dihidupkan/dimatikan untuk meningkatkan fokus belajar siswa.</div>
        <div class="arch-item"><strong>Penyimpanan Progres Sesi:</strong> Pelacakan riwayat jawaban kuis dan status latihan selama sesi pembelajaran berlangsung.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: #2E7D32;">Aksesibilitas & Multimedia</div>
        <div class="arch-item"><strong>Dialog Modal Ergonomis:</strong> Jendela modal dengan sudut membulat untuk menampilkan daftar pustaka dan analisis nilai kuis.</div>
        <div class="arch-item"><strong>Pemutar Video Rasio 16:9:</strong> Integrasi tutorial langkah visual Excel dengan pemutar video responsif tanpa layout shift.</div>
        <div class="arch-item"><strong>Operasional Mandiri Offline:</strong> Siap dijalankan langsung di laboratorium komputer sekolah tanpa ketergantungan koneksi internet.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Javex OneUI Architecture Blueprint</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 3: BERANDA -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">PORTAL</span>
        <span class="slide-section-title">Halaman Beranda & Menu Pembelajaran</span>
      </div>
      <div class="slide-number">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Portal Beranda & Akses Navigasi</h2>
          <p class="slide-desc">Pintu masuk pembelajaran dengan tata letak kartu OneUI terpusat, kontrol audio latar, dan akses langsung ke seluruh bab materi.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Grid Kartu Menu Terstruktur</div>
            <div class="feature-card-text">Akses satu klik ke modul Kompetensi Dasar, Pengenalan Ribbon, Kamus Rumus, Latihan, dan Evaluasi Kuis.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Audio Narasi & Musik Latar</div>
            <div class="feature-card-text">Tombol toggle audio ambient yang dapat diatur sewaktu-waktu untuk kenyamanan suasana belajar mandiri.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Estetika OneUI Halus</div>
            <div class="feature-card-text">Latar belakang abu-abu lembut #f2f2f6 dengan kartu putih terangkat yang meminimalkan kelelahan mata pengguna.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">28px</div>
            <div class="metric-lbl">Squircle Radius</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Poppins</div>
            <div class="metric-lbl">Web Font</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Responsive</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Beranda Desktop">
        <img src="${images.berandaMobile}" class="screenshot-mobile" alt="Beranda Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: index.html & assets/css/oneui.css</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 4: KOMPETENSI DASAR -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">CURRICULUM</span>
        <span class="slide-section-title">Standar Kompetensi & Indikator Pencapaian</span>
      </div>
      <div class="slide-number">04 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kompetensi Dasar & Indikator Capaian</h2>
          <p class="slide-desc">Penyajian capaian kurikulum standar Kompetensi Dasar (KD) dan Indikator Pencapaian Kompetensi (IPK) pengolahan angka spreadsheet.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Struktur Akademik Terarah</div>
            <div class="feature-card-text">Rincian kompetensi aspek pengetahuan (KD 3.1) dan aspek keterampilan (KD 4.1) dalam format kartu teratur.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Indikator Terukur Konkret</div>
            <div class="feature-card-text">Daftar target capaian belajar mulai dari pemahaman fungsi barisan sel hingga formula logika bertingkat.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Tipografi Hierarkis Poppins</div>
            <div class="feature-card-text">Pemisahan bobot font teks yang jelas dengan badge penanda status untuk memudahkan penelaahan materi.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">KD 3.1</div>
            <div class="metric-lbl">Pengetahuan</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">KD 4.1</div>
            <div class="metric-lbl">Keterampilan</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Standard</div>
            <div class="metric-lbl">Kurikulum</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.kdDesktop}" class="screenshot-desktop" alt="Kompetensi Dasar Desktop">
        <img src="${images.kdMobile}" class="screenshot-mobile" alt="Kompetensi Dasar Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: kompetensi-dasar.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 5: ANTARMUKA EXCEL -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">TUTORIAL</span>
        <span class="slide-section-title">Anatomi Ribbon & Navigasi Lembar Kerja</span>
      </div>
      <div class="slide-number">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Panduan Elemen Antarmuka Ribbon</h2>
          <p class="slide-desc">Visualisasi komponen antarmuka spreadsheet: Title Bar, Quick Access Toolbar, Ribbon Tab, Formula Bar, dan Worksheet Grid.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Diagram Interaktif Berlabel</div>
            <div class="feature-card-text">Ilustrasi antarmuka Excel dengan penomoran bagian untuk mempermudah identifikasi fungsi tombol kerja.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Kartu Deskripsi Komponen</div>
            <div class="feature-card-text">Penjelasan fungsi mendalam saat kartu elemen dipilih untuk memahami kegunaan tiap ribbon bar.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Skalabilitas Gambar Vektor</div>
            <div class="feature-card-text">Diagram antarmuka tetap tajam di layar gawai siswa berkat optimasi rasio kontainer responsif.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">10+</div>
            <div class="metric-lbl">Elemen Ribbon</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Visual</div>
            <div class="metric-lbl">Diagram Mode</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Crisp</div>
            <div class="metric-lbl">Vector Guide</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.antarmukaDesktop}" class="screenshot-desktop" alt="Antarmuka Desktop">
        <img src="${images.antarmukaMobile}" class="screenshot-mobile" alt="Antarmuka Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: antarmuka.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 6: RUMUS & FORMULA -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">FORMULA</span>
        <span class="slide-section-title">Kamus Rumus & Sintaks Perhitungan</span>
      </div>
      <div class="slide-number">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kamus Rumus & Sintaks Perhitungan</h2>
          <p class="slide-desc">Pustaka fungsi esensial spreadsheet mencakup fungsi statistik (SUM, AVERAGE, MIN, MAX, COUNT) dan formula logika bersyarat IF.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Struktur Sintaks Baku Monospaced</div>
            <div class="feature-card-text">Penulisan argumen rumus dalam blok kode rapi untuk mempermudah pemahaman susunan formula matematika.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Contoh Kasus Riil Siswa</div>
            <div class="feature-card-text">Penerapan rumus pada tabel nilai ujian dan rekapitulasi penjualan toko nyata sebagai studi kasus langsung.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Pengelompokan Kategori Tab</div>
            <div class="feature-card-text">Pemisahan materi formula berdasarkan jenis fungsi aritmatika dasar, statistik, dan logika kondisional.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">SUM / AVG</div>
            <div class="metric-lbl">Statistik</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">IF LOGIC</div>
            <div class="metric-lbl">Kondisional</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Syntax</div>
            <div class="metric-lbl">Monospace Code</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.rumusDesktop}" class="screenshot-desktop" alt="Rumus Desktop">
        <img src="${images.rumusMobile}" class="screenshot-mobile" alt="Rumus Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: rumus.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 7: LATIHAN SOAL -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">PRACTICE</span>
        <span class="slide-section-title">Studi Kasus & Lembar Latihan Mandiri</span>
      </div>
      <div class="slide-number">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Latihan Mandiri & Studi Kasus</h2>
          <p class="slide-desc">Kumpulan skenario latihan pengolahan lembar kerja mandiri dengan instruksi pengerjaan terarah untuk menguji keterampilan terapan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Tabel Data Studi Kasus</div>
            <div class="feature-card-text">Dataset tabel terstruktur yang merefleksikan persoalan administrasi nilai dan rekapitulasi data nyata.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Instruksi Pengerjaan Langkah Demi Langkah</div>
            <div class="feature-card-text">Daftar petunjuk formula apa yang harus diaplikasikan pada kolom atau sel target tertentu.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Verifikasi Kunci Mandiri</div>
            <div class="feature-card-text">Panel verifikasi hasil agar siswa dapat mengonfirmasi ketepatan rumus yang telah dibuat secara independen.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Hands-on</div>
            <div class="metric-lbl">Task Flow</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Step-wise</div>
            <div class="metric-lbl">Instruction</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Self Test</div>
            <div class="metric-lbl">Verification</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.latihanDesktop}" class="screenshot-desktop" alt="Latihan Desktop">
        <img src="${images.latihanMobile}" class="screenshot-mobile" alt="Latihan Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: latihan.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 8: EVALUASI KUIS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">EVALUATION</span>
        <span class="slide-section-title">Kuis Interaktif & Mesin Penilaian</span>
      </div>
      <div class="slide-number">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kuis Interaktif & Evaluasi Otomatis</h2>
          <p class="slide-desc">Modul evaluasi 20 butir soal pilihan ganda berbasis JavaScript dengan pengacak soal, pelacak waktu pengerjaan, dan kartu radio OneUI.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Penilaian Otomatis Sisi Klien</div>
            <div class="feature-card-text">Kalkulasi skor nilai langsung di browser tanpa perlu reload halaman atau pengiriman form berat ke server.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Indikator Nomor Soal Berjalan</div>
            <div class="feature-card-text">Penanda visual nomor soal aktif dan persentase kelengkapan jawaban kuis secara realtime.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Interaksi Radio Button Kustom</div>
            <div class="feature-card-text">Desain opsi jawaban OneUI melengkung dengan feedback transisi warna hijau lembut saat dipilih.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">20 Soal</div>
            <div class="metric-lbl">Bank Soal</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-lbl">Scoring Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Timer</div>
            <div class="metric-lbl">Countdown</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.quizDesktop}" class="screenshot-desktop" alt="Quiz Desktop">
        <img src="${images.quizMobile}" class="screenshot-mobile" alt="Quiz Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Page: quiz.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 9: MODAL HASIL & ANALISIS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">RESULT MODAL</span>
        <span class="slide-section-title">Modal Skor & Rekomendasi Kelulusan</span>
      </div>
      <div class="slide-number">09 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Modal Skor & Analisis Pemahaman</h2>
          <p class="slide-desc">Dialog modal hasil kuis yang menampilkan rekapitulasi nilai akhir berskala 100, jumlah jawaban benar/salah, dan status kelulusan KKM.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Perhitungan Nilai Akhir Otomatis</div>
            <div class="feature-card-text">Kalkulasi persentase skor riil dengan badge kelulusan hijau (Lulus KKM) atau peringatan remedial.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Rincian Benar dan Salah</div>
            <div class="feature-card-text">Ringkasan akurat jumlah butir soal yang berhasil dijawab benar berbanding soal yang butuh pemahaman ulang.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Aksi Ulangi Kuis Satu-Sentuhan</div>
            <div class="feature-card-text">Tombol reset terintegrasi untuk mengulang pengerjaan kuis dari awal dalam kondisi state bersih.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">0 - 100</div>
            <div class="metric-lbl">Score Range</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Pass/Fail</div>
            <div class="metric-lbl">KKM Gauge</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">1-Click</div>
            <div class="metric-lbl">Retry Action</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.quizResultDesktop}" class="screenshot-desktop" alt="Quiz Result Desktop">
        <img src="${images.quizResultMobile}" class="screenshot-mobile" alt="Quiz Result Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Component: Modal Evaluasi Quiz</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 10: VIDEO, PUSTAKA & SPESIFIKASI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SPECIFICATION</span>
        <span class="slide-section-title">Video Pembelajaran & Kesiapan Distribusi</span>
      </div>
      <div class="slide-number">10 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Video Interaktif & Kesiapan Distribusi</h2>
          <p class="slide-desc">Integrasi pemutar video tutorial langkah Excel, dokumentasi referensi pustaka, dan performa web optimal untuk deployment sekolah.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Video Player HTML5 Terintegrasi</div>
            <div class="feature-card-text">Pemutar video responsif dengan rasio 16:9 yang memvisualisasikan praktik pengisian tabel Excel nyata.</div>
          </div>
          <div class="feature-card blue">
            <div class="feature-card-title">Daftar Pustaka Lengkap</div>
            <div class="feature-card-text">Modal bibliografi yang mencantumkan sumber buku referensi dan standar kurikulum resmi secara transparan.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Distribusi Tanpa Server (Serverless)</div>
            <div class="feature-card-text">Dapat dijalankan langsung di peramban laboratorium komputer sekolah tanpa perlu instalasi database atau server backend.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">1080p</div>
            <div class="metric-lbl">Video Stream</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Local First</div>
            <div class="metric-lbl">Deployment</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero Node</div>
            <div class="metric-lbl">Static Bundle</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.videoDesktop}" class="screenshot-desktop" alt="Video Desktop">
        <img src="${images.videoMobile}" class="screenshot-mobile" alt="Video Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Javex Platform Production Specification Document</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

async function renderPDF() {
  console.log('Menjalankan Playwright Chromium untuk render PDF Javex OneUI...');
  
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');

  const slidePdfPath = path.join(downloadsDir, 'Javex.pdf');
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    width: '297mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

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
  const contPdfPath = path.join(downloadsDir, 'Javex-Continuous.pdf');
  await page.pdf({
    path: contPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(contPdfPath);

  console.log('\nPDF Javex OneUI berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${contPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Gagal membuat PDF:', err);
  process.exit(1);
});
