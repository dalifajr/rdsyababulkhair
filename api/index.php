<?php

/**
 * Vercel PHP Serverless Function Entry Point
 * 
 * This file serves as the front controller for the Laravel application
 * when deployed on Vercel using vercel-php@0.6.0 runtime.
 */

define('LARAVEL_START', microtime(true));

// Resolve the project base path
$basePath = dirname(__DIR__);

// Ensure working directory is the project root
chdir($basePath);

// Determine if running in Vercel environment
$isVercel = (bool) (getenv('VERCEL') ?: ($_ENV['VERCEL'] ?? false));

// Configure writable storage in /tmp for Vercel's read-only filesystem
if ($isVercel) {
    $storagePath = '/tmp/storage';

    $directories = [
        $storagePath,
        $storagePath . '/app',
        $storagePath . '/app/public',
        $storagePath . '/framework',
        $storagePath . '/framework/cache',
        $storagePath . '/framework/cache/data',
        $storagePath . '/framework/sessions',
        $storagePath . '/framework/testing',
        $storagePath . '/framework/views',
        $storagePath . '/logs',
    ];

    foreach ($directories as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }

    // Copy compiled views to /tmp if they don't exist yet
    $compiledViewsSrc = $basePath . '/storage/framework/views';
    $compiledViewsDst = $storagePath . '/framework/views';
    if (is_dir($compiledViewsSrc)) {
        $files = glob($compiledViewsSrc . '/*.php');
        foreach ($files as $file) {
            $dest = $compiledViewsDst . '/' . basename($file);
            if (!file_exists($dest)) {
                copy($file, $dest);
            }
        }
    }
}

// Check maintenance mode
if (file_exists($maintenance = $basePath . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader
require $basePath . '/vendor/autoload.php';

// Bootstrap Laravel
/** @var \Illuminate\Foundation\Application $app */
$app = require_once $basePath . '/bootstrap/app.php';

// Override storage path for Vercel
if ($isVercel) {
    $app->useStoragePath('/tmp/storage');
}

// Handle the incoming request
$app->handleRequest(
    \Illuminate\Http\Request::capture()
);
