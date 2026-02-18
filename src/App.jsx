import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import VisiMisi from './pages/VisiMisi'
import Kegiatan from './pages/Kegiatan'
import Galeri from './pages/Galeri'
import Tentang from './pages/Tentang'
import Pendaftaran from './pages/Pendaftaran'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'
import Login from './pages/admin/Login'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ManageBerita from './pages/admin/ManageBerita'
import ManageGaleri from './pages/admin/ManageGaleri'
import ManageProfile from './pages/admin/ManageProfile'
import ManagePendaftaran from './pages/admin/ManagePendaftaran'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profile />} />
          <Route path="visi-misi" element={<VisiMisi />} />
          <Route path="kegiatan" element={<Kegiatan />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="pendaftaran" element={<Pendaftaran />} />
          <Route path="berita" element={<Berita />} />
          <Route path="kontak" element={<Kontak />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="berita" element={<ManageBerita />} />
          <Route path="galeri" element={<ManageGaleri />} />
          <Route path="profile" element={<ManageProfile />} />
          <Route path="pendaftaran" element={<ManagePendaftaran />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
