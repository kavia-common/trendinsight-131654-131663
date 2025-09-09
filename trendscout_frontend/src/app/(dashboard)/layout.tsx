'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Setup', href: '/setup', icon: '⚙️' },
  { name: 'Competitors', href: '/competitors', icon: '🎯' },
  { name: 'Reports', href: '/reports', icon: '📈' },
  { name: 'Notifications', href: '/notifications', icon: '🔔' },
  { name: 'Billing/Plans', href: '/billing', icon: '💳' },
  { name: 'Settings', href: '/settings', icon: '🛠️' },
];

// PUBLIC_INTERFACE
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  /**
   * Dashboard layout component that provides a consistent shell structure
   * with sidebar navigation and top bar for all dashboard pages.
   */
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-shrink-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col w-full">
          {/* Logo */}
          <div className="flex items-center p-4 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="ml-2 font-semibold text-gray-900">TrendScout</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">User</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="bg-white border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                <span className="text-xl">☰</span>
              </button>
              <div className="ml-3 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <span className="ml-2 font-semibold text-gray-900">TrendScout</span>
              </div>
            </div>
            <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
              <span className="text-lg">🔔</span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
