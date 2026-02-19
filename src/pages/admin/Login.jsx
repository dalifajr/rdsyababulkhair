import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react'
import Logo from '../../components/Logo'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      if (formData.email === 'admin@rqsyababulkhair.id' && formData.password === 'admin123') {
        localStorage.setItem('adminToken', 'demo-token-12345')
        localStorage.setItem('adminUser', JSON.stringify({ name: 'Administrator', email: formData.email, role: 'admin' }))
        navigate('/admin')
      } else {
        setError('Email atau password salah. Gunakan: admin@rqsyababulkhair.id / admin123')
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen pattern-islamic flex items-center justify-center px-4" style={{ background: 'var(--md-primary)' }}>
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Logo size={80} /></div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--md-on-primary)' }}>Admin Panel</h1>
          <p style={{ color: 'var(--md-on-primary)', opacity: 0.8 }}>Rumah Quran Syababul Khair</p>
        </div>

        {/* M3 Login Card */}
        <div className="m3-card-elevated p-8">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--md-on-surface)' }}>Selamat Datang</h2>
          <p className="text-center mb-8" style={{ color: 'var(--md-on-surface-variant)' }}>Masuk untuk mengelola website</p>

          {error && (
            <div className="mb-6 p-4 rounded-xl flex items-start gap-3" style={{ background: 'var(--md-error-container)', color: 'var(--md-on-error-container)' }}>
              <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--md-on-surface-variant)' }} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="m3-input pl-12" placeholder="admin@rqsyababulkhair.id" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--md-on-surface-variant)' }}>Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--md-on-surface-variant)' }} />
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required
                  className="m3-input pl-12 pr-12" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--md-on-surface-variant)' }}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-4 rounded-full font-semibold transition-all hover:shadow-lg disabled:opacity-60"
              style={{ background: isLoading ? 'var(--md-surface-container-highest)' : 'var(--md-primary)', color: isLoading ? 'var(--md-on-surface-variant)' : 'var(--md-on-primary)' }}>
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Memproses...
                </span>
              ) : 'Masuk'}
            </button>
          </form>

          <div className="mt-6 p-4 rounded-xl" style={{ background: 'var(--md-tertiary-container)', color: 'var(--md-on-tertiary-container)' }}>
            <p className="text-sm text-center">
              <strong>Demo Login:</strong><br />
              Email: admin@rqsyababulkhair.id<br />
              Password: admin123
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="transition-colors" style={{ color: 'var(--md-on-primary)', opacity: 0.85 }}>
            &larr; Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
