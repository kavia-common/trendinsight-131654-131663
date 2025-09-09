import React from 'react';

// PUBLIC_INTERFACE
export default function SignInPage() {
  /**
   * Sign-in page for user authentication.
   * Provides login form and authentication options for TrendScout platform.
   */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
            <span className="text-[var(--color-primary)] font-bold text-2xl">TS</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back
          </h2>
          <p className="text-white/80">
            Sign in to your TrendScout account
          </p>
        </div>

        {/* Sign-in form */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-white/80 focus:ring-white/50 border-white/30 rounded bg-white/20"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[var(--color-primary)] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/60">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social login options */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-white/30 bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <span className="sr-only">Sign in with Google</span>
              <span className="text-lg">🔍</span>
              <span className="ml-2">Google</span>
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-white/30 bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <span className="sr-only">Sign in with GitHub</span>
              <span className="text-lg">🐙</span>
              <span className="ml-2">GitHub</span>
            </button>
          </div>

          {/* Sign up link */}
          <div className="mt-6 text-center">
            <span className="text-white/60 text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-white hover:text-white/80 font-medium transition-colors">
                Sign up
              </a>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white/60 text-xs">
            By signing in, you agree to our{' '}
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
