import React from 'react';

// PUBLIC_INTERFACE
export default function NotificationsPage() {
  /**
   * Notifications page for managing alerts, notification preferences, and viewing recent activity.
   * Allows users to configure when and how they receive notifications about mentions and trends.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">
            Manage your alerts and notification preferences for mentions and trends.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Mark All Read
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Alert
          </button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Unread Alerts</h3>
          <div className="text-3xl font-bold text-red-600">7</div>
          <p className="text-sm text-gray-500 mt-2">Require attention</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Rules</h3>
          <div className="text-3xl font-bold text-blue-600">12</div>
          <p className="text-sm text-gray-500 mt-2">Monitoring conditions</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Today&apos;s Alerts</h3>
          <div className="text-3xl font-bold text-teal-600">23</div>
          <p className="text-sm text-gray-500 mt-2">Notifications sent</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
          <div className="text-3xl font-bold text-orange-400">2.5h</div>
          <p className="text-sm text-gray-500 mt-2">Average response</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Notifications */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
            <p className="text-gray-600 text-sm">Latest alerts and activity updates</p>
          </div>
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {[
              {
                id: 1,
                type: 'mention',
                title: 'New brand mention detected',
                message: 'Your company was mentioned on Twitter by @techreporter',
                time: '5 minutes ago',
                unread: true,
                priority: 'high'
              },
              {
                id: 2,
                type: 'competitor',
                title: 'Competitor activity alert',
                message: 'CompetitorX launched a new product campaign',
                time: '2 hours ago',
                unread: true,
                priority: 'medium'
              },
              {
                id: 3,
                type: 'trend',
                title: 'Trending topic detected',
                message: '"AI automation" is gaining traction in your industry',
                time: '4 hours ago',
                unread: false,
                priority: 'low'
              },
              {
                id: 4,
                type: 'sentiment',
                title: 'Sentiment change alert',
                message: 'Negative sentiment spike detected for your brand',
                time: '6 hours ago',
                unread: true,
                priority: 'high'
              },
              {
                id: 5,
                type: 'report',
                title: 'Weekly report generated',
                message: 'Your weekly social media summary is ready',
                time: '1 day ago',
                unread: false,
                priority: 'low'
              },
              {
                id: 6,
                type: 'mention',
                title: 'High-volume mention day',
                message: 'Unusual spike in brand mentions detected',
                time: '2 days ago',
                unread: false,
                priority: 'medium'
              }
            ].map((notification) => (
              <div key={notification.id} className={`p-4 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                    notification.priority === 'high' ? 'bg-red-500' :
                    notification.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                      </p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        notification.type === 'mention' ? 'bg-blue-100 text-blue-800' :
                        notification.type === 'competitor' ? 'bg-purple-100 text-purple-800' :
                        notification.type === 'trend' ? 'bg-green-100 text-green-800' :
                        notification.type === 'sentiment' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {notification.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Alert Settings</h3>
            <p className="text-gray-600 text-sm">Configure your notification preferences</p>
          </div>
          <div className="p-6 space-y-4">
            {[
              { name: 'Brand Mentions', enabled: true, description: 'When your brand is mentioned' },
              { name: 'Competitor Activity', enabled: true, description: 'Competitor updates' },
              { name: 'Trending Topics', enabled: false, description: 'Industry trends' },
              { name: 'Sentiment Changes', enabled: true, description: 'Sentiment shifts' },
              { name: 'Weekly Reports', enabled: true, description: 'Scheduled reports' },
              { name: 'System Updates', enabled: false, description: 'Platform updates' }
            ].map((setting) => (
              <div key={setting.name} className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{setting.name}</h4>
                  <p className="text-xs text-gray-500">{setting.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    defaultChecked={setting.enabled}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
