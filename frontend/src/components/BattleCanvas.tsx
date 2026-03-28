import React, { useRef, useEffect } from 'react'

const BattleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let frame = 0

    const render = () => {
      frame++
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw Arena Background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0A0A15')
      gradient.addColorStop(0.7, '#151525')
      gradient.addColorStop(1, '#050510')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw Ground
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.7)
      ctx.lineTo(canvas.width, canvas.height * 0.7)
      ctx.strokeStyle = 'rgba(255,100,0,0.2)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Float animation value
      const floatOffset = Math.sin(frame * 0.05) * 10

      // Draw Player Creature (Left)
      ctx.save()
      ctx.translate(canvas.width * 0.2, canvas.height * 0.6 + floatOffset)
      
      // Shadow
      ctx.beginPath()
      ctx.ellipse(0, 40 - floatOffset, 30, 10, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fill()

      // Body (Orange Glow for Fire)
      ctx.beginPath()
      ctx.arc(0, 0, 35, 0, Math.PI * 2)
      ctx.fillStyle = '#EA580C'
      ctx.shadowBlur = 20
      ctx.shadowColor = '#EA580C'
      ctx.fill()
      
      // Eyes
      ctx.fillStyle = 'white'
      ctx.fillRect(10, -10, 6, 6)
      ctx.fillRect(25, -10, 6, 6)
      ctx.restore()

      // Draw Enemy Creature (Right)
      ctx.save()
      ctx.translate(canvas.width * 0.8, canvas.height * 0.6 + Math.sin(frame * 0.04) * 8)
      
      // Shadow
      ctx.beginPath()
      ctx.ellipse(0, 40 - (Math.sin(frame * 0.04) * 8), 30, 10, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fill()

      // Body (Blue for opponent/water)
      ctx.beginPath()
      ctx.arc(0, 0, 35, 0, Math.PI * 2)
      ctx.fillStyle = '#0284C7'
      ctx.shadowBlur = 20
      ctx.shadowColor = '#0284C7'
      ctx.fill()
      
      // Eyes (facing left)
      ctx.fillStyle = 'white'
      ctx.fillRect(-16, -10, 6, 6)
      ctx.fillRect(-31, -10, 6, 6)
      ctx.restore()

      // Draw Particles/Vibe
      if (frame % 10 === 0) {
        // Just ambient dust for now
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full max-w-4xl aspect-[2/1] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/5">
      <canvas 
        ref={canvasRef} 
        width={800} 
        height={400} 
        className="w-full h-full"
      />
    </div>
  )
}

export default BattleCanvas
