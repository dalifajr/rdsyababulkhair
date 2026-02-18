# Rumah Quran Syababul Khair

<p align="center">
  <img src="public/logo.svg" width="150" alt="Logo Rumah Quran Syababul Khair">
</p>

Website resmi Rumah Quran Syababul Khair - Tempat belajar Al-Quran dengan metode yang mudah dan menyenangkan.

## 🚀 Teknologi

- **Frontend**: React 19 + Vite 7
- **Styling**: TailwindCSS v4
- **Icons**: Lucide React
- **Backend**: Laravel (API)
- **Database**: MySQL (Aiven Cloud)
- **Deployment**: Vercel

## ✨ Fitur

### Public Pages
- ✅ Beranda dengan hero section dan statistik
- ✅ Profil & Sambutan Pimpinan (Ust. Muhammad Iqbal, S.Pd)
- ✅ Visi & Misi
- ✅ Kegiatan dan Program Pembelajaran
- ✅ Galeri Foto dengan Lightbox
- ✅ Berita & Informasi
- ✅ Pendaftaran Santri Online
- ✅ Tentang Kami
- ✅ Halaman Kontak

### Admin Panel
- ✅ Login Autentikasi
- ✅ Dashboard dengan Statistik
- ✅ Kelola Berita (CRUD)
- ✅ Kelola Galeri (Upload/Delete)
- ✅ Edit Profil Website
- ✅ Manajemen Pendaftaran Santri

## 📦 Instalasi

### Prerequisites
- Node.js 18+
- npm atau yarn

### Setup
```bash
# Clone repository
git clone https://github.com/dalifajr/rdsyababulkhair.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🗄️ Konfigurasi Database

Untuk koneksi ke Aiven MySQL, set environment variables:

```env
DB_CONNECTION=mysql
DB_HOST=rqsyababulkhair-dzulfikrialifajri-d36a.i.aivencloud.com
DB_PORT=27776
DB_DATABASE=defaultdb
DB_USERNAME=avnadmin
DB_PASSWORD=your_password
MYSQL_ATTR_SSL_CA=storage/certs/ca.pem
```

Download file `ca.pem` dari Aiven Console dan simpan di `storage/certs/ca.pem`.

## 🌐 Deploy ke Vercel

1. Push code ke GitHub repository
2. Connect repository di Vercel
3. Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json`
4. Set environment variables di Vercel dashboard
5. Deploy!

### Troubleshooting Redeploy (Penting)

Jika tampilan terbaru belum muncul saat redeploy:

1. Pastikan Project Root Directory di Vercel = `/` (root repository).
2. Pastikan Build Command terbaca: `npm run vercel-build`.
3. Pastikan Output Directory = `dist`.
4. Gunakan tombol **Redeploy** lalu centang **Use existing Build Cache: OFF** (clear cache).
5. Cek log build harus memuat baris `vite build` dan `dist/assets/...`.

Catatan: foto custom untuk latar/galeri harus ada di folder `static/images` sesuai panduan di `static/images/README.md`.

## 🔐 Demo Login Admin

- **Email**: admin@rqsyababulkhair.id
- **Password**: admin123

## 📍 Lokasi

[Google Maps](https://maps.app.goo.gl/Nup11EjQLmr9x5uh7)

## 📞 Kontak

- 📱 +62 812-3456-7890
- 📧 info@rqsyababulkhair.id

## 📄 License

MIT License - Rumah Quran Syababul Khair © 2024
