import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
}

// PUBLIC_INTERFACE
export default function Card({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'sm',
  border = true,
  hover = false 
}: CardProps) {
  /**
   * Reusable card component with consistent styling and customizable variants.
   * Supports different padding, shadow, and interaction states.
   */
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-[var(--shadow-sm)]',
    md: 'shadow-[var(--shadow-md)]',
    lg: 'shadow-[var(--shadow-lg)]'
  };

  return (
    <div 
      className={`
        bg-[var(--color-surface)] 
        rounded-[var(--radius-lg)]
        ${border ? 'border border-[var(--color-border)]' : ''}
        ${shadowClasses[shadow]}
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-[var(--shadow-md)] transition-shadow duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function CardHeader({ children, className = '' }: CardHeaderProps) {
  /**
   * Card header component for titles and descriptions.
   */
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// PUBLIC_INTERFACE
export function CardTitle({ children, className = '', as: Component = 'h3' }: CardTitleProps) {
  /**
   * Card title component with semantic heading options.
   */
  return (
    <Component className={`text-lg font-semibold text-[var(--color-text-primary)] mb-1 ${className}`}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  /**
   * Card description component for subtitle text.
   */
  return (
    <p className={`text-sm text-[var(--color-text-secondary)] ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function CardContent({ children, className = '' }: CardContentProps) {
  /**
   * Card content wrapper component.
   */
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function CardFooter({ children, className = '' }: CardFooterProps) {
  /**
   * Card footer component for actions and additional content.
   */
  return (
    <div className={`mt-4 pt-4 border-t border-[var(--color-border)] ${className}`}>
      {children}
    </div>
  );
}
