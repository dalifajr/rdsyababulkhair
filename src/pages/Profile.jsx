import { useEffect, useState } from 'react'
import { Users, Award, BookOpen, Heart, Star } from 'lucide-react'
import { defaultProfileData, defaultProfileElements, getProfileData, getProfileElements } from '../data/siteContent'

const Profile = () => {
  const [profileData, setProfileData] = useState(defaultProfileData)
  const [profileElements, setProfileElements] = useState(defaultProfileElements)

  useEffect(() => {
    setProfileData(getProfileData())
    setProfileElements(getProfileElements())
  }, [])

  const teachers = [
    { name: 'Ustadz Ahmad Fadil', specialty: 'Tahfidz & Tajwid' },
    { name: 'Ustadzah Siti Aminah', specialty: 'Tahsin Anak-anak' },
    { name: 'Ustadz Muhammad Rizki', specialty: 'Qiroah & Tilawah' },
    { name: 'Ustadzah Nurul Hidayah', specialty: 'Tahsin Pemula' },
  ]

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="relative py-24 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Yayasan</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">
            Mengenal lebih dekat {profileData.nama} dan orang-orang di baliknya
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium" style={{ color: 'var(--md-primary)' }}>Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ color: 'var(--md-on-surface)' }}>{profileData.nama}</h2>
              <div className="space-y-4 leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>
                <p><strong style={{ color: 'var(--md-on-surface)' }}>{profileData.nama}</strong> adalah lembaga pendidikan Al-Quran yang didirikan dengan tujuan mulia untuk membentuk generasi Qurani yang mencintai Al-Quran dan mengamalkannya.</p>
                <p>{profileData.deskripsi}</p>
                <p>Dengan tenaga pengajar yang kompeten dan metode pembelajaran yang terstruktur, kami berkomitmen memberikan pendidikan Al-Quran terbaik.</p>
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'var(--md-surface-container)' }}>
              <div className="grid grid-cols-2 gap-4">
                {profileElements.map((item, index) => {
                  const iconSet = [BookOpen, Users, Heart, Award]
                  const Icon = iconSet[index % iconSet.length]
                  return (
                    <div key={index} className="m3-card-elevated p-5">
                      <Icon size={28} className="mb-3" style={{ color: 'var(--md-primary)' }} />
                      <h4 className="font-medium text-sm mb-1" style={{ color: 'var(--md-on-surface)' }}>{item.title || 'Elemen Profil'}</h4>
                      <p className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>{item.description || '-'}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leader */}
      <section className="py-20" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: 'var(--md-on-surface)' }}>Sambutan Pimpinan</h2>
          <div className="max-w-4xl mx-auto m3-card-elevated p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center">
                <div className="w-36 h-36 rounded-full flex items-center justify-center" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                  <Users size={56} />
                </div>
                <h3 className="font-bold text-lg mt-4" style={{ color: 'var(--md-on-surface)' }}>{profileData.pimpinan}</h3>
                <p className="text-sm" style={{ color: 'var(--md-primary)' }}>Pimpinan Yayasan</p>
              </div>
              <div className="flex-1">
                <div className="text-5xl mb-4" style={{ color: 'var(--md-primary-container)' }}>"</div>
                <div className="space-y-4 leading-relaxed italic whitespace-pre-line" style={{ color: 'var(--md-on-surface-variant)' }}>
                  {profileData.sambutan}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-low)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Tim Pengajar Kami</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--md-on-surface-variant)' }}>Para ustadz dan ustadzah yang kompeten dan berdedikasi tinggi</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="m3-card-elevated p-6 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }}>
                  <Star size={32} />
                </div>
                <h3 className="font-medium mb-1" style={{ color: 'var(--md-on-surface)' }}>{teacher.name}</h3>
                <p className="text-sm" style={{ color: 'var(--md-primary)' }}>{teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah Singkat</h2>
          <div className="max-w-3xl mx-auto space-y-6 leading-relaxed opacity-90">
            <p>Rumah Quran Syababul Khair berdiri pada tahun 2019 atas inisiatif Ust. Muhammad Iqbal, S.Pd bersama beberapa tokoh masyarakat yang prihatin akan minimnya wadah pendidikan Al-Quran bagi anak-anak.</p>
            <p>Berawal dari kegiatan mengaji kecil dengan beberapa santri, kini telah berkembang menjadi lembaga pendidikan Al-Quran yang dipercaya oleh banyak orang tua.</p>
            <p>Dengan semangat yang tidak pernah padam, kami terus berkomitmen untuk mencetak generasi Qurani yang berakhlak mulia.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
