import React, { useRef, useState } from 'react'

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(255, 85, 0, 0.08)',
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    })
  }

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Cursor spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
