import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { defaultGalleryImages } from '../data/siteContent'

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [failedImages, setFailedImages] = useState([])

  const categories = useMemo(() => {
    const unique = [...new Set(defaultGalleryImages.map((item) => item.category))]
    return ['Semua', ...unique]
  }, [])

  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredImages = activeCategory === 'Semua' 
    ? defaultGalleryImages 
    : defaultGalleryImages.filter(img => img.category === activeCategory)

  const isImageFailed = (src) => failedImages.includes(src)

  const handleImageError = (src) => {
    if (!failedImages.includes(src)) {
      setFailedImages((prev) => [...prev, src])
    }
  }

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(filteredImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/rq-syababul-khair-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-teal-950/75"></div>
        <div className="absolute inset-0 pattern-islamic"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan momen berharga di Rumah Quran Syababul Khair
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden card-shadow card-shadow-hover transition-all duration-300 relative bg-white">
                  {!isImageFailed(image.src) ? (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => handleImageError(image.src)}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                      <ImageIcon className="text-teal-400" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h4 className="font-semibold mb-1">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="text-gray-300 mx-auto mb-4" size={64} />
              <p className="text-gray-500">Belum ada foto dalam kategori ini</p>
            </div>
          )}

          {failedImages.length > 0 && (
            <p className="text-center text-sm text-amber-700 mt-8">
              Sebagian foto belum ditemukan. Tambahkan file foto ke folder static/images/galeri dan static/images/bg.
            </p>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-4xl max-h-[80vh] mx-8">
            {isImageFailed(selectedImage.src) ? (
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 aspect-video rounded-2xl flex items-center justify-center">
                <ImageIcon className="text-teal-400" size={96} />
              </div>
            ) : (
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] w-full object-contain rounded-2xl"
                onError={() => handleImageError(selectedImage.src)}
              />
            )}
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-amber-400 mt-2">{selectedImage.category}</p>
              <p className="text-gray-400 text-sm mt-4">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 p-2"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ingin Melihat Langsung Kegiatan Kami?
          </h2>
          <p className="text-gray-600 mb-8">
            Kunjungi Rumah Quran Syababul Khair dan lihat langsung suasana belajar yang kondusif
          </p>
          <a
            href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Kunjungi Kami
          </a>
        </div>
      </section>
    </div>
  )
}

export default Galeri
