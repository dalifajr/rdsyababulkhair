import { Target, Eye, CheckCircle, Star, Heart, BookOpen, Users, Award } from 'lucide-react'

const VisiMisi = () => {
  const misi = [
    {
      text: 'Menyelenggarakan pendidikan Al-Quran dengan metode yang efektif dan menyenangkan',
      icon: BookOpen
    },
    {
      text: 'Membina santri agar mampu membaca Al-Quran dengan baik dan benar sesuai kaidah tajwid',
      icon: CheckCircle
    },
    {
      text: 'Menumbuhkan kecintaan terhadap Al-Quran dan semangat untuk menghafalnya',
      icon: Heart
    },
    {
      text: 'Membentuk karakter santri yang berakhlak mulia sesuai tuntunan Islam',
      icon: Star
    },
    {
      text: 'Menciptakan lingkungan belajar yang kondusif, nyaman, dan Islami',
      icon: Users
    },
    {
      text: 'Menyiapkan generasi muda yang siap menjadi pemimpin umat yang amanah',
      icon: Award
    }
  ]

  const values = [
    {
      title: 'Ikhlas',
      description: 'Semua kegiatan dilakukan semata-mata mengharap ridha Allah SWT',
      color: 'bg-teal-500'
    },
    {
      title: 'Amanah',
      description: 'Menjaga kepercayaan yang diberikan oleh orang tua dan masyarakat',
      color: 'bg-amber-500'
    },
    {
      title: 'Profesional',
      description: 'Menjalankan tugas dengan kompetensi dan dedikasi tinggi',
      color: 'bg-green-500'
    },
    {
      title: 'Istiqomah',
      description: 'Konsisten dalam kebaikan dan tidak mudah menyerah',
      color: 'bg-blue-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 pattern-islamic page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Arah dan tujuan Rumah Quran Syababul Khair dalam mengemban amanah pendidikan Al-Quran
            </p>
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-full mb-8">
              <Eye className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visi Kami</h2>
            <div className="section-divider mb-8"></div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 md:p-12 rounded-3xl card-shadow">
              <p className="text-2xl md:text-3xl text-teal-700 font-semibold leading-relaxed">
                "Menjadi lembaga pendidikan Al-Quran terdepan yang melahirkan generasi Qurani,
                berakhlak mulia, cinta Al-Quran, dan menjadi penerang bagi umat"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-gold rounded-full mb-8">
              <Target className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Misi Kami</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {misi.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl card-shadow card-shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <span className="text-teal-600 font-bold text-lg">0{index + 1}</span>
                      <p className="text-gray-700 mt-2 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap aktivitas kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl font-bold text-white">{value.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 gradient-hero pattern-islamic">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-amber-400 mb-6">"</div>
          <p className="text-2xl md:text-3xl text-white leading-relaxed mb-6 font-arabic">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
          <p className="text-xl text-teal-100 italic mb-4">
            "Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya"
          </p>
          <p className="text-amber-400 font-semibold">HR. Bukhari</p>
        </div>
      </section>

      {/* Target Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Target Lulusan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kompetensi yang diharapkan dimiliki oleh setiap santri lulusan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Mampu membaca Al-Quran dengan tajwid yang benar',
              'Hafal minimal Juz 30 (Juz Amma)',
              'Memahami dasar-dasar aqidah dan fiqih Islam',
              'Memiliki akhlak yang baik sesuai tuntunan Rasulullah',
              'Mampu melaksanakan ibadah dengan benar',
              'Memiliki kecintaan terhadap Al-Quran dan Islam'
            ].map((target, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-xl card-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <p className="text-gray-700">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisiMisi
