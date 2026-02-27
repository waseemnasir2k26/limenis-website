'use client'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <span className="w-8 h-px bg-gold" />
      <span className="text-gold text-xs uppercase tracking-[0.2em] font-dm font-medium">
        {children}
      </span>
    </div>
  )
}
