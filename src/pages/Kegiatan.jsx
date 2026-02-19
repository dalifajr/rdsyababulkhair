import { Calendar, Clock, Users, BookOpen, Star, Award } from 'lucide-react'
import { defaultGalleryImages } from '../data/siteContent'

const Kegiatan = () => {
  const dailyActivities = [
    { time: '16:00 - 16:30', activity: 'Pembukaan & Doa', description: "Pembacaan doa belajar dan muroja'ah hafalan bersama" },
    { time: '16:30 - 17:30', activity: 'Tahsin / Tahfidz', description: 'Pembelajaran membaca Al-Quran dengan tajwid atau menghafal' },
    { time: '17:30 - 18:00', activity: 'Kajian Singkat & Penutup', description: 'Pembelajaran singkat tentang akhlak atau siroh kemudian doa penutup' }
  ]

  const programs = [
    { title: 'Program Tahsin Al-Quran', description: 'Program pembelajaran membaca Al-Quran dengan tajwid yang benar.', icon: BookOpen, level: 'Semua Usia', duration: '6 Bulan', accent: 'var(--md-primary)', onAccent: 'var(--md-on-primary)' },
    { title: 'Program Tahfidz', description: 'Program menghafal Al-Quran mulai dari Juz 30 hingga seluruh mushaf.', icon: Star, level: 'Usia 7+', duration: 'Berkelanjutan', accent: 'var(--md-tertiary)', onAccent: 'var(--md-on-tertiary)' },
    { title: 'Kajian Keislaman', description: 'Pembelajaran dasar-dasar aqidah, fiqih ibadah, dan siroh nabawiyah.', icon: Users, level: 'Semua Usia', duration: 'Berkelanjutan', accent: 'var(--md-secondary)', onAccent: 'var(--md-on-secondary)' },
    { title: 'Kelas Iqro', description: 'Program khusus untuk anak-anak yang baru memulai belajar huruf hijaiyah.', icon: Award, level: 'Usia 4-7', duration: '3-6 Bulan', accent: 'var(--md-primary)', onAccent: 'var(--md-on-primary)' }
  ]

  const weeklySchedule = [
    { day: 'Senin', activities: ['Tahsin Kelompok A', 'Tahfidz Juz 30'] },
    { day: 'Selasa', activities: ['Tahsin Kelompok B', 'Kajian Fiqih'] },
    { day: 'Rabu', activities: ['Tahsin Kelompok A', 'Tahfidz Juz 30'] },
    { day: 'Kamis', activities: ['Tahsin Kelompok B', 'Kajian Aqidah'] },
    { day: "Jumat", activities: ["Muroja'ah Bersama", 'Siroh Nabawiyah'] },
    { day: 'Sabtu', activities: ['Tahfidz Intensif', 'Praktek Ibadah'] },
    { day: 'Minggu', activities: ['Evaluasi Mingguan', 'Kegiatan Outdoor'] }
  ]

  const specialEvents = [
    { title: 'Wisuda Santri', description: 'Acara tahunan untuk meluluskan santri yang telah menyelesaikan program', month: 'Juni' },
    { title: 'Pesantren Kilat', description: 'Program intensif selama bulan Ramadhan', month: 'Ramadhan' },
    { title: 'Lomba Tahfidz', description: 'Kompetisi hafalan Al-Quran antar santri', month: 'Agustus' },
    { title: 'Rihlah / Outing', description: 'Kegiatan rekreasi edukatif untuk santri', month: 'Desember' }
  ]

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kegiatan Kami</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Berbagai program dan kegiatan untuk membentuk generasi Qurani yang berakhlak mulia</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Program Pembelajaran</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Program unggulan untuk memenuhi kebutuhan belajar Al-Quran</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div key={index} className="m3-card-elevated overflow-hidden transition-all duration-300">
                  <div className="p-6" style={{ background: program.accent, color: program.onAccent }}>
                    <Icon size={36} className="mb-3" />
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-6" style={{ color: 'var(--md-on-surface-variant)' }}>{program.description}</p>
                    <div className="flex gap-3">
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: 'var(--md-surface-container-highest)', color: 'var(--md-on-surface-variant)' }}>{program.level}</span>
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: 'var(--md-surface-container-highest)', color: 'var(--md-on-surface-variant)' }}>{program.duration}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Jadwal Harian</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Kegiatan rutin setiap hari</p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: 'var(--md-outline-variant)' }}></div>
            <div className="space-y-8">
              {dailyActivities.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    <Clock size={24} />
                  </div>
                  <div className="m3-card-elevated p-6 flex-1">
                    <div className="font-medium mb-1" style={{ color: 'var(--md-primary)' }}>{item.time}</div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--md-on-surface)' }}>{item.activity}</h3>
                    <p style={{ color: 'var(--md-on-surface-variant)' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Jadwal Mingguan</h2>
          </div>
          <div className="overflow-x-auto rounded-xl" style={{ background: 'var(--md-surface-container-lowest)' }}>
            <table className="w-full min-w-max">
              <thead>
                <tr style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                  <th className="px-6 py-4 text-left rounded-tl-xl">Hari</th>
                  <th className="px-6 py-4 text-left">Sore (16:00-18:00)</th>
                  <th className="px-6 py-4 text-left rounded-tr-xl">Malam (19:00-20:00)</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((item, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'var(--md-surface-container-lowest)' : 'var(--md-surface-container-low)' }}>
                    <td className="px-6 py-4 font-medium" style={{ color: 'var(--md-on-surface)' }}>{item.day}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--md-on-surface-variant)' }}>{item.activities[0]}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--md-on-surface-variant)' }}>{item.activities[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kegiatan Tahunan</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-85">Event spesial yang diadakan sepanjang tahun</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialEvents.map((event, index) => (
              <div key={index} className="rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>{event.month}</div>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm opacity-85">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Gallery */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Dokumentasi Kegiatan</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {defaultGalleryImages.slice(0, 4).map((img) => (
              <div key={img.id} className="m3-card-elevated overflow-hidden">
                <img src={img.src} alt={img.title} className="w-full h-40 object-cover" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kegiatan
