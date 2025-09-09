import React from 'react';

// PUBLIC_INTERFACE
export default function HomePage() {
  /**
   * TrendScout landing page with platform overview.
   */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-bold text-sm">TS</span>
              </div>
              <span className="font-semibold text-white text-lg">TrendScout</span>
            </div>
            <a 
              href="/dashboard"
              className="bg-white/20 border border-white/30 text-white hover:bg-white/30 px-4 py-2 rounded-md transition-colors"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            TrendScout
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Social Media Monitoring Platform for Freelancers and Solopreneurs
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Affordable market and competitor insights that were previously only available 
            with expensive enterprise tools. Track trends, monitor competitors, and discover opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/dashboard"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-8 py-3 rounded-md transition-colors font-medium"
            >
              Launch Dashboard
            </a>
            <button className="bg-white/20 border border-white/30 text-white hover:bg-white/30 px-8 py-3 rounded-md transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-2">🎯 Competitor Tracking</h3>
            <p className="text-white/80">
              Monitor competitor mentions and strategies across social platforms
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-2">📈 Trend Analysis</h3>
            <p className="text-white/80">
              Detect emerging trends and opportunities in your industry
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-2">📊 Actionable Reports</h3>
            <p className="text-white/80">
              Clear, actionable insights without requiring data science background
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
