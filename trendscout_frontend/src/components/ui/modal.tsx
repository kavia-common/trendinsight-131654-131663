'use client';

import React, { useEffect, useRef } from 'react';
import Button from './button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// PUBLIC_INTERFACE
export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className = '' 
}: ModalProps) {
  /**
   * Accessible modal component with focus management and keyboard navigation.
   * Supports multiple sizes and includes proper ARIA attributes.
   */
  
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Store previous focus and focus modal
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      
      // Restore focus
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          ref={modalRef}
          tabIndex={-1}
          className={`
            relative bg-[var(--color-surface)] rounded-[var(--radius-lg)]
            shadow-[var(--shadow-lg)] border border-[var(--color-border)]
            w-full ${sizeClasses[size]} ${className}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--color-border)]">
              <h2 
                id="modal-title" 
                className="text-lg font-semibold text-[var(--color-text-primary)]"
              >
                {title}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close modal"
              >
                <span className="text-xl">×</span>
              </Button>
            </div>
          )}
          
          {/* Content */}
          <div className={title ? 'p-6 pt-4' : 'p-6'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function ModalHeader({ children, className = '' }: ModalHeaderProps) {
  /**
   * Modal header component for custom header content.
   */
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

// PUBLIC_INTERFACE
export function ModalFooter({ children, className = '' }: ModalFooterProps) {
  /**
   * Modal footer component for action buttons.
   */
  return (
    <div className={`mt-6 pt-4 border-t border-[var(--color-border)] flex justify-end space-x-3 ${className}`}>
      {children}
    </div>
  );
}
