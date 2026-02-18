import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-800 to-teal-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={50} />
              <div>
                <h3 className="font-bold text-lg">Rumah Quran</h3>
                <p className="text-teal-200 text-sm">Syababul Khair</p>
              </div>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              Tempat belajar Al-Quran dengan metode yang mudah dan menyenangkan. 
              Membentuk generasi Qurani yang berakhlak mulia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Menu Cepat</h4>
            <ul className="space-y-2">
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
                    className="text-teal-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/Nup11EjQLmr9x5uh7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-100 text-sm hover:text-amber-400 transition-colors"
                >
                  Lihat Lokasi di Google Maps
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-teal-100 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-teal-100 text-sm">info@rqsyababulkhair.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-teal-100 text-sm">Setiap Hari, 16:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Media Sosial</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-6 p-4 bg-teal-900/50 rounded-lg">
              <p className="text-amber-400 font-semibold text-sm mb-1">Jadwal Mengaji</p>
              <p className="text-teal-100 text-xs">Senin - Jumat: 16:00 - 18:00</p>
              <p className="text-teal-100 text-xs">Sabtu - Minggu: 08:00 - 10:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-teal-200 text-sm">
              &copy; {new Date().getFullYear()} Rumah Quran Syababul Khair. All rights reserved.
            </p>
            <p className="text-teal-300 text-xs">
              "Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya" (HR. Bukhari)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
