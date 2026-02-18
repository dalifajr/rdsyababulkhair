import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Users, FileText, Image, ClipboardList, TrendingUp, Eye, Calendar, ArrowUpRight } from 'lucide-react'
import { getNewsItems, getGalleryImages, getRegistrations } from '../../data/siteContent'

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: 'Total Santri', value: '156', change: '+12%', icon: Users, color: 'bg-teal-500' },
    { title: 'Berita Dipublish', value: '0', change: '0', icon: FileText, color: 'bg-amber-500' },
    { title: 'Foto di Galeri', value: '0', change: '0', icon: Image, color: 'bg-green-500' },
    { title: 'Pendaftar Baru', value: '0', change: 'Bulan ini', icon: ClipboardList, color: 'bg-blue-500' },
  ])
  const [recentRegistrations, setRecentRegistrations] = useState([])
  const [recentNews, setRecentNews] = useState([])

  useEffect(() => {
    // Fetch data from local storage
    const news = getNewsItems()
    const gallery = getGalleryImages()
    const registrations = getRegistrations()

    // Calculate stats
    const publishedNews = news.filter(n => n.status === 'Published')
    const newRegistrations = registrations.filter(r => {
      const regDate = new Date(r.tanggalDaftar)
      const now = new Date()
      return regDate.getMonth() === now.getMonth() && regDate.getFullYear() === now.getFullYear()
    })

    setStats(prev => [
      prev[0], // Keep static santri count for now
      { ...prev[1], value: publishedNews.length.toString(), change: `+${publishedNews.length}` },
      { ...prev[2], value: gallery.length.toString(), change: `+${gallery.length}` },
      { ...prev[3], value: newRegistrations.length.toString(), change: `${newRegistrations.length} Bulan ini` },
    ])

    // Get recent items
    setRecentRegistrations(registrations.sort((a, b) => new Date(b.tanggalDaftar) - new Date(a.tanggalDaftar)).slice(0, 5))
    setRecentNews(news.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3))

  }, [])

  const getStatusColor = (status) => {
    const colors = {
      'Baru': 'bg-blue-100 text-blue-700',
      'Proses': 'bg-amber-100 text-amber-700',
      'Diterima': 'bg-green-100 text-green-700',
      'Ditolak': 'bg-red-100 text-red-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Selamat datang di Admin Panel RQ Syababul Khair</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Registrations */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Pendaftaran Terbaru</h2>
            <Link to="/admin/pendaftaran" className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center gap-1">
              Lihat Semua <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Nama</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Program</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRegistrations.length > 0 ? (
                  recentRegistrations.map((reg, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <span className="font-medium text-gray-900">{reg.namaSantri}</span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{reg.program}</td>
                      <td className="py-3 px-4 text-gray-600">{reg.tanggalDaftar}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(reg.status)}`}>
                          {reg.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center text-gray-500">Belum ada pendaftaran</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Berita Terbaru</h2>
            <Link to="/admin/berita" className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center gap-1">
              Kelola <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {recentNews.length > 0 ? (
              recentNews.map((news, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{news.title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {news.date}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Eye size={14} />
                      {news.views}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">Belum ada berita</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Aksi Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Tambah Berita', icon: FileText, href: '/admin/berita', color: 'bg-teal-50 text-teal-600 hover:bg-teal-100' },
            { title: 'Upload Foto', icon: Image, href: '/admin/galeri', color: 'bg-amber-50 text-amber-600 hover:bg-amber-100' },
            { title: 'Edit Profil', icon: Users, href: '/admin/profile', color: 'bg-green-50 text-green-600 hover:bg-green-100' },
            { title: 'Lihat Pendaftar', icon: ClipboardList, href: '/admin/pendaftaran', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
          ].map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                to={action.href}
                className={`p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-colors ${action.color}`}
              >
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
