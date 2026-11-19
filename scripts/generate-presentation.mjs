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

console.log('Memproses screenshot Javex...');

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

console.log('Menyusun HTML dokumen presentasi Javex...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Javex - Platform Pembelajaran Interaktif Microsoft Excel</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --oneui-blue: #0072DE;
      --oneui-blue-light: #EBF3FC;
      --oneui-blue-dark: #0056B3;
      --oneui-teal: #00A389;
      --oneui-indigo: #4A4DE6;
      --oneui-amber: #F2994A;
      --oneui-bg: #F8FAFC;
      --oneui-card: #FFFFFF;
      --oneui-border: #E2E8F0;
      --oneui-text-main: #0F172A;
      --oneui-text-muted: #64748B;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #EEF2F6;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--oneui-text-main);
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
      background-image: 
        radial-gradient(circle at 100% 0%, rgba(0, 114, 222, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 0% 100%, rgba(0, 163, 137, 0.04) 0%, transparent 40%);
    }

    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--oneui-blue), var(--oneui-indigo), var(--oneui-teal));
      z-index: 50;
    }

    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--oneui-border);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: var(--oneui-blue-light);
      border: 1px solid rgba(0, 114, 222, 0.3);
      color: var(--oneui-blue);
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 6px;
    }

    .slide-section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--oneui-text-muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .slide-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--oneui-blue);
    }

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

    .slide-title {
      font-size: 24px;
      font-weight: 800;
      line-height: 1.2;
      color: var(--oneui-text-main);
      letter-spacing: -0.02em;
    }

    .slide-desc {
      font-size: 12.5px;
      color: var(--oneui-text-muted);
      line-height: 1.55;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .feature-card {
      background: var(--oneui-card);
      border: 1px solid var(--oneui-border);
      border-radius: 8px;
      padding: 10px 14px;
      border-left: 3px solid var(--oneui-blue);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    }

    .feature-card.teal {
      border-left-color: var(--oneui-teal);
    }

    .feature-card.indigo {
      border-left-color: var(--oneui-indigo);
    }

    .feature-card.amber {
      border-left-color: var(--oneui-amber);
    }

    .feature-card-title {
      font-size: 12.5px;
      font-weight: 700;
      color: var(--oneui-text-main);
      margin-bottom: 3px;
      letter-spacing: -0.01em;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--oneui-text-muted);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--oneui-card);
      border: 1px solid var(--oneui-border);
      border-radius: 6px;
      padding: 8px 10px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    }

    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      font-weight: 800;
      color: var(--oneui-blue);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--oneui-text-muted);
      margin-top: 2px;
    }

    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0, 40, 100, 0.16));
    }

    .screenshot-mobile {
      position: absolute;
      right: 0px;
      bottom: -8px;
      max-height: 280px;
      max-width: 28%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 16px 32px rgba(0, 40, 100, 0.22));
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      border-top: 1px solid var(--oneui-border);
      padding-top: 3mm;
    }

    .footer-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--oneui-text-muted);
    }

    .footer-url {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--oneui-blue);
    }

    /* Cover Styling */
    .cover-body {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 30px;
      align-items: center;
      flex: 1;
      min-height: 0;
    }

    .cover-tagline {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: var(--oneui-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-size: 38px;
      font-weight: 900;
      color: var(--oneui-text-main);
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 14px;
    }

    .cover-desc {
      font-size: 13.5px;
      color: var(--oneui-text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .spec-card {
      background: var(--oneui-card);
      border: 1px solid var(--oneui-border);
      border-radius: 8px;
      padding: 10px 14px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    }

    .spec-k {
      font-size: 9px;
      font-weight: 700;
      color: var(--oneui-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .spec-v {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: var(--oneui-text-main);
      margin-top: 2px;
    }

    /* Overview Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
      min-height: 0;
      margin-top: 10px;
    }

    .arch-card {
      background: var(--oneui-card);
      border: 1px solid var(--oneui-border);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
    }

    .arch-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--oneui-text-main);
      border-bottom: 1px solid var(--oneui-border);
      padding-bottom: 8px;
    }

    .arch-item {
      font-size: 11px;
      color: var(--oneui-text-muted);
      line-height: 1.5;
    }

    .arch-item strong {
      color: var(--oneui-text-main);
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">E-LEARNING WEB</span>
        <span class="slide-section-title">Dokumentasi Rekayasa Perangkat Lunak</span>
      </div>
      <div class="slide-number">01 / 10</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-tagline">OneUI Design Language & Multimedia Web</div>
        <h1 class="cover-title">Javex Media Pembelajaran Microsoft Excel</h1>
        <p class="cover-desc">
          Aplikasi media pembelajaran interaktif berbasis web dengan implementasi antarmuka modern Samsung OneUI, dilengkapi modul kompetensi, panduan rumus komprehensif, video pembelajaran terintegrasi, dan kuis evaluasi mandiri.
        </p>

        <div class="cover-specs">
          <div class="spec-card">
            <div class="spec-k">UI Framework</div>
            <div class="spec-v">Bootstrap 5.3 & Custom CSS</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Design Language</div>
            <div class="spec-v">Samsung OneUI Aesthetics</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Core Logic</div>
            <div class="spec-v">Vanilla JavaScript ES6+</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Multimedia Integration</div>
            <div class="spec-v">HTML5 Audio & Video Embed</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Javex Homepage">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Bootstrap 5 + OneUI Design + Vanilla JS + HTML5 Multimedia</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 2: ARSITEKTUR & DESAIN -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ARCHITECTURE</span>
        <span class="slide-section-title">Fondasi Sistem & Struktur Antarmuka</span>
      </div>
      <div class="slide-number">02 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Arsitektur Modular & Pengalaman Pengguna</h2>
      <p class="slide-desc">Desain antarmuka yang mengadaptasi prinsip OneUI untuk interaksi yang ergonomis, ramah navigasi satu tangan di mobile, serta keterbacaan tinggi di desktop.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--oneui-blue);">Struktur View & Layout</div>
        <div class="arch-item"><strong>Sistem Grid Bootstrap 5:</strong> Layout 12-kolom yang sepenuhnya responsif dari layar smartphone hingga monitor desktop.</div>
        <div class="arch-item"><strong>Komponen OneUI:</strong> Kartu sudut melengkung, badge warna tematik, dan tipografi hierarkis untuk memandu fokus pengguna.</div>
        <div class="arch-item"><strong>Navigasi Bawah Mobile:</strong> Bottom navigation bar yang memudahkan transisi antar materi utama pada perangkat sentuh.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--oneui-indigo);">Manajemen Logika & State</div>
        <div class="arch-item"><strong>Modular Vanilla JavaScript:</strong> Pengelolaan event DOM, filter tabel, kalkulasi skor kuis, dan navigasi tab tanpa dependensi berat.</div>
        <div class="arch-item"><strong>Audio Narration Controller:</strong> Fitur kontrol latar audio ambient untuk meningkatkan pengalaman interaktif pengguna.</div>
        <div class="arch-item"><strong>Penyimpanan Progres Sesi:</strong> Pelacakan riwayat kuis dan status latihan selama sesi pembelajaran berlangsung.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--oneui-teal);">Aksesibilitas & Multimedia</div>
        <div class="arch-item"><strong>Aksesibilitas Modal Dialog:</strong> Penggunaan modal interaktif untuk daftar pustaka, hasil kuis, dan petunjuk penggunaan.</div>
        <div class="arch-item"><strong>Penyajian Multimedia Responsif:</strong> Pemutar video terintegrasi dengan wrapper rasio aspek 16:9 yang stabil.</div>
        <div class="arch-item"><strong>Performa Ringan:</strong> Ukuran bundle minimal yang memastikan pemuatan halaman cepat bahkan pada koneksi terbatas.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Javex Architecture Blueprint</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 3: BERANDA -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">HOMEPAGE</span>
        <span class="slide-section-title">Portal Beranda & Menu Pembelajaran</span>
      </div>
      <div class="slide-number">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Portal Beranda & Akses Navigasi</h2>
          <p class="slide-desc">Pintu masuk utama media pembelajaran dengan tata letak menu terpusat, kontrol audio latar, dan kartu ringkasan topik materi.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Grid Menu Terstruktur</div>
            <div class="feature-card-text">Kartu akses langsung ke Kompetensi, Antarmuka, Rumus, Latihan, Video, dan Kuis dengan visual ikonik.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Kontrol Narasi & Audio Latar</div>
            <div class="feature-card-text">Tombol toggle pemutar audio ambient yang dapat dihidupkan atau dimatikan sewaktu-waktu oleh pengguna.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Pengalaman OneUI Adaptif</div>
            <div class="feature-card-text">Penataan visual bersih dengan warna latar lembut yang meminimalkan kelelahan mata pengguna.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Fast</div>
            <div class="metric-lbl">First Paint</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Responsive</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero Bug</div>
            <div class="metric-lbl">Layout Flow</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Beranda Desktop">
        <img src="${images.berandaMobile}" class="screenshot-mobile" alt="Beranda Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Template: index.html</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-javex-template</span>
    </div>
  </section>

  <!-- SLIDE 4: KOMPETENSI DASAR -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">CURRICULUM</span>
        <span class="slide-section-title">Standar Kompetensi & Indikator</span>
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
            <div class="feature-card-title">Struktur Capaian Akademik</div>
            <div class="feature-card-text">Rincian kompetensi aspek pengetahuan (3.1) dan aspek keterampilan (4.1) dalam format tabel yang mudah dipahami.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Indikator Terukur</div>
            <div class="feature-card-text">Daftar target capaian belajar konkret mulai dari identifikasi formula hingga manipulasi sel data.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Tipografi Hierarkis</div>
            <div class="feature-card-text">Gaya teks yang terstruktur dengan badge penanda status untuk memudahkan penelaahan kurikulum.</div>
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
        <span class="slide-section-title">Anatomi Antarmuka Microsoft Excel</span>
      </div>
      <div class="slide-number">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Panduan Elemen Antarmuka Ribbon</h2>
          <p class="slide-desc">Visualisasi komponen antarmuka aplikasi spreadsheet seperti Title Bar, Quick Access, Ribbon Tab, Formula Bar, dan Worksheet Area.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Identifikasi Komponen Visual</div>
            <div class="feature-card-text">Diagram antarmuka berlabel yang menerangkan fungsi masing-masing elemen pada jendela lembar kerja Excel.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Interaksi Kartu Deskripsi</div>
            <div class="feature-card-text">Penjelasan fungsi lengkap saat setiap kartu elemen dipilih untuk memperjelas kegunaan masing-masing bar.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Adaptasi Visual Mobile</div>
            <div class="feature-card-text">Penskalaan gambar diagram yang tajam dan responsif pada berbagai ukuran layar gawai siswa.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">10+</div>
            <div class="metric-lbl">Elemen Ribbon</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Crisp</div>
            <div class="metric-lbl">Vector Diagram</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Step-wise</div>
            <div class="metric-lbl">Visual Guide</div>
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
        <span class="slide-section-title">Katalog Rumus & Sintaks Perhitungan</span>
      </div>
      <div class="slide-number">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kamus Rumus & Sintaks Perhitungan</h2>
          <p class="slide-desc">Pustaka fungsi esensial spreadsheet mencakup formula matematika, statistik dasar (SUM, AVERAGE, MIN, MAX), serta fungsi logika IF.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Struktur Sintaks Baku</div>
            <div class="feature-card-text">Penulisan struktur argumen formula yang disajikan dalam blok kode rapi untuk mempermudah pemahaman logika fungsi.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Contoh Kasus Riil</div>
            <div class="feature-card-text">Ilustrasi penerapan rumus pada tabel nilai siswa dan rekapitulasi data penjualan nyata.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Tab Pengelompokan Kategori</div>
            <div class="feature-card-text">Pemisahan materi formula berdasarkan kategori fungsi statistik, aritmatika, dan fungsi kondisi.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">SUM/AVG</div>
            <div class="metric-lbl">Statistik</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">IF/LOGIC</div>
            <div class="metric-lbl">Kondisional</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Code View</div>
            <div class="metric-lbl">Syntax Style</div>
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
        <span class="slide-section-title">Studi Kasus & Lembar Latihan</span>
      </div>
      <div class="slide-number">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Latihan Mandiri & Studi Kasus</h2>
          <p class="slide-desc">Kumpulan skenario latihan mandiri pengolahan data dengan panduan pengerjaan langkah demi langkah untuk menguji keterampilan terapan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Tabel Data Studi Kasus</div>
            <div class="feature-card-text">Penyajian dataset tabel terstruktur yang merefleksikan persoalan bisnis dan administrasi sehari-hari.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Instruksi Langkah Pengerjaan</div>
            <div class="feature-card-text">Daftar tugas yang jelas mengenai rumus apa yang harus diaplikasikan pada kolom atau sel target tertentu.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Kunci Verifikasi Mandiri</div>
            <div class="feature-card-text">Panel verifikasi hasil untuk memungkinkan siswa memeriksa ketepatan formula yang telah dibuat.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Hands-on</div>
            <div class="metric-lbl">Task Flow</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Real Case</div>
            <div class="metric-lbl">Dataset Type</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Step Guide</div>
            <div class="metric-lbl">Instruction</div>
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

  <!-- SLIDE 8: QUIZ EVALUASI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ASSESSMENT</span>
        <span class="slide-section-title">Evaluasi Kuis & Uji Pemahaman</span>
      </div>
      <div class="slide-number">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Kuis Interaktif & Mesin Evaluasi</h2>
          <p class="slide-desc">Modul evaluasi pilihan ganda berbasis JavaScript dengan pengacak soal, pelacak waktu pengerjaan, dan kartu pertanyaan adaptif.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Logika Penilaian Otomatis</div>
            <div class="feature-card-text">Kalkulasi skor secara otomatis di sisi klien dengan verifikasi opsi jawaban tanpa muat ulang halaman.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Penunjuk Progres Soal</div>
            <div class="feature-card-text">Indikator visual nomor soal aktif dan persentase kelengkapan jawaban kuis secara realtime.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Pengalaman Interaksi Bersih</div>
            <div class="feature-card-text">Desain radio button kustom ala OneUI dengan efek transisi halus saat siswa menentukan pilihan.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">20 Soal</div>
            <div class="metric-lbl">Bank Kuis</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-lbl">Client Eval</div>
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

  <!-- SLIDE 9: HASIL QUIZ & MODAL -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">RESULT</span>
        <span class="slide-section-title">Modal Skor & Analisis Jawaban</span>
      </div>
      <div class="slide-number">09 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Modal Analisis Hasil & Rekomendasi</h2>
          <p class="slide-desc">Dialog modal yang menyajikan rekapitulasi perolehan nilai, jumlah jawaban benar/salah, serta rekomendasi kelulusan materi.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kalkulasi Skor Persentase</div>
            <div class="feature-card-text">Perhitungan nilai akhir berskala 100 dengan indikator visual status kelulusan KKM kurikulum.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Rincian Benar dan Salah</div>
            <div class="feature-card-text">Ringkasan akurat jumlah butir soal yang dijawab dengan benar berbanding soal yang membutuhkan evaluasi ulang.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Aksi Ulangi Kuis Cepat</div>
            <div class="feature-card-text">Tombol reset terintegrasi untuk mengulang latihan soal dari awal dengan status bersih.</div>
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
            <div class="metric-val">One-Click</div>
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
        <span class="brand-badge">MULTIMEDIA & SPECS</span>
        <span class="slide-section-title">Video Pembelajaran & Kesiapan Produksi</span>
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
            <div class="feature-card-title">Video Player Tersemat</div>
            <div class="feature-card-text">Pemutar video HTML5 responsif yang menyajikan tutorial visual tata cara penulisan rumus kompleks.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Daftar Pustaka Lengkap</div>
            <div class="feature-card-text">Modal bibliografi yang mencantumkan sumber buku referensi dan standar kurikulum resmi secara transparan.</div>
          </div>
          <div class="feature-card indigo">
            <div class="feature-card-title">Operasi Mandiri Offline-Ready</div>
            <div class="feature-card-text">Dapat dijalankan langsung di browser lokal laboratorium komputer sekolah tanpa perlu koneksi internet aktif.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">1080p</div>
            <div class="metric-lbl">Video Stream</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Local-First</div>
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
      <span class="footer-tech">Page: video.html & pustaka modal</span>
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
  console.log('Menjalankan Playwright Chromium untuk render PDF Javex...');
  
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
        background-color: #F8FAFC !important;
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

  console.log('\nPDF Javex berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${contPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Gagal membuat PDF:', err);
  process.exit(1);
});
