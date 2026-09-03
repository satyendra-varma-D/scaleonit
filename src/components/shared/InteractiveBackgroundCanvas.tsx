import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  pulseSpeed: number
}

export default function InteractiveBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 180,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Particle Configuration
    let particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 10000), 110)

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 2.2 + 1.4,
          alpha: Math.random() * 0.45 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    initParticles()

    let time = 0

    // Render Loop
    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, width, height)

      // Ambient animated gradient spotlights
      const spotlightX1 = width * 0.4 + Math.sin(time * 0.5) * 160
      const spotlightY1 = height * 0.3 + Math.cos(time * 0.4) * 90
      const grad1 = ctx.createRadialGradient(spotlightX1, spotlightY1, 20, spotlightX1, spotlightY1, 600)
      grad1.addColorStop(0, 'rgba(255, 85, 0, 0.12)')
      grad1.addColorStop(0.5, 'rgba(255, 120, 40, 0.04)')
      grad1.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, width, height)

      const spotlightX2 = width * 0.75 + Math.cos(time * 0.3) * 140
      const spotlightY2 = height * 0.7 + Math.sin(time * 0.5) * 110
      const grad2 = ctx.createRadialGradient(spotlightX2, spotlightY2, 10, spotlightX2, spotlightY2, 500)
      grad2.addColorStop(0, 'rgba(255, 85, 0, 0.09)')
      grad2.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, width, height)

      // Mouse interactive radial aura
      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        const mouseGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRef.current.radius
        )
        mouseGrad.addColorStop(0, 'rgba(255, 85, 0, 0.16)')
        mouseGrad.addColorStop(0.6, 'rgba(255, 85, 0, 0.04)')
        mouseGrad.addColorStop(1, 'rgba(255, 85, 0, 0)')
        ctx.fillStyle = mouseGrad
        ctx.beginPath()
        ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw and connect particles (Constellation Network in Electric Orange)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce off canvas boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse avoidance/repulsion
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - p.x
          const dy = mouseRef.current.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const force = (130 - dist) / 130
            p.x -= (dx / dist) * force * 2.5
            p.y -= (dy / dist) * force * 2.5
          }
        }

        // Pulse alpha
        const currentAlpha = Math.abs(Math.sin(time + i)) * 0.4 + 0.25

        // Draw particle node
        ctx.fillStyle = `rgba(255, 85, 0, ${currentAlpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect neighbor particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const lineAlpha = (1 - dist / 150) * 0.28
            ctx.strokeStyle = `rgba(255, 85, 0, ${lineAlpha})`
            ctx.lineWidth = 1.0
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  )
}
