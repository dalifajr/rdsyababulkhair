import { useState } from 'react'
import { Save, User, BookOpen, Target, Phone, Mail, MapPin, PlusCircle, Pencil, Trash2, X } from 'lucide-react'
import {
  getProfileData,
  getProfileElements,
  saveProfileData,
  saveProfileElements,
} from '../../data/siteContent'

const ManageProfile = () => {
  const [activeTab, setActiveTab] = useState('info')
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')
  const [elementForm, setElementForm] = useState({ id: null, title: '', description: '' })

  const [profileData, setProfileData] = useState(getProfileData())
  const [profileElements, setProfileElements] = useState(getProfileElements())

  const handleSave = async () => {
    setIsSaving(true)
    saveProfileData(profileData)
    saveProfileElements(profileElements)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    setSavedMessage('Perubahan berhasil disimpan!')
    setTimeout(() => setSavedMessage(''), 3000)
  }

  const handleElementSubmit = (e) => {
    e.preventDefault()

    if (!elementForm.title.trim() || !elementForm.description.trim()) {
      return
    }

    if (elementForm.id) {
      setProfileElements((prev) =>
        prev.map((item) =>
          item.id === elementForm.id
            ? {
                ...item,
                title: elementForm.title.trim(),
                description: elementForm.description.trim(),
              }
            : item,
        ),
      )
    } else {
      setProfileElements((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: elementForm.title.trim(),
          description: elementForm.description.trim(),
        },
      ])
    }

    setElementForm({ id: null, title: '', description: '' })
  }

  const handleElementEdit = (item) => {
    setElementForm({
      id: item.id,
      title: item.title,
      description: item.description,
    })
  }

  const handleElementDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus elemen profil ini?')) {
      setProfileElements((prev) => prev.filter((item) => item.id !== id))
      if (elementForm.id === id) {
        setElementForm({ id: null, title: '', description: '' })
      }
    }
  }

  const resetElementForm = () => {
    setElementForm({ id: null, title: '', description: '' })
  }

  const tabs = [
    { id: 'info', label: 'Informasi Umum', icon: User },
    { id: 'visi-misi', label: 'Visi & Misi', icon: Target },
    { id: 'sambutan', label: 'Sambutan', icon: BookOpen },
    { id: 'elemen', label: 'Elemen Profil', icon: PlusCircle },
    { id: 'kontak', label: 'Kontak', icon: Phone },
  ]

  return (
    <div className="space-y-6">
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

      {savedMessage && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl">
          {savedMessage}
        </div>
      )}

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

          {activeTab === 'elemen' && (
            <div className="space-y-8">
              <form onSubmit={handleElementSubmit} className="grid md:grid-cols-2 gap-6 bg-gray-50 rounded-2xl p-6">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {elementForm.id ? 'Edit Elemen Profil' : 'Tambah Elemen Profil'}
                  </h3>
                  <p className="text-sm text-gray-600">Elemen ini tampil pada halaman Profil publik.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Elemen
                  </label>
                  <input
                    type="text"
                    value={elementForm.title}
                    onChange={(e) => setElementForm({ ...elementForm, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Contoh: Program Unggulan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Singkat
                  </label>
                  <input
                    type="text"
                    value={elementForm.description}
                    onChange={(e) => setElementForm({ ...elementForm, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Contoh: Tahsin, Tahfidz, dan adab"
                  />
                </div>

                <div className="md:col-span-2 flex gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
                  >
                    <PlusCircle size={18} />
                    {elementForm.id ? 'Update Elemen' : 'Tambah Elemen'}
                  </button>
                  {elementForm.id && (
                    <button
                      type="button"
                      onClick={resetElementForm}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <X size={18} />
                      Batal Edit
                    </button>
                  )}
                </div>
              </form>

              <div className="space-y-4">
                {profileElements.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleElementEdit(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleElementDelete(item.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}

                {profileElements.length === 0 && (
                  <div className="text-center py-10 border border-dashed border-gray-300 rounded-2xl text-gray-500">
                    Belum ada elemen profil. Tambahkan elemen baru melalui form di atas.
                  </div>
                )}
              </div>
            </div>
          )}

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
