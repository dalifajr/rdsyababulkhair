import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer style={{ background: 'var(--md-inverse-surface)', color: 'var(--md-inverse-on-surface)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={44} />
              <div>
                <h3 className="font-medium text-base" style={{ color: 'var(--md-inverse-on-surface)' }}>Rumah Quran</h3>
                <p className="text-xs opacity-70">Syababul Khair</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Tempat belajar Al-Quran dengan metode yang mudah dan menyenangkan. 
              Membentuk generasi Qurani yang berakhlak mulia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-base mb-4" style={{ color: 'var(--md-inverse-primary)' }}>Menu Cepat</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Profil', path: '/profil' },
                { name: 'Kegiatan', path: '/kegiatan' },
                { name: 'Galeri', path: '/galeri' },
                { name: 'Pendaftaran', path: '/pendaftaran' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--md-inverse-on-surface)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-base mb-4" style={{ color: 'var(--md-inverse-primary)' }}>Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 opacity-70" />
                <a 
                  href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Lihat Lokasi di Google Maps
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">info@rqsyababulkhair.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 opacity-70" />
                <span className="text-sm opacity-80">Setiap Hari, 16:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-medium text-base mb-4" style={{ color: 'var(--md-inverse-primary)' }}>Media Sosial</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--md-inverse-on-surface)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--md-inverse-primary)'; e.currentTarget.style.color = 'var(--md-on-primary-container)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--md-inverse-on-surface)' }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--md-inverse-primary)' }}>Jadwal Mengaji</p>
              <p className="text-xs opacity-70">Senin - Jumat: 16:00 - 18:00</p>
              <p className="text-xs opacity-70">Sabtu - Minggu: 08:00 - 10:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} Rumah Quran Syababul Khair. All rights reserved.
            </p>
            <p className="text-xs opacity-50 font-arabic" style={{ direction: 'ltr' }}>
              "Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya" (HR. Bukhari)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
