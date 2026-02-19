import { useState, useEffect } from 'react'
import { Image as ImageIcon, X } from 'lucide-react'
import { getGalleryImages } from '../data/siteContent'

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [selectedImage, setSelectedImage] = useState(null)
  const [failedImages, setFailedImages] = useState([])
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    setGalleryImages(getGalleryImages())
  }, [])

  const categories = ['Semua', 'Kegiatan Mengaji', 'Wisuda', 'Lomba', 'Kegiatan Outdoor']

  const filteredImages = selectedCategory === 'Semua'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const handleImageError = (src) => {
    if (!failedImages.includes(src)) {
      setFailedImages(prev => [...prev, src])
    }
  }

  const isImageFailed = (src) => failedImages.includes(src)

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Kegiatan</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Dokumentasi kegiatan dan momen berharga di Rumah Quran Syababul Khair</p>
        </div>
      </section>

      {/* M3 Filter Chips */}
      <section className="py-4 sticky top-20 z-40" style={{ background: 'var(--md-surface)', borderBottom: '1px solid var(--md-outline-variant)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`m3-chip ${selectedCategory === category ? 'selected' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="m3-card-elevated overflow-hidden cursor-pointer group transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] relative overflow-hidden" style={{ background: 'var(--md-surface-container-high)' }}>
                  {!isImageFailed(image.src) ? (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(image.src)}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center" style={{ background: 'var(--md-primary-container)' }}>
                      <ImageIcon size={48} style={{ color: 'var(--md-on-primary-container)', opacity: 0.5 }} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">Lihat Detail</p>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-sm font-medium mb-2 block" style={{ color: 'var(--md-primary)' }}>{image.category}</span>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--md-on-surface)' }}>{image.title}</h3>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--md-on-surface-variant)' }}>{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon size={64} style={{ color: 'var(--md-outline-variant)' }} className="mx-auto mb-4" />
              <p className="text-lg" style={{ color: 'var(--md-on-surface-variant)' }}>Belum ada foto dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* M3 Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row" style={{ background: 'var(--md-surface)', borderRadius: 'var(--md-shape-xl)' }} onClick={e => e.stopPropagation()}>
            <div className="md:w-2/3 flex items-center justify-center" style={{ background: 'var(--md-surface-container-highest)' }}>
              {!isImageFailed(selectedImage.src) ? (
                <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[60vh] md:max-h-full w-full object-contain" />
              ) : (
                <div className="h-64 w-full flex items-center justify-center gap-2" style={{ color: 'var(--md-on-surface-variant)' }}>
                  <ImageIcon size={64} />
                  <span>Gambar tidak tersedia</span>
                </div>
              )}
            </div>
            <div className="md:w-1/3 p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                {selectedImage.category}
              </span>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>{selectedImage.title}</h2>
              <p className="leading-relaxed" style={{ color: 'var(--md-on-surface-variant)' }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galeri
