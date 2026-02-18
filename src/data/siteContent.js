export const defaultProfileData = {
  nama: 'Rumah Quran Syababul Khair',
  deskripsi:
    'Tempat belajar Al-Quran dengan metode yang mudah dan menyenangkan. Membentuk generasi Qurani yang berakhlak mulia.',
  pimpinan: 'Ust. Muhammad Iqbal, S.Pd',
  sambutan: `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Alhamdulillah, segala puji bagi Allah SWT yang telah memberikan kita kesempatan untuk terus mendekat kepada-Nya melalui Al-Quran. Shalawat dan salam semoga senantiasa tercurah kepada baginda Nabi Muhammad SAW.

Rumah Quran Syababul Khair hadir dengan sebuah misi suci: membentuk generasi muda yang mencintai Al-Quran, menghafalnya, dan mengamalkannya dalam kehidupan sehari-hari. Kami percaya bahwa setiap anak memiliki potensi luar biasa untuk menjadi penghafal dan pengamal Al-Quran.

Dengan dukungan orang tua, para pengajar yang kompeten, dan lingkungan yang kondusif, InsyaAllah kita bersama-sama dapat mewujudkan generasi Qurani yang menjadi kebanggaan umat dan penyejuk hati orang tua.

Mari bergabung bersama kami dalam perjalanan mulia ini. Jadikan Al-Quran sebagai sahabat terbaik dalam kehidupan.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.`,
  visi:
    'Menjadi lembaga pendidikan Al-Quran terdepan yang melahirkan generasi Qurani, berakhlak mulia, cinta Al-Quran, dan menjadi penerang bagi umat',
  misi: [
    'Menyelenggarakan pendidikan Al-Quran dengan metode yang efektif dan menyenangkan',
    'Membina santri agar mampu membaca Al-Quran dengan baik dan benar sesuai kaidah tajwid',
    'Menumbuhkan kecintaan terhadap Al-Quran dan semangat untuk menghafalnya',
    'Membentuk karakter santri yang berakhlak mulia sesuai tuntunan Islam',
    'Menciptakan lingkungan belajar yang kondusif, nyaman, dan Islami',
    'Menyiapkan generasi muda yang siap menjadi pemimpin umat yang amanah',
  ],
  telepon: '+62 812-3456-7890',
  email: 'info@rqsyababulkhair.id',
  alamat: 'https://maps.app.goo.gl/Nup11EjQLmr9x5uh7',
  jadwal: 'Senin - Jumat: 16:00 - 18:00, Sabtu - Minggu: 08:00 - 10:00',
}

export const defaultProfileElements = [
  {
    id: 1,
    title: 'Program Lengkap',
    description: 'Tahsin, Tahfidz, Kajian akhlak, dan pembinaan adab harian.',
  },
  {
    id: 2,
    title: 'Lingkungan Islami',
    description: 'Suasana belajar hangat, terarah, dan menumbuhkan cinta Al-Quran.',
  },
  {
    id: 3,
    title: 'Pengajar Berpengalaman',
    description: 'Dibimbing ustadz dan ustadzah yang fokus pada perkembangan santri.',
  },
]

export const defaultGalleryImages = [
  {
    id: 101,
    src: '/images/galeri/rq-foto-1.jpg',
    title: 'Belajar Al-Quran Bersama',
    category: 'Kegiatan Mengaji',
    description: 'Santri belajar membaca Al-Quran dalam suasana hangat dan fokus.',
  },
  {
    id: 102,
    src: '/images/galeri/rq-foto-2.jpg',
    title: 'Majelis Pembinaan Santri',
    category: 'Kegiatan Mengaji',
    description: 'Kegiatan pembinaan keislaman bersama ustadzah dan santri putri.',
  },
  {
    id: 103,
    src: '/images/galeri/rq-foto-3.jpg',
    title: 'Kebersamaan Malam Bina Iman',
    category: 'Kegiatan Outdoor',
    description: 'Momen kebersamaan santri dan pengurus dalam kegiatan malam bina iman.',
  },
  {
    id: 104,
    src: '/images/galeri/rq-foto-4.jpg',
    title: 'Dokumentasi Kegiatan Akbar',
    category: 'Kegiatan Outdoor',
    description: 'Foto bersama peserta pada kegiatan akbar RQ Syababul Khair.',
  },
  {
    id: 1,
    src: '/images/gallery/mengaji-1.jpg',
    title: 'Kegiatan Mengaji Rutin',
    category: 'Kegiatan Mengaji',
    description: 'Santri sedang belajar mengaji dengan metode klasikal.',
  },
  {
    id: 2,
    src: '/images/gallery/wisuda-1.jpg',
    title: 'Wisuda Santri',
    category: 'Wisuda',
    description: 'Momen wisuda santri setelah menyelesaikan program pembinaan.',
  },
  {
    id: 3,
    src: '/images/gallery/lomba-1.jpg',
    title: 'Lomba Tahfidz',
    category: 'Lomba',
    description: 'Kompetisi hafalan Al-Quran antar santri.',
  },
]

const loadJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) {
      return fallback
    }

    const parsed = JSON.parse(raw)
    if (Array.isArray(fallback)) {
      return Array.isArray(parsed) ? parsed : fallback
    }

    return parsed && typeof parsed === 'object' ? { ...fallback, ...parsed } : fallback
  } catch {
    return fallback
  }
}

export const getProfileData = () => loadJson('rqProfileData', defaultProfileData)

export const saveProfileData = (value) => {
  localStorage.setItem('rqProfileData', JSON.stringify(value))
}

export const getProfileElements = () => loadJson('rqProfileElements', defaultProfileElements)

export const saveProfileElements = (value) => {
  localStorage.setItem('rqProfileElements', JSON.stringify(value))
}
