<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Registered with the /api prefix automatically by Laravel.
| These routes are loaded by bootstrap/app.php within the "api" middleware group.
|
*/

// Health check endpoint for Vercel
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toIso8601String(),
        'environment' => app()->environment(),
        'php_version' => PHP_VERSION,
        'laravel_version' => app()->version(),
    ]);
});

// Site settings
Route::get('/settings', function () {
    $settings = \App\Models\Setting::all()->pluck('value', 'key');
    return response()->json($settings);
});

// Berita (News)
Route::get('/berita', function () {
    $berita = \App\Models\Berita::orderBy('created_at', 'desc')->get();
    return response()->json($berita);
});

Route::get('/berita/{id}', function ($id) {
    $berita = \App\Models\Berita::findOrFail($id);
    return response()->json($berita);
});

// Galeri (Gallery)
Route::get('/galeri', function () {
    $galeri = \App\Models\Galeri::orderBy('created_at', 'desc')->get();
    return response()->json($galeri);
});

// Kegiatan (Activities)
Route::get('/kegiatan', function () {
    $kegiatan = \App\Models\Kegiatan::orderBy('created_at', 'desc')->get();
    return response()->json($kegiatan);
});

// Pendaftaran (Registration)
Route::post('/pendaftaran', function (Request $request) {
    $validated = $request->validate([
        'nama_lengkap' => 'required|string|max:255',
        'tempat_lahir' => 'required|string|max:255',
        'tanggal_lahir' => 'required|date',
        'jenis_kelamin' => 'required|in:L,P',
        'alamat' => 'required|string',
        'nama_ayah' => 'required|string|max:255',
        'nama_ibu' => 'required|string|max:255',
        'no_telepon' => 'required|string|max:20',
        'email' => 'nullable|email|max:255',
    ]);

    $pendaftaran = \App\Models\Pendaftaran::create($validated);
    return response()->json($pendaftaran, 201);
});

Route::get('/pendaftaran', function () {
    $pendaftaran = \App\Models\Pendaftaran::orderBy('created_at', 'desc')->get();
    return response()->json($pendaftaran);
});
