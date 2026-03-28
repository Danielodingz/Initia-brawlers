import React from 'react'
import { MoveType } from '../lib/types'
import { MOVE_DESCRIPTIONS } from '../lib/constants'

interface MoveSelectorProps {
  onSelect: (type: MoveType) => void;
  selectedMove: MoveType | null;
  disabled: boolean;
  isSubmitting: boolean;
}

const MoveSelector: React.FC<MoveSelectorProps> = ({ onSelect, selectedMove, disabled, isSubmitting }) => {
  const moves: MoveType[] = ['Attack', 'HeavyAttack', 'Defend', 'Special']

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {moves.map((type) => {
        const move = MOVE_DESCRIPTIONS[type]
        const isSelected = selectedMove === type
        const isDisabled = disabled || isSubmitting

        return (
          <button
            key={type}
            disabled={isDisabled}
            onClick={() => onSelect(type)}
            className={`
              relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 group
              ${isSelected 
                ? 'bg-orange-500 border-white shadow-[0_0_30px_rgba(234,88,12,0.4)] scale-105 z-10' 
                : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'}
              ${isDisabled && !isSelected ? 'opacity-40 grayscale cursor-not-allowed' : ''}
            `}
          >
            <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
              {move.emoji}
            </span>
            <span className="text-xs font-black uppercase tracking-widest">{move.label}</span>
            <span className="text-[9px] font-bold text-white/40 mt-1 hidden md:block">{move.desc}</span>
            
            {/* Timer Ring Mock (Visual only) */}
            {isSelected && !isSubmitting && (
              <div className="absolute inset-0 rounded-2xl border-2 border-white/10 animate-ping opacity-50" />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default MoveSelector
