<?php

namespace Database\Seeders;

use App\Models\Berita;
use Illuminate\Database\Seeder;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $berita = [
            [
                'judul' => 'Pendaftaran Santri Baru Tahun Ajaran 2024/2025 Dibuka',
                'slug' => 'pendaftaran-santri-baru-2024-2025',
                'ringkasan' => 'Rumah Quran Syababul Khair membuka pendaftaran santri baru untuk tahun ajaran 2024/2025. Segera daftarkan putra-putri Anda!',
                'konten' => '<p>Assalamu\'alaikum Warahmatullahi Wabarakatuh,</p><p>Alhamdulillah, Rumah Quran Syababul Khair kembali membuka pendaftaran santri baru untuk tahun ajaran 2024/2025.</p><p><strong>Program yang tersedia:</strong></p><ul><li>Program Tahfidz Al-Quran</li><li>Kelas Tahsin Al-Quran</li><li>Halaqah Quran Anak</li></ul><p>Segera daftarkan putra-putri Anda untuk bergabung bersama kami dalam mempelajari Al-Quran.</p>',
                'kategori' => 'pengumuman',
                'status' => 'published',
                'user_id' => 1,
                'published_at' => now(),
            ],
            [
                'judul' => 'Wisuda Tahfidz Angkatan ke-5',
                'slug' => 'wisuda-tahfidz-angkatan-5',
                'ringkasan' => 'Alhamdulillah, 10 santri berhasil menyelesaikan hafalan 30 juz dan diwisuda pada acara wisuda tahfidz angkatan ke-5.',
                'konten' => '<p>Puji syukur kepada Allah SWT, pada hari Minggu tanggal 15 Januari 2024, Rumah Quran Syababul Khair telah menyelenggarakan Wisuda Tahfidz Angkatan ke-5.</p><p>Sebanyak 10 santri berhasil menyelesaikan hafalan 30 juz Al-Quran dan telah diuji oleh tim penguji dari berbagai lembaga tahfidz.</p><p>Selamat kepada para wisudawan dan wisudawati! Semoga ilmu yang didapat menjadi berkah dan bermanfaat.</p>',
                'kategori' => 'kegiatan',
                'status' => 'published',
                'user_id' => 1,
                'published_at' => now()->subDays(7),
            ],
            [
                'judul' => 'Kajian Rutin: Tafsir Surah Al-Kahfi',
                'slug' => 'kajian-rutin-tafsir-al-kahfi',
                'ringkasan' => 'Kajian rutin tafsir Al-Quran akan membahas Surah Al-Kahfi setiap Jumat malam.',
                'konten' => '<p>Insya Allah, kajian rutin tafsir Al-Quran akan membahas Surah Al-Kahfi.</p><p><strong>Waktu:</strong> Setiap Jumat malam, pukul 19:30 WIB</p><p><strong>Tempat:</strong> Aula Rumah Quran Syababul Khair</p><p><strong>Pembicara:</strong> Ust. Muhammad Iqbal, S.Pd</p><p>Mari bergabung dan tingkatkan pemahaman kita terhadap Al-Quran!</p>',
                'kategori' => 'kajian',
                'status' => 'published',
                'user_id' => 1,
                'published_at' => now()->subDays(3),
            ],
        ];

        foreach ($berita as $item) {
            Berita::create($item);
        }
    }
}
