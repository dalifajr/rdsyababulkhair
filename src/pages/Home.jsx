import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, Heart, ArrowRight, MapPin, Calendar, Star } from 'lucide-react'
import Logo from '../components/Logo'
import { defaultGalleryImages } from '../data/siteContent'

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Tahsin Al-Quran',
      description: 'Belajar membaca Al-Quran dengan tajwid yang benar dan fasih'
    },
    {
      icon: Users,
      title: 'Pembelajaran Interaktif',
      description: 'Metode belajar yang menyenangkan dengan pendekatan personal'
    },
    {
      icon: Award,
      title: 'Guru Berpengalaman',
      description: 'Dibimbing oleh ustadz/ustadzah yang kompeten dan bersertifikat'
    },
    {
      icon: Heart,
      title: 'Pembinaan Akhlak',
      description: 'Tidak hanya mengaji, tapi juga membentuk karakter Islami'
    }
  ]

  const stats = [
    { number: '150+', label: 'Santri Aktif' },
    { number: '10+', label: 'Pengajar' },
    { number: '5+', label: 'Tahun Berdiri' },
    { number: '100%', label: 'Komitmen' }
  ]

  const activities = [
    {
      title: 'Mengaji Rutin Harian',
      description: 'Kegiatan mengaji setiap hari dengan metode klasikal dan individual',
      image: '📖'
    },
    {
      title: 'Hafalan Quran',
      description: 'Program tahfidz untuk anak-anak yang ingin menghafal Al-Quran',
      image: '🕌'
    },
    {
      title: 'Kajian Islami',
      description: 'Pembelajaran aqidah, fiqih, dan siroh nabawiyah',
      image: '📚'
    }
  ]

  return (
    <div className="overflow-hidden">
      <section
        className="relative min-h-[90vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/rq-syababul-khair-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-teal-950/75"></div>
        <div className="absolute inset-0 pattern-islamic"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="text-amber-400" size={16} />
                <span className="text-sm">Tempat Belajar Al-Quran Terbaik</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Rumah Quran<br />
                <span className="text-amber-400">Syababul Khair</span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed">
                Membentuk generasi Qurani yang cinta Al-Quran, berakhlak mulia,
                dan menjadi kebanggaan umat. Mari bergabung bersama kami!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/pendaftaran"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Daftar Sekarang
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/tentang"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-fadeInUp">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Logo size={350} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {defaultGalleryImages.slice(0, 4).map((image) => (
              <div key={image.id} className="rounded-2xl overflow-hidden card-shadow bg-white">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-2xl card-shadow">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-gradient">Rumah Quran Syababul Khair?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pendidikan Al-Quran terbaik dengan metode yang tepat dan lingkungan yang kondusif
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl card-shadow card-shadow-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl p-8 md:p-12">
                <div className="bg-white rounded-2xl p-8 card-shadow">
                  <div className="w-24 h-24 gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Ust. Muhammad Iqbal, S.Pd</h3>
                  <p className="text-center text-teal-600 mb-4">Pimpinan Yayasan</p>
                  <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-teal-600 font-semibold">Sambutan Pimpinan</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Selamat Datang di Rumah Quran Syababul Khair
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <em>Assalamu'alaikum Warahmatullahi Wabarakatuh,</em>
                </p>
                <p>
                  Segala puji bagi Allah SWT yang telah memberikan kita kesempatan untuk terus mendekat kepada-Nya
                  melalui Al-Quran. Shalawat dan salam semoga tercurah kepada Nabi Muhammad SAW.
                </p>
                <p>
                  Rumah Quran Syababul Khair hadir sebagai wadah bagi generasi muda untuk belajar dan mencintai
                  Al-Quran. Kami percaya bahwa setiap anak memiliki potensi luar biasa untuk menjadi penghafal
                  dan pengamal Al-Quran.
                </p>
                <p>
                  Mari bergabung bersama kami dalam perjalanan mulia ini. Jadikan Al-Quran sebagai sahabat
                  terbaik dalam kehidupan.
                </p>
                <p className="font-semibold text-teal-700">
                  <em>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</em>
                </p>
              </div>
              <Link
                to="/profil"
                className="inline-flex items-center gap-2 mt-8 text-teal-600 hover:text-teal-700 font-semibold"
              >
                Baca Selengkapnya <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 gradient-primary pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kegiatan Kami
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Berbagai kegiatan untuk menunjang pembelajaran Al-Quran dan pembinaan karakter Islami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-6">{activity.image}</div>
                <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-teal-100">{activity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/kegiatan"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Lihat Semua Kegiatan <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-600 font-semibold">Lokasi Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Kunjungi Rumah Quran Syababul Khair
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami berlokasi di tempat yang strategis dan mudah dijangkau.
                Datang dan kunjungi kami untuk melihat langsung kegiatan pembelajaran kami.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">Klik link untuk melihat lokasi di Google Maps</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 16:00 - 18:00</p>
                    <p className="text-gray-600">Sabtu - Minggu: 08:00 - 10:00</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <MapPin size={20} />
                Lihat di Google Maps
              </a>
            </div>
            <div className="bg-gray-100 rounded-3xl overflow-hidden card-shadow h-96">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Daftarkan putra-putri Anda sekarang dan mulai perjalanan mulia bersama Al-Quran
          </p>
          <Link
            to="/pendaftaran"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Daftar Sekarang <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
