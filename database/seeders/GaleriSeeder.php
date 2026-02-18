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
                'judul' => 'Kegiatan Belajar Mengajar',
                'deskripsi' => 'Santri sedang belajar membaca Al-Quran dengan bimbingan ustadz',
                'gambar' => '/images/galeri/kbm-1.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 1,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Halaqah Tahfidz',
                'deskripsi' => 'Santri mengikuti halaqah tahfidz Al-Quran',
                'gambar' => '/images/galeri/halaqah-1.jpg',
                'kategori' => 'kegiatan',
                'urutan' => 2,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Wisuda Tahfidz',
                'deskripsi' => 'Acara wisuda tahfidz angkatan ke-5',
                'gambar' => '/images/galeri/wisuda-1.jpg',
                'kategori' => 'acara',
                'urutan' => 3,
                'is_featured' => true,
                'user_id' => 1,
            ],
            [
                'judul' => 'Gedung Rumah Quran',
                'deskripsi' => 'Tampak depan gedung Rumah Quran Syababul Khair',
                'gambar' => '/images/galeri/gedung-1.jpg',
                'kategori' => 'fasilitas',
                'urutan' => 4,
                'is_featured' => false,
                'user_id' => 1,
            ],
            [
                'judul' => 'Ruang Kelas',
                'deskripsi' => 'Ruang kelas yang nyaman untuk belajar',
                'gambar' => '/images/galeri/kelas-1.jpg',
                'kategori' => 'fasilitas',
                'urutan' => 5,
                'is_featured' => false,
                'user_id' => 1,
            ],
            [
                'judul' => 'Mabit Santri',
                'deskripsi' => 'Kegiatan malam bina iman dan taqwa',
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
