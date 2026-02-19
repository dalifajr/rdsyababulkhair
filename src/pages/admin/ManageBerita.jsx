import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Search, X, Save } from 'lucide-react'
import { getNewsItems, saveNewsItems } from '../../data/siteContent'

const ManageBerita = () => {
  const [news, setNews] = useState([])
  useEffect(() => { setNews(getNewsItems()) }, [])

  const [showModal, setShowModal] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [formData, setFormData] = useState({ title: '', category: '', content: '', status: 'Draft' })

  const categories = ['Kegiatan', 'Pengumuman', 'Prestasi', 'Tips']

  const handleOpenModal = (newsItem = null) => {
    if (newsItem) {
      setEditingNews(newsItem)
      setFormData({ title: newsItem.title, category: newsItem.category, content: newsItem.content || '', status: newsItem.status })
    } else {
      setEditingNews(null)
      setFormData({ title: '', category: '', content: '', status: 'Draft' })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => { setShowModal(false); setEditingNews(null) }

  const handleSubmit = (e) => {
    e.preventDefault()
    let updated
    if (editingNews) {
      updated = news.map(n => n.id === editingNews.id ? { ...n, ...formData, excerpt: formData.content.substring(0, 150) + '...' } : n)
    } else {
      const newNews = { id: Date.now(), ...formData, excerpt: formData.content.substring(0, 150) + '...', date: new Date().toISOString().split('T')[0], views: 0, author: 'Admin', readTime: '3 menit' }
      updated = [newNews, ...news]
    }
    setNews(updated); saveNewsItems(updated); handleCloseModal()
  }

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      const updated = news.filter(n => n.id !== id); setNews(updated); saveNewsItems(updated)
    }
  }

  const filteredNews = news.filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const getStatusStyle = (status) => status === 'Published'
    ? { background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }
    : { background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Kelola Berita</h1>
          <p style={{ color: 'var(--md-on-surface-variant)' }}>Tambah, edit, dan hapus berita website</p>
        </div>
        <button onClick={() => handleOpenModal()} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
          style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
          <Plus size={20} /> Tambah Berita
        </button>
      </div>

      {/* Search */}
      <div className="m3-card-elevated p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--md-on-surface-variant)' }} />
          <input type="text" placeholder="Cari berita..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="m3-input pl-12" />
        </div>
      </div>

      {/* Table */}
      <div className="m3-card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--md-surface-container-low)' }}>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Judul</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Kategori</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Tanggal</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Views</th>
                <th className="text-right py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredNews.map(item => {
                const s = getStatusStyle(item.status)
                return (
                  <tr key={item.id} style={{ borderTop: '1px solid var(--md-outline-variant)' }}>
                    <td className="py-4 px-6 font-medium line-clamp-1" style={{ color: 'var(--md-on-surface)' }}>{item.title}</td>
                    <td className="py-4 px-6" style={{ color: 'var(--md-on-surface-variant)' }}>{item.category}</td>
                    <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-xs font-medium" style={s}>{item.status}</span></td>
                    <td className="py-4 px-6" style={{ color: 'var(--md-on-surface-variant)' }}>{item.date}</td>
                    <td className="py-4 px-6" style={{ color: 'var(--md-on-surface-variant)' }}>{item.views}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => handleOpenModal(item)} className="p-2 rounded-full transition-colors" style={{ color: 'var(--md-on-surface-variant)' }}><Edit size={18} /></button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 rounded-full transition-colors" style={{ color: 'var(--md-error)' }}><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {filteredNews.length === 0 && <div className="text-center py-12" style={{ color: 'var(--md-on-surface-variant)' }}>Tidak ada berita ditemukan</div>}
      </div>

      {/* M3 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ background: 'var(--md-surface-container-low)', borderRadius: 'var(--md-shape-xl)' }}>
            <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
              <h2 className="text-xl font-bold" style={{ color: 'var(--md-on-surface)' }}>{editingNews ? 'Edit Berita' : 'Tambah Berita Baru'}</h2>
              <button onClick={handleCloseModal} className="p-2 rounded-full" style={{ color: 'var(--md-on-surface-variant)' }}><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Judul Berita *</label>
                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required className="m3-input" placeholder="Masukkan judul berita" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Kategori *</label>
                  <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} required className="m3-input">
                    <option value="">Pilih kategori</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Status</label>
                  <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="m3-input">
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Konten Berita *</label>
                <textarea value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} rows={8} className="m3-input resize-none" placeholder="Tulis konten berita..."></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={handleCloseModal} className="flex-1 px-6 py-3 rounded-full font-medium transition-colors"
                  style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>Batal</button>
                <button type="submit" className="flex-1 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                  style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                  <Save size={20} /> {editingNews ? 'Update' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageBerita
