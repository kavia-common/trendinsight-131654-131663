import React from 'react';
import Sidebar from '@/components/ui/sidebar';
import Topbar from '@/components/ui/topbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  /**
   * Dashboard layout component that provides a consistent shell structure
   * with sidebar navigation and top bar for all dashboard pages.
   */
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-[var(--color-surface)] border-b border-[var(--color-border)] lg:hidden">
          <Topbar />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[var(--color-background)] p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
