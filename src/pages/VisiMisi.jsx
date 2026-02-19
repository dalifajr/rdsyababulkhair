import { Target, Eye, CheckCircle, Star, Heart, BookOpen, Users, Award } from 'lucide-react'

const VisiMisi = () => {
  const misi = [
    { text: 'Menyelenggarakan pendidikan Al-Quran dengan metode yang efektif dan menyenangkan', icon: BookOpen },
    { text: 'Membina santri agar mampu membaca Al-Quran dengan baik dan benar sesuai kaidah tajwid', icon: CheckCircle },
    { text: 'Menumbuhkan kecintaan terhadap Al-Quran dan semangat untuk menghafalnya', icon: Heart },
    { text: 'Membentuk karakter santri yang berakhlak mulia sesuai tuntunan Islam', icon: Star },
    { text: 'Menciptakan lingkungan belajar yang kondusif, nyaman, dan Islami', icon: Users },
    { text: 'Menyiapkan generasi muda yang siap menjadi pemimpin umat yang amanah', icon: Award }
  ]

  const values = [
    { title: 'Ikhlas', description: 'Semua kegiatan dilakukan semata-mata mengharap ridha Allah SWT', bg: 'var(--md-primary-container)', fg: 'var(--md-on-primary-container)' },
    { title: 'Amanah', description: 'Menjaga kepercayaan yang diberikan oleh orang tua dan masyarakat', bg: 'var(--md-tertiary-container)', fg: 'var(--md-on-tertiary-container)' },
    { title: 'Profesional', description: 'Menjalankan tugas dengan kompetensi dan dedikasi tinggi', bg: 'var(--md-secondary-container)', fg: 'var(--md-on-secondary-container)' },
    { title: 'Istiqomah', description: 'Konsisten dalam kebaikan dan tidak mudah menyerah', bg: 'var(--md-primary-container)', fg: 'var(--md-on-primary-container)' }
  ]

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Arah dan tujuan Rumah Quran Syababul Khair dalam mengemban amanah pendidikan Al-Quran</p>
        </div>
      </section>

      {/* Visi */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
              <Eye size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--md-on-surface)' }}>Visi Kami</h2>
            <div className="p-8 md:p-12 rounded-3xl" style={{ background: 'var(--md-primary-container)' }}>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed" style={{ color: 'var(--md-on-primary-container)' }}>
                "Menjadi lembaga pendidikan Al-Quran terdepan yang melahirkan generasi Qurani, berakhlak mulia, cinta Al-Quran, dan menjadi penerang bagi umat"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}>
              <Target size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Misi Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {misi.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="m3-card-elevated p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="font-bold text-lg" style={{ color: 'var(--md-primary)' }}>0{index + 1}</span>
                      <p className="mt-2 leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Nilai-Nilai Kami</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Prinsip-prinsip yang menjadi fondasi dalam setiap aktivitas kami</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ background: value.bg, color: value.fg }}>
                  <span className="text-3xl font-bold">{value.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--md-on-surface)' }}>{value.title}</h3>
                <p style={{ color: 'var(--md-on-surface-variant)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6" style={{ color: 'var(--md-primary-container)' }}>"</div>
          <p className="text-2xl md:text-3xl leading-relaxed mb-6 font-arabic">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
          <p className="text-xl italic mb-4 opacity-90">"Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya"</p>
          <p className="font-medium" style={{ color: 'var(--md-primary-container)' }}>HR. Bukhari</p>
        </div>
      </section>

      {/* Targets */}
      <section className="py-20" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Target Lulusan</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Kompetensi yang diharapkan dimiliki oleh setiap santri lulusan kami</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {['Mampu membaca Al-Quran dengan tajwid yang benar', 'Hafal minimal Juz 30 (Juz Amma)', 'Memahami dasar-dasar aqidah dan fiqih Islam', 'Memiliki akhlak yang baik sesuai tuntunan Rasulullah', 'Mampu melaksanakan ibadah dengan benar', 'Memiliki kecintaan terhadap Al-Quran dan Islam'].map((target, index) => (
              <div key={index} className="m3-card-outlined flex items-center gap-4 p-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                  <CheckCircle size={22} />
                </div>
                <p style={{ color: 'var(--md-on-surface-variant)' }}>{target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisiMisi
