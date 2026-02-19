import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Users, 
  ClipboardList, 
  LogOut, 
  Menu, 
  X,
  Bell,
  ChevronDown
} from 'lucide-react'
import Logo from '../../components/Logo'

const AdminLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [showUserMenu, setShowUserMenu] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    const userData = localStorage.getItem('adminUser')
    if (!token) { navigate('/admin/login'); return }
    if (userData) setUser(JSON.parse(userData))
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    navigate('/admin/login')
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Kelola Berita', path: '/admin/berita', icon: FileText },
    { name: 'Kelola Galeri', path: '/admin/galeri', icon: Image },
    { name: 'Profil Website', path: '/admin/profile', icon: Users },
    { name: 'Data Pendaftaran', path: '/admin/pendaftaran', icon: ClipboardList },
  ]

  const isActive = (path) => location.pathname === path

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--md-surface)' }}>
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--md-primary)', borderTopColor: 'transparent' }}></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--md-surface-container-lowest)' }}>
      {/* M3 Navigation Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'var(--md-surface-container-low)', borderRight: '1px solid var(--md-outline-variant)' }}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6" style={{ borderBottom: '1px solid var(--md-outline-variant)' }}>
            <Link to="/admin" className="flex items-center gap-3">
              <Logo size={40} />
              <div>
                <h1 className="font-bold" style={{ color: 'var(--md-on-surface)' }}>Admin Panel</h1>
                <p className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>RQ Syababul Khair</p>
              </div>
            </Link>
          </div>

          {/* M3 Nav Items */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-full transition-all font-medium text-sm"
                  style={{
                    background: active ? 'var(--md-secondary-container)' : 'transparent',
                    color: active ? 'var(--md-on-secondary-container)' : 'var(--md-on-surface-variant)',
                  }}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4" style={{ borderTop: '1px solid var(--md-outline-variant)' }}>
            <Link to="/" target="_blank" className="block w-full py-3 text-center text-sm font-medium rounded-full transition-colors"
              style={{ color: 'var(--md-primary)' }}>
              Lihat Website &rarr;
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* M3 Top App Bar */}
        <header className="sticky top-0 z-30" style={{ background: 'var(--md-surface)', borderBottom: '1px solid var(--md-outline-variant)' }}>
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-full transition-colors"
              style={{ color: 'var(--md-on-surface-variant)' }}>
              <Menu size={24} />
            </button>
            <div className="flex-1 lg:flex-none"></div>
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <button className="p-2.5 rounded-full relative transition-colors" style={{ color: 'var(--md-on-surface-variant)' }}>
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: 'var(--md-error)' }}></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 p-2 rounded-full transition-colors">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--md-primary)', color: 'var(--md-on-primary)' }}>
                    <span className="text-sm font-semibold">{user.name.charAt(0)}</span>
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium" style={{ color: 'var(--md-on-surface)' }}>{user.name}</p>
                    <p className="text-xs" style={{ color: 'var(--md-on-surface-variant)' }}>{user.role}</p>
                  </div>
                  <ChevronDown size={16} style={{ color: 'var(--md-on-surface-variant)' }} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 py-2 m3-elevation-2"
                    style={{ background: 'var(--md-surface-container)', borderRadius: 'var(--md-shape-md)' }}>
                    <button onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors"
                      style={{ color: 'var(--md-error)' }}>
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
