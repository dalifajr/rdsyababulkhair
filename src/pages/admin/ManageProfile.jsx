import { useState } from 'react'
import { Save, User, BookOpen, Target, Phone, Mail, MapPin, PlusCircle, Pencil, Trash2, X } from 'lucide-react'
import { getProfileData, getProfileElements, saveProfileData, saveProfileElements } from '../../data/siteContent'

const ManageProfile = () => {
  const [activeTab, setActiveTab] = useState('info')
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')
  const [elementForm, setElementForm] = useState({ id: null, title: '', description: '' })
  const [profileData, setProfileData] = useState(getProfileData())
  const [profileElements, setProfileElements] = useState(getProfileElements())

  const handleSave = async () => {
    setIsSaving(true); saveProfileData(profileData); saveProfileElements(profileElements)
    await new Promise(r => setTimeout(r, 1500))
    setIsSaving(false); setSavedMessage('Perubahan berhasil disimpan!')
    setTimeout(() => setSavedMessage(''), 3000)
  }

  const handleElementSubmit = (e) => {
    e.preventDefault()
    if (!elementForm.title.trim() || !elementForm.description.trim()) return
    if (elementForm.id) {
      setProfileElements(prev => prev.map(i => i.id === elementForm.id ? { ...i, title: elementForm.title.trim(), description: elementForm.description.trim() } : i))
    } else {
      setProfileElements(prev => [...prev, { id: Date.now(), title: elementForm.title.trim(), description: elementForm.description.trim() }])
    }
    setElementForm({ id: null, title: '', description: '' })
  }

  const handleElementEdit = (item) => setElementForm({ id: item.id, title: item.title, description: item.description })
  const handleElementDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus elemen profil ini?')) {
      setProfileElements(prev => prev.filter(i => i.id !== id))
      if (elementForm.id === id) setElementForm({ id: null, title: '', description: '' })
    }
  }
  const resetElementForm = () => setElementForm({ id: null, title: '', description: '' })

  const tabs = [
    { id: 'info', label: 'Informasi Umum', icon: User },
    { id: 'visi-misi', label: 'Visi & Misi', icon: Target },
    { id: 'sambutan', label: 'Sambutan', icon: BookOpen },
    { id: 'elemen', label: 'Elemen Profil', icon: PlusCircle },
    { id: 'kontak', label: 'Kontak', icon: Phone },
  ]

  const labelStyle = { color: 'var(--md-on-surface-variant)' }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Profil Website</h1>
          <p style={{ color: 'var(--md-on-surface-variant)' }}>Edit informasi yang ditampilkan di website</p>
        </div>
        <button onClick={handleSave} disabled={isSaving}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg disabled:opacity-60"
          style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
          {isSaving ? (
            <><div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Menyimpan...</>
          ) : (
            <><Save size={20} /> Simpan Perubahan</>
          )}
        </button>
      </div>

      {savedMessage && (
        <div className="p-4 rounded-xl" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>{savedMessage}</div>
      )}

      <div className="m3-card-elevated">
        {/* M3 Tabs */}
        <div style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
          <div className="flex overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap font-medium text-sm"
                  style={{
                    borderColor: activeTab === tab.id ? 'var(--md-primary)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--md-primary)' : 'var(--md-on-surface-variant)'
                  }}>
                  <Icon size={18} /> {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Nama Yayasan</label>
                <input type="text" value={profileData.nama} onChange={e => setProfileData({ ...profileData, nama: e.target.value })} className="m3-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Deskripsi Singkat</label>
                <textarea value={profileData.deskripsi} onChange={e => setProfileData({ ...profileData, deskripsi: e.target.value })} rows={4} className="m3-input resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Nama Pimpinan</label>
                <input type="text" value={profileData.pimpinan} onChange={e => setProfileData({ ...profileData, pimpinan: e.target.value })} className="m3-input" />
              </div>
            </div>
          )}

          {activeTab === 'visi-misi' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Visi</label>
                <textarea value={profileData.visi} onChange={e => setProfileData({ ...profileData, visi: e.target.value })} rows={4} className="m3-input resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Misi (pisahkan dengan enter)</label>
                <textarea value={profileData.misi.join('\n')} onChange={e => setProfileData({ ...profileData, misi: e.target.value.split('\n') })} rows={8} className="m3-input resize-none" />
              </div>
            </div>
          )}

          {activeTab === 'sambutan' && (
            <div>
              <label className="block text-sm font-medium mb-2" style={labelStyle}>Sambutan Pimpinan</label>
              <textarea value={profileData.sambutan} onChange={e => setProfileData({ ...profileData, sambutan: e.target.value })} rows={15} className="m3-input resize-none" />
            </div>
          )}

          {activeTab === 'elemen' && (
            <div className="space-y-8">
              <form onSubmit={handleElementSubmit} className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl" style={{ background: 'var(--md-surface-container-low)' }}>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--md-on-surface)' }}>{elementForm.id ? 'Edit Elemen' : 'Tambah Elemen'}</h3>
                  <p className="text-sm" style={labelStyle}>Elemen ini tampil pada halaman Profil publik.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={labelStyle}>Judul Elemen</label>
                  <input type="text" value={elementForm.title} onChange={e => setElementForm({ ...elementForm, title: e.target.value })} className="m3-input" placeholder="Contoh: Program Unggulan" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={labelStyle}>Deskripsi Singkat</label>
                  <input type="text" value={elementForm.description} onChange={e => setElementForm({ ...elementForm, description: e.target.value })} className="m3-input" placeholder="Contoh: Tahsin, Tahfidz, dan adab" />
                </div>
                <div className="md:col-span-2 flex gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                    style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    <PlusCircle size={18} /> {elementForm.id ? 'Update' : 'Tambah'}
                  </button>
                  {elementForm.id && (
                    <button type="button" onClick={resetElementForm} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium"
                      style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>
                      <X size={18} /> Batal
                    </button>
                  )}
                </div>
              </form>

              <div className="space-y-4">
                {profileElements.map(item => (
                  <div key={item.id} className="rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    style={{ border: '1px solid var(--md-outline-variant)' }}>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--md-on-surface)' }}>{item.title}</h4>
                      <p className="text-sm mt-1" style={labelStyle}>{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleElementEdit(item)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm"
                        style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}>
                        <Pencil size={16} /> Edit
                      </button>
                      <button onClick={() => handleElementDelete(item.id)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm"
                        style={{ background: 'var(--md-error-container)', color: 'var(--md-on-error-container)' }}>
                        <Trash2 size={16} /> Hapus
                      </button>
                    </div>
                  </div>
                ))}
                {profileElements.length === 0 && (
                  <div className="text-center py-10 border-2 border-dashed rounded-2xl" style={{ borderColor: 'var(--md-outline-variant)', color: 'var(--md-on-surface-variant)' }}>
                    Belum ada elemen profil. Tambahkan elemen baru.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'kontak' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={labelStyle}><Phone className="inline mr-2" size={16} />Telepon / WhatsApp</label>
                  <input type="text" value={profileData.telepon} onChange={e => setProfileData({ ...profileData, telepon: e.target.value })} className="m3-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={labelStyle}><Mail className="inline mr-2" size={16} />Email</label>
                  <input type="email" value={profileData.email} onChange={e => setProfileData({ ...profileData, email: e.target.value })} className="m3-input" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}><MapPin className="inline mr-2" size={16} />Link Google Maps</label>
                <input type="url" value={profileData.alamat} onChange={e => setProfileData({ ...profileData, alamat: e.target.value })} className="m3-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={labelStyle}>Jadwal Operasional</label>
                <input type="text" value={profileData.jadwal} onChange={e => setProfileData({ ...profileData, jadwal: e.target.value })} className="m3-input" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageProfile
