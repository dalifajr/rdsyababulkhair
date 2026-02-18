<?php

namespace Database\Seeders;

use App\Models\Kegiatan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kegiatan = [
            [
                'nama' => 'Program Tahfidz Al-Quran',
                'slug' => 'program-tahfidz',
                'deskripsi' => 'Program menghafal Al-Quran dengan metode yang mudah dan sistematis',
                'konten' => 'Program Tahfidz Al-Quran adalah program unggulan kami yang dirancang untuk membantu santri menghafal Al-Quran dengan metode yang mudah dipahami dan sistematis. Program ini dibimbing oleh pengajar yang hafidz dan berpengalaman.',
                'hari' => 'Senin - Jumat',
                'waktu' => '08:00 - 11:00',
                'tempat' => 'Ruang Tahfidz',
                'is_active' => true,
                'urutan' => 1,
            ],
            [
                'nama' => 'Kelas Tahsin Al-Quran',
                'slug' => 'kelas-tahsin',
                'deskripsi' => 'Pembelajaran membaca Al-Quran dengan tajwid yang benar',
                'konten' => 'Kelas Tahsin Al-Quran fokus pada perbaikan bacaan Al-Quran sesuai dengan kaidah tajwid yang benar. Santri akan dibimbing untuk membaca Al-Quran dengan makhorijul huruf yang tepat.',
                'hari' => 'Senin - Kamis',
                'waktu' => '14:00 - 16:00',
                'tempat' => 'Ruang Kelas Utama',
                'is_active' => true,
                'urutan' => 2,
            ],
            [
                'nama' => 'Halaqah Quran Anak',
                'slug' => 'halaqah-anak',
                'deskripsi' => 'Program belajar Al-Quran khusus untuk anak-anak',
                'konten' => 'Halaqah Quran Anak adalah program pembelajaran Al-Quran yang dirancang khusus untuk anak-anak dengan pendekatan yang menyenangkan dan interaktif.',
                'hari' => 'Sabtu - Minggu',
                'waktu' => '08:00 - 10:00',
                'tempat' => 'Ruang Anak',
                'is_active' => true,
                'urutan' => 3,
            ],
            [
                'nama' => 'Kajian Tafsir Al-Quran',
                'slug' => 'kajian-tafsir',
                'deskripsi' => 'Kajian rutin memahami makna dan tafsir Al-Quran',
                'konten' => 'Kajian Tafsir Al-Quran adalah program kajian rutin untuk memahami makna dan kandungan ayat-ayat Al-Quran. Kajian dipandu oleh ustadz yang kompeten di bidang tafsir.',
                'hari' => 'Jumat',
                'waktu' => '19:30 - 21:00',
                'tempat' => 'Aula Utama',
                'is_active' => true,
                'urutan' => 4,
            ],
            [
                'nama' => 'Kelas Tilawah',
                'slug' => 'kelas-tilawah',
                'deskripsi' => 'Pembelajaran seni membaca Al-Quran dengan lagu',
                'konten' => 'Kelas Tilawah mengajarkan seni membaca Al-Quran dengan lagu (maqamat) yang indah. Santri akan belajar berbagai variasi lagu dalam membaca Al-Quran.',
                'hari' => 'Selasa & Kamis',
                'waktu' => '16:00 - 17:30',
                'tempat' => 'Ruang Tilawah',
                'is_active' => true,
                'urutan' => 5,
            ],
            [
                'nama' => 'Mabit (Malam Bina Iman dan Taqwa)',
                'slug' => 'mabit',
                'deskripsi' => 'Kegiatan bermalam untuk pembinaan spiritual santri',
                'konten' => 'Mabit adalah kegiatan bermalam yang dilaksanakan secara berkala untuk membina iman dan taqwa santri melalui qiyamul lail, tadarus, dan kajian.',
                'hari' => 'Sabtu (2 minggu sekali)',
                'waktu' => '18:00 - 06:00',
                'tempat' => 'Rumah Quran',
                'is_active' => true,
                'urutan' => 6,
            ],
            [
                'nama' => 'Nonton Bareng Film Islami',
                'slug' => 'nobar-islami',
                'deskripsi' => 'Menonton film animasi Islami bersama untuk edukasi dan hiburan',
                'konten' => 'Kegiatan menonton bersama film animasi Islami menggunakan proyektor. Santri dapat belajar nilai-nilai Islam melalui cerita yang menarik dan menghibur seperti kisah para Nabi dan Sahabat.',
                'hari' => 'Minggu',
                'waktu' => '09:00 - 11:00',
                'tempat' => 'Ruang Multimedia',
                'is_active' => true,
                'urutan' => 7,
            ],
            [
                'nama' => 'Belajar Iqra',
                'slug' => 'belajar-iqra',
                'deskripsi' => 'Pembelajaran dasar membaca Al-Quran dengan metode Iqra',
                'konten' => 'Program belajar membaca Al-Quran dari dasar menggunakan metode Iqra. Santri akan dibimbing tahap demi tahap hingga mahir membaca Al-Quran dengan lancar.',
                'hari' => 'Senin - Jumat',
                'waktu' => '16:00 - 17:30',
                'tempat' => 'Ruang Belajar',
                'is_active' => true,
                'urutan' => 8,
            ],
        ];

        foreach ($kegiatan as $item) {
            Kegiatan::create($item);
        }
    }
}
