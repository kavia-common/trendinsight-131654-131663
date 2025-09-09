'use client';

import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';

interface Mention {
  id: string;
  platform: 'twitter' | 'linkedin' | 'reddit' | 'facebook' | 'instagram';
  author: string;
  content: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  timestamp: string;
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
  url: string;
}

// Sample mentions data
const mockMentions: Mention[] = [
  {
    id: '1',
    platform: 'twitter',
    author: '@techreporter',
    content: 'Just discovered this amazing social media monitoring tool! The insights are incredibly detailed and the interface is so clean. Perfect for small businesses like mine. #TrendScout',
    sentiment: 'positive',
    timestamp: '2024-01-15T10:30:00Z',
    engagement: { likes: 23, shares: 8, comments: 5 },
    url: 'https://twitter.com/techreporter/status/123'
  },
  {
    id: '2',
    platform: 'linkedin',
    author: 'Sarah Johnson',
    content: 'Been using TrendScout for competitor analysis and it\'s been a game changer. The pricing is so much better than enterprise tools but gives similar quality insights.',
    sentiment: 'positive',
    timestamp: '2024-01-15T09:15:00Z',
    engagement: { likes: 45, shares: 12, comments: 8 },
    url: 'https://linkedin.com/posts/sarah-johnson-123'
  },
  {
    id: '3',
    platform: 'reddit',
    author: 'u/marketingpro',
    content: 'Has anyone tried TrendScout? Looking for affordable social listening tools for my freelance business. The big enterprise solutions are way out of budget.',
    sentiment: 'neutral',
    timestamp: '2024-01-15T08:45:00Z',
    engagement: { likes: 12, shares: 0, comments: 15 },
    url: 'https://reddit.com/r/marketing/comments/123'
  },
  {
    id: '4',
    platform: 'twitter',
    author: '@startupfounder',
    content: 'The sentiment analysis in TrendScout is spot on. Helped us identify a PR issue early and respond quickly. Highly recommend for any growing business.',
    sentiment: 'positive',
    timestamp: '2024-01-15T07:20:00Z',
    engagement: { likes: 67, shares: 23, comments: 11 },
    url: 'https://twitter.com/startupfounder/status/456'
  },
  {
    id: '5',
    platform: 'linkedin',
    author: 'Mike Chen',
    content: 'Interesting approach to social media monitoring. The dashboard is intuitive but I wish there were more customization options for the reports.',
    sentiment: 'neutral',
    timestamp: '2024-01-15T06:10:00Z',
    engagement: { likes: 18, shares: 3, comments: 7 },
    url: 'https://linkedin.com/posts/mike-chen-456'
  }
];

interface MentionsFeedProps {
  isVisible?: boolean;
  onToggleVisibility?: () => void;
  className?: string;
}

// PUBLIC_INTERFACE
export default function MentionsFeed({ 
  isVisible = true, 
  onToggleVisibility,
  className = ''
}: MentionsFeedProps) {
  /**
   * Mentions Feed widget displaying recent social media posts and mentions.
   * Includes filtering, platform icons, and accessibility features.
   */
  
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('all');

  if (!isVisible) return null;

  // Filter mentions based on selected criteria
  const filteredMentions = mockMentions.filter(mention => {
    const platformMatch = selectedPlatform === 'all' || mention.platform === selectedPlatform;
    const sentimentMatch = selectedSentiment === 'all' || mention.sentiment === selectedSentiment;
    return platformMatch && sentimentMatch;
  });

  // Platform icons
  const getPlatformIcon = (platform: string) => {
    const icons = {
      twitter: '🐦',
      linkedin: '💼',
      reddit: '🤖',
      facebook: '📘',
      instagram: '📸'
    };
    return icons[platform as keyof typeof icons] || '🌐';
  };

  // Sentiment styling
  const getSentimentStyle = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'error';
      default:
        return 'warning';
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

  return (
    <Card className={`${className}`} hover>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Mentions Feed</CardTitle>
            <CardDescription>
              Recent posts and mentions across monitored platforms
            </CardDescription>
          </div>
          {onToggleVisibility && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              aria-label="Hide mentions feed widget"
            >
              ×
            </Button>
          )}
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div>
            <label htmlFor="platform-filter" className="sr-only">Filter by platform</label>
            <select
              id="platform-filter"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="all">All Platforms</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="reddit">Reddit</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="sentiment-filter" className="sr-only">Filter by sentiment</label>
            <select
              id="sentiment-filter"
              value={selectedSentiment}
              onChange={(e) => setSelectedSentiment(e.target.value)}
              className="px-3 py-1 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="all">All Sentiment</option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {filteredMentions.length === 0 ? (
          <div className="text-center py-8 text-[var(--color-text-muted)]">
            No mentions found for the selected filters.
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredMentions.map((mention) => (
              <article
                key={mention.id}
                className="p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface)] transition-colors"
                tabIndex={0}
                aria-label={`Mention from ${mention.author} on ${mention.platform}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-lg"
                      role="img"
                      aria-label={`${mention.platform} platform`}
                    >
                      {getPlatformIcon(mention.platform)}
                    </span>
                    <div>
                      <div className="font-medium text-[var(--color-text-primary)]">
                        {mention.author}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        {formatTimestamp(mention.timestamp)}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={getSentimentStyle(mention.sentiment) as 'success' | 'error' | 'warning'}
                    size="sm"
                  >
                    {mention.sentiment}
                  </Badge>
                </div>
                
                {/* Content */}
                <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                  {mention.content}
                </p>
                
                {/* Engagement and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-[var(--color-text-muted)]">
                    <span aria-label={`${mention.engagement.likes} likes`}>
                      ❤️ {mention.engagement.likes}
                    </span>
                    <span aria-label={`${mention.engagement.shares} shares`}>
                      🔄 {mention.engagement.shares}
                    </span>
                    <span aria-label={`${mention.engagement.comments} comments`}>
                      💬 {mention.engagement.comments}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(mention.url, '_blank', 'noopener,noreferrer')}
                      aria-label={`View original post by ${mention.author}`}
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        // Could implement reply/response functionality
                        console.log('Reply to mention:', mention.id);
                      }}
                      aria-label={`Reply to ${mention.author}`}
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {/* Load more button */}
        {filteredMentions.length > 0 && (
          <div className="text-center mt-4 pt-4 border-t border-[var(--color-border)]">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                // Could implement pagination or load more functionality
                console.log('Load more mentions');
              }}
            >
              Load More Mentions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
