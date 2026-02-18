import { Calendar, Clock, Users, BookOpen, Star, Award } from 'lucide-react'

const Kegiatan = () => {
  const dailyActivities = [
    {
      time: '16:00 - 16:30',
      activity: 'Pembukaan & Doa',
      description: 'Pembacaan doa belajar dan muroja\'ah hafalan bersama'
    },
    {
      time: '16:30 - 17:30',
      activity: 'Tahsin / Tahfidz',
      description: 'Pembelajaran membaca Al-Quran dengan tajwid atau menghafal'
    },
    {
      time: '17:30 - 18:00',
      activity: 'Kajian Singkat & Penutup',
      description: 'Pembelajaran singkat tentang akhlak atau siroh kemudian doa penutup'
    }
  ]

  const programs = [
    {
      title: 'Program Tahsin Al-Quran',
      description: 'Program pembelajaran membaca Al-Quran dengan tajwid yang benar. Cocok untuk semua tingkatan dari pemula hingga lanjutan.',
      icon: BookOpen,
      level: 'Semua Usia',
      duration: '6 Bulan',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Program Tahfidz',
      description: 'Program menghafal Al-Quran mulai dari Juz 30 hingga seluruh mushaf. Dengan metode yang sistematis dan teruji.',
      icon: Star,
      level: 'Usia 7+',
      duration: 'Berkelanjutan',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Kajian Keislaman',
      description: 'Pembelajaran dasar-dasar aqidah, fiqih ibadah, dan siroh nabawiyah untuk membangun pemahaman Islam yang komprehensif.',
      icon: Users,
      level: 'Semua Usia',
      duration: 'Berkelanjutan',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Kelas Iqro',
      description: 'Program khusus untuk anak-anak yang baru memulai belajar membaca huruf hijaiyah dengan metode Iqro.',
      icon: Award,
      level: 'Usia 4-7',
      duration: '3-6 Bulan',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  const weeklySchedule = [
    { day: 'Senin', activities: ['Tahsin Kelompok A', 'Tahfidz Juz 30'] },
    { day: 'Selasa', activities: ['Tahsin Kelompok B', 'Kajian Fiqih'] },
    { day: 'Rabu', activities: ['Tahsin Kelompok A', 'Tahfidz Juz 30'] },
    { day: 'Kamis', activities: ['Tahsin Kelompok B', 'Kajian Aqidah'] },
    { day: 'Jumat', activities: ['Muroja\'ah Bersama', 'Siroh Nabawiyah'] },
    { day: 'Sabtu', activities: ['Tahfidz Intensif', 'Praktek Ibadah'] },
    { day: 'Minggu', activities: ['Evaluasi Mingguan', 'Kegiatan Outdoor'] }
  ]

  const specialEvents = [
    {
      title: 'Wisuda Santri',
      description: 'Acara tahunan untuk meluluskan santri yang telah menyelesaikan program',
      month: 'Juni'
    },
    {
      title: 'Pesantren Kilat',
      description: 'Program intensif selama bulan Ramadhan',
      month: 'Ramadhan'
    },
    {
      title: 'Lomba Tahfidz',
      description: 'Kompetisi hafalan Al-Quran antar santri',
      month: 'Agustus'
    },
    {
      title: 'Rihlah / Outing',
      description: 'Kegiatan rekreasi edukatif untuk santri',
      month: 'Desember'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary py-20 pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kegiatan Kami</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Berbagai program dan kegiatan untuk membentuk generasi Qurani yang berakhlak mulia
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Pembelajaran</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Program-program unggulan yang dirancang untuk memenuhi kebutuhan belajar Al-Quran
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl card-shadow card-shadow-hover overflow-hidden transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                    <Icon size={40} className="mb-4" />
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="flex gap-4">
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="text-sm text-gray-500">Level</span>
                        <p className="font-semibold text-gray-900">{program.level}</p>
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="text-sm text-gray-500">Durasi</span>
                        <p className="font-semibold text-gray-900">{program.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jadwal Harian</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kegiatan rutin yang dilaksanakan setiap hari
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>
              
              <div className="space-y-8">
                {dailyActivities.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div className="bg-white p-6 rounded-2xl card-shadow flex-1">
                      <div className="text-teal-600 font-semibold mb-1">{item.time}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.activity}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jadwal Mingguan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Program pembelajaran yang bervariasi setiap harinya
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <th className="px-6 py-4 text-left rounded-tl-2xl">Hari</th>
                  <th className="px-6 py-4 text-left">Sore (16:00-18:00)</th>
                  <th className="px-6 py-4 text-left rounded-tr-2xl">Malam (19:00-20:00)</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.day}</td>
                    <td className="px-6 py-4 text-gray-600">{item.activities[0]}</td>
                    <td className="px-6 py-4 text-gray-600">{item.activities[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 gradient-primary pattern-islamic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kegiatan Tahunan</h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Event-event spesial yang diadakan setiap tahun
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-amber-400" size={24} />
                  <span className="text-amber-400 font-semibold">{event.month}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-teal-100 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dokumentasi Kegiatan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Momen-momen berharga dari berbagai kegiatan kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center"
              >
                <BookOpen className="text-teal-400" size={48} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kegiatan
