import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, Heart, ArrowRight, MapPin, Calendar, Star, Image as ImageIcon } from 'lucide-react'
import Logo from '../components/Logo'
import { defaultGalleryImages } from '../data/siteContent'

const GalleryPreviewCard = ({ image }) => {
  const [failed, setFailed] = useState(false)
  return (
    <div className="m3-card-elevated overflow-hidden">
      {!failed ? (
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-40 md:h-48 object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-40 md:h-48 img-fallback">
          <ImageIcon size={40} style={{ color: 'var(--md-on-surface-variant)' }} />
        </div>
      )}
    </div>
  )
}

const Home = () => {
  const features = [
    { icon: BookOpen, title: 'Tahsin Al-Quran', description: 'Belajar membaca Al-Quran dengan tajwid yang benar dan fasih' },
    { icon: Users, title: 'Pembelajaran Interaktif', description: 'Metode belajar yang menyenangkan dengan pendekatan personal' },
    { icon: Award, title: 'Guru Berpengalaman', description: 'Dibimbing oleh ustadz/ustadzah yang kompeten dan bersertifikat' },
    { icon: Heart, title: 'Pembinaan Akhlak', description: 'Tidak hanya mengaji, tapi juga membentuk karakter Islami' }
  ]

  const stats = [
    { number: '150+', label: 'Santri Aktif' },
    { number: '10+', label: 'Pengajar' },
    { number: '5+', label: 'Tahun Berdiri' },
    { number: '100%', label: 'Komitmen' }
  ]

  const activities = [
    { title: 'Mengaji Rutin Harian', description: 'Kegiatan mengaji setiap hari dengan metode klasikal dan individual', image: '📖' },
    { title: 'Hafalan Quran', description: 'Program tahfidz untuk anak-anak yang ingin menghafal Al-Quran', image: '🕌' },
    { title: 'Kajian Islami', description: 'Pembelajaran aqidah, fiqih, dan siroh nabawiyah', image: '📚' }
  ]

  return (
    <div className="overflow-hidden">
      {/* M3 Hero – Primary surface */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{ background: 'var(--md-primary)' }}
      >
        <div className="absolute inset-0 pattern-islamic"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp" style={{ color: 'var(--md-on-primary)' }}>
              {/* M3 Assist Chip style badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium"
                style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}
              >
                <Star size={16} />
                <span>Tempat Belajar Al-Quran Terbaik</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Rumah Quran<br />
                <span style={{ color: 'var(--md-primary-container)' }}>Syababul Khair</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Membentuk generasi Qurani yang cinta Al-Quran, berakhlak mulia,
                dan menjadi kebanggaan umat. Mari bergabung bersama kami!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/pendaftaran"
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg"
                  style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}
                >
                  Daftar Sekarang
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/tentang"
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-full text-base font-medium transition-all duration-200 border-2"
                  style={{ borderColor: 'var(--md-on-primary)', color: 'var(--md-on-primary)' }}
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-fadeInUp">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-20 scale-110"
                  style={{ background: 'var(--md-primary-container)' }}
                ></div>
                <Logo size={350} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
        {/* Smooth wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--md-surface)" />
          </svg>
        </div>
      </section>

      {/* Gallery Preview Strip */}
      <section className="py-12" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {defaultGalleryImages.slice(0, 4).map((image) => (
              <GalleryPreviewCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats – M3 Filled Cards */}
      <section className="py-16" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl transition-shadow hover:shadow-md"
                style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features – M3 Elevated Cards */}
      <section className="py-20" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>
              Mengapa Memilih <span style={{ color: 'var(--md-primary)' }}>Rumah Quran?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>
              Kami berkomitmen memberikan pendidikan Al-Quran terbaik dengan metode yang tepat dan lingkungan yang kondusif
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="m3-card-elevated p-6 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--md-on-surface)' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Welcome Message – M3 Card layout */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl p-8 md:p-12" style={{ background: 'var(--md-surface-container)' }}>
                <div className="rounded-2xl p-8 m3-card-elevated">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}
                  >
                    <Users size={40} />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2" style={{ color: 'var(--md-on-surface)' }}>Ust. Muhammad Iqbal, S.Pd</h3>
                  <p className="text-center text-sm" style={{ color: 'var(--md-primary)' }}>Pimpinan Yayasan</p>
                  <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'var(--md-tertiary-container)' }}></div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium" style={{ color: 'var(--md-primary)' }}>Sambutan Pimpinan</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ color: 'var(--md-on-surface)' }}>
                Selamat Datang di Rumah Quran Syababul Khair
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
                <p><em>Assalamu'alaikum Warahmatullahi Wabarakatuh,</em></p>
                <p>Segala puji bagi Allah SWT yang telah memberikan kita kesempatan untuk terus mendekat kepada-Nya melalui Al-Quran. Shalawat dan salam semoga tercurah kepada Nabi Muhammad SAW.</p>
                <p>Rumah Quran Syababul Khair hadir sebagai wadah bagi generasi muda untuk belajar dan mencintai Al-Quran. Kami percaya bahwa setiap anak memiliki potensi luar biasa untuk menjadi penghafal dan pengamal Al-Quran.</p>
                <p className="font-medium" style={{ color: 'var(--md-primary)' }}><em>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</em></p>
              </div>
              <Link
                to="/profil"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium"
                style={{ color: 'var(--md-primary)' }}
              >
                Baca Selengkapnya <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities – M3 Tertiary surface */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kegiatan Kami</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-85">
              Berbagai kegiatan untuk menunjang pembelajaran Al-Quran dan pembinaan karakter Islami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
              >
                <div className="text-5xl mb-6">{activity.image}</div>
                <h3 className="text-xl font-medium mb-3">{activity.title}</h3>
                <p className="opacity-85">{activity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/kegiatan"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-medium transition-all duration-200"
              style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}
            >
              Lihat Semua Kegiatan <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location – M3 clean layout */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium" style={{ color: 'var(--md-primary)' }}>Lokasi Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ color: 'var(--md-on-surface)' }}>
                Kunjungi Rumah Quran Syababul Khair
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
                Kami berlokasi di tempat yang strategis dan mudah dijangkau. Datang dan kunjungi kami untuk melihat langsung kegiatan pembelajaran kami.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: 'Alamat', desc: 'Klik link untuk melihat lokasi di Google Maps' },
                  { icon: Calendar, title: 'Jam Operasional', desc: 'Senin - Jumat: 16:00 - 18:00', desc2: 'Sabtu - Minggu: 08:00 - 10:00' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.desc}</p>
                      {item.desc2 && <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.desc2}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 mt-8 rounded-full font-medium transition-all duration-200"
                style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}
              >
                <MapPin size={20} />
                Lihat di Google Maps
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden h-96" style={{ background: 'var(--md-surface-container)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5!2d104.8250119!3d-3.0559892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9dc9729d1b81%3A0x482ca8c781d80889!2sRumah%20Qur'an%20Syababul%20Khair!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Rumah Quran Syababul Khair"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – M3 Tertiary container */}
      <section className="py-20" style={{ background: 'var(--md-tertiary-container)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--md-on-tertiary-container)' }}>
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-xl mb-8 opacity-80" style={{ color: 'var(--md-on-tertiary-container)' }}>
            Daftarkan putra-putri Anda sekarang dan mulai perjalanan mulia bersama Al-Quran
          </p>
          <Link
            to="/pendaftaran"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full font-medium text-lg transition-all duration-200 hover:shadow-lg"
            style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}
          >
            Daftar Sekarang <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
