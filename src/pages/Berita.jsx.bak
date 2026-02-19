import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, Clock, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getNewsItems } from '../data/siteContent'

const Berita = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    // Load published news items
    const allNews = getNewsItems()
    setNewsItems(allNews.filter(item => item.status === 'Published'))
  }, [])

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Prestasi', 'Tips']

  const filteredNews = selectedCategory === 'Semua'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    } catch {
      return dateString
    }
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
      <section className="gradient-hero py-20 pattern-islamic page-hero">
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
      <section className="py-6 filter-bar sticky top-20 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-200'
                    : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'
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
              {/* Featured Post (First Item) */}
              <div className="mb-12">
                <div className="bg-white rounded-3xl card-shadow overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 flex items-center justify-center min-h-[300px]">
                      <div className="text-center">
                        <FileText className="text-white/30 mx-auto mb-3" size={64} />
                        <span className="text-white/40 text-sm font-medium">{filteredNews[0].category}</span>
                      </div>
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
              {filteredNews.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.slice(1).map((news) => (
                    <article key={news.id} className="bg-white rounded-2xl card-shadow card-shadow-hover overflow-hidden transition-all duration-300">
                      <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 flex items-center justify-center">
                        <FileText className="text-teal-300" size={40} />
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
              )}
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
