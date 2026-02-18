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
      setFailedImages((prev) => [...prev, src])
    }
  }

  const isImageFailed = (src) => failedImages.includes(src)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Kegiatan</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan momen berharga di Rumah Quran Syababul Khair
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group bg-white rounded-2xl overflow-hidden card-shadow card-shadow-hover cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  {!isImageFailed(image.src) ? (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(image.src)}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                      <ImageIcon className="text-teal-400" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">Lihat Detail</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-teal-600 text-sm font-semibold mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="text-gray-300 mx-auto mb-4" size={64} />
              <p className="text-gray-500 text-lg">Belum ada foto dalam kategori ini</p>
            </div>
          )}

          {failedImages.length > 0 && (
            <p className="text-center text-sm text-amber-700 mt-8">
              Sebagian foto belum ditemukan. Tambahkan file foto ke folder static/images/galeri dan static/images/bg.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div
            className="max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={e => e.stopPropagation()}
          >
            <div className="md:w-2/3 bg-black flex items-center justify-center">
              {!isImageFailed(selectedImage.src) ? (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[60vh] md:max-h-full w-full object-contain"
                />
              ) : (
                <div className="h-64 w-full flex items-center justify-center text-white/50">
                  <ImageIcon size={64} />
                  <span className="ml-2">Gambar tidak tersedia</span>
                </div>
              )}
            </div>
            <div className="md:w-1/3 p-8 flex flex-col justify-center bg-white">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4 w-fit">
                {selectedImage.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedImage.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galeri
