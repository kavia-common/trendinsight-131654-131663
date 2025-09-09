// PUBLIC_INTERFACE
/**
 * Dashboard components index file for easier importing.
 * Exports all dashboard widgets and components.
 */

export { default as TrendOverview } from './trend-overview';
export { default as SentimentOverview } from './sentiment-overview';
export { default as MentionsFeed } from './mentions-feed';
export { default as CompetitorCompare } from './competitor-compare';
export { default as Alerts } from './alerts';

// Type exports for component props
export type { default as TrendOverviewProps } from './trend-overview';
export type { default as SentimentOverviewProps } from './sentiment-overview';
export type { default as MentionsFeedProps } from './mentions-feed';
export type { default as CompetitorCompareProps } from './competitor-compare';
export type { default as AlertsProps } from './alerts';
