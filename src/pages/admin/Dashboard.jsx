import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, FileText, Image, ClipboardList, TrendingUp, Eye, Calendar, ArrowUpRight } from 'lucide-react'
import { getNewsItems, getGalleryImages, getRegistrations } from '../../data/siteContent'

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: 'Total Santri', value: '156', change: '+12%', icon: Users, bg: 'var(--md-primary)', on: 'var(--md-on-primary)' },
    { title: 'Berita Dipublish', value: '0', change: '0', icon: FileText, bg: 'var(--md-tertiary)', on: 'var(--md-on-tertiary)' },
    { title: 'Foto di Galeri', value: '0', change: '0', icon: Image, bg: 'var(--md-secondary)', on: 'var(--md-on-secondary)' },
    { title: 'Pendaftar Baru', value: '0', change: 'Bulan ini', icon: ClipboardList, bg: 'var(--md-primary)', on: 'var(--md-on-primary)' },
  ])
  const [recentRegistrations, setRecentRegistrations] = useState([])
  const [recentNews, setRecentNews] = useState([])

  useEffect(() => {
    const news = getNewsItems()
    const gallery = getGalleryImages()
    const registrations = getRegistrations()
    const publishedNews = news.filter(n => n.status === 'Published')
    const newRegistrations = registrations.filter(r => {
      const d = new Date(r.tanggalDaftar); const now = new Date()
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    })
    setStats(prev => [
      prev[0],
      { ...prev[1], value: publishedNews.length.toString(), change: `+${publishedNews.length}` },
      { ...prev[2], value: gallery.length.toString(), change: `+${gallery.length}` },
      { ...prev[3], value: newRegistrations.length.toString(), change: `${newRegistrations.length} Bulan ini` },
    ])
    setRecentRegistrations(registrations.sort((a, b) => new Date(b.tanggalDaftar) - new Date(a.tanggalDaftar)).slice(0, 5))
    setRecentNews(news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3))
  }, [])

  const getStatusStyle = (status) => {
    const map = {
      'Baru': { bg: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' },
      'Proses': { bg: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' },
      'Diterima': { bg: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' },
      'Ditolak': { bg: 'var(--md-error-container)', color: 'var(--md-on-error-container)' },
    }
    return map[status] || { bg: 'var(--md-surface-container-high)', color: 'var(--md-on-surface-variant)' }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Dashboard</h1>
        <p style={{ color: 'var(--md-on-surface-variant)' }}>Selamat datang di Admin Panel RQ Syababul Khair</p>
      </div>

      {/* M3 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="m3-card-elevated p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: stat.bg, color: stat.on }}>
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--md-primary)' }}>{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold" style={{ color: 'var(--md-on-surface)' }}>{stat.value}</h3>
              <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{stat.title}</p>
            </div>
          )
        })}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Registrations */}
        <div className="lg:col-span-2 m3-card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold" style={{ color: 'var(--md-on-surface)' }}>Pendaftaran Terbaru</h2>
            <Link to="/admin/pendaftaran" className="text-sm font-medium flex items-center gap-1" style={{ color: 'var(--md-primary)' }}>
              Lihat Semua <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
                  <th className="text-left py-3 px-4 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Nama</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Program</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRegistrations.length > 0 ? recentRegistrations.map((reg, i) => {
                  const s = getStatusStyle(reg.status)
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--md-on-surface)' }}>{reg.namaSantri}</td>
                      <td className="py-3 px-4" style={{ color: 'var(--md-on-surface-variant)' }}>{reg.program}</td>
                      <td className="py-3 px-4" style={{ color: 'var(--md-on-surface-variant)' }}>{reg.tanggalDaftar}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: s.bg, color: s.color }}>{reg.status}</span>
                      </td>
                    </tr>
                  )
                }) : (
                  <tr><td colSpan="4" className="py-4 text-center" style={{ color: 'var(--md-on-surface-variant)' }}>Belum ada pendaftaran</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent News */}
        <div className="m3-card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold" style={{ color: 'var(--md-on-surface)' }}>Berita Terbaru</h2>
            <Link to="/admin/berita" className="text-sm font-medium flex items-center gap-1" style={{ color: 'var(--md-primary)' }}>
              Kelola <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {recentNews.length > 0 ? recentNews.map((news, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--md-surface-container-low)' }}>
                <h4 className="font-medium mb-2 line-clamp-2" style={{ color: 'var(--md-on-surface)' }}>{news.title}</h4>
                <div className="flex items-center justify-between text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>
                  <span className="flex items-center gap-1"><Calendar size={14} />{news.date}</span>
                  <span className="flex items-center gap-1"><Eye size={14} />{news.views}</span>
                </div>
              </div>
            )) : (
              <p className="text-center py-4" style={{ color: 'var(--md-on-surface-variant)' }}>Belum ada berita</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="m3-card-elevated p-6">
        <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--md-on-surface)' }}>Aksi Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Tambah Berita', icon: FileText, href: '/admin/berita', bg: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' },
            { title: 'Upload Foto', icon: Image, href: '/admin/galeri', bg: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' },
            { title: 'Edit Profil', icon: Users, href: '/admin/profile', bg: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' },
            { title: 'Lihat Pendaftar', icon: ClipboardList, href: '/admin/pendaftaran', bg: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' },
          ].map((action, i) => {
            const Icon = action.icon
            return (
              <Link key={i} to={action.href} className="p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                style={{ background: action.bg, color: action.color }}>
                <Icon size={28} />
                <span className="font-medium text-sm text-center">{action.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
