<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // General
            ['key' => 'site_name', 'value' => 'Rumah Quran Syababul Khair', 'type' => 'text', 'group' => 'general'],
            ['key' => 'site_tagline', 'value' => 'Tempat Belajar Al-Quran dengan Metode yang Mudah dan Menyenangkan', 'type' => 'text', 'group' => 'general'],
            ['key' => 'site_description', 'value' => 'Rumah Quran Syababul Khair adalah lembaga pendidikan Al-Quran yang berdedikasi untuk membentuk generasi Qurani yang berakhlak mulia.', 'type' => 'textarea', 'group' => 'general'],
            
            // Profile
            ['key' => 'about', 'value' => 'Rumah Quran Syababul Khair didirikan dengan tujuan mulia untuk mencetak generasi Qurani yang cinta Al-Quran dan mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari. Kami berkomitmen memberikan pendidikan Al-Quran berkualitas dengan metode pembelajaran yang mudah dipahami dan menyenangkan.', 'type' => 'textarea', 'group' => 'profile'],
            ['key' => 'sejarah', 'value' => 'Rumah Quran Syababul Khair berdiri sejak tahun 2020 dengan semangat untuk menyebarkan dakwah melalui pendidikan Al-Quran. Bermula dari sebuah majelis kecil, kini telah berkembang menjadi lembaga pendidikan Quran yang dipercaya oleh masyarakat.', 'type' => 'textarea', 'group' => 'profile'],
            ['key' => 'pimpinan_nama', 'value' => 'Ust. Muhammad Iqbal, S.Pd', 'type' => 'text', 'group' => 'profile'],
            ['key' => 'pimpinan_foto', 'value' => '/images/pimpinan.jpg', 'type' => 'image', 'group' => 'profile'],
            ['key' => 'sambutan_pimpinan', 'value' => 'Assalamu\'alaikum Warahmatullahi Wabarakatuh,\n\nPuji syukur kita panjatkan kehadirat Allah SWT yang telah memberikan kita kesempatan untuk terus belajar dan mendalami Al-Quran. Rumah Quran Syababul Khair hadir sebagai wadah bagi siapa saja yang ingin mempelajari Al-Quran dengan metode yang mudah dan menyenangkan.\n\nKami berkomitmen untuk memberikan pendidikan Al-Quran terbaik dengan pengajar yang berpengalaman dan berkompeten. Mari bersama-sama kita wujudkan generasi Qurani yang berakhlak mulia.\n\nWassalamu\'alaikum Warahmatullahi Wabarakatuh', 'type' => 'textarea', 'group' => 'profile'],
            
            // Visi Misi
            ['key' => 'visi', 'value' => 'Menjadi lembaga pendidikan Al-Quran terdepan dalam mencetak generasi Qurani yang berakhlak mulia, cinta Al-Quran, dan mampu mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari.', 'type' => 'textarea', 'group' => 'profile'],
            ['key' => 'misi', 'value' => json_encode([
                'Menyelenggarakan pendidikan Al-Quran dengan metode yang mudah dan menyenangkan',
                'Membentuk karakter santri yang berakhlak mulia berdasarkan nilai-nilai Al-Quran',
                'Menyediakan lingkungan belajar yang kondusif dan Islami',
                'Mengembangkan potensi santri dalam bidang tahfidz, tilawah, dan pemahaman Al-Quran',
                'Membangun kerjasama dengan orang tua dan masyarakat dalam pendidikan'
            ]), 'type' => 'json', 'group' => 'profile'],
            
            // Contact
            ['key' => 'alamat', 'value' => 'Jl. Contoh No. 123, Kelurahan, Kecamatan, Kota', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'telepon', 'value' => '+62 812-3456-7890', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'email', 'value' => 'info@rqsyababulkhair.id', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'whatsapp', 'value' => '6281234567890', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'google_maps', 'value' => 'https://maps.app.goo.gl/Nup11EjQLmr9x5uh7', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'jam_operasional', 'value' => 'Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00', 'type' => 'textarea', 'group' => 'contact'],
            
            // Social Media
            ['key' => 'facebook', 'value' => 'https://facebook.com/rqsyababulkhair', 'type' => 'text', 'group' => 'social'],
            ['key' => 'instagram', 'value' => 'https://instagram.com/rqsyababulkhair', 'type' => 'text', 'group' => 'social'],
            ['key' => 'youtube', 'value' => 'https://youtube.com/@rqsyababulkhair', 'type' => 'text', 'group' => 'social'],
            ['key' => 'tiktok', 'value' => 'https://tiktok.com/@rqsyababulkhair', 'type' => 'text', 'group' => 'social'],
            
            // Stats
            ['key' => 'total_santri', 'value' => '150', 'type' => 'text', 'group' => 'stats'],
            ['key' => 'total_pengajar', 'value' => '12', 'type' => 'text', 'group' => 'stats'],
            ['key' => 'total_hafidz', 'value' => '25', 'type' => 'text', 'group' => 'stats'],
            ['key' => 'tahun_berdiri', 'value' => '2020', 'type' => 'text', 'group' => 'stats'],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
}
