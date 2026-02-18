import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = ['Semua', 'Kegiatan Mengaji', 'Wisuda', 'Lomba', 'Kegiatan Outdoor']
  const [activeCategory, setActiveCategory] = useState('Semua')

  // Sample gallery data - in production this would come from API
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/mengaji-1.jpg',
      title: 'Kegiatan Mengaji Rutin',
      category: 'Kegiatan Mengaji',
      description: 'Santri sedang belajar mengaji dengan metode klasikal'
    },
    {
      id: 2,
      src: '/images/gallery/mengaji-2.jpg',
      title: 'Belajar Tahsin',
      category: 'Kegiatan Mengaji',
      description: 'Pembelajaran tajwid dengan ustadz'
    },
    {
      id: 3,
      src: '/images/gallery/wisuda-1.jpg',
      title: 'Wisuda Santri 2024',
      category: 'Wisuda',
      description: 'Acara wisuda santri yang telah menyelesaikan program'
    },
    {
      id: 4,
      src: '/images/gallery/lomba-1.jpg',
      title: 'Lomba Tahfidz',
      category: 'Lomba',
      description: 'Kompetisi hafalan Al-Quran antar santri'
    },
    {
      id: 5,
      src: '/images/gallery/outdoor-1.jpg',
      title: 'Kegiatan Outdoor',
      category: 'Kegiatan Outdoor',
      description: 'Rihlah edukatif bersama santri'
    },
    {
      id: 6,
      src: '/images/gallery/mengaji-3.jpg',
      title: 'Setoran Hafalan',
      category: 'Kegiatan Mengaji',
      description: 'Santri sedang menyetorkan hafalan'
    },
    {
      id: 7,
      src: '/images/gallery/wisuda-2.jpg',
      title: 'Foto Bersama Wisuda',
      category: 'Wisuda',
      description: 'Foto bersama setelah acara wisuda'
    },
    {
      id: 8,
      src: '/images/gallery/lomba-2.jpg',
      title: 'Penyerahan Hadiah',
      category: 'Lomba',
      description: 'Penyerahan hadiah kepada pemenang lomba'
    },
    {
      id: 9,
      src: '/images/gallery/mengaji-4.jpg',
      title: 'Kelas Iqro',
      category: 'Kegiatan Mengaji',
      description: 'Pembelajaran untuk santri pemula'
    },
    {
      id: 10,
      src: '/images/gallery/outdoor-2.jpg',
      title: 'Piknik Bersama',
      category: 'Kegiatan Outdoor',
      description: 'Kegiatan refreshing di alam terbuka'
    },
    {
      id: 11,
      src: '/images/gallery/mengaji-5.jpg',
      title: 'Muroja\'ah Bersama',
      category: 'Kegiatan Mengaji',
      description: 'Kegiatan mengulang hafalan bersama-sama'
    },
    {
      id: 12,
      src: '/images/gallery/wisuda-3.jpg',
      title: 'Sambutan Pimpinan',
      category: 'Wisuda',
      description: 'Sambutan pimpinan yayasan pada acara wisuda'
    }
  ]

  const filteredImages = activeCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

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
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan momen berharga di Rumah Quran Syababul Khair
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl overflow-hidden card-shadow card-shadow-hover transition-all duration-300 flex items-center justify-center relative">
                  <ImageIcon className="text-teal-400" size={48} />
                  {/* Overlay */}
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
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image container */}
          <div className="max-w-4xl max-h-[80vh] mx-8">
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 aspect-video rounded-2xl flex items-center justify-center">
              <ImageIcon className="text-teal-400" size={96} />
            </div>
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-amber-400 mt-2">{selectedImage.category}</p>
              <p className="text-gray-400 text-sm mt-4">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 p-2"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {/* CTA Section */}
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
