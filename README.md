# the zwei Brüder — Official Website & Landing Page

Landing page startup teknologi **the zwei Brüder** yang modern, cepat, dan mobile-friendly.
Menyediakan solusi terpadu dalam 4 pilar utama:
1. **Solusi AI, Training Data & Anotasi Dataset**
   - Pembuatan Model AI Kustom (Computer Vision, NLP, Custom LLM, Predictive AI)
   - Training Data & Fine-Tuning Model pada GPU Cloud / On-Premise
   - Jasa Anotasi & Labeling Data Akurat (Bounding Box, Poligon, Klasifikasi Teks & Audio)
   - Integrasi REST API Model AI ke Website atau Aplikasi Bisnis
2. **Jasa Pembuatan Website Modern** (Landing Page, Web App, E-Commerce, SEO Google Ready)
3. **Support & Cloud Deployment** (Automasi Vercel Edge, GitHub Actions CI/CD, Cloudflare, VPS Linux)
4. **Hardware IT & Jaringan Kantor** (PC Workstation, GPU Training Rig, Router Mikrotik, Switch LAN, Server On-Premise)

---

## 🚀 Cara Deploy ke Vercel

### Catatan Penggunaan Vercel CLI di Windows:
Gunakan awalan `npx` jika CLI belum terpasang secara global.

#### 1. Login Akun Vercel
```bash
npx vercel login
```
*(Pilih opsi login yang diinginkan: GitHub/GitLab/Email)*

#### 2. Deploy Proyek
```bash
npx vercel
```
Ikuti panduan di layar:
- `Set up and deploy?` Ketik `y`
- `Link to existing project?` Ketik `n`
- `Project name?` Masukkan `the-zwei-bruder`
- `In which directory is your code located?` Tekan `Enter` (default `./`)

Website akan langsung aktif dengan URL seperti `https://the-zwei-bruder.vercel.app`!

Untuk deploy langsung ke production URL:
```bash
npx vercel --prod
```

---

## 📱 Kustomisasi Kontak & WhatsApp
1. Buka [script.js](file:///d:/2026%20-%20REC/Antropi%20-%20Apply/script.js).
2. Cari variabel nomor WhatsApp:
   ```javascript
   const targetPhone = '6281234567890';
   ```
   Ganti dengan nomor WhatsApp aktif perusahaan Anda (format internasional tanpa tanda `+`).
3. Buka [index.html](file:///d:/2026%20-%20REC/Antropi%20-%20Apply/index.html) dan perbarui link WhatsApp bila diperlukan.
