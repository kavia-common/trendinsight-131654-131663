'use client';

import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';

interface TrendDataPoint {
  date: string;
  mentions: number;
  sentiment: number;
}

// Sample data for the trend overview
const mockTrendData: TrendDataPoint[] = [
  { date: '2024-01-01', mentions: 45, sentiment: 0.7 },
  { date: '2024-01-02', mentions: 52, sentiment: 0.6 },
  { date: '2024-01-03', mentions: 38, sentiment: 0.8 },
  { date: '2024-01-04', mentions: 67, sentiment: 0.5 },
  { date: '2024-01-05', mentions: 71, sentiment: 0.9 },
  { date: '2024-01-06', mentions: 59, sentiment: 0.7 },
  { date: '2024-01-07', mentions: 82, sentiment: 0.6 },
];

interface TrendOverviewProps {
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

// PUBLIC_INTERFACE
export default function TrendOverview({ 
  isVisible = true, 
  onToggleVisibility,
  className = ''
}: TrendOverviewProps) {
  /**
   * Trend Overview widget showing time series data for keyword mentions and sentiment trends.
   * Displays interactive charts with filtering options and accessibility features.
   */
  
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | '90d'>('7d');
  const [selectedMetric, setSelectedMetric] = useState<'mentions' | 'sentiment'>('mentions');

  if (!isVisible) return null;

  const maxValue = Math.max(...mockTrendData.map(d => d[selectedMetric === 'mentions' ? 'mentions' : 'sentiment']));
  const minValue = Math.min(...mockTrendData.map(d => d[selectedMetric === 'mentions' ? 'mentions' : 'sentiment']));

  // Simple SVG chart implementation
  const chartWidth = 300;
  const chartHeight = 150;
  const padding = 20;

  const getChartPoints = () => {
    return mockTrendData.map((point, index) => {
      const x = padding + (index / (mockTrendData.length - 1)) * (chartWidth - 2 * padding);
      const value = selectedMetric === 'mentions' ? point.mentions : point.sentiment;
      const normalizedValue = selectedMetric === 'mentions' 
        ? (value - minValue) / (maxValue - minValue)
        : value; // Sentiment is already 0-1
      const y = chartHeight - padding - (normalizedValue * (chartHeight - 2 * padding));
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <Card className={`${className}`} hover>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Trend Overview</CardTitle>
            <CardDescription>
              {selectedMetric === 'mentions' ? 'Keyword mentions' : 'Sentiment analysis'} over time
            </CardDescription>
          </div>
          {onToggleVisibility && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              aria-label="Hide trend overview widget"
            >
              ×
            </Button>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex bg-[var(--color-border)] rounded-md" role="tablist" aria-label="Metric selection">
            {(['mentions', 'sentiment'] as const).map((metric) => (
              <button
                key={metric}
                role="tab"
                aria-selected={selectedMetric === metric}
                aria-controls={`trend-chart-${metric}`}
                tabIndex={selectedMetric === metric ? 0 : -1}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  selectedMetric === metric
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
                onClick={() => setSelectedMetric(metric)}
              >
                {metric.charAt(0).toUpperCase() + metric.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex bg-[var(--color-border)] rounded-md" role="tablist" aria-label="Timeframe selection">
            {(['7d', '30d', '90d'] as const).map((timeframe) => (
              <button
                key={timeframe}
                role="tab"
                aria-selected={selectedTimeframe === timeframe}
                tabIndex={selectedTimeframe === timeframe ? 0 : -1}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-[var(--color-secondary)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
                onClick={() => setSelectedTimeframe(timeframe)}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Chart Container */}
        <div className="relative">
          <svg
            width={chartWidth}
            height={chartHeight}
            className="w-full border border-[var(--color-border)] rounded-md bg-[var(--color-surface)]"
            role="img"
            aria-label={`${selectedMetric} trend chart showing ${mockTrendData.length} data points`}
          >
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border)" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Chart line */}
            <polyline
              fill="none"
              stroke={selectedMetric === 'mentions' ? 'var(--color-primary)' : 'var(--color-secondary)'}
              strokeWidth="2"
              points={getChartPoints()}
            />
            
            {/* Data points */}
            {mockTrendData.map((point, index) => {
              const x = padding + (index / (mockTrendData.length - 1)) * (chartWidth - 2 * padding);
              const value = selectedMetric === 'mentions' ? point.mentions : point.sentiment;
              const normalizedValue = selectedMetric === 'mentions' 
                ? (value - minValue) / (maxValue - minValue)
                : value;
              const y = chartHeight - padding - (normalizedValue * (chartHeight - 2 * padding));
              
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={selectedMetric === 'mentions' ? 'var(--color-primary)' : 'var(--color-secondary)'}
                  className="hover:r-4 transition-all cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${point.date}: ${value} ${selectedMetric}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      // Could show tooltip or detailed info
                    }
                  }}
                />
              );
            })}
          </svg>
          
          {/* Summary stats */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                {selectedMetric === 'mentions' 
                  ? mockTrendData[mockTrendData.length - 1].mentions 
                  : (mockTrendData[mockTrendData.length - 1].sentiment * 100).toFixed(0) + '%'
                }
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-secondary)]">
                {selectedMetric === 'mentions' 
                  ? Math.round(mockTrendData.reduce((sum, d) => sum + d.mentions, 0) / mockTrendData.length)
                  : Math.round((mockTrendData.reduce((sum, d) => sum + d.sentiment, 0) / mockTrendData.length) * 100) + '%'
                }
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Average</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-accent)]">
                {selectedMetric === 'mentions' ? maxValue : Math.round(maxValue * 100) + '%'}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">Peak</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
