'use client';

import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}

// Sample sentiment data
const mockSentimentData: SentimentData = {
  positive: 156,
  neutral: 89,
  negative: 23,
  total: 268
};

const mockTrendData = [
  { date: '2024-01-01', positive: 45, neutral: 32, negative: 8 },
  { date: '2024-01-02', positive: 52, neutral: 28, negative: 12 },
  { date: '2024-01-03', positive: 38, neutral: 35, negative: 6 },
  { date: '2024-01-04', positive: 61, neutral: 25, negative: 15 },
  { date: '2024-01-05', positive: 73, neutral: 31, negative: 9 },
  { date: '2024-01-06', positive: 59, neutral: 29, negative: 11 },
  { date: '2024-01-07', positive: 68, neutral: 34, negative: 7 },
];

interface SentimentOverviewProps {
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

// PUBLIC_INTERFACE
export default function SentimentOverview({ 
  isVisible = true, 
  onToggleVisibility,
  className = ''
}: SentimentOverviewProps) {
  /**
   * Sentiment Overview widget displaying sentiment distribution with donut chart
   * and trend analysis. Includes accessibility features and keyboard navigation.
   */
  
  const [selectedView, setSelectedView] = useState<'distribution' | 'trend'>('distribution');

  if (!isVisible) return null;

  const { positive, neutral, negative, total } = mockSentimentData;
  
  // Calculate percentages
  const positivePercent = (positive / total) * 100;
  const neutralPercent = (neutral / total) * 100;
  const negativePercent = (negative / total) * 100;

  // Donut chart parameters
  const size = 160;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke offsets for segments
  const neutralOffset = (positivePercent / 100) * circumference;
  const negativeOffset = ((positivePercent + neutralPercent) / 100) * circumference;

  // Trend calculation
  const currentWeek = mockTrendData.slice(-7);
  const previousWeek = mockTrendData.slice(-14, -7);
  
  const currentPositiveAvg = currentWeek.reduce((sum, d) => sum + d.positive, 0) / currentWeek.length;
  const previousPositiveAvg = previousWeek.reduce((sum, d) => sum + d.positive, 0) / previousWeek.length;
  const trendDirection = currentPositiveAvg > previousPositiveAvg ? 'up' : 'down';
  const trendPercent = Math.abs(((currentPositiveAvg - previousPositiveAvg) / previousPositiveAvg) * 100).toFixed(1);

  return (
    <Card className={`${className}`} hover>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Sentiment Overview</CardTitle>
            <CardDescription>
              Brand sentiment analysis across all monitored mentions
            </CardDescription>
          </div>
          {onToggleVisibility && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              aria-label="Hide sentiment overview widget"
            >
              ×
            </Button>
          )}
        </div>
        
        {/* View toggle */}
        <div className="flex bg-[var(--color-border)] rounded-md mt-4" role="tablist" aria-label="View selection">
          {(['distribution', 'trend'] as const).map((view) => (
            <button
              key={view}
              role="tab"
              aria-selected={selectedView === view}
              aria-controls={`sentiment-${view}`}
              tabIndex={selectedView === view ? 0 : -1}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                selectedView === view
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
              onClick={() => setSelectedView(view)}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        {selectedView === 'distribution' ? (
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Donut Chart */}
            <div className="relative">
              <svg
                width={size}
                height={size}
                className="transform -rotate-90"
                role="img"
                aria-label={`Sentiment distribution: ${positivePercent.toFixed(1)}% positive, ${neutralPercent.toFixed(1)}% neutral, ${negativePercent.toFixed(1)}% negative`}
              >
                {/* Background circle */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth={strokeWidth}
                />
                
                {/* Positive segment */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="var(--color-success)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${(positivePercent / 100) * circumference} ${circumference}`}
                  strokeDashoffset={0}
                  className="transition-all duration-300"
                />
                
                {/* Neutral segment */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="var(--color-warning)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${(neutralPercent / 100) * circumference} ${circumference}`}
                  strokeDashoffset={-neutralOffset}
                  className="transition-all duration-300"
                />
                
                {/* Negative segment */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="var(--color-error)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${(negativePercent / 100) * circumference} ${circumference}`}
                  strokeDashoffset={-negativeOffset}
                  className="transition-all duration-300"
                />
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-[var(--color-text-primary)]">{total}</div>
                <div className="text-sm text-[var(--color-text-muted)]">Total</div>
              </div>
            </div>
            
            {/* Legend and Stats */}
            <div className="flex-1 space-y-4">
              <div className="space-y-3">
                {[
                  { label: 'Positive', value: positive, percent: positivePercent, color: 'var(--color-success)' },
                  { label: 'Neutral', value: neutral, percent: neutralPercent, color: 'var(--color-warning)' },
                  { label: 'Negative', value: negative, percent: negativePercent, color: 'var(--color-error)' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-[var(--color-text-primary)]">
                        {item.value}
                      </span>
                      <Badge size="sm" variant="default">
                        {item.percent.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Trend indicator */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center space-x-2">
                  <span 
                    className={`text-lg ${trendDirection === 'up' ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}
                    aria-label={`Sentiment trend ${trendDirection}`}
                  >
                    {trendDirection === 'up' ? '↗' : '↘'}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {trendPercent}% vs last week
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Trend View */
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Positive Trend', value: `+${trendPercent}%`, color: 'var(--color-success)' },
                { label: 'Neutral Stable', value: '±2.1%', color: 'var(--color-warning)' },
                { label: 'Negative Down', value: '-1.3%', color: 'var(--color-error)' }
              ].map((trend) => (
                <div key={trend.label} className="text-center p-3 border border-[var(--color-border)] rounded-md">
                  <div 
                    className="text-xl font-bold"
                    style={{ color: trend.color }}
                  >
                    {trend.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">{trend.label}</div>
                </div>
              ))}
            </div>
            
            {/* Mini trend chart */}
            <div className="h-16 border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] flex items-end justify-around p-2">
              {mockTrendData.slice(-7).map((day, index) => {
                const total = day.positive + day.neutral + day.negative;
                const positiveHeight = (day.positive / total) * 100;
                return (
                  <div
                    key={index}
                    className="w-6 bg-[var(--color-success)] rounded-t"
                    style={{ height: `${positiveHeight}%` }}
                    title={`${day.date}: ${day.positive}/${total} positive`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
