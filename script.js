/**
 * the zwei Brüder — Clean & Mobile-Friendly Interactive Engine
 * Featuring Web, Cloud, AI Models & Annotation, and Hardware Services
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. Mobile Drawer Navigation
  // ===================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-footer a');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // ===================================================================
  // 2. Hero Showcase Tabs & Interactive AI / Deploy Simulations
  // ===================================================================
  const scTabs = document.querySelectorAll('.sc-tab');
  const scContents = document.querySelectorAll('.showcase-content');

  scTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      scTabs.forEach((t) => t.classList.remove('active'));
      scContents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(`tab-${target}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // AI Training Simulation Demo
  const btnTestAi = document.getElementById('btnTestAi');
  const aiFeedback = document.getElementById('aiFeedback');

  if (btnTestAi && aiFeedback) {
    let isTraining = false;
    btnTestAi.addEventListener('click', () => {
      if (isTraining) return;
      isTraining = true;
      btnTestAi.disabled = true;

      aiFeedback.textContent = 'Memuat dataset anotasi & inisialisasi GPU...';
      aiFeedback.style.color = '#f59e0b';

      setTimeout(() => {
        aiFeedback.textContent = 'Epoch 1/5 &bull; Batch loss: 0.482 &bull; Validating...';
      }, 700);

      setTimeout(() => {
        aiFeedback.textContent = 'Epoch 5/5 &bull; Batch loss: 0.019 &bull; Akurasi: 99.4%';
      }, 1400);

      setTimeout(() => {
        aiFeedback.textContent = '✓ Model selesai di-training! REST API siap integrasi.';
        aiFeedback.style.color = '#10b981';
        isTraining = false;
        btnTestAi.disabled = false;
      }, 2100);
    });
  }

  // ===================================================================
  // 3. Project Estimator / Kalkulator Biaya (Including AI Services)
  // ===================================================================
  const estimatorData = {
    ai: {
      starter: {
        title: 'Anotasi Data Awal & Prototipe AI (Starter)',
        price: 'Mulai Rp 2.500.000',
        desc: 'Anotasi dataset gambar/teks hingga 1.000 sampel berkualitas tinggi dengan verifikasi 2 lapis, atau pembuatan prototipe model AI sederhana.',
        items: [
          'Anotasi akurat (Bounding Box / Klasifikasi Teks / NLP)',
          'Quality Control verifikasi akurasi 99%+',
          'Export format standar (YOLO, COCO, JSON, CSV)',
          'Laporan metrik data & panduan training'
        ]
      },
      pro: {
        title: 'Model AI Kustom & Training Dataset (Pro)',
        price: 'Mulai Rp 7.500.000',
        desc: 'Pembuatan model AI kustom (Computer Vision, Fine-Tuning LLM, atau Predictive Model) lengkap dengan training data puluhan ribu item.',
        items: [
          'Anotasi dataset masif hingga 10.000+ data',
          'Fine-tuning model pada GPU Cloud berkecepatan tinggi',
          'Optimasi model (Quantization & low latency response)',
          'Deploy model ke REST API terproteksi siap pakai'
        ]
      },
      custom: {
        title: 'Full Enterprise AI & Data Pipeline (Custom)',
        price: 'Mulai Rp 15.000.000',
        desc: 'Pipeline kecerdasan buatan terpadu untuk industri: anotasi berkelanjutan, continuous retraining, dan integrasi software kantor komprehensif.',
        items: [
          'Pipeline anotasi data berkelanjutan (Active Learning)',
          'Custom proprietary model sesuai kerahasiaan data kantor',
          'Inference server dedicated dengan SLA respon cepat',
          'Dokumentasi teknis, pelatihan tim & maintenance model'
        ]
      }
    },
    web: {
      starter: {
        title: 'Website Modern (Starter)',
        price: 'Mulai Rp 1.500.000',
        desc: 'Landing page responsif dan cepat, sangat cocok untuk profil perusahaan atau promosi produk dengan formulir WhatsApp langsung.',
        items: [
          'Desain rapi, modern & 100% mobile-friendly',
          'Deploy instan di Vercel + custom domain & SSL gratis',
          'Tombol WhatsApp & integrasi kontak langsung',
          'Optimasi kecepatan & SEO Google dasar'
        ]
      },
      pro: {
        title: 'Aplikasi Web / Katalog Dinamis (Pro)',
        price: 'Mulai Rp 4.500.000',
        desc: 'Website interaktif dengan panel admin (CMS) untuk update konten mandiri atau katalog produk dengan filter pencarian.',
        items: [
          'Arsitektur React / Next.js berkecepatan tinggi',
          'Panel admin mudah untuk kelola berita / produk',
          'Integrasi payment gateway atau order via WhatsApp',
          'Keamanan data & SSL tingkat lanjut'
        ]
      },
      custom: {
        title: 'Custom Web Platform (Custom)',
        price: 'Mulai Rp 9.000.000',
        desc: 'Sistem aplikasi web kustom untuk kebutuhan operasional kantor khusus, dashboard analitik, dan multi-user.',
        items: [
          'Full-custom sistem sesuai alur bisnis Anda',
          'Manajemen hak akses role (Admin, Staf, Klien)',
          'Arsitektur database aman & scalable',
          'Dokumentasi teknis & garansi sistem'
        ]
      }
    },
    deploy: {
      starter: {
        title: 'Setup Cloud & Deployment Vercel (Starter)',
        price: 'Mulai Rp 800.000',
        desc: 'Solusi cepat untuk memindahkan website Anda ke Vercel agar online stabil dan bebas pusing.',
        items: [
          'Deployment otomatis dari GitHub ke Vercel',
          'Setting DNS domain (.com, .id, dll) & Cloudflare',
          'Aktivasi SSL gratis (HTTPS gembok hijau)',
          'Bebas biaya sewa server untuk traffic awal'
        ]
      },
      pro: {
        title: 'Automasi CI/CD & Cloud VPS (Pro)',
        price: 'Mulai Rp 2.500.000',
        desc: 'Otomatisasi build server, Docker containerization, dan backup database otomatis.',
        items: [
          'Setup pipeline GitHub Actions otomatis',
          'Konfigurasi VPS Linux, Docker & Nginx reverse proxy',
          'Backup database harian otomatis ke cloud',
          'Monitoring uptime 24/7 & notifikasi kendala'
        ]
      },
      custom: {
        title: 'Cloud High-Availability (Custom)',
        price: 'Mulai Rp 5.500.000',
        desc: 'Arsitektur multi-server dengan load balancer untuk menangani lonjakan pengunjung besar tanpa down.',
        items: [
          'Cluster server & failover otomatis',
          'Proteksi DDoS tingkat lanjut',
          'Strategi zero-downtime deployment',
          'Dukungan prioritas darurat 24/7'
        ]
      }
    },
    hardware: {
      starter: {
        title: 'Setup PC & Wi-Fi Kantor (Starter)',
        price: 'Mulai Rp 1.200.000',
        desc: 'Perakitan / setup komputer kantor karyawan, printer sharing bersama, dan optimasi Wi-Fi.',
        items: [
          'Setup & instalasi 3-5 unit PC / laptop kantor',
          'Setting printer sharing dalam satu jaringan',
          'Optimasi router Wi-Fi kantor',
          'Garansi pengerjaan & pengujian on-site'
        ]
      },
      pro: {
        title: 'Instalasi LAN & Router Mikrotik (Pro)',
        price: 'Mulai Rp 3.500.000',
        desc: 'Pemasangan kabel LAN rapi, switch gigabit, dan setting router Mikrotik untuk pembagian kuota internet stabil.',
        items: [
          'Penataan kabel LAN Cat6 rapi & terstruktur',
          'Konfigurasi Mikrotik RouterOS (Load balancing / Anti ngelag)',
          'Pemisahan Wi-Fi tamu dan staf kantor (VLAN)',
          'Setup NAS (Penyimpanan bersama file kantor)'
        ]
      },
      custom: {
        title: 'Server Rack & GPU Rig AI (Custom)',
        price: 'Mulai Rp 8.500.000',
        desc: 'Pengadaan workstation GPU untuk training model AI lokal, rack server fisik, UPS, dan maintenance rutin.',
        items: [
          'Perakitan workstation GPU performa tinggi untuk AI',
          'Setup virtualisasi server kantor (Proxmox / VMware)',
          'Backup berkala fisik & pencegahan kerusakan dini',
          'Kunjungan maintenance rutin berkala on-site'
        ]
      }
    },
    paket: {
      starter: {
        title: 'Paket Digital Launch (Web + Vercel + PC)',
        price: 'Mulai Rp 3.200.000',
        desc: 'Paket hemat peluncuran bisnis: Website Landing Page + Vercel Hosting + Setup Komputer & Wi-Fi kantor.',
        items: [
          'Website profil landing page siap pakai',
          'Domain kustom, SSL & Vercel hosting gratis',
          'Setup perangkat PC kerja & Wi-Fi kantor',
          'Hemat hingga 20% dibanding order terpisah'
        ]
      },
      pro: {
        title: 'Paket AI-Powered Business (Web + AI Model + Cloud)',
        price: 'Mulai Rp 11.500.000',
        desc: 'Solusi lengkap bisnis modern: Web app interaktif terintegrasi Model AI kustom dan DevOps pipeline cloud.',
        items: [
          'Website modern dengan integrasi API Model AI',
          'Model AI terlatih sesuai kebutuhan bisnis',
          'Automasi deployment CI/CD tanpa downtime',
          'Dukungan prioritas & garansi integrasi sistem'
        ]
      },
      custom: {
        title: 'Transformasi IT & AI Komprehensif (Custom)',
        price: 'Hubungi Kami (Konsultasi Kustom)',
        desc: 'Solusi terpadu menyeluruh: Model AI proprietary, infrastruktur server GPU lokal, web platform, dan jaringan enterprise.',
        items: [
          'Custom AI pipeline & dataset annotation masif',
          'Infrastruktur hardware server GPU lokal terintegrasi',
          'Platform software proprietary skala penuh',
          'Pendampingan teknis jangka panjang & SLA darurat'
        ]
      }
    }
  };

  let activeCat = 'ai';
  let activeScale = 'starter';

  const catButtons = document.querySelectorAll('#categoryGroup .btn-opt');
  const scaleButtons = document.querySelectorAll('#scaleGroup .btn-opt');
  const checkSupport = document.getElementById('checkSupport');
  const checkFastTrack = document.getElementById('checkFastTrack');

  const resTitle = document.getElementById('resTitle');
  const resPrice = document.getElementById('resPrice');
  const resDesc = document.getElementById('resDesc');
  const resList = document.getElementById('resList');
  const btnWhatsappEstimator = document.getElementById('btnWhatsappEstimator');

  function updateEstimator() {
    const data = estimatorData[activeCat]?.[activeScale];
    if (!data) return;

    resTitle.textContent = data.title;
    resDesc.textContent = data.desc;

    let finalPrice = data.price;
    const hasSupport = checkSupport ? checkSupport.checked : false;
    const hasFastTrack = checkFastTrack ? checkFastTrack.checked : false;

    if (activeScale !== 'custom' && activeCat !== 'paket') {
      let addonCount = 0;
      if (hasSupport) addonCount++;
      if (hasFastTrack) addonCount++;
      if (addonCount > 0) {
        finalPrice = `${data.price} (+ Tambahan Opsi)`;
      }
    }
    resPrice.textContent = finalPrice;

    resList.innerHTML = '';
    data.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      resList.appendChild(li);
    });

    if (hasSupport) {
      const li = document.createElement('li');
      li.textContent = 'Termasuk: Pemeliharaan & Retraining Model Berkala';
      li.style.color = '#38bdf8';
      resList.appendChild(li);
    }

    if (hasFastTrack) {
      const li = document.createElement('li');
      li.textContent = 'Termasuk: Pengerjaan Cepat / Fast-Track Prioritas';
      li.style.color = '#38bdf8';
      resList.appendChild(li);
    }
  }

  catButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      catButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat');
      updateEstimator();
    });
  });

  scaleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      scaleButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeScale = btn.getAttribute('data-scale');
      updateEstimator();
    });
  });

  if (checkSupport) checkSupport.addEventListener('change', updateEstimator);
  if (checkFastTrack) checkFastTrack.addEventListener('change', updateEstimator);

  // Estimator WhatsApp Dispatch
  if (btnWhatsappEstimator) {
    btnWhatsappEstimator.addEventListener('click', () => {
      const catText = document.querySelector('#categoryGroup .btn-opt.active strong')?.textContent || activeCat;
      const scaleText = document.querySelector('#scaleGroup .btn-opt.active strong')?.textContent || activeScale;
      const suppText = checkSupport?.checked ? 'Ya' : 'Tidak';
      const fastText = checkFastTrack?.checked ? 'Ya' : 'Tidak';

      const waText = `Halo the zwei Brüder,%0A%0ASaya tertarik mendiskusikan kebutuhan layanan berikut:%0A- Kategori: ${encodeURIComponent(catText)}%0A- Skala: ${encodeURIComponent(scaleText)}%0A- Maintenance / Retraining Berkala: ${suppText}%0A- Prioritas Cepat: ${fastText}%0A%0AMohon info jadwal konsultasi lebih lanjut. Terima kasih!`;
      const phone = '6281234567890';
      window.open(`https://wa.me/${phone}?text=${waText}`, '_blank');
    });
  }

  updateEstimator();

  // ===================================================================
  // 4. Contact Form WhatsApp Dispatch
  // ===================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName')?.value.trim();
      const phone = document.getElementById('inputPhone')?.value.trim();
      const email = document.getElementById('inputEmail')?.value.trim();
      const service = document.getElementById('inputService')?.value;
      const msg = document.getElementById('inputMessage')?.value.trim();

      if (!name || !phone || !email || !msg) {
        alert('Mohon lengkapi formulir terlebih dahulu.');
        return;
      }

      const formatted = `*KONSULTASI BARU — the zwei Brüder*%0A%0A` +
        `*Nama / Perusahaan:* ${encodeURIComponent(name)}%0A` +
        `*Nomor WhatsApp:* ${encodeURIComponent(phone)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Layanan:* ${encodeURIComponent(service)}%0A%0A` +
        `*Rincian Kebutuhan:*%0A${encodeURIComponent(msg)}`;

      const targetPhone = '6281234567890';
      window.open(`https://wa.me/${targetPhone}?text=${formatted}`, '_blank');
      contactForm.reset();
    });
  }

  // ===================================================================
  // 5. Lightweight Ambient Canvas
  // ===================================================================
  const canvas = document.getElementById('ambientCanvas');
  if (canvas && window.innerWidth > 600) {
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const dots = [];
    const dotCount = Math.min(Math.floor((w * h) / 32000), 35);

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.8
      });
    }

    function drawCanvas() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawCanvas);
    }
    drawCanvas();
  }

  // ===================================================================
  // 6. Mouse Glow Radial Follower (Desktop only)
  // ===================================================================
  const mouseGlow = document.getElementById('mouseGlow');
  if (mouseGlow && window.matchMedia('(pointer: fine)').matches) {
    let mx = -500, my = -500;
    let cx = mx, cy = my;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function renderGlow() {
      cx += (mx - cx) * 0.1;
      cy += (my - cy) * 0.1;
      mouseGlow.style.left = `${cx}px`;
      mouseGlow.style.top = `${cy}px`;
      requestAnimationFrame(renderGlow);
    }
    renderGlow();
  }

  // Year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
