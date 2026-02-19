import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Kontak = () => {
  const [formData, setFormData] = useState({ nama: '', email: '', subjek: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    { icon: MapPin, label: 'Alamat', value: 'Jl. Pendidikan No. 123, Kota, Provinsi', color: 'var(--md-primary)' },
    { icon: Phone, label: 'Telepon', value: '+62 812-3456-7890', color: 'var(--md-tertiary)' },
    { icon: Mail, label: 'Email', value: 'info@rqsyababulkhair.id', color: 'var(--md-secondary)' },
    { icon: Clock, label: 'Jam Operasional', value: 'Senin - Sabtu: 08:00 - 18:00', color: 'var(--md-primary)' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ nama: '', email: '', subjek: '', pesan: '' })
  }

  return (
    <div className="min-h-screen">
      {/* M3 Hero */}
      <section className="py-20 pattern-islamic" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-85">Kami siap membantu Anda. Jangan ragu untuk menghubungi kami</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20" style={{ background: 'var(--md-surface-container-lowest)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="m3-card-elevated p-6 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: info.color, color: 'white' }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--md-on-surface)' }}>{info.label}</h3>
                  <p className="text-sm" style={{ color: 'var(--md-on-surface-variant)' }}>{info.value}</p>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="m3-card-elevated p-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--md-on-surface)' }}>Kirim Pesan</h2>
              {submitted && (
                <div className="rounded-xl p-4 mb-6" style={{ background: 'var(--md-primary-container)', color: 'var(--md-on-primary-container)' }}>
                  Pesan Anda telah terkirim! Kami akan segera merespons.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Nama Lengkap</label>
                  <input type="text" required className="m3-input" value={formData.nama} onChange={e => setFormData({ ...formData, nama: e.target.value })} placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Email</label>
                  <input type="email" required className="m3-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Masukkan email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Subjek</label>
                  <input type="text" required className="m3-input" value={formData.subjek} onChange={e => setFormData({ ...formData, subjek: e.target.value })} placeholder="Subjek pesan" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Pesan</label>
                  <textarea rows={4} required className="m3-input resize-none" value={formData.pesan} onChange={e => setFormData({ ...formData, pesan: e.target.value })} placeholder="Tulis pesan Anda"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg" style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                  <Send size={18} /> Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map + WhatsApp */}
            <div className="space-y-6">
              <div className="m3-card-elevated overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-bold" style={{ color: 'var(--md-on-surface)' }}>Lokasi Kami</h2>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
                  width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  title="Lokasi RQ Syababul Khair" className="w-full"
                />
              </div>
              <div className="m3-card-elevated p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#25D366', color: 'white' }}>
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--md-on-surface)' }}>Chat via WhatsApp</h3>
                <p className="mb-4" style={{ color: 'var(--md-on-surface-variant)' }}>Respon lebih cepat melalui WhatsApp</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white hover:shadow-lg transition-all" style={{ background: '#25D366' }}>
                  <MessageCircle size={18} /> Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kontak
