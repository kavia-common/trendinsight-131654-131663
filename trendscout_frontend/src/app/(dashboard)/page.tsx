import React from 'react';

// PUBLIC_INTERFACE
export default function DashboardPage() {
  /**
   * Main dashboard page showcasing the TrendScout platform overview
   * with key metrics, recent activity, and quick actions.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your social media monitoring.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            New Alert
          </button>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Mentions</h3>
          <p className="text-gray-600 text-sm mb-4">Across all monitored platforms</p>
          <div className="text-3xl font-bold text-blue-600">2,847</div>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-green-600">↗ +12%</span> from last week
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitor Activity</h3>
          <p className="text-gray-600 text-sm mb-4">Recent competitor mentions</p>
          <div className="text-3xl font-bold text-teal-600">156</div>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-yellow-600">→ +3%</span> from last week
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Trending Topics</h3>
          <p className="text-gray-600 text-sm mb-4">Hot topics in your industry</p>
          <div className="text-3xl font-bold text-orange-400">24</div>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-green-600">↗ +8%</span> from last week
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <p className="text-gray-600 text-sm">Latest mentions and alerts</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">New mention detected</p>
              <p className="text-sm text-gray-600">Your brand was mentioned on Twitter</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2 min ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Competitor analysis update</p>
              <p className="text-sm text-gray-600">CompetitorX launched a new campaign</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Trending topic alert</p>
              <p className="text-sm text-gray-600">&ldquo;AI automation&rdquo; is trending in your industry</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
