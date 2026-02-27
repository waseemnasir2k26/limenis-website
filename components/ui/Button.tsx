'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-dm font-medium tracking-wide transition-all duration-300 ease-out'

    const variants = {
      primary: 'bg-gold text-navy hover:bg-gold-light',
      secondary: 'bg-transparent border border-gold/50 text-white hover:border-gold hover:text-gold',
      outline: 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs uppercase',
      md: 'px-6 py-3 text-sm uppercase',
      lg: 'px-8 py-4 text-sm uppercase',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
