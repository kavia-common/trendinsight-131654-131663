'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  current?: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Setup', href: '/setup', icon: '⚙️' },
  { name: 'Competitors', href: '/competitors', icon: '🎯' },
  { name: 'Reports', href: '/reports', icon: '📈' },
  { name: 'Notifications', href: '/notifications', icon: '🔔' },
  { name: 'Billing/Plans', href: '/billing', icon: '💳' },
  { name: 'Settings', href: '/settings', icon: '🛠️' },
];

// PUBLIC_INTERFACE
export default function Sidebar() {
  /**
   * Sidebar navigation component with responsive design and accessibility features.
   * Contains navigation links for all main application sections.
   */
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    } transition-all duration-300`}>
      {/* Logo and collapse button */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-[var(--color-text-primary)]">TrendScout</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span className="text-[var(--color-text-secondary)]">
            {isCollapsed ? '→' : '←'}
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2" aria-label="Main navigation">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-[var(--color-primary)] text-white' 
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] hover:text-[var(--color-text-primary)]'
                }
                ${isCollapsed ? 'justify-center' : 'space-x-3'}
              `}
              aria-current={isActive ? 'page' : undefined}
              title={isCollapsed ? item.name : undefined}
            >
              <span className="text-lg" role="img" aria-label={item.name}>
                {item.icon}
              </span>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-[var(--color-border)]">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">User</p>
              <p className="text-xs text-[var(--color-text-muted)]">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
