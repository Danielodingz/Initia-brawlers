import React, { useRef, useEffect } from 'react'
import { Creature } from '../lib/types'
import { getCreatureImage } from '../lib/assets'

interface BattleCanvasProps {
  playerCreature?: Creature;
  botCreature?: Creature;
  isAnimating?: boolean;
}

const BattleCanvas: React.FC<BattleCanvasProps> = ({ playerCreature, botCreature, isAnimating }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerImgRef = useRef<HTMLImageElement | null>(null)
  const botImgRef = useRef<HTMLImageElement | null>(null)

  // Preload images
  useEffect(() => {
    if (playerCreature) {
      const img = new Image()
      img.src = getCreatureImage(playerCreature.element)
      img.onload = () => { playerImgRef.current = img }
    }
    if (botCreature) {
      const img = new Image()
      img.src = getCreatureImage(botCreature.element)
      img.onload = () => { botImgRef.current = img }
    }
  }, [playerCreature, botCreature])

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
      gradient.addColorStop(0, 'rgba(10, 10, 21, 0)')
      gradient.addColorStop(0.7, 'rgba(21, 21, 37, 0.2)')
      gradient.addColorStop(1, 'rgba(5, 5, 16, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Float animation value
      const floatOffset = Math.sin(frame * 0.05) * 10
      const enemyFloatOffset = Math.sin(frame * 0.04) * 8

      // Draw Player Creature (Left)
      if (playerImgRef.current) {
        ctx.save()
        ctx.translate(canvas.width * 0.25, canvas.height * 0.55 + floatOffset)
        
        // Shadow
        ctx.beginPath()
        ctx.ellipse(0, 80 - floatOffset, 40, 12, 0, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,0,0,0.3)'
        ctx.fill()

        // Image
        const img = playerImgRef.current
        const scale = 140
        ctx.drawImage(img, -scale/2, -scale/2, scale, scale)
        
        // Attacking animation
        if (isAnimating) {
           // Add a simple shake or lunge
        }
        
        ctx.restore()
      }

      // Draw Enemy Creature (Right)
      if (botImgRef.current) {
        ctx.save()
        ctx.translate(canvas.width * 0.75, canvas.height * 0.55 + enemyFloatOffset)
        
        // Flip for enemy
        ctx.scale(-1, 1)

        // Shadow
        ctx.beginPath()
        ctx.ellipse(0, 80 - enemyFloatOffset, 40, 12, 0, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,0,0,0.3)'
        ctx.fill()

        // Image
        const img = botImgRef.current
        const scale = 140
        ctx.drawImage(img, -scale/2, -scale/2, scale, scale)
        
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isAnimating])

  return (
    <div className="w-full max-w-4xl aspect-[2/1] rounded-3xl overflow-hidden relative">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
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
