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
    const particleCount = Math.min(Math.floor((width * height) / 8000), 135)

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        // Distribute between dense orange nodes, glowing orange accents, and dark structural anchor nodes
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 2.8 + 1.2,
          alpha: Math.random() * 0.55 + 0.35,
          pulseSpeed: Math.random() * 0.025 + 0.01,
        })
      }
    }

    initParticles()

    let time = 0

    // Render Loop
    const render = () => {
      time += 0.018
      ctx.clearRect(0, 0, width, height)

      // 1. Soft Light-Orange Ambient Atmosphere
      const spotlightX1 = width * 0.35 + Math.sin(time * 0.4) * 220
      const spotlightY1 = height * 0.3 + Math.cos(time * 0.3) * 140
      const grad1 = ctx.createRadialGradient(spotlightX1, spotlightY1, 20, spotlightX1, spotlightY1, 680)
      grad1.addColorStop(0, 'rgba(255, 85, 0, 0.18)')
      grad1.addColorStop(0.35, 'rgba(255, 140, 50, 0.08)')
      grad1.addColorStop(0.7, 'rgba(255, 243, 235, 0.04)')
      grad1.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, width, height)

      // 2. Right-side Warm Glow
      const spotlightX2 = width * 0.82 + Math.cos(time * 0.35) * 200
      const spotlightY2 = height * 0.65 + Math.sin(time * 0.45) * 150
      const grad2 = ctx.createRadialGradient(spotlightX2, spotlightY2, 10, spotlightX2, spotlightY2, 600)
      grad2.addColorStop(0, 'rgba(255, 85, 0, 0.15)')
      grad2.addColorStop(0.4, 'rgba(255, 160, 80, 0.06)')
      grad2.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, width, height)

      // 3. Lower Left Subtle Accent
      const spotlightX3 = width * 0.18 + Math.cos(time * 0.25) * 150
      const spotlightY3 = height * 0.85 + Math.sin(time * 0.3) * 120
      const grad3 = ctx.createRadialGradient(spotlightX3, spotlightY3, 10, spotlightX3, spotlightY3, 520)
      grad3.addColorStop(0, 'rgba(255, 85, 0, 0.12)')
      grad3.addColorStop(0.5, 'rgba(255, 120, 30, 0.04)')
      grad3.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = grad3
      ctx.fillRect(0, 0, width, height)

      // 4. Interactive Mouse Aura (Electric Orange Dense Center -> Light Orange Corona)
      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        const mouseGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRef.current.radius
        )
        mouseGrad.addColorStop(0, 'rgba(255, 85, 0, 0.26)')
        mouseGrad.addColorStop(0.4, 'rgba(255, 130, 40, 0.10)')
        mouseGrad.addColorStop(0.8, 'rgba(255, 200, 150, 0.03)')
        mouseGrad.addColorStop(1, 'rgba(255, 85, 0, 0)')
        ctx.fillStyle = mouseGrad
        ctx.beginPath()
        ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 5. Draw Particle Constellation (Dense Orange, Light Orange & Deep Black accents)
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
          if (dist < 140) {
            const force = (140 - dist) / 140
            p.x -= (dx / dist) * force * 2.8
            p.y -= (dy / dist) * force * 2.8
          }
        }

        // Pulse alpha
        const currentAlpha = Math.abs(Math.sin(time * 1.5 + i)) * 0.4 + 0.35

        // Tri-color Node Hierarchy:
        // ~70% Dense Electric Orange (#FF5500)
        // ~20% Deep Black (#0F172A) for strong contrast anchor points
        // ~10% Light Orange halo
        const isBlackNode = i % 5 === 0
        const isLargeNode = i % 8 === 0

        if (isBlackNode) {
          ctx.fillStyle = `rgba(15, 23, 42, ${currentAlpha * 0.75})`
        } else {
          ctx.fillStyle = `rgba(255, 85, 0, ${currentAlpha})`
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, isLargeNode ? p.size * 1.3 : p.size, 0, Math.PI * 2)
        ctx.fill()

        // If large orange node, draw subtle light orange outer glow ring
        if (isLargeNode && !isBlackNode) {
          ctx.strokeStyle = `rgba(255, 85, 0, ${currentAlpha * 0.4})`
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Connect neighbor particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 155) {
            const lineAlpha = (1 - dist / 155) * 0.32
            const isConnectedToBlack = isBlackNode || (j % 5 === 0)

            if (isConnectedToBlack) {
              ctx.strokeStyle = `rgba(15, 23, 42, ${lineAlpha * 0.55})`
            } else {
              ctx.strokeStyle = `rgba(255, 85, 0, ${lineAlpha})`
            }

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
