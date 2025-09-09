# Dashboard Widgets

This directory contains the dashboard widgets for the TrendScout frontend application. Each widget is a self-contained component with mock data, accessibility features, and responsive design.

## Components

### TrendOverview
- **Purpose**: Displays time series data for keyword mentions and sentiment trends
- **Features**: 
  - Interactive SVG charts with data points
  - Metric switching (mentions/sentiment)
  - Timeframe filtering (7d/30d/90d)
  - Summary statistics
  - Keyboard navigation support
- **Data**: Mock trend data with mentions and sentiment values

### SentimentOverview
- **Purpose**: Shows sentiment distribution with donut chart and trend analysis
- **Features**:
  - Animated donut chart for sentiment distribution
  - Trend comparison with previous periods
  - Distribution and trend view modes
  - Color-coded sentiment indicators
  - ARIA labels for accessibility
- **Data**: Mock sentiment percentages and historical trend data

### MentionsFeed
- **Purpose**: Displays recent social media posts and mentions
- **Features**:
  - Platform filtering (Twitter, LinkedIn, Reddit, etc.)
  - Sentiment filtering
  - Platform icons and engagement metrics
  - Load more functionality
  - Reply and view actions
- **Data**: Mock social media mentions with engagement data

### CompetitorCompare
- **Purpose**: Bar chart comparison of competitors across different metrics
- **Features**:
  - Metric selection (Share of Voice, Growth, Mentions, Sentiment)
  - Sorting options (by value or alphabetical)
  - Visual ranking indicators
  - "Your Brand" highlighting
  - Summary statistics panel
- **Data**: Mock competitor data with multiple metrics

### Alerts
- **Purpose**: Lists opportunities, threats, and actionable insights
- **Features**:
  - Alert type and severity filtering
  - Read/unread status management
  - Actionable alerts with CTA buttons
  - Dismiss and mark as read functionality
  - Platform source indicators
- **Data**: Mock alerts with different types and severities

## Design Features

### Accessibility
- Full keyboard navigation support
- ARIA labels and roles for screen readers
- Focus management and visual indicators
- Semantic HTML structure
- High contrast color support

### Responsive Design
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly interface elements
- Adaptive text sizing
- Collapsible widgets for mobile

### Color Palette
- Primary: #2B6CB0 (Blue)
- Secondary: #38B2AC (Teal)
- Accent: #F6AD55 (Orange)
- Success: #38A169 (Green)
- Warning: #D69E2E (Yellow)
- Error: #E53E3E (Red)
- Info: #3182CE (Light Blue)

### Theme Support
- CSS custom properties for theming
- Light/dark mode compatibility
- Consistent spacing and typography
- Hover and focus states

## Usage

```tsx
import { 
  TrendOverview, 
  SentimentOverview, 
  MentionsFeed, 
  CompetitorCompare, 
  Alerts 
} from '@/components/dashboard';

// Individual widget usage
<TrendOverview 
  isVisible={true} 
  onToggleVisibility={() => {}} 
  className="custom-class" 
/>

// All widgets in dashboard layout
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
  <div className="lg:col-span-2">
    <TrendOverview />
  </div>
  <SentimentOverview />
  <div className="lg:col-span-2">
    <MentionsFeed />
  </div>
  <Alerts />
  <div className="lg:col-span-2 xl:col-span-3">
    <CompetitorCompare />
  </div>
</div>
```

## Widget Visibility

Each widget supports visibility toggling through:
- `isVisible` prop (boolean)
- `onToggleVisibility` callback function
- Local state management in parent component

## Data Integration

Currently using mock data for development. To integrate with real APIs:

1. Replace mock data imports with API calls
2. Add loading states and error handling
3. Implement data refresh mechanisms
4. Add real-time updates where appropriate

## Future Enhancements

- Real-time data updates
- Export functionality for individual widgets
- Widget size customization
- Drag-and-drop widget reordering
- Additional chart types and visualizations
- Advanced filtering and search capabilities
