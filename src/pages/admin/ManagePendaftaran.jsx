import { useState } from 'react'
import { Search, Eye, Check, X, Download, Filter } from 'lucide-react'

const ManagePendaftaran = () => {
  const [registrations, setRegistrations] = useState([
    {
      id: 1,
      namaSantri: 'Ahmad Fadlan',
      namaOrtu: 'Budi Santoso',
      telepon: '081234567890',
      email: 'budi@email.com',
      program: 'Tahsin Anak-anak',
      tanggalDaftar: '2024-12-18',
      status: 'Baru'
    },
    {
      id: 2,
      namaSantri: 'Siti Aisyah',
      namaOrtu: 'Ahmad Fauzi',
      telepon: '081234567891',
      email: 'ahmad@email.com',
      program: 'Tahfidz',
      tanggalDaftar: '2024-12-17',
      status: 'Proses'
    },
    {
      id: 3,
      namaSantri: 'Muhammad Rizki',
      namaOrtu: 'Hasan Abdullah',
      telepon: '081234567892',
      email: 'hasan@email.com',
      program: 'Kelas Iqro',
      tanggalDaftar: '2024-12-16',
      status: 'Diterima'
    },
    {
      id: 4,
      namaSantri: 'Fatimah Zahra',
      namaOrtu: 'Umar Faruq',
      telepon: '081234567893',
      email: 'umar@email.com',
      program: 'Tahsin Remaja',
      tanggalDaftar: '2024-12-15',
      status: 'Diterima'
    },
    {
      id: 5,
      namaSantri: 'Abdullah Rahman',
      namaOrtu: 'Yusuf Ibrahim',
      telepon: '081234567894',
      email: 'yusuf@email.com',
      program: 'Tahfidz',
      tanggalDaftar: '2024-12-14',
      status: 'Ditolak'
    }
  ])

  const [showDetail, setShowDetail] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('Semua')

  const statuses = ['Semua', 'Baru', 'Proses', 'Diterima', 'Ditolak']

  const updateStatus = (id, newStatus) => {
    setRegistrations(registrations.map(r =>
      r.id === id ? { ...r, status: newStatus } : r
    ))
  }

  const filteredRegistrations = registrations.filter(r => {
    const matchesSearch = r.namaSantri.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.namaOrtu.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'Semua' || r.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    const colors = {
      'Baru': 'bg-blue-100 text-blue-700',
      'Proses': 'bg-amber-100 text-amber-700',
      'Diterima': 'bg-green-100 text-green-700',
      'Ditolak': 'bg-red-100 text-red-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const exportToCSV = () => {
    const headers = ['Nama Santri', 'Nama Orang Tua', 'Telepon', 'Email', 'Program', 'Tanggal Daftar', 'Status']
    const data = filteredRegistrations.map(r => [
      r.namaSantri, r.namaOrtu, r.telepon, r.email, r.program, r.tanggalDaftar, r.status
    ])
    
    const csvContent = [headers, ...data].map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'pendaftaran.csv'
    a.click()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Pendaftaran</h1>
          <p className="text-gray-600">Kelola pendaftaran santri baru</p>
        </div>
        <button
          onClick={exportToCSV}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <Download size={20} />
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { status: 'Baru', count: registrations.filter(r => r.status === 'Baru').length, color: 'bg-blue-500' },
          { status: 'Proses', count: registrations.filter(r => r.status === 'Proses').length, color: 'bg-amber-500' },
          { status: 'Diterima', count: registrations.filter(r => r.status === 'Diterima').length, color: 'bg-green-500' },
          { status: 'Ditolak', count: registrations.filter(r => r.status === 'Ditolak').length, color: 'bg-red-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
              <span className="text-gray-600">{stat.status}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari pendaftar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Nama Santri</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Program</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Tanggal</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((reg) => (
                <tr key={reg.id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{reg.namaSantri}</p>
                      <p className="text-sm text-gray-500">{reg.namaOrtu}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{reg.program}</td>
                  <td className="py-4 px-6 text-gray-600">{reg.tanggalDaftar}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(reg.status)}`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setShowDetail(reg)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        title="Lihat Detail"
                      >
                        <Eye size={18} />
                      </button>
                      {reg.status !== 'Diterima' && (
                        <button
                          onClick={() => updateStatus(reg.id, 'Diterima')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                          title="Terima"
                        >
                          <Check size={18} />
                        </button>
                      )}
                      {reg.status !== 'Ditolak' && (
                        <button
                          onClick={() => updateStatus(reg.id, 'Ditolak')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Tolak"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRegistrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada data pendaftaran ditemukan</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Detail Pendaftaran</h2>
              <button
                onClick={() => setShowDetail(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Nama Santri</label>
                  <p className="font-medium text-gray-900">{showDetail.namaSantri}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Status</label>
                  <p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(showDetail.status)}`}>
                      {showDetail.status}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Nama Orang Tua</label>
                  <p className="font-medium text-gray-900">{showDetail.namaOrtu}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Program</label>
                  <p className="font-medium text-gray-900">{showDetail.program}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Telepon</label>
                  <p className="font-medium text-gray-900">{showDetail.telepon}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="font-medium text-gray-900">{showDetail.email}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-gray-500">Tanggal Pendaftaran</label>
                  <p className="font-medium text-gray-900">{showDetail.tanggalDaftar}</p>
                </div>
              </div>

              <div className="pt-4 border-t flex gap-3">
                <button
                  onClick={() => {
                    updateStatus(showDetail.id, 'Diterima')
                    setShowDetail(null)
                  }}
                  className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Terima
                </button>
                <button
                  onClick={() => {
                    updateStatus(showDetail.id, 'Ditolak')
                    setShowDetail(null)
                  }}
                  className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  Tolak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagePendaftaran
