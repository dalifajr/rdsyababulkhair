import { BookOpen, Users, Award, Heart, MapPin, Calendar, ChevronRight, Target } from 'lucide-react'

const Tentang = () => {
  const milestones = [
    { year: '2018', title: 'Pendirian', description: 'RQ Syababul Khair resmi didirikan dengan 15 santri pertama.' },
    { year: '2019', title: 'Pengembangan Kurikulum', description: 'Kurikulum tahsin dan tahfidz mulai disusun secara terstruktur.' },
    { year: '2020', title: 'Pertumbuhan', description: 'Jumlah santri mencapai 50 orang dengan 5 pengajar.' },
    { year: '2021', title: 'Program Tahfidz', description: 'Meluncurkan program tahfidz intensif dengan target hafalan.' },
    { year: '2022', title: 'Fasilitas Baru', description: 'Pembangunan gedung baru dengan fasilitas belajar yang lebih baik.' },
    { year: '2023', title: 'Prestasi', description: 'Santri berhasil meraih juara di berbagai lomba tahfidz tingkat kota.' },
    { year: '2024', title: 'Ekspansi', description: 'Membuka kelas baru dan memperluas jangkauan dakwah.' }
  ]

  const achievements = [
    { number: '200+', label: 'Santri Aktif', icon: Users },
    { number: '50+', label: 'Alumni', icon: Award },
    { number: '15+', label: 'Pengajar', icon: BookOpen },
    { number: '6+', label: 'Tahun Berdiri', icon: Calendar }
  ]

  const whyChooseUs = [
    { title: 'Kurikulum Terstruktur', description: 'Program belajar disusun secara sistematis sesuai tingkatan kemampuan santri.', icon: BookOpen },
    { title: 'Pengajar Berkualitas', description: 'Ustadz dan ustadzah berpengalaman dengan sanad keilmuan yang jelas.', icon: Users },
    { title: 'Lingkungan Islami', description: 'Suasana belajar yang kondusif dan penuh nilai-nilai keislaman.', icon: Heart },
    { title: 'Prestasi Gemilang', description: 'Santri berprestasi di berbagai kompetisi tahfidz dan keislaman.', icon: Award }
  ]

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Mengenal lebih dekat Rumah Quran Syababul Khair</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                Tentang RQ Syababul Khair
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--md-on-surface)' }}>Membentuk Generasi Qurani Berakhlak Mulia</h2>
              <p className="text-lg mb-4" style={{ color: 'var(--md-on-surface-variant)' }}>
                Rumah Quran Syababul Khair adalah lembaga pendidikan Al-Quran yang berdedikasi untuk membina 
                generasi muda dalam mempelajari, memahami, dan mengamalkan Al-Quran.
              </p>
              <p className="text-lg" style={{ color: 'var(--md-on-surface-variant)' }}>
                Didirikan pada tahun 2018, kami terus berkomitmen untuk memberikan pendidikan Al-Quran 
                yang berkualitas dengan metode pembelajaran modern dan berlandaskan nilai-nilai salafus shalih.
              </p>
            </div>
            <div className="m3-card-elevated p-2 overflow-hidden">
              <img src="/images/galeri/kegiatan-1.svg" alt="RQ Syababul Khair" className="w-full h-80 object-cover rounded-xl" onError={e => { e.target.style.display = 'none' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16" style={{ background: 'var(--md-primary-container)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    <Icon size={28} />
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--md-on-primary-container)' }}>{item.number}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--md-on-primary-container)', opacity: 0.8 }}>{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Perjalanan Kami</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Tonggak penting dalam sejarah RQ Syababul Khair</p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: 'var(--md-outline-variant)' }}></div>
            <div className="space-y-10">
              {milestones.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-[calc(50%-2rem)] text-right">
                    {index % 2 === 0 && (
                      <div className="m3-card-elevated p-5 inline-block text-left">
                        <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.description}</p>
                      </div>
                    )}
                    {index % 2 !== 0 && (
                      <div className="m3-card-elevated p-5 inline-block text-left">
                        <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-sm font-bold" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>{item.year}</div>
                  <div className="md:hidden flex-1 m3-card-elevated p-5">
                    <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.description}</p>
                  </div>
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Mengapa Memilih Kami?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="m3-card-elevated p-6 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Lokasi Kami</h2>
          </div>
          <div className="m3-card-elevated overflow-hidden">
            <div className="p-6 flex items-center gap-3" style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>Jl. Pendidikan No. 123</p>
                <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Kota, Provinsi</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              title="Lokasi RQ Syababul Khair" className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tentang
