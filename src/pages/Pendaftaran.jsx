import { useState } from 'react'
import { CheckCircle, AlertCircle, FileText, Send, User, ArrowRight, ArrowLeft } from 'lucide-react'
import { getRegistrations, saveRegistrations } from '../data/siteContent'

const Pendaftaran = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    namaSantri: '', nikSantri: '', tempatLahir: '', tanggalLahir: '',
    jenisKelamin: '', anakKe: '', jumlahSaudara: '', alamat: '',
    namaAyah: '', pekerjaanAyah: '', noHpAyah: '',
    namaIbu: '', pekerjaanIbu: '', noHpIbu: '',
    program: '', motivasi: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveStep(prev => prev + 1) }
  const handlePrev = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveStep(prev => prev - 1) }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    const existingRegistrations = getRegistrations()
    const newRegistration = {
      id: Date.now(),
      namaSantri: formData.namaSantri,
      namaOrtu: formData.namaAyah || formData.namaIbu,
      telepon: formData.noHpAyah || formData.noHpIbu,
      email: `${formData.namaSantri.toLowerCase().replace(/\s/g, '')}@example.com`,
      program: formData.program,
      tanggalDaftar: new Date().toISOString().split('T')[0],
      status: 'Baru',
      details: formData
    }
    saveRegistrations([newRegistration, ...existingRegistrations])
    setIsSubmitting(false)
    setIsSuccess(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const steps = [
    { title: 'Data Santri', icon: User },
    { title: 'Data Orang Tua', icon: User },
    { title: 'Program', icon: FileText }
  ]

  if (isSuccess) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-xl w-full mx-4 p-8 text-center m3-card-elevated">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--md-primary-container)' }}>
            <CheckCircle size={48} style={{ color: 'var(--md-primary)' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Pendaftaran Berhasil!</h2>
          <p className="mb-8" style={{ color: 'var(--md-on-surface-variant)' }}>
            Terima kasih telah mendaftar. Data Anda telah kami terima dan sedang dalam proses verifikasi.
            Kami akan menghubungi Anda melalui WhatsApp untuk informasi selanjutnya.
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
              Daftar Santri Lain
            </button>
            <a href="/" className="px-6 py-3 rounded-full font-medium transition-colors" style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </div>
    )
  }

  const inputClass = "m3-input"
  const labelClass = "block text-sm font-medium mb-2"

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pendaftaran Santri Baru</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Mari bergabung menjadi bagian dari keluarga besar Rumah Quran Syababul Khair</p>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* M3 Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5" style={{ background: 'var(--md-outline-variant)' }}></div>
              {steps.map((step, index) => {
                const isActive = index + 1 === activeStep
                const isCompleted = index + 1 < activeStep
                return (
                  <div key={index} className="relative z-10 flex flex-col items-center px-2" style={{ background: 'var(--md-surface-container-lowest)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all"
                      style={{
                        background: isActive || isCompleted ? 'var(--md-primary)' : 'var(--md-surface-container-high)',
                        color: isActive || isCompleted ? 'var(--md-on-primary)' : 'var(--md-on-surface-variant)'
                      }}>
                      {isCompleted ? <CheckCircle size={20} /> : index + 1}
                    </div>
                    <span className="text-sm font-medium" style={{ color: isActive ? 'var(--md-primary)' : 'var(--md-on-surface-variant)' }}>
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="m3-card-elevated p-8">
            {/* Step 1 */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--md-on-surface)' }}>
                  <User style={{ color: 'var(--md-primary)' }} /> Identitas Calon Santri
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Nama Lengkap *</label>
                    <input type="text" name="namaSantri" value={formData.namaSantri} onChange={handleChange} required className={inputClass} placeholder="Sesuai Akta Kelahiran" />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>NIK *</label>
                    <input type="number" name="nikSantri" value={formData.nikSantri} onChange={handleChange} required className={inputClass} placeholder="Nomor Induk Kependudukan" />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Jenis Kelamin *</label>
                    <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} required className={inputClass}>
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="L">Laki-laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Tempat Lahir *</label>
                    <input type="text" name="tempatLahir" value={formData.tempatLahir} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Tanggal Lahir *</label>
                    <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Alamat Lengkap *</label>
                    <textarea name="alamat" value={formData.alamat} onChange={handleChange} required rows={3} className={`${inputClass} resize-none`} placeholder="Nama jalan, RT/RW, Kelurahan, Kecamatan"></textarea>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button type="button" onClick={handleNext} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    Selanjutnya <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--md-on-surface)' }}>
                  <User style={{ color: 'var(--md-primary)' }} /> Data Orang Tua / Wali
                </h3>
                {/* Ayah */}
                <div className="p-6 rounded-2xl" style={{ background: 'var(--md-surface-container-low)', border: '1px solid var(--md-outline-variant)' }}>
                  <h4 className="font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Informasi Ayah</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Nama Ayah *</label>
                      <input type="text" name="namaAyah" value={formData.namaAyah} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Pekerjaan</label>
                      <input type="text" name="pekerjaanAyah" value={formData.pekerjaanAyah} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>No. HP / WA *</label>
                      <input type="number" name="noHpAyah" value={formData.noHpAyah} onChange={handleChange} required className={inputClass} />
                    </div>
                  </div>
                </div>
                {/* Ibu */}
                <div className="p-6 rounded-2xl" style={{ background: 'var(--md-surface-container-low)', border: '1px solid var(--md-outline-variant)' }}>
                  <h4 className="font-bold mb-4" style={{ color: 'var(--md-on-surface)' }}>Informasi Ibu</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Nama Ibu *</label>
                      <input type="text" name="namaIbu" value={formData.namaIbu} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Pekerjaan</label>
                      <input type="text" name="pekerjaanIbu" value={formData.pekerjaanIbu} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>No. HP / WA</label>
                      <input type="number" name="noHpIbu" value={formData.noHpIbu} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={handlePrev} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-colors" style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>
                    <ArrowLeft size={20} /> Kembali
                  </button>
                  <button type="button" onClick={handleNext} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    Selanjutnya <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--md-on-surface)' }}>
                  <FileText style={{ color: 'var(--md-primary)' }} /> Pilihan Program
                </h3>
                <div>
                  <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Program Pilihan *</label>
                  <select name="program" value={formData.program} onChange={handleChange} required className={inputClass}>
                    <option value="">Pilih Program</option>
                    <option value="Tahsin Anak-anak">Tahsin Anak-anak (Pemula)</option>
                    <option value="Tahsin Remaja">Tahsin Remaja</option>
                    <option value="Tahsin Dewasa">Tahsin Dewasa</option>
                    <option value="Tahfidz">Program Tahfidz (Hafalan)</option>
                    <option value="Kelas Iqro">Kelas Iqro (Pra-Tahsin)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={{ color: 'var(--md-on-surface-variant)' }}>Motivasi Masuk</label>
                  <textarea name="motivasi" value={formData.motivasi} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Apa motivasi Ananda/Orang Tua mendaftar?"></textarea>
                </div>
                <div className="rounded-xl p-4 flex gap-3" style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}>
                  <AlertCircle className="flex-shrink-0" size={24} />
                  <div className="text-sm">
                    <p className="font-bold mb-1">Penting!</p>
                    <p>Pastikan semua data yang diisi sudah benar. Setelah mendaftar, panitia akan menghubungi melalui nomor WhatsApp yang tertera.</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button type="button" onClick={handlePrev} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-colors" style={{ border: '1px solid var(--md-outline)', color: 'var(--md-on-surface-variant)' }}>
                    <ArrowLeft size={20} /> Kembali
                  </button>
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg disabled:opacity-70" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    {isSubmitting ? 'Mengirim Data...' : 'Kirim Pendaftaran'} {!isSubmitting && <Send size={20} />}
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
