import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

// PUBLIC_INTERFACE
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  /**
   * Reusable button component with multiple variants, sizes, and states.
   * Includes loading state, accessibility features, and consistent styling.
   */
  
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-[var(--radius-md)]
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-[var(--color-primary)] text-white 
      hover:bg-[var(--color-primary)]/90 
      focus:ring-[var(--color-primary)]/50
    `,
    secondary: `
      bg-[var(--color-secondary)] text-white 
      hover:bg-[var(--color-secondary)]/90 
      focus:ring-[var(--color-secondary)]/50
    `,
    outline: `
      border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)]
      hover:bg-[var(--color-surface)] hover:border-[var(--color-primary)]
      focus:ring-[var(--color-primary)]/50
    `,
    ghost: `
      bg-transparent text-[var(--color-text-secondary)]
      hover:bg-[var(--color-border)] hover:text-[var(--color-text-primary)]
      focus:ring-[var(--color-primary)]/50
    `,
    danger: `
      bg-[var(--color-error)] text-white 
      hover:bg-[var(--color-error)]/90 
      focus:ring-[var(--color-error)]/50
    `,
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
