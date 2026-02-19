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
        // Force serverless-friendly configurations when running via api/index.php on Vercel
        if ($this->isVercel()) {
            config([
                'cache.default' => 'array',
                'session.driver' => 'array',
                'logging.default' => 'stderr',
                'view.compiled' => '/tmp/storage/framework/views',
                'app.debug' => (bool) env('APP_DEBUG', false),
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
