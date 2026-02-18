import { useState } from 'react'
import { Plus, Trash2, Search, X, Upload, Image as ImageIcon } from 'lucide-react'

const ManageGaleri = () => {
  const [photos, setPhotos] = useState([
    { id: 1, title: 'Kegiatan Mengaji Rutin', category: 'Kegiatan Mengaji', date: '2024-12-15' },
    { id: 2, title: 'Wisuda Santri 2024', category: 'Wisuda', date: '2024-12-10' },
    { id: 3, title: 'Lomba Tahfidz', category: 'Lomba', date: '2024-12-05' },
    { id: 4, title: 'Kegiatan Outdoor', category: 'Kegiatan Outdoor', date: '2024-11-20' },
    { id: 5, title: 'Belajar Tahsin', category: 'Kegiatan Mengaji', date: '2024-11-15' },
    { id: 6, title: 'Foto Bersama Wisuda', category: 'Wisuda', date: '2024-12-10' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    file: null
  })

  const categories = ['Semua', 'Kegiatan Mengaji', 'Wisuda', 'Lomba', 'Kegiatan Outdoor']

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPhoto = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      date: new Date().toISOString().split('T')[0]
    }
    setPhotos([newPhoto, ...photos])
    setShowModal(false)
    setFormData({ title: '', category: '', file: null })
  }

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
      setPhotos(photos.filter(p => p.id !== id))
    }
  }

  const filteredPhotos = photos.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Semua' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-gray-600">Upload dan kelola foto kegiatan</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <Plus size={20} />
          Upload Foto
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari foto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-2xl overflow-hidden shadow-sm group">
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="text-teal-400" size={48} />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-900 truncate">{photo.title}</h4>
              <p className="text-sm text-gray-500">{photo.category}</p>
              <p className="text-xs text-gray-400 mt-1">{photo.date}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
          <ImageIcon className="text-gray-300 mx-auto mb-4" size={64} />
          <p className="text-gray-500">Tidak ada foto ditemukan</p>
        </div>
      )}

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Upload Foto</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Foto *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  placeholder="Masukkan judul foto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  <option value="">Pilih kategori</option>
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  File Foto *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <Upload className="text-gray-400 mx-auto mb-4" size={40} />
                  <p className="text-gray-600 mb-2">Drag & drop atau klik untuk upload</p>
                  <p className="text-sm text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="inline-block mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Pilih File
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageGaleri
