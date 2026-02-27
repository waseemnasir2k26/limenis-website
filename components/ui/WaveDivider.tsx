'use client'

interface WaveDividerProps {
  className?: string
  flip?: boolean
}

export default function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30 Q 150 0, 300 30 T 600 30 T 900 30 T 1200 30"
          stroke="url(#goldGradient1)"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M0 40 Q 150 10, 300 40 T 600 40 T 900 40 T 1200 40"
          stroke="url(#goldGradient2)"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#C8A45A" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#E2C97E" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
