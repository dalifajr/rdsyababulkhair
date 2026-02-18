import { History, Award, Heart, Users, Target, MapPin, BookOpen, Star } from 'lucide-react'
import Logo from '../components/Logo'

const Tentang = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Pendirian',
      description: 'Rumah Quran Syababul Khair resmi berdiri dengan 15 santri pertama'
    },
    {
      year: '2020',
      title: 'Pengembangan Program',
      description: 'Menambahkan program Tahfidz dan Kajian Keislaman'
    },
    {
      year: '2021',
      title: 'Pertumbuhan',
      description: 'Jumlah santri mencapai 50 orang dengan 5 pengajar'
    },
    {
      year: '2022',
      title: 'Wisuda Perdana',
      description: 'Mengadakan wisuda perdana untuk 20 santri yang hafal Juz 30'
    },
    {
      year: '2023',
      title: 'Ekspansi',
      description: 'Membuka kelas tambahan untuk usia dewasa'
    },
    {
      year: '2024',
      title: 'Digitalisasi',
      description: 'Meluncurkan website dan sistem pendaftaran online'
    }
  ]

  const achievements = [
    'Meluluskan 100+ santri yang hafal Juz 30',
    'Juara 1 Lomba Tahfidz tingkat Kecamatan',
    'Mendapat apresiasi dari Dinas Pendidikan',
    'Menjadi percontohan TPA di wilayah sekitar',
    'Bekerjasama dengan 5 masjid mitra'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Mengenal lebih dekat sejarah, perjalanan, dan pencapaian Rumah Quran Syababul Khair
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-center">
                <Logo size={250} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rumah Quran <span className="text-gradient">Syababul Khair</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Rumah Quran Syababul Khair</strong> adalah lembaga pendidikan
                  non-formal yang fokus pada pengajaran Al-Quran dan pembinaan karakter Islami. Didirikan pada tahun 2019
                  oleh Ust. Muhammad Iqbal, S.Pd, lembaga ini lahir dari keprihatinan akan minimnya wadah pendidikan
                  Al-Quran yang berkualitas di lingkungan sekitar.
                </p>
                <p>
                  Nama "Syababul Khair" diambil dari bahasa Arab yang berarti "Pemuda yang Baik". Nama ini
                  mencerminkan visi kami untuk mencetak generasi muda yang tidak hanya mahir membaca Al-Quran
                  tetapi juga berakhlak mulia sesuai tuntunan Rasulullah SAW.
                </p>
                <p>
                  Dengan dukungan tenaga pengajar yang kompeten dan kurikulum yang terstruktur, kami berkomitmen
                  untuk memberikan pendidikan Al-Quran terbaik bagi seluruh santri dari berbagai usia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-4">
              <History className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestone penting dalam sejarah Rumah Quran Syababul Khair
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200 hidden md:block"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl card-shadow">
                        <span className="text-teal-600 font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                        <p className="text-gray-600 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-teal-600 rounded-full flex-shrink-0 z-10 hidden md:block"></div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pencapaian Kami</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Alhamdulillah, dengan izin Allah SWT dan dukungan dari berbagai pihak,
                Rumah Quran Syababul Khair telah mencapai berbagai pencapaian yang membanggakan.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="text-amber-600" size={16} />
                    </div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '150+', label: 'Santri Aktif', icon: Users },
                { number: '100+', label: 'Alumni Hafidz', icon: BookOpen },
                { number: '10+', label: 'Pengajar', icon: Heart },
                { number: '5+', label: 'Tahun Berdiri', icon: History }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl text-center card-shadow">
                    <Icon className="text-teal-600 mx-auto mb-4" size={32} />
                    <div className="text-3xl font-bold text-teal-600">{stat.number}</div>
                    <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-primary pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Keunggulan yang membuat Rumah Quran Syababul Khair menjadi pilihan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Kurikulum Terstruktur',
                description: 'Program pembelajaran yang sistematis dan teruji dengan target yang jelas'
              },
              {
                icon: Users,
                title: 'Pengajar Kompeten',
                description: 'Dibimbing oleh ustadz/ustadzah yang berpengalaman dan bersertifikat'
              },
              {
                icon: Heart,
                title: 'Lingkungan Kondusif',
                description: 'Suasana belajar yang Islami, nyaman, dan mendukung konsentrasi'
              },
              {
                icon: Target,
                title: 'Metode Efektif',
                description: 'Menggunakan metode pembelajaran yang telah terbukti efektif'
              },
              {
                icon: Award,
                title: 'Pembinaan Karakter',
                description: 'Tidak hanya mengaji, tapi juga membentuk akhlak yang mulia'
              },
              {
                icon: MapPin,
                title: 'Lokasi Strategis',
                description: 'Mudah dijangkau dengan tempat parkir yang memadai'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white hover:bg-white/20 transition-all"
                >
                  <Icon className="text-amber-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-teal-100">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kunjungi Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Datang dan lihat langsung suasana pembelajaran di Rumah Quran Syababul Khair
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <MapPin size={20} />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tentang
