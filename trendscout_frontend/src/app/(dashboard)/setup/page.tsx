import React from 'react';

// PUBLIC_INTERFACE
export default function SetupPage() {
  /**
   * Setup page for configuring business category, keywords, and initial platform settings.
   * Provides guided setup for new users and configuration management for existing users.
   */

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Setup</h1>
          <p className="text-gray-600 mt-1">
            Configure your business category, keywords, and monitoring preferences.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Reset to Defaults
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Configuration
          </button>
        </div>
      </div>

      {/* Setup sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Business Configuration */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Select your industry...</option>
                <option>Technology</option>
                <option>Marketing</option>
                <option>E-commerce</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input 
                type="text" 
                placeholder="Your company name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <textarea 
                placeholder="Describe your target audience..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Keywords & Monitoring */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keywords & Monitoring</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Keywords
              </label>
              <input 
                type="text" 
                placeholder="Enter keywords separated by commas"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Include your brand name, product names, and related terms
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry Keywords
              </label>
              <input 
                type="text" 
                placeholder="Industry-specific terms..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monitoring Frequency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Real-time</option>
                <option>Every hour</option>
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Platform Settings</h3>
          <p className="text-gray-600 text-sm">Configure which social media platforms to monitor</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Twitter', icon: '🐦', enabled: true },
              { name: 'LinkedIn', icon: '💼', enabled: true },
              { name: 'Reddit', icon: '🤖', enabled: false },
              { name: 'Facebook', icon: '📘', enabled: false },
              { name: 'Instagram', icon: '📸', enabled: false },
              { name: 'YouTube', icon: '📺', enabled: false },
              { name: 'TikTok', icon: '🎵', enabled: false },
              { name: 'Discord', icon: '🎮', enabled: false },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{platform.icon}</span>
                  <span className="font-medium text-gray-900">{platform.name}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    defaultChecked={platform.enabled}
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
