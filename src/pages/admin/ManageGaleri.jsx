import { useState, useEffect } from 'react'
import { Plus, Trash2, Search, X, Upload, Image as ImageIcon } from 'lucide-react'
import { getGalleryImages, saveGalleryImages } from '../../data/siteContent'

const ManageGaleri = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => { setPhotos(getGalleryImages()) }, [])

  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [formData, setFormData] = useState({ title: '', category: '', description: '', file: null })

  const categories = ['Semua', 'Kegiatan Mengaji', 'Wisuda', 'Lomba', 'Kegiatan Outdoor']

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPhoto = { id: Date.now(), title: formData.title, category: formData.category, description: formData.description, date: new Date().toISOString().split('T')[0], src: '/images/galeri/placeholder.jpg' }
    const updated = [newPhoto, ...photos]
    setPhotos(updated); saveGalleryImages(updated)
    setShowModal(false); setFormData({ title: '', category: '', description: '', file: null })
  }

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
      const updated = photos.filter(p => p.id !== id); setPhotos(updated); saveGalleryImages(updated)
    }
  }

  const filteredPhotos = photos.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchCat = selectedCategory === 'Semua' || p.category === selectedCategory
    return matchSearch && matchCat
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Kelola Galeri</h1>
          <p style={{ color: 'var(--md-on-surface-variant)' }}>Upload dan kelola foto kegiatan</p>
        </div>
        <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
          style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
          <Plus size={20} /> Upload Foto
        </button>
      </div>

      {/* Search & M3 Filter Chips */}
      <div className="m3-card-elevated p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--md-on-surface-variant)' }} />
            <input type="text" placeholder="Cari foto..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="m3-input pl-12" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`m3-chip ${selectedCategory === cat ? 'selected' : ''}`}>{cat}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="m3-card-elevated overflow-hidden group">
            <div className="aspect-square relative" style={{ background: 'var(--md-primary-container)' }}>
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
              <div className="absolute inset-0 hidden items-center justify-center">
                <ImageIcon size={48} style={{ color: 'var(--md-on-primary-container)', opacity: 0.4 }} />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button onClick={() => handleDelete(photo.id)} className="p-3 rounded-full transition-colors" style={{ background: 'var(--md-error)', color: 'var(--md-on-error)' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium truncate" style={{ color: 'var(--md-on-surface)' }}>{photo.title}</h4>
              <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{photo.category}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--md-on-surface-variant)', opacity: 0.7 }}>{photo.date}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12 m3-card-elevated">
          <ImageIcon size={64} className="mx-auto mb-4" style={{ color: 'var(--md-outline-variant)' }} />
          <p style={{ color: 'var(--md-on-surface-variant)' }}>Tidak ada foto ditemukan</p>
        </div>
      )}

      {/* M3 Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md" style={{ background: 'var(--md-surface-container-low)', borderRadius: 'var(--md-shape-xl)' }}>
            <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
              <h2 className="text-xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Upload Foto</h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-full" style={{ color: 'var(--md-on-surface-variant)' }}><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Judul Foto *</label>
                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required className="m3-input" placeholder="Masukkan judul foto" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Kategori *</label>
                <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} required className="m3-input">
                  <option value="">Pilih kategori</option>
                  {categories.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Deskripsi</label>
                <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} rows={3} className="m3-input resize-none" placeholder="Deskripsi singkat foto..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>File Foto *</label>
                <div className="border-2 border-dashed rounded-2xl p-8 text-center" style={{ borderColor: 'var(--md-outline-variant)' }}>
                  <Upload size={40} className="mx-auto mb-4" style={{ color: 'var(--md-on-surface-variant)' }} />
                  <p className="mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Drag & drop atau klik untuk upload</p>
                  <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)', opacity: 0.6 }}>PNG, JPG, JPEG (max 5MB)</p>
                  <input type="file" accept="image/*" onChange={e => setFormData({ ...formData, file: e.target.files[0] })} className="hidden" id="photo-upload" />
                  <label htmlFor="photo-upload" className="inline-block mt-4 px-6 py-2 rounded-full cursor-pointer font-medium transition-colors"
                    style={{ background: 'var(--md-surface-container-highest)', color: 'var(--md-on-surface-variant)' }}>Pilih File</label>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-6 py-3 rounded-full font-medium"
                  style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>Batal</button>
                <button type="submit" className="flex-1 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                  style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>Upload</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageGaleri
