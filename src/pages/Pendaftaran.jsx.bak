import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, FileText, Send, User, MapPin, ArrowRight } from 'lucide-react'
import { getRegistrations, saveRegistrations } from '../data/siteContent'

const Pendaftaran = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    namaSantri: '',
    nikSantri: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    anakKe: '',
    jumlahSaudara: '',
    alamat: '',
    namaAyah: '',
    pekerjaanAyah: '',
    noHpAyah: '',
    namaIbu: '',
    pekerjaanIbu: '',
    noHpIbu: '',
    program: '',
    motivasi: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveStep(prev => prev + 1)
  }

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveStep(prev => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Save to "database" (siteContent/localStorage)
    const existingRegistrations = getRegistrations()
    const newRegistration = {
      id: Date.now(),
      namaSantri: formData.namaSantri,
      namaOrtu: formData.namaAyah || formData.namaIbu, // Prioritize Ayah
      telepon: formData.noHpAyah || formData.noHpIbu,
      email: `${formData.namaSantri.toLowerCase().replace(/\s/g, '')}@example.com`, // Placeholder email
      program: formData.program,
      tanggalDaftar: new Date().toISOString().split('T')[0],
      status: 'Baru',
      details: formData // Save full details
    }

    saveRegistrations([newRegistration, ...existingRegistrations])

    setIsSubmitting(false)
    setIsSuccess(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const steps = [
    { title: 'Data Santri', icon: User },
    { title: 'Data Orang Tua', icon: User },
    { title: 'Program & Lainnya', icon: FileText }
  ]

  if (isSuccess) {
    return (
      <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
        <div className="max-w-xl w-full mx-4 bg-white rounded-3xl p-8 card-shadow text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h2>
          <p className="text-gray-600 mb-8">
            Terima kasih telah mendaftar. Data Anda telah kami terima dan sedang dalam proses verifikasi.
            Kami akan menghubungi Anda melalui WhatsApp untuk informasi selanjutnya.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Daftar Santri Lain
            </button>
            <a
              href="/"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 pattern-islamic page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pendaftaran Santri Baru</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Mari bergabung menjadi bagian dari keluarga besar Rumah Quran Syababul Khair
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-0"></div>
              {steps.map((step, index) => {
                const isActive = index + 1 === activeStep
                const isCompleted = index + 1 < activeStep
                return (
                  <div key={index} className="relative z-10 flex flex-col items-center bg-gray-50 px-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${isActive || isCompleted ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                      {isCompleted ? <CheckCircle size={20} /> : index + 1}
                    </div>
                    <span className={`text-sm font-medium ${isActive ? 'text-teal-600' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl card-shadow p-8">

            {/* Step 1: Data Santri */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="text-teal-600" />
                  Identitas Calon Santri
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="namaSantri"
                      value={formData.namaSantri}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="Sesuai Akta Kelahiran"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">NIK *</label>
                    <input
                      type="number"
                      name="nikSantri"
                      value={formData.nikSantri}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="Nomor Induk Kependudukan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin *</label>
                    <select
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tempat Lahir *</label>
                    <input
                      type="text"
                      name="tempatLahir"
                      value={formData.tempatLahir}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Lahir *</label>
                    <input
                      type="date"
                      name="tanggalLahir"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap *</label>
                    <textarea
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                      placeholder="Nama jalan, RT/RW, Kelurahan, Kecamatan"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2"
                  >
                    Selanjutnya <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Data Orang Tua */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="text-teal-600" />
                  Data Orang Tua / Wali
                </h3>

                <div className="space-y-6">
                  {/* Ayah */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">Informasi Ayah</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Ayah *</label>
                        <input
                          type="text"
                          name="namaAyah"
                          value={formData.namaAyah}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pekerjaan</label>
                        <input
                          type="text"
                          name="pekerjaanAyah"
                          value={formData.pekerjaanAyah}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">No. HP / WA *</label>
                        <input
                          type="number"
                          name="noHpAyah"
                          value={formData.noHpAyah}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Ibu */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">Informasi Ibu</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Ibu *</label>
                        <input
                          type="text"
                          name="namaIbu"
                          value={formData.namaIbu}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pekerjaan</label>
                        <input
                          type="text"
                          name="pekerjaanIbu"
                          value={formData.pekerjaanIbu}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">No. HP / WA</label>
                        <input
                          type="number"
                          name="noHpIbu"
                          value={formData.noHpIbu}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2"
                  >
                    Selanjutnya <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Program & Lainnya */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="text-teal-600" />
                  Pilihan Program
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program Pilihan *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    >
                      <option value="">Pilih Program</option>
                      <option value="Tahsin Anak-anak">Tahsin Anak-anak (Pemula)</option>
                      <option value="Tahsin Remaja">Tahsin Remaja</option>
                      <option value="Tahsin Dewasa">Tahsin Dewasa</option>
                      <option value="Tahfidz">Program Tahfidz (Hafalan)</option>
                      <option value="Kelas Iqro">Kelas Iqro (Pra-Tahsin)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Motivasi Masuk</label>
                    <textarea
                      name="motivasi"
                      value={formData.motivasi}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                      placeholder="Apa motivasi Ananda/Orang Tua mendaftar di Rumah Quran Syababul Khair?"
                    ></textarea>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                    <AlertCircle className="text-amber-500 flex-shrink-0" size={24} />
                    <div className="text-sm text-amber-800">
                      <p className="font-bold mb-1">Penting!</p>
                      <p>Pastikan semua data yang diisi sudah benar. Setelah mendaftar, panitia akan menghubungi melalui nomor WhatsApp yang tertera untuk proses wawancara dan administrasi.</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Mengirim Data...' : 'Kirim Pendaftaran'}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </section>
    </div>
  )
}

export default Pendaftaran
