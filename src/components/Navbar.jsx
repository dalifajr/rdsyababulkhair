import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, Home, Users, Target, Calendar, Image, Info, FileText, Phone, UserCircle } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Profil', path: '/profil', icon: Users },
    { name: 'Visi & Misi', path: '/visi-misi', icon: Target },
    { name: 'Kegiatan', path: '/kegiatan', icon: Calendar },
    { name: 'Galeri', path: '/galeri', icon: Image },
    { name: 'Berita', path: '/berita', icon: FileText },
    { name: 'Pendaftaran', path: '/pendaftaran', icon: BookOpen },
    { name: 'Tentang', path: '/tentang', icon: Info },
    { name: 'Kontak', path: '/kontak', icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <Logo size={50} />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-teal-700">Rumah Quran</h1>
                <p className="text-sm text-teal-600">Syababul Khair</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive(item.path)
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Admin Login Link */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/admin/login"
              className="ml-4 px-4 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <UserCircle size={18} />
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-slideDown">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-3 ${
                    isActive(item.path)
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-700 hover:bg-teal-50'
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              )
            })}
            <Link
              to="/admin/login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium bg-amber-500 text-white hover:bg-amber-600 flex items-center gap-3"
            >
              <UserCircle size={20} />
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
