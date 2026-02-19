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
      <section
        className="relative py-24 bg-cover bg-center page-hero"
        style={{ backgroundImage: "url('/images/bg/rq-syababul-khair-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-teal-950/75"></div>
        <div className="absolute inset-0 pattern-islamic"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Yayasan</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Mengenal lebih dekat {profileData.nama} dan orang-orang di baliknya
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-600 font-semibold">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {profileData.nama}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">{profileData.nama}</strong> adalah lembaga pendidikan
                  Al-Quran yang didirikan dengan tujuan mulia untuk membentuk generasi Qurani yang
                  mencintai Al-Quran dan mengamalkannya dalam kehidupan sehari-hari.
                </p>
                <p>
                  {profileData.deskripsi}
                </p>
                <p>
                  Dengan tenaga pengajar yang kompeten dan metode pembelajaran yang terstruktur,
                  kami berkomitmen untuk memberikan pendidikan Al-Quran terbaik bagi seluruh santri.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {profileElements.map((item, index) => {
                  const iconSet = [BookOpen, Users, Heart, Award]
                  const Icon = iconSet[index % iconSet.length]
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl card-shadow">
                      <Icon className="text-teal-600 mb-3" size={32} />
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title || 'Elemen Profil'}</h4>
                      <p className="text-sm text-gray-600">{item.description || '-'}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sambutan Pimpinan Yayasan
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 gradient-primary rounded-full flex items-center justify-center">
                    <Users className="text-white" size={64} />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-bold text-xl text-gray-900">{profileData.pimpinan}</h3>
                    <p className="text-teal-600">Pimpinan Yayasan</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl text-teal-200 mb-4">"</div>
                  <div className="space-y-4 text-gray-600 leading-relaxed italic whitespace-pre-line">
                    {profileData.sambutan}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Pengajar Kami
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Para ustadz dan ustadzah yang kompeten dan berdedikasi tinggi dalam mengajarkan Al-Quran
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center card-shadow-hover transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-teal-600 text-sm">{teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah Singkat</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-teal-50 leading-relaxed">
              <p>
                Rumah Quran Syababul Khair berdiri pada tahun 2019 atas inisiatif Ust. Muhammad Iqbal, S.Pd 
                bersama beberapa tokoh masyarakat yang prihatin akan minimnya wadah pendidikan Al-Quran 
                bagi anak-anak di lingkungan sekitar.
              </p>
              <p>
                Berawal dari kegiatan mengaji kecil dengan beberapa santri, kini Rumah Quran Syababul Khair 
                telah berkembang menjadi lembaga pendidikan Al-Quran yang dipercaya oleh banyak orang tua 
                untuk mendidik putra-putri mereka dalam hal keagamaan.
              </p>
              <p>
                Dengan semangat yang tidak pernah padam dan dukungan dari berbagai pihak, kami terus 
                berkomitmen untuk mencetak generasi Qurani yang berakhlak mulia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
