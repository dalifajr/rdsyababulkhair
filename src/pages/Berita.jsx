import { useState } from 'react'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

const Berita = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Prestasi', 'Tips']

  const newsItems = [
    {
      id: 1,
      title: 'Wisuda Santri Angkatan ke-5 Rumah Quran Syababul Khair',
      excerpt: 'Alhamdulillah, pada hari Minggu (15/12/2024) telah dilaksanakan wisuda santri angkatan ke-5 dengan jumlah 25 santri yang telah berhasil menghafal Juz 30.',
      category: 'Kegiatan',
      date: '2024-12-16',
      author: 'Admin',
      readTime: '5 menit'
    },
    {
      id: 2,
      title: 'Pembukaan Pendaftaran Santri Baru Tahun 2025',
      excerpt: 'Rumah Quran Syababul Khair membuka pendaftaran santri baru untuk tahun ajaran 2025. Pendaftaran dibuka mulai tanggal 1 Januari 2025.',
      category: 'Pengumuman',
      date: '2024-12-10',
      author: 'Admin',
      readTime: '3 menit'
    },
    {
      id: 3,
      title: 'Santri RQ Syababul Khair Raih Juara 1 Lomba MTQ Tingkat Kecamatan',
      excerpt: 'Membanggakan! Adik Muhammad Hafiz, santri RQ Syababul Khair berhasil meraih juara 1 dalam lomba MTQ cabang Tahfidz tingkat kecamatan.',
      category: 'Prestasi',
      date: '2024-12-05',
      author: 'Admin',
      readTime: '4 menit'
    },
    {
      id: 4,
      title: '5 Tips Efektif Menghafal Al-Quran untuk Anak-anak',
      excerpt: 'Menghafal Al-Quran membutuhkan metode yang tepat terutama untuk anak-anak. Berikut adalah tips-tips yang bisa diterapkan untuk memudahkan proses hafalan.',
      category: 'Tips',
      date: '2024-11-28',
      author: 'Ust. Ahmad',
      readTime: '7 menit'
    },
    {
      id: 5,
      title: 'Kegiatan Pesantren Kilat Ramadhan 1445 H',
      excerpt: 'Rangkaian kegiatan pesantren kilat selama bulan Ramadhan 1445 H telah sukses diselenggarakan dengan diikuti oleh lebih dari 50 santri.',
      category: 'Kegiatan',
      date: '2024-04-15',
      author: 'Admin',
      readTime: '6 menit'
    },
    {
      id: 6,
      title: 'Jadwal Libur dan Kegiatan Akhir Tahun 2024',
      excerpt: 'Pengumuman mengenai jadwal libur akhir tahun dan rangkaian kegiatan yang akan diadakan menjelang tahun baru 2025.',
      category: 'Pengumuman',
      date: '2024-12-01',
      author: 'Admin',
      readTime: '2 menit'
    }
  ]

  const filteredNews = selectedCategory === 'Semua'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Kegiatan': 'bg-teal-100 text-teal-700',
      'Pengumuman': 'bg-amber-100 text-amber-700',
      'Prestasi': 'bg-green-100 text-green-700',
      'Tips': 'bg-blue-100 text-blue-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Informasi</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Update terbaru seputar kegiatan dan informasi Rumah Quran Syababul Khair
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
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
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

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <>
              {/* Featured Post */}
              <div className="mb-12">
                <div className="bg-white rounded-3xl card-shadow overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-8 flex items-center justify-center min-h-[300px]">
                      <div className="text-teal-400 text-6xl">📰</div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit ${getCategoryColor(filteredNews[0].category)}`}>
                        {filteredNews[0].category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {filteredNews[0].title}
                      </h2>
                      <p className="text-gray-600 mb-6">{filteredNews[0].excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {formatDate(filteredNews[0].date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <User size={16} />
                          {filteredNews[0].author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} />
                          {filteredNews[0].readTime}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold">
                        Baca Selengkapnya <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Posts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.slice(1).map((news) => (
                  <article key={news.id} className="bg-white rounded-2xl card-shadow card-shadow-hover overflow-hidden transition-all duration-300">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 flex items-center justify-center">
                      <div className="text-teal-300 text-4xl">📄</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                          {news.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {formatDate(news.date)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User size={14} />
                          {news.author}
                        </div>
                        <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1">
                          Baca <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Calendar className="text-gray-300 mx-auto mb-4" size={64} />
              <p className="text-gray-500 text-lg">Belum ada berita dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dapatkan Update Terbaru</h2>
          <p className="text-gray-600 mb-8">
            Daftarkan email Anda untuk mendapatkan informasi dan berita terbaru dari Rumah Quran Syababul Khair
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all"
            >
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Berita
