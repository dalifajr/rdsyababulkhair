import { useState } from 'react'
import { Save, User, BookOpen, Target, Eye, Phone, Mail, MapPin } from 'lucide-react'

const ManageProfile = () => {
  const [activeTab, setActiveTab] = useState('info')
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  const [profileData, setProfileData] = useState({
    nama: 'Rumah Quran Syababul Khair',
    deskripsi: 'Tempat belajar Al-Quran dengan metode yang mudah dan menyenangkan. Membentuk generasi Qurani yang berakhlak mulia.',
    pimpinan: 'Ust. Muhammad Iqbal, S.Pd',
    sambutan: `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Alhamdulillah, segala puji bagi Allah SWT yang telah memberikan kita kesempatan untuk terus mendekat kepada-Nya melalui Al-Quran. Shalawat dan salam semoga senantiasa tercurah kepada baginda Nabi Muhammad SAW.

Rumah Quran Syababul Khair hadir dengan sebuah misi suci: membentuk generasi muda yang mencintai Al-Quran, menghafalnya, dan mengamalkannya dalam kehidupan sehari-hari. Kami percaya bahwa setiap anak memiliki potensi luar biasa untuk menjadi penghafal dan pengamal Al-Quran.

Dengan dukungan orang tua, para pengajar yang kompeten, dan lingkungan yang kondusif, InsyaAllah kita bersama-sama dapat mewujudkan generasi Qurani yang menjadi kebanggaan umat dan penyejuk hati orang tua.

Mari bergabung bersama kami dalam perjalanan mulia ini. Jadikan Al-Quran sebagai sahabat terbaik dalam kehidupan.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.`,
    visi: 'Menjadi lembaga pendidikan Al-Quran terdepan yang melahirkan generasi Qurani, berakhlak mulia, cinta Al-Quran, dan menjadi penerang bagi umat',
    misi: [
      'Menyelenggarakan pendidikan Al-Quran dengan metode yang efektif dan menyenangkan',
      'Membina santri agar mampu membaca Al-Quran dengan baik dan benar sesuai kaidah tajwid',
      'Menumbuhkan kecintaan terhadap Al-Quran dan semangat untuk menghafalnya',
      'Membentuk karakter santri yang berakhlak mulia sesuai tuntunan Islam',
      'Menciptakan lingkungan belajar yang kondusif, nyaman, dan Islami',
      'Menyiapkan generasi muda yang siap menjadi pemimpin umat yang amanah'
    ],
    telepon: '+62 812-3456-7890',
    email: 'info@rqsyababulkhair.id',
    alamat: 'https://maps.app.goo.gl/Nup11EjQLmr9x5uh7',
    jadwal: 'Senin - Jumat: 16:00 - 18:00, Sabtu - Minggu: 08:00 - 10:00'
  })

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    setSavedMessage('Perubahan berhasil disimpan!')
    setTimeout(() => setSavedMessage(''), 3000)
  }

  const tabs = [
    { id: 'info', label: 'Informasi Umum', icon: User },
    { id: 'visi-misi', label: 'Visi & Misi', icon: Target },
    { id: 'sambutan', label: 'Sambutan', icon: BookOpen },
    { id: 'kontak', label: 'Kontak', icon: Phone },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profil Website</h1>
          <p className="text-gray-600">Edit informasi yang ditampilkan di website</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
            isSaving 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-teal-600 hover:bg-teal-700 text-white'
          }`}
        >
          {isSaving ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Menyimpan...
            </>
          ) : (
            <>
              <Save size={20} />
              Simpan Perubahan
            </>
          )}
        </button>
      </div>

      {/* Success Message */}
      {savedMessage && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl">
          {savedMessage}
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-6">
          {/* Informasi Umum */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Yayasan
                </label>
                <input
                  type="text"
                  value={profileData.nama}
                  onChange={(e) => setProfileData({...profileData, nama: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Singkat
                </label>
                <textarea
                  value={profileData.deskripsi}
                  onChange={(e) => setProfileData({...profileData, deskripsi: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Pimpinan
                </label>
                <input
                  type="text"
                  value={profileData.pimpinan}
                  onChange={(e) => setProfileData({...profileData, pimpinan: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>
            </div>
          )}

          {/* Visi & Misi */}
          {activeTab === 'visi-misi' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visi
                </label>
                <textarea
                  value={profileData.visi}
                  onChange={(e) => setProfileData({...profileData, visi: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Misi (pisahkan dengan enter untuk setiap poin)
                </label>
                <textarea
                  value={profileData.misi.join('\n')}
                  onChange={(e) => setProfileData({...profileData, misi: e.target.value.split('\n')})}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* Sambutan */}
          {activeTab === 'sambutan' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sambutan Pimpinan
                </label>
                <textarea
                  value={profileData.sambutan}
                  onChange={(e) => setProfileData({...profileData, sambutan: e.target.value})}
                  rows={15}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* Kontak */}
          {activeTab === 'kontak' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Telepon / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={profileData.telepon}
                    onChange={(e) => setProfileData({...profileData, telepon: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Link Google Maps
                </label>
                <input
                  type="url"
                  value={profileData.alamat}
                  onChange={(e) => setProfileData({...profileData, alamat: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jadwal Operasional
                </label>
                <input
                  type="text"
                  value={profileData.jadwal}
                  onChange={(e) => setProfileData({...profileData, jadwal: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageProfile
