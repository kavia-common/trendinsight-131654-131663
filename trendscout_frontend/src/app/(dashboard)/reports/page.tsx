import React from 'react';

// PUBLIC_INTERFACE
export default function ReportsPage() {
  /**
   * Reports page for viewing analytics, insights, and generating custom reports.
   * Provides various report types and visualization options for users.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">
            Generate and view comprehensive reports on your social media monitoring.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Schedule Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Weekly Summary',
            description: 'Overview of mentions and trends',
            icon: '📊',
            count: '12 reports'
          },
          {
            title: 'Competitor Analysis',
            description: 'Detailed competitor insights',
            icon: '🎯',
            count: '8 reports'
          },
          {
            title: 'Trend Analysis',
            description: 'Emerging trends and opportunities',
            icon: '📈',
            count: '5 reports'
          },
          {
            title: 'Custom Reports',
            description: 'User-defined report templates',
            icon: '⚙️',
            count: '3 templates'
          }
        ].map((reportType) => (
          <div key={reportType.title} className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{reportType.icon}</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {reportType.count}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{reportType.title}</h3>
            <p className="text-sm text-gray-600">{reportType.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
              <p className="text-gray-600 text-sm">Your latest generated reports</p>
            </div>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option>All Reports</option>
                <option>Weekly Summary</option>
                <option>Competitor Analysis</option>
                <option>Trend Analysis</option>
              </select>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              title: 'Weekly Social Media Summary',
              type: 'Weekly Summary',
              date: '2024-01-15',
              status: 'Ready',
              insights: 12,
              size: '2.4 MB'
            },
            {
              title: 'Competitor Analysis - Q1 2024',
              type: 'Competitor Analysis',
              date: '2024-01-12',
              status: 'Ready',
              insights: 8,
              size: '1.8 MB'
            },
            {
              title: 'Emerging Trends Report',
              type: 'Trend Analysis',
              date: '2024-01-10',
              status: 'Ready',
              insights: 15,
              size: '3.1 MB'
            },
            {
              title: 'Custom Brand Monitoring',
              type: 'Custom Report',
              date: '2024-01-08',
              status: 'Processing',
              insights: 0,
              size: '--'
            },
            {
              title: 'Monthly Competition Review',
              type: 'Competitor Analysis',
              date: '2024-01-05',
              status: 'Ready',
              insights: 22,
              size: '4.2 MB'
            }
          ].map((report, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-sm font-medium text-gray-900">{report.title}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Ready' ? 'bg-green-100 text-green-800' : 
                      report.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.insights} insights</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {report.status === 'Ready' && (
                    <>
                      <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                        View
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">
                        Download
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">
                        Share
                      </button>
                    </>
                  )}
                  {report.status === 'Processing' && (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-gray-500">Processing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
