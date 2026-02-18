<?php

namespace Database\Seeders;

use App\Models\Galeri;
use Illuminate\Database\Seeder;

class GaleriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $galeri = [
            [
                'judul' => 'Santri Belajar Iqra',
                'deskripsi' => 'Santri sedang belajar membaca Al-Quran dengan metode Iqra dibimbing oleh ustadz',
                'gambar' => '/images/galeri/belajar-iqra.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 1,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Nonton Bareng Film Islami',
                'deskripsi' => 'Santri menonton film animasi Islami bersama menggunakan proyektor',
                'gambar' => '/images/galeri/nobar-islami.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 2,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Foto Bersama Santri dan Pengajar',
                'deskripsi' => 'Kebersamaan santri putra-putri dan para pengajar Rumah Quran Syababul Khair',
                'gambar' => '/images/galeri/foto-bersama.jpg',
                'kategori' => 'acara',
                'urutan' => 3,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Halaqah Tahfidz',
                'deskripsi' => 'Santri mengikuti halaqah tahfidz Al-Quran',
                'gambar' => '/images/galeri/halaqah-1.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 4,
                'is_featured' => false,
                'user_id' => 1,
            ],
            [
                'judul' => 'Kegiatan Mengaji Sore',
                'deskripsi' => 'Anak-anak dengan semangat belajar mengaji di sore hari',
                'gambar' => '/images/galeri/mengaji-sore.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 5,
                'is_featured' => false,
                'user_id' => 1,
            ],
            [
                'judul' => 'Mabit Santri',
                'deskripsi' => 'Kegiatan malam bina iman dan taqwa bersama santri',
                'gambar' => '/images/galeri/mabit-1.jpg',
                'kategori' => 'acara',
                'urutan' => 6,
                'is_featured' => false,
                'user_id' => 1,
            ],
        ];

        foreach ($galeri as $item) {
            Galeri::create($item);
        }
    }
}
