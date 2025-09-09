import React from 'react';

// PUBLIC_INTERFACE
export default function CompetitorsPage() {
  /**
   * Competitors page for managing competitor tracking, analysis, and insights.
   * Allows users to add competitors, view their activity, and compare metrics.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Competitors</h1>
          <p className="text-gray-600 mt-1">
            Track and analyze your competitors&apos; social media presence and strategies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Export Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add Competitor
          </button>
        </div>
      </div>

      {/* Competitor Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Competitors</h3>
          <div className="text-3xl font-bold text-blue-600">5</div>
          <p className="text-sm text-gray-500 mt-2">Currently monitoring</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Mentions</h3>
          <div className="text-3xl font-bold text-teal-600">284</div>
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-green-600">↗ +15%</span> from last week
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Performer</h3>
          <div className="text-lg font-bold text-orange-400">CompetitorX</div>
          <p className="text-sm text-gray-500 mt-2">Most active this week</p>
        </div>
      </div>

      {/* Competitors List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Tracked Competitors</h3>
          <p className="text-gray-600 text-sm">Monitor and analyze competitor activity</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competitor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentions (7d)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sentiment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Top Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: 'CompetitorX',
                  mentions: 89,
                  sentiment: 'Positive',
                  platform: 'Twitter',
                  status: 'Active',
                  trend: 'up'
                },
                {
                  name: 'RivalCorp',
                  mentions: 56,
                  sentiment: 'Neutral',
                  platform: 'LinkedIn',
                  status: 'Active',
                  trend: 'down'
                },
                {
                  name: 'TechCompetitor',
                  mentions: 42,
                  sentiment: 'Mixed',
                  platform: 'Reddit',
                  status: 'Active',
                  trend: 'up'
                },
                {
                  name: 'MarketLeader',
                  mentions: 78,
                  sentiment: 'Positive',
                  platform: 'Twitter',
                  status: 'Active',
                  trend: 'up'
                },
                {
                  name: 'StartupY',
                  mentions: 23,
                  sentiment: 'Positive',
                  platform: 'LinkedIn',
                  status: 'Monitoring',
                  trend: 'down'
                },
              ].map((competitor) => (
                <tr key={competitor.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700">
                            {competitor.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{competitor.name}</div>
                        <div className="text-sm text-gray-500">Technology Company</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{competitor.mentions}</span>
                      <span className={`ml-2 text-xs ${competitor.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {competitor.trend === 'up' ? '↗' : '↘'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      competitor.sentiment === 'Positive' ? 'bg-green-100 text-green-800' :
                      competitor.sentiment === 'Negative' ? 'bg-red-100 text-red-800' :
                      competitor.sentiment === 'Mixed' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {competitor.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {competitor.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      competitor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {competitor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
