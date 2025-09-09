import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// PUBLIC_INTERFACE
export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  /**
   * Badge component for displaying status indicators, labels, and counts.
   * Supports multiple variants and sizes with consistent styling.
   */
  
  const baseClasses = `
    inline-flex items-center font-medium rounded-full
    transition-colors duration-200
  `;

  const variantClasses = {
    default: `
      bg-[var(--color-border)] text-[var(--color-text-secondary)]
    `,
    primary: `
      bg-[var(--color-primary)] text-white
    `,
    secondary: `
      bg-[var(--color-secondary)] text-white
    `,
    success: `
      bg-[var(--color-success)] text-white
    `,
    warning: `
      bg-[var(--color-warning)] text-white
    `,
    error: `
      bg-[var(--color-error)] text-white
    `,
    info: `
      bg-[var(--color-info)] text-white
    `,
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

interface BadgeWithDotProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

// PUBLIC_INTERFACE
export function BadgeWithDot({ children, color = 'default', className = '' }: BadgeWithDotProps) {
  /**
   * Badge component with a colored dot indicator.
   */
  
  const dotColors = {
    default: 'bg-[var(--color-text-muted)]',
    primary: 'bg-[var(--color-primary)]',
    secondary: 'bg-[var(--color-secondary)]',
    success: 'bg-[var(--color-success)]',
    warning: 'bg-[var(--color-warning)]',
    error: 'bg-[var(--color-error)]',
    info: 'bg-[var(--color-info)]',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dotColors[color]}`} aria-hidden="true" />
      {children}
    </span>
  );
}
