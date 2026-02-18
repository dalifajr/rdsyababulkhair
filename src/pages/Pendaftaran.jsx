import { useState } from 'react'
import { User, Calendar, Phone, Mail, MapPin, BookOpen, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    namaSantri: '',
    tanggalLahir: '',
    jenisKelamin: '',
    namaOrtu: '',
    telepon: '',
    email: '',
    alamat: '',
    program: '',
    pengalamanMengaji: '',
    motivasi: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const programs = [
    { value: 'tahsin-anak', label: 'Tahsin Anak-anak (4-12 tahun)' },
    { value: 'tahsin-remaja', label: 'Tahsin Remaja (13-17 tahun)' },
    { value: 'tahsin-dewasa', label: 'Tahsin Dewasa (18+ tahun)' },
    { value: 'tahfidz', label: 'Program Tahfidz' },
    { value: 'iqro', label: 'Kelas Iqro (Pemula)' }
  ]

  const requirements = [
    'Mengisi formulir pendaftaran dengan lengkap',
    'Fotokopi Kartu Keluarga',
    'Fotokopi Akta Kelahiran (untuk anak-anak)',
    'Pas foto 3x4 sebanyak 2 lembar',
    'Membayar biaya pendaftaran Rp 50.000',
    'Mengikuti tes penempatan kelas'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        namaSantri: '',
        tanggalLahir: '',
        jenisKelamin: '',
        namaOrtu: '',
        telepon: '',
        email: '',
        alamat: '',
        program: '',
        pengalamanMengaji: '',
        motivasi: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pendaftaran Santri</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Daftarkan diri atau putra-putri Anda untuk bergabung bersama kami dalam perjalanan mulia mempelajari Al-Quran
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="text-teal-600" />
                Persyaratan Pendaftaran
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration Info */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calendar className="text-teal-600" />
                Informasi Pendaftaran
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Periode Pendaftaran</h4>
                  <p className="text-gray-600">Pendaftaran dibuka sepanjang tahun. Santri baru dapat mulai belajar setelah proses pendaftaran selesai.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Biaya Bulanan</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Tahsin: Rp 100.000/bulan</li>
                    <li>• Tahfidz: Rp 150.000/bulan</li>
                    <li>• Kelas Iqro: Rp 75.000/bulan</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kontak Pendaftaran</h4>
                  <p className="text-gray-600">WhatsApp: +62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulir Pendaftaran Online</h2>
            <p className="text-gray-600">
              Isi formulir di bawah ini untuk mendaftar. Tim kami akan menghubungi Anda untuk proses selanjutnya.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 rounded-2xl flex items-start gap-4">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-green-800">Pendaftaran Berhasil!</h4>
                <p className="text-green-700 mt-1">
                  Terima kasih telah mendaftar. Tim kami akan menghubungi Anda dalam 1-2 hari kerja.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 rounded-2xl flex items-start gap-4">
              <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-red-800">Terjadi Kesalahan</h4>
                <p className="text-red-700 mt-1">
                  Mohon maaf, terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Data Santri */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="text-teal-600" size={20} />
                Data Santri
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap Santri *
                  </label>
                  <input
                    type="text"
                    name="namaSantri"
                    value={formData.namaSantri}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Lahir *
                  </label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kelamin *
                  </label>
                  <select
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  >
                    <option value="">Pilih jenis kelamin</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program yang Diminati *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  >
                    <option value="">Pilih program</option>
                    {programs.map(prog => (
                      <option key={prog.value} value={prog.value}>{prog.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Data Orang Tua / Wali */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="text-teal-600" size={20} />
                Data Orang Tua / Wali
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Orang Tua / Wali *
                  </label>
                  <input
                    type="text"
                    name="namaOrtu"
                    value={formData.namaOrtu}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Masukkan nama orang tua/wali"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat *
                  </label>
                  <input
                    type="text"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-teal-600" size={20} />
                Informasi Tambahan
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pengalaman Mengaji Sebelumnya
                  </label>
                  <select
                    name="pengalamanMengaji"
                    value={formData.pengalamanMengaji}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  >
                    <option value="">Pilih pengalaman</option>
                    <option value="belum-pernah">Belum pernah mengaji</option>
                    <option value="iqro">Sedang/sudah Iqro</option>
                    <option value="al-quran">Sudah bisa membaca Al-Quran</option>
                    <option value="lancar">Sudah lancar dengan tajwid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivasi Belajar Al-Quran
                  </label>
                  <textarea
                    name="motivasi"
                    value={formData.motivasi}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="Ceritakan motivasi Anda untuk belajar Al-Quran..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Pendaftaran
                  </>
                )}
              </button>
              <Link
                to="/kontak"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
              >
                <Phone size={20} />
                Hubungi Kami
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pertanyaan Umum</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Berapa usia minimal untuk mendaftar?',
                a: 'Kami menerima santri mulai dari usia 4 tahun untuk kelas Iqro, dan semua usia untuk kelas Tahsin.'
              },
              {
                q: 'Apakah orang dewasa juga bisa mendaftar?',
                a: 'Tentu! Kami memiliki program khusus untuk dewasa dengan jadwal yang fleksibel.'
              },
              {
                q: 'Bagaimana jika santri belum bisa membaca huruf hijaiyah?',
                a: 'Tidak masalah. Kami memiliki kelas Iqro khusus untuk santri yang baru mulai belajar.'
              },
              {
                q: 'Apakah ada sistem pembayaran cicilan?',
                a: 'Ya, kami menyediakan opsi pembayaran cicilan untuk biaya bulanan. Silakan hubungi admin untuk informasi lebih lanjut.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl card-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pendaftaran
