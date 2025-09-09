'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

// PUBLIC_INTERFACE
export default function Tabs({ 
  tabs, 
  defaultTab, 
  onTabChange, 
  className = '',
  variant = 'default' 
}: TabsProps) {
  /**
   * Accessible tabs component with keyboard navigation and ARIA support.
   * Supports different visual variants and disabled states.
   */
  
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Handle tab change
  const handleTabChange = useCallback((tabId: string) => {
    if (tabs.find(tab => tab.id === tabId)?.disabled) return;
    
    setActiveTab(tabId);
    onTabChange?.(tabId);
  }, [tabs, onTabChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!tabListRef.current?.contains(event.target as Node)) return;

      const enabledTabs = tabs.filter(tab => !tab.disabled);
      const currentIndex = enabledTabs.findIndex(tab => tab.id === activeTab);
      
      let nextIndex = currentIndex;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : enabledTabs.length - 1;
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextIndex = currentIndex < enabledTabs.length - 1 ? currentIndex + 1 : 0;
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = enabledTabs.length - 1;
          break;
        default:
          return;
      }

      const nextTab = enabledTabs[nextIndex];
      if (nextTab) {
        handleTabChange(nextTab.id);
        tabRefs.current[nextTab.id]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, tabs, handleTabChange]);

  const getTabStyles = (tab: Tab, isActive: boolean) => {
    const baseClasses = `
      px-4 py-2 text-sm font-medium transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    switch (variant) {
      case 'pills':
        return `
          ${baseClasses} rounded-[var(--radius-md)]
          ${isActive 
            ? 'bg-[var(--color-primary)] text-white' 
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)]'
          }
        `;
      case 'underline':
        return `
          ${baseClasses} border-b-2 transition-all
          ${isActive 
            ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
            : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border)]'
          }
        `;
      default:
        return `
          ${baseClasses} border border-[var(--color-border)] 
          ${isActive 
            ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border-b-[var(--color-surface)]' 
            : 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)]'
          }
        `;
    }
  };

  return (
    <div className={className}>
      {/* Tab list */}
      <div 
        ref={tabListRef}
        className={`
          flex
          ${variant === 'default' ? 'border-b border-[var(--color-border)]' : ''}
          ${variant === 'pills' ? 'space-x-1 p-1 bg-[var(--color-border)] rounded-[var(--radius-lg)]' : ''}
          ${variant === 'underline' ? 'space-x-6' : ''}
        `}
        role="tablist"
        aria-label="Tab navigation"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el; }}
              className={getTabStyles(tab, isActive)}
              onClick={() => handleTabChange(tab.id)}
              disabled={tab.disabled}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== activeTab}
            className={tab.id === activeTab ? 'block' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

interface TabContentProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function TabContent({ children, className = '' }: TabContentProps) {
  /**
   * Tab content wrapper component.
   */
  return (
    <div className={`py-4 ${className}`}>
      {children}
    </div>
  );
}
