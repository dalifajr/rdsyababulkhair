<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // On Vercel, force certain configurations for serverless compatibility
        if ($this->isVercel()) {
            // Use array cache (in-memory, per-request) since there's no persistent filesystem
            config([
                'cache.default' => 'array',
                'session.driver' => 'cookie',
                'logging.default' => 'stderr',
                'view.compiled' => '/tmp/storage/framework/views',
            ]);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force HTTPS in production (Vercel always serves over HTTPS)
        if ($this->app->environment('production') || $this->isVercel()) {
            URL::forceScheme('https');
        }
    }

    /**
     * Determine if running in Vercel serverless environment.
     */
    protected function isVercel(): bool
    {
        return (bool) (getenv('VERCEL') ?: ($_ENV['VERCEL'] ?? false));
    }
}
