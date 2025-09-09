'use client';

import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

interface Alert {
  id: string;
  type: 'opportunity' | 'threat' | 'trend' | 'mention' | 'competitor';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  actionable: boolean;
  platform?: string;
  url?: string;
  isRead: boolean;
}

// Sample alerts data
const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Trending Topic Opportunity',
    description: 'AI automation is trending in your industry with 340% increase in mentions. Consider creating content around this topic.',
    severity: 'high',
    timestamp: '2024-01-15T10:30:00Z',
    actionable: true,
    platform: 'twitter',
    url: 'https://twitter.com/search?q=AI%20automation',
    isRead: false
  },
  {
    id: '2',
    type: 'threat',
    title: 'Negative Sentiment Spike',
    description: 'Negative sentiment increased by 45% in the last 24 hours. Primary concern: customer service response times.',
    severity: 'critical',
    timestamp: '2024-01-15T09:15:00Z',
    actionable: true,
    isRead: false
  },
  {
    id: '3',
    type: 'competitor',
    title: 'Competitor Product Launch',
    description: 'CompetitorX announced a new feature similar to yours. Monitor engagement and prepare competitive response.',
    severity: 'medium',
    timestamp: '2024-01-15T08:45:00Z',
    actionable: true,
    platform: 'linkedin',
    url: 'https://linkedin.com/posts/competitorx-123',
    isRead: false
  },
  {
    id: '4',
    type: 'mention',
    title: 'High-Volume Mention Day',
    description: 'Your brand received 3x more mentions than usual today. Mostly positive feedback about recent updates.',
    severity: 'low',
    timestamp: '2024-01-15T07:20:00Z',
    actionable: false,
    isRead: true
  },
  {
    id: '5',
    type: 'trend',
    title: 'Industry Trend Alert',
    description: 'Remote work tools gaining traction. Consider positioning your product in this space.',
    severity: 'medium',
    timestamp: '2024-01-15T06:10:00Z',
    actionable: true,
    isRead: true
  },
  {
    id: '6',
    type: 'opportunity',
    title: 'Influencer Engagement',
    description: 'Tech influencer @techguru mentioned similar tools. Opportunity for outreach and collaboration.',
    severity: 'medium',
    timestamp: '2024-01-15T05:30:00Z',
    actionable: true,
    platform: 'twitter',
    url: 'https://twitter.com/techguru/status/789',
    isRead: true
  }
];

interface AlertsProps {
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

// PUBLIC_INTERFACE
export default function Alerts({ 
  isVisible = true, 
  onToggleVisibility,
  className = ''
}: AlertsProps) {
  /**
   * Alerts widget displaying opportunities, threats, and actionable insights.
   * Includes filtering, severity indicators, and accessibility features.
   */
  
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [alerts, setAlerts] = useState(mockAlerts);

  if (!isVisible) return null;

  // Filter alerts based on selected criteria
  const filteredAlerts = alerts.filter(alert => {
    const typeMatch = selectedType === 'all' || alert.type === selectedType;
    const severityMatch = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const readMatch = !showOnlyUnread || !alert.isRead;
    return typeMatch && severityMatch && readMatch;
  });

  // Alert type configurations
  const alertTypeConfig = {
    opportunity: { icon: '🚀', label: 'Opportunity', color: 'var(--color-success)' },
    threat: { icon: '⚠️', label: 'Threat', color: 'var(--color-error)' },
    trend: { icon: '📈', label: 'Trend', color: 'var(--color-info)' },
    mention: { icon: '💬', label: 'Mention', color: 'var(--color-primary)' },
    competitor: { icon: '🎯', label: 'Competitor', color: 'var(--color-secondary)' }
  };

  // Severity configurations
  const getSeverityVariant = (severity: string): 'default' | 'warning' | 'error' => {
    switch (severity) {
      case 'medium':
        return 'warning';
      case 'high':
      case 'critical':
        return 'error';
      default:
        return 'default';
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor(diffMs / (1000 * 60));
    
    if (diffHours > 24) {
      return date.toLocaleDateString();
    } else if (diffHours > 0) {
      return `${diffHours}h ago`;
    } else {
      return `${diffMins}m ago`;
    }
  };

  // Mark alert as read
  const markAsRead = (alertId: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, isRead: true } : alert
      )
    );
  };

  // Dismiss alert
  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  const unreadCount = alerts.filter(alert => !alert.isRead).length;

  return (
    <Card className={`${className}`} hover>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <span>Alerts</span>
              {unreadCount > 0 && (
                <Badge variant="error" size="sm">
                  {unreadCount}
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Opportunities, threats, and actionable insights
            </CardDescription>
          </div>
          {onToggleVisibility && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              aria-label="Hide alerts widget"
            >
              ×
            </Button>
          )}
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div>
            <label htmlFor="type-filter" className="sr-only">Filter by alert type</label>
            <select
              id="type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="all">All Types</option>
              {Object.entries(alertTypeConfig).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="severity-filter" className="sr-only">Filter by severity</label>
            <select
              id="severity-filter"
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="all">All Severity</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={showOnlyUnread}
              onChange={(e) => setShowOnlyUnread(e.target.checked)}
              className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
            />
            <span>Unread only</span>
          </label>
        </div>
      </CardHeader>
      
      <CardContent>
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-8 text-[var(--color-text-muted)]">
            {showOnlyUnread ? 'No unread alerts.' : 'No alerts found for the selected filters.'}
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredAlerts.map((alert) => {
              const typeConfig = alertTypeConfig[alert.type];
              
              return (
                <article
                  key={alert.id}
                  className={`p-4 border rounded-lg transition-colors ${
                    !alert.isRead 
                      ? 'border-[var(--color-primary)] bg-blue-50/50' 
                      : 'border-[var(--color-border)] hover:bg-[var(--color-surface)]'
                  }`}
                  role="alert"
                  aria-live={!alert.isRead ? 'polite' : undefined}
                  tabIndex={0}
                  aria-label={`${alert.severity} ${alert.type} alert: ${alert.title}`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span
                        className="text-lg"
                        role="img"
                        aria-label={`${alert.type} alert`}
                      >
                        {typeConfig.icon}
                      </span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-[var(--color-text-primary)]">
                            {alert.title}
                          </h3>
                          {!alert.isRead && (
                            <div 
                              className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
                              aria-label="Unread alert"
                            />
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge
                            variant={getSeverityVariant(alert.severity)}
                            size="sm"
                          >
                            {alert.severity}
                          </Badge>
                          <Badge size="sm">
                            {typeConfig.label}
                          </Badge>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {formatTimestamp(alert.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {!alert.isRead && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(alert.id)}
                          aria-label={`Mark ${alert.title} as read`}
                        >
                          ✓
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dismissAlert(alert.id)}
                        aria-label={`Dismiss ${alert.title}`}
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                    {alert.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {alert.platform && (
                        <span className="text-xs text-[var(--color-text-muted)]">
                          📍 {alert.platform}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {alert.url && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(alert.url, '_blank', 'noopener,noreferrer')}
                          aria-label={`View source for ${alert.title}`}
                        >
                          View Source
                        </Button>
                      )}
                      {alert.actionable && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            // Could implement action handling
                            console.log('Take action on alert:', alert.id);
                          }}
                          aria-label={`Take action on ${alert.title}`}
                        >
                          Take Action
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
        
        {/* Quick actions */}
        {filteredAlerts.length > 0 && (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
            <div className="text-sm text-[var(--color-text-muted)]">
              {filteredAlerts.length} alert{filteredAlerts.length !== 1 ? 's' : ''}
              {unreadCount > 0 && ` (${unreadCount} unread)`}
            </div>
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setAlerts(prev => prev.map(alert => ({ ...alert, isRead: true })));
                  }}
                >
                  Mark All Read
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Could implement create alert functionality
                  console.log('Create new alert');
                }}
              >
                Create Alert
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
