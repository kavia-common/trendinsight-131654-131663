'use client';

import React, { useState } from 'react';
import Button from './button';

// PUBLIC_INTERFACE
export default function Topbar() {
  /**
   * Top navigation bar component for mobile devices and header actions.
   * Includes mobile menu toggle and user actions.
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Mobile menu button and logo */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            aria-label="Open navigation menu"
          >
            <span className="text-xl">☰</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="font-semibold text-[var(--color-text-primary)]">TrendScout</span>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <Button variant="ghost" size="sm" aria-label="Notifications">
            <span className="text-lg">🔔</span>
          </Button>

          {/* User menu */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="mt-3 pt-3 border-t border-[var(--color-border)] lg:hidden">
          <nav className="space-y-2" aria-label="Mobile navigation">
            {[
              { name: 'Dashboard', href: '/dashboard', icon: '📊' },
              { name: 'Setup', href: '/setup', icon: '⚙️' },
              { name: 'Competitors', href: '/competitors', icon: '🎯' },
              { name: 'Reports', href: '/reports', icon: '📈' },
              { name: 'Notifications', href: '/notifications', icon: '🔔' },
              { name: 'Billing/Plans', href: '/billing', icon: '💳' },
              { name: 'Settings', href: '/settings', icon: '🛠️' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                <span className="text-lg" role="img" aria-label={item.name}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
