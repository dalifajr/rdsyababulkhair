import { useState, useEffect } from 'react'
import { Search, Eye, Check, X, Download } from 'lucide-react'
import { getRegistrations, saveRegistrations } from '../../data/siteContent'

const ManagePendaftaran = () => {
  const [registrations, setRegistrations] = useState([])
  useEffect(() => { setRegistrations(getRegistrations()) }, [])

  const [showDetail, setShowDetail] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('Semua')

  const statuses = ['Semua', 'Baru', 'Proses', 'Diterima', 'Ditolak']

  const updateStatus = (id, newStatus) => {
    const updated = registrations.map(r => r.id === id ? { ...r, status: newStatus } : r)
    setRegistrations(updated); saveRegistrations(updated)
  }

  const filteredRegistrations = registrations.filter(r => {
    const matchSearch = r.namaSantri.toLowerCase().includes(searchQuery.toLowerCase()) || r.namaOrtu.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = filterStatus === 'Semua' || r.status === filterStatus
    return matchSearch && matchStatus
  }).sort((a, b) => new Date(b.tanggalDaftar) - new Date(a.tanggalDaftar))

  const getStatusStyle = (status) => {
    const map = {
      'Baru': { background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' },
      'Proses': { background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' },
      'Diterima': { background: 'var(--md-secondary-container)', color: 'var(--md-on-secondary-container)' },
      'Ditolak': { background: 'var(--md-error-container)', color: 'var(--md-on-error-container)' },
    }
    return map[status] || { background: 'var(--md-surface-container-high)', color: 'var(--md-on-surface-variant)' }
  }

  const getStatusDot = (status) => {
    const map = { 'Baru': 'var(--md-primary)', 'Proses': 'var(--md-tertiary)', 'Diterima': 'var(--md-secondary)', 'Ditolak': 'var(--md-error)' }
    return map[status] || 'var(--md-outline)'
  }

  const exportToCSV = () => {
    const headers = ['Nama Santri', 'Nama Orang Tua', 'Telepon', 'Email', 'Program', 'Tanggal Daftar', 'Status']
    const data = filteredRegistrations.map(r => [r.namaSantri, r.namaOrtu, r.telepon, r.email, r.program, r.tanggalDaftar, r.status])
    const csvContent = [headers, ...data].map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'pendaftaran.csv'; a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Data Pendaftaran</h1>
          <p style={{ color: 'var(--md-on-surface-variant)' }}>Kelola pendaftaran santri baru</p>
        </div>
        <button onClick={exportToCSV} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
          style={{ background: 'var(--md-secondary)', color: 'var(--md-on-secondary)' }}>
          <Download size={20} /> Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Baru', 'Proses', 'Diterima', 'Ditolak'].map((status, i) => (
          <div key={i} className="m3-card-elevated p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ background: getStatusDot(status) }}></div>
              <span style={{ color: 'var(--md-on-surface-variant)' }}>{status}</span>
            </div>
            <p className="text-2xl font-bold mt-2" style={{ color: 'var(--md-on-surface)' }}>
              {registrations.filter(r => r.status === status).length}
            </p>
          </div>
        ))}
      </div>

      {/* Search & Filter Chips */}
      <div className="m3-card-elevated p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--md-on-surface-variant)' }} />
            <input type="text" placeholder="Cari pendaftar..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="m3-input pl-12" />
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map(s => (
              <button key={s} onClick={() => setFilterStatus(s)} className={`m3-chip ${filterStatus === s ? 'selected' : ''}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="m3-card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--md-surface-container-low)' }}>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Nama Santri</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Program</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Tanggal</th>
                <th className="text-left py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Status</th>
                <th className="text-right py-4 px-6 text-sm font-semibold" style={{ color: 'var(--md-on-surface-variant)' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map(reg => {
                const s = getStatusStyle(reg.status)
                return (
                  <tr key={reg.id} style={{ borderTop: '1px solid var(--md-outline-variant)' }}>
                    <td className="py-4 px-6">
                      <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{reg.namaSantri}</p>
                      <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{reg.namaOrtu}</p>
                    </td>
                    <td className="py-4 px-6" style={{ color: 'var(--md-on-surface-variant)' }}>{reg.program}</td>
                    <td className="py-4 px-6" style={{ color: 'var(--md-on-surface-variant)' }}>{reg.tanggalDaftar}</td>
                    <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-xs font-medium" style={s}>{reg.status}</span></td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => setShowDetail(reg)} className="p-2 rounded-full" style={{ color: 'var(--md-on-surface-variant)' }} title="Detail"><Eye size={18} /></button>
                        {reg.status !== 'Diterima' && <button onClick={() => updateStatus(reg.id, 'Diterima')} className="p-2 rounded-full" style={{ color: 'var(--md-secondary)' }} title="Terima"><Check size={18} /></button>}
                        {reg.status !== 'Ditolak' && <button onClick={() => updateStatus(reg.id, 'Ditolak')} className="p-2 rounded-full" style={{ color: 'var(--md-error)' }} title="Tolak"><X size={18} /></button>}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {filteredRegistrations.length === 0 && <div className="text-center py-12" style={{ color: 'var(--md-on-surface-variant)' }}>Tidak ada data pendaftaran</div>}
      </div>

      {/* Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg" style={{ background: 'var(--md-surface-container-low)', borderRadius: 'var(--md-shape-xl)' }}>
            <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
              <h2 className="text-xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Detail Pendaftaran</h2>
              <button onClick={() => setShowDetail(null)} className="p-2 rounded-full" style={{ color: 'var(--md-on-surface-variant)' }}><X size={24} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Nama Santri</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.namaSantri}</p>
                </div>
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Status</label>
                  <p><span className="px-3 py-1 rounded-full text-xs font-medium" style={getStatusStyle(showDetail.status)}>{showDetail.status}</span></p>
                </div>
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Nama Orang Tua</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.namaOrtu}</p>
                </div>
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Program</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.program}</p>
                </div>
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Telepon</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.telepon}</p>
                </div>
                <div>
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Email</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.email}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Tanggal Pendaftaran</label>
                  <p className="font-medium" style={{ color: 'var(--md-on-surface)' }}>{showDetail.tanggalDaftar}</p>
                </div>
                {showDetail.details && (
                  <>
                    <div className="col-span-2 mt-2 pt-2" style={{ borderTop: '1px solid var(--md-outline-variant)' }}>
                      <h4 className="font-semibold mb-2" style={{ color: 'var(--md-on-surface)' }}>Data Lengkap</h4>
                    </div>
                    <div>
                      <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>TTL</label>
                      <p className="text-sm" style={{ color: 'var(--md-on-surface)' }}>{showDetail.details.tempatLahir}, {showDetail.details.tanggalLahir}</p>
                    </div>
                    <div>
                      <label className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>Alamat</label>
                      <p className="text-sm" style={{ color: 'var(--md-on-surface)' }}>{showDetail.details.alamat}</p>
                    </div>
                  </>
                )}
              </div>
              <div className="pt-4 flex gap-3" style={{ borderTop: '1px solid var(--md-outline-variant)' }}>
                <button onClick={() => { updateStatus(showDetail.id, 'Diterima'); setShowDetail(null) }}
                  className="flex-1 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                  style={{ background: 'var(--md-secondary)', color: 'var(--md-on-secondary)' }}>Terima</button>
                <button onClick={() => { updateStatus(showDetail.id, 'Ditolak'); setShowDetail(null) }}
                  className="flex-1 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                  style={{ background: 'var(--md-error)', color: 'var(--md-on-error)' }}>Tolak</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagePendaftaran
