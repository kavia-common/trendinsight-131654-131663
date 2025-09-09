'use client';

import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

interface CompetitorData {
  name: string;
  shareOfVoice: number;
  growth: number;
  mentions: number;
  sentiment: number;
  color: string;
}

// Sample competitor data
const mockCompetitorData: CompetitorData[] = [
  {
    name: 'CompetitorX',
    shareOfVoice: 34.2,
    growth: 12.5,
    mentions: 892,
    sentiment: 0.73,
    color: 'var(--color-primary)'
  },
  {
    name: 'RivalCorp',
    shareOfVoice: 28.7,
    growth: -3.2,
    mentions: 748,
    sentiment: 0.65,
    color: 'var(--color-secondary)'
  },
  {
    name: 'TechCompetitor',
    shareOfVoice: 18.5,
    growth: 8.7,
    mentions: 482,
    sentiment: 0.81,
    color: 'var(--color-accent)'
  },
  {
    name: 'MarketLeader',
    shareOfVoice: 12.1,
    growth: 15.3,
    mentions: 315,
    sentiment: 0.69,
    color: 'var(--color-success)'
  },
  {
    name: 'Your Brand',
    shareOfVoice: 6.5,
    growth: 23.1,
    mentions: 169,
    sentiment: 0.78,
    color: 'var(--color-info)'
  }
];

interface CompetitorCompareProps {
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

// PUBLIC_INTERFACE
export default function CompetitorCompare({ 
  isVisible = true, 
  onToggleVisibility,
  className = ''
}: CompetitorCompareProps) {
  /**
   * Competitor Compare widget showing bar chart comparisons of share of voice,
   * growth metrics, and competitor analysis with accessibility features.
   */
  
  const [selectedMetric, setSelectedMetric] = useState<'shareOfVoice' | 'growth' | 'mentions' | 'sentiment'>('shareOfVoice');
  const [sortBy, setSortBy] = useState<'value' | 'alphabetical'>('value');

  if (!isVisible) return null;

  // Sort data based on selected criteria
  const sortedData = [...mockCompetitorData].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a.name.localeCompare(b.name);
    }
    return b[selectedMetric] - a[selectedMetric];
  });

  // Get max value for scaling bars
  const maxValue = Math.max(...mockCompetitorData.map(d => d[selectedMetric]));

  // Metric configurations
  const metricConfig = {
    shareOfVoice: {
      label: 'Share of Voice',
      unit: '%',
      description: 'Percentage of total industry mentions'
    },
    growth: {
      label: 'Growth Rate',
      unit: '%',
      description: 'Mention growth vs. previous period'
    },
    mentions: {
      label: 'Total Mentions',
      unit: '',
      description: 'Total mentions in current period'
    },
    sentiment: {
      label: 'Sentiment Score',
      unit: '',
      description: 'Average sentiment (0-1 scale)'
    }
  };

  const formatValue = (value: number, metric: string) => {
    switch (metric) {
      case 'shareOfVoice':
      case 'growth':
        return `${value.toFixed(1)}%`;
      case 'sentiment':
        return (value * 100).toFixed(0) + '%';
      default:
        return value.toLocaleString();
    }
  };

  return (
    <Card className={`${className}`} hover>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Competitor Compare</CardTitle>
            <CardDescription>
              {metricConfig[selectedMetric].description}
            </CardDescription>
          </div>
          {onToggleVisibility && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              aria-label="Hide competitor compare widget"
            >
              ×
            </Button>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div>
            <label htmlFor="metric-select" className="sr-only">Select metric to compare</label>
            <select
              id="metric-select"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as 'shareOfVoice' | 'growth' | 'mentions' | 'sentiment')}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {Object.entries(metricConfig).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="sort-select" className="sr-only">Sort competitors by</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'value' | 'alphabetical')}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="value">Sort by Value</option>
              <option value="alphabetical">Sort A-Z</option>
            </select>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {sortedData.map((competitor, index) => {
            const value = competitor[selectedMetric];
            const percentage = (value / maxValue) * 100;
            const isYourBrand = competitor.name === 'Your Brand';
            
            return (
              <div
                key={competitor.name}
                className={`relative p-3 rounded-lg transition-colors ${
                  isYourBrand ? 'bg-blue-50 border-2 border-[var(--color-primary)]' : 'hover:bg-[var(--color-surface)]'
                }`}
                role="group"
                aria-label={`${competitor.name}: ${formatValue(value, selectedMetric)} ${metricConfig[selectedMetric].unit}`}
                tabIndex={0}
              >
                {/* Competitor info */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: competitor.color }}
                        aria-hidden="true"
                      />
                      <span className={`font-medium ${isYourBrand ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)]'}`}>
                        {competitor.name}
                      </span>
                      {isYourBrand && (
                        <Badge size="sm" variant="primary">
                          You
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      #{index + 1}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-[var(--color-text-primary)]">
                      {formatValue(value, selectedMetric)}
                    </div>
                    {selectedMetric !== 'growth' && (
                      <div className={`text-xs ${
                        competitor.growth > 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
                      }`}>
                        {competitor.growth > 0 ? '↗' : '↘'} {Math.abs(competitor.growth).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Bar chart */}
                <div className="relative">
                  <div className="w-full bg-[var(--color-border)] rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: competitor.color
                      }}
                      role="progressbar"
                      aria-valuenow={value}
                      aria-valuemin={0}
                      aria-valuemax={maxValue}
                      aria-label={`${competitor.name} ${metricConfig[selectedMetric].label}: ${formatValue(value, selectedMetric)}`}
                    />
                  </div>
                </div>
                
                {/* Additional metrics */}
                <div className="flex items-center justify-between mt-2 text-xs text-[var(--color-text-muted)]">
                  <span>{competitor.mentions.toLocaleString()} mentions</span>
                  <span>
                    Sentiment: {(competitor.sentiment * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Summary stats */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-[var(--color-primary)]">
                {sortedData.findIndex(c => c.name === 'Your Brand') + 1}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Your Rank</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[var(--color-secondary)]">
                {formatValue(sortedData.find(c => c.name === 'Your Brand')?.[selectedMetric] || 0, selectedMetric)}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Your Score</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[var(--color-accent)]">
                {formatValue(mockCompetitorData.reduce((sum, c) => sum + c[selectedMetric], 0) / mockCompetitorData.length, selectedMetric)}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Average</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[var(--color-success)]">
                {formatValue(Math.max(...mockCompetitorData.map(c => c[selectedMetric])), selectedMetric)}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">Top Score</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
