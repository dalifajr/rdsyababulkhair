import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, Home, Users, Target, Calendar, Image, Info, FileText, Phone, UserCircle } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <>
      {/* M3 Top App Bar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--md-surface-container)] shadow-[var(--md-elevation-2)]'
            : 'bg-[var(--md-surface)]'
        }`}
        style={{ transitionTimingFunction: 'var(--md-motion-standard)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Leading: Logo */}
            <Link to="/" className="flex items-center gap-3">
              <Logo size={40} />
              <div className="hidden sm:block">
                <h1 className="text-base font-medium" style={{ color: 'var(--md-on-surface)' }}>Rumah Quran</h1>
                <p className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>Syababul Khair</p>
              </div>
            </Link>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative flex flex-col items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                    style={{
                      color: active ? 'var(--md-on-secondary-container)' : 'var(--md-on-surface-variant)',
                      background: active ? 'var(--md-secondary-container)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.background = 'color-mix(in srgb, var(--md-on-surface) 8%, transparent)'
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <Icon size={16} />
                    <span className="mt-0.5">{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Trailing: Admin + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Link
                to="/admin/login"
                className="hidden lg:inline-flex items-center gap-2 h-10 px-6 text-sm font-medium rounded-full transition-all duration-200"
                style={{
                  background: 'var(--md-tertiary-container)',
                  color: 'var(--md-on-tertiary-container)',
                }}
              >
                <UserCircle size={18} />
                Admin
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-colors"
                style={{ color: 'var(--md-on-surface-variant)' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: M3 Navigation Drawer style */}
        {isOpen && (
          <div className="lg:hidden animate-slideDown" style={{ background: 'var(--md-surface-container-low)' }}>
            <div className="px-3 py-2 space-y-0.5">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 h-14 px-4 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                      color: active ? 'var(--md-on-secondary-container)' : 'var(--md-on-surface-variant)',
                      background: active ? 'var(--md-secondary-container)' : 'transparent',
                    }}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                )
              })}
              <div className="mx-4 my-2" style={{ height: 1, background: 'var(--md-outline-variant)' }} />
              <Link
                to="/admin/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 h-14 px-4 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: 'var(--md-tertiary-container)',
                  color: 'var(--md-on-tertiary-container)',
                }}
              >
                <UserCircle size={20} />
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
