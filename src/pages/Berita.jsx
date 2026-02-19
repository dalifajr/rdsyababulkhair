import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, Clock, FileText } from 'lucide-react'
import { getNewsItems } from '../data/siteContent'

const Berita = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    const allNews = getNewsItems()
    setNewsItems(allNews.filter(item => item.status === 'Published'))
  }, [])

  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Prestasi', 'Tips']

  const filteredNews = selectedCategory === 'Semua'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    } catch { return dateString }
  }

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Informasi</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Update terbaru seputar kegiatan dan informasi Rumah Quran Syababul Khair</p>
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

      {/* News Grid */}
      <section className="py-16" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <>
              {/* Featured Post */}
              <div className="mb-12">
                <div className="m3-card-elevated overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 flex items-center justify-center min-h-[300px]" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                      <div className="text-center">
                        <FileText className="mx-auto mb-3 opacity-30" size={64} />
                        <span className="text-sm font-medium opacity-50">{filteredNews[0].category}</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                        {filteredNews[0].category}
                      </span>
                      <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>{filteredNews[0].title}</h2>
                      <p className="mb-6" style={{ color: 'var(--md-on-surface-variant)' }}>{filteredNews[0].excerpt}</p>
                      <div className="flex items-center gap-6 text-sm mb-6" style={{ color: 'var(--md-on-surface-variant)' }}>
                        <span className="flex items-center gap-2"><Calendar size={16} />{formatDate(filteredNews[0].date)}</span>
                        <span className="flex items-center gap-2"><User size={16} />{filteredNews[0].author}</span>
                        <span className="flex items-center gap-2"><Clock size={16} />{filteredNews[0].readTime}</span>
                      </div>
                      <button className="inline-flex items-center gap-2 font-semibold" style={{ color: 'var(--md-primary)' }}>
                        Baca Selengkapnya <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Posts */}
              {filteredNews.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.slice(1).map(news => (
                    <article key={news.id} className="m3-card-elevated overflow-hidden transition-all duration-200 hover:scale-[1.02]">
                      <div className="p-8 flex items-center justify-center" style={{ background: 'var(--md-primary-container)' }}>
                        <FileText size={40} style={{ color: 'var(--md-on-primary-container)', opacity: 0.4 }} />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' }}>
                            {news.category}
                          </span>
                          <span className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{formatDate(news.date)}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: 'var(--md-on-surface)' }}>{news.title}</h3>
                        <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--md-on-surface-variant)' }}>{news.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>
                            <User size={14} />{news.author}
                          </div>
                          <button className="font-medium text-sm flex items-center gap-1" style={{ color: 'var(--md-primary)' }}>
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
              <Calendar size={64} className="mx-auto mb-4" style={{ color: 'var(--md-outline-variant)' }} />
              <p className="text-lg" style={{ color: 'var(--md-on-surface-variant)' }}>Belum ada berita dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ background: 'var(--md-surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Dapatkan Update Terbaru</h2>
          <p className="mb-8" style={{ color: 'var(--md-on-surface-variant)' }}>Daftarkan email Anda untuk mendapatkan informasi terbaru</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Masukkan email Anda" className="m3-input flex-1" />
            <button type="submit" className="px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Berita
