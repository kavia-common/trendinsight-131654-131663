import React from 'react';

// PUBLIC_INTERFACE
export default function SettingsPage() {
  /**
   * Settings page for managing user preferences, account settings, and system configuration.
   * Provides various configuration options for personalizing the user experience.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your account preferences and application settings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Reset to Defaults
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Settings Categories</h3>
            </div>
            <nav className="p-4 space-y-2">
              {[
                { name: 'Profile', icon: '👤', active: true },
                { name: 'Account', icon: '⚙️', active: false },
                { name: 'Notifications', icon: '🔔', active: false },
                { name: 'Privacy', icon: '🔒', active: false },
                { name: 'Integrations', icon: '🔗', active: false },
                { name: 'Billing', icon: '💳', active: false },
                { name: 'Support', icon: '❓', active: false }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
              <p className="text-gray-600 text-sm">Update your personal information and profile details</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-medium">U</span>
                  </div>
                </div>
                <div className="flex-1">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Change Avatar
                  </button>
                  <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="user@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input 
                  type="text" 
                  placeholder="Your company name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Zone
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option>Pacific Time (PT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Central Time (CT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Preferences */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Account Preferences</h3>
              <p className="text-gray-600 text-sm">Customize your account settings and preferences</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Language & Region */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Language & Region</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Format
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Theme Preferences */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Appearance</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Theme
                    </label>
                    <div className="flex space-x-4">
                      {['Light', 'Dark', 'Auto'].map((theme) => (
                        <label key={theme} className="flex items-center">
                          <input
                            type="radio"
                            name="theme"
                            defaultChecked={theme === 'Auto'}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{theme}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Preferences */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Dashboard</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Show tutorial tips', enabled: true, description: 'Display helpful tips throughout the interface' },
                    { name: 'Auto-refresh data', enabled: true, description: 'Automatically refresh dashboard data every 5 minutes' },
                    { name: 'Compact view', enabled: false, description: 'Use a more compact layout for dashboard widgets' },
                    { name: 'Show competitor alerts', enabled: true, description: 'Display competitor activity alerts on dashboard' }
                  ].map((preference) => (
                    <div key={preference.name} className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-gray-900">{preference.name}</h5>
                        <p className="text-xs text-gray-500">{preference.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input 
                          type="checkbox" 
                          defaultChecked={preference.enabled}
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

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Security</h3>
              <p className="text-gray-600 text-sm">Manage your account security and authentication</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
                  <p className="text-xs text-gray-500">Update your account password</p>
                </div>
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Disabled</span>
                  <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                    Enable
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Active Sessions</h4>
                  <p className="text-xs text-gray-500">Manage your active login sessions</p>
                </div>
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
