'use client';

import React, { useState } from 'react';
import TrendOverview from '@/components/dashboard/trend-overview';
import SentimentOverview from '@/components/dashboard/sentiment-overview';
import MentionsFeed from '@/components/dashboard/mentions-feed';
import CompetitorCompare from '@/components/dashboard/competitor-compare';
import Alerts from '@/components/dashboard/alerts';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

interface WidgetVisibility {
  trendOverview: boolean;
  sentimentOverview: boolean;
  mentionsFeed: boolean;
  competitorCompare: boolean;
  alerts: boolean;
}

// PUBLIC_INTERFACE
export default function DashboardPage() {
  /**
   * Main dashboard page showcasing the TrendScout platform with interactive widgets.
   * Features responsive grid layout, widget visibility controls, and accessibility support.
   */

  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>({
    trendOverview: true,
    sentimentOverview: true,
    mentionsFeed: true,
    competitorCompare: true,
    alerts: true,
  });

  const [showWidgetControls, setShowWidgetControls] = useState(false);

  // Toggle individual widget visibility
  const toggleWidget = (widgetKey: keyof WidgetVisibility) => {
    setWidgetVisibility(prev => ({
      ...prev,
      [widgetKey]: !prev[widgetKey]
    }));
  };

  // Reset all widgets to visible
  const showAllWidgets = () => {
    setWidgetVisibility({
      trendOverview: true,
      sentimentOverview: true,
      mentionsFeed: true,
      competitorCompare: true,
      alerts: true,
    });
  };

  // Hide all widgets
  const hideAllWidgets = () => {
    setWidgetVisibility({
      trendOverview: false,
      sentimentOverview: false,
      mentionsFeed: false,
      competitorCompare: false,
      alerts: false,
    });
  };

  const visibleWidgetCount = Object.values(widgetVisibility).filter(Boolean).length;
  const totalWidgetCount = Object.keys(widgetVisibility).length;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Dashboard</h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            Welcome back! Here&apos;s what&apos;s happening with your social media monitoring.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Widget visibility indicator */}
          <Badge variant="default" className="hidden lg:flex">
            {visibleWidgetCount}/{totalWidgetCount} widgets
          </Badge>
          
          {/* Widget controls toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowWidgetControls(!showWidgetControls)}
            aria-label="Toggle widget controls"
            aria-expanded={showWidgetControls}
          >
            <span className="mr-2">⚙️</span>
            Customize
          </Button>
          
          <Button variant="outline" size="sm">
            Export Report
          </Button>
          
          <Button variant="primary" size="sm">
            New Alert
          </Button>
        </div>
      </div>

      {/* Widget Controls Panel */}
      {showWidgetControls && (
        <div 
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4"
          role="region"
          aria-label="Widget visibility controls"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="font-medium text-[var(--color-text-primary)] mb-2">Widget Visibility</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Show or hide dashboard widgets to customize your view
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {Object.entries(widgetVisibility).map(([key, isVisible]) => {
                const widgetNames = {
                  trendOverview: 'Trend Overview',
                  sentimentOverview: 'Sentiment Overview',
                  mentionsFeed: 'Mentions Feed',
                  competitorCompare: 'Competitor Compare',
                  alerts: 'Alerts'
                };
                
                return (
                  <label
                    key={key}
                    className="flex items-center space-x-2 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={isVisible}
                      onChange={() => toggleWidget(key as keyof WidgetVisibility)}
                      className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    />
                    <span className="text-[var(--color-text-primary)]">
                      {widgetNames[key as keyof typeof widgetNames]}
                    </span>
                  </label>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={showAllWidgets}
                disabled={visibleWidgetCount === totalWidgetCount}
              >
                Show All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={hideAllWidgets}
                disabled={visibleWidgetCount === 0}
              >
                Hide All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Row 1: Overview widgets */}
        {widgetVisibility.trendOverview && (
          <div className="lg:col-span-2">
            <TrendOverview
              isVisible={widgetVisibility.trendOverview}
              onToggleVisibility={() => toggleWidget('trendOverview')}
            />
          </div>
        )}
        
        {widgetVisibility.sentimentOverview && (
          <div className={widgetVisibility.trendOverview ? '' : 'lg:col-span-2'}>
            <SentimentOverview
              isVisible={widgetVisibility.sentimentOverview}
              onToggleVisibility={() => toggleWidget('sentimentOverview')}
            />
          </div>
        )}

        {/* Row 2: Content and comparison widgets */}
        {widgetVisibility.mentionsFeed && (
          <div className="lg:col-span-2">
            <MentionsFeed
              isVisible={widgetVisibility.mentionsFeed}
              onToggleVisibility={() => toggleWidget('mentionsFeed')}
            />
          </div>
        )}
        
        {widgetVisibility.alerts && (
          <div className={widgetVisibility.mentionsFeed ? '' : 'lg:col-span-2'}>
            <Alerts
              isVisible={widgetVisibility.alerts}
              onToggleVisibility={() => toggleWidget('alerts')}
            />
          </div>
        )}

        {/* Row 3: Competitor analysis - full width when visible */}
        {widgetVisibility.competitorCompare && (
          <div className="lg:col-span-2 xl:col-span-3">
            <CompetitorCompare
              isVisible={widgetVisibility.competitorCompare}
              onToggleVisibility={() => toggleWidget('competitorCompare')}
            />
          </div>
        )}
      </div>

      {/* Empty state when no widgets are visible */}
      {visibleWidgetCount === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
              All widgets are hidden
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Enable some widgets to see your dashboard insights and analytics.
            </p>
            <Button
              variant="primary"
              onClick={showAllWidgets}
            >
              Show All Widgets
            </Button>
          </div>
        </div>
      )}

      {/* Quick stats summary - always visible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">2,847</div>
          <div className="text-sm text-[var(--color-text-muted)]">Total Mentions</div>
          <div className="text-xs text-[var(--color-success)] mt-1">
            ↗ +12% from last week
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[var(--color-secondary)] mb-1">156</div>
          <div className="text-sm text-[var(--color-text-muted)]">Competitor Activity</div>
          <div className="text-xs text-[var(--color-warning)] mt-1">
            → +3% from last week
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">24</div>
          <div className="text-sm text-[var(--color-text-muted)]">Trending Topics</div>
          <div className="text-xs text-[var(--color-success)] mt-1">
            ↗ +8% from last week
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[var(--color-info)] mb-1">73%</div>
          <div className="text-sm text-[var(--color-text-muted)]">Positive Sentiment</div>
          <div className="text-xs text-[var(--color-success)] mt-1">
            ↗ +5% from last week
          </div>
        </div>
      </div>

      {/* Accessibility landmark for screen readers */}
      <div 
        role="region" 
        aria-label="Dashboard navigation shortcuts"
        className="sr-only"
      >
        <h2>Keyboard Navigation</h2>
        <ul>
          <li>Tab: Navigate between widgets and controls</li>
          <li>Enter/Space: Activate buttons and toggles</li>
          <li>Arrow keys: Navigate within charts and lists</li>
          <li>Escape: Close modals and dropdowns</li>
        </ul>
      </div>
    </div>
  );
}
