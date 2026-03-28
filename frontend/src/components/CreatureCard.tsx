import React from 'react'
import { Creature } from '../lib/types'
import { ELEMENT_COLORS, RARITY_COLORS } from '../lib/constants'
import { Sword, Shield, Zap, Sparkles } from 'lucide-react'

interface CreatureCardProps {
  creature: Creature;
  size?: 'small' | 'medium' | 'large';
  selected?: boolean;
  showStats?: boolean;
  showActions?: boolean;
  isEnemy?: boolean;
  currentHp?: number;
  onClick?: () => void;
}

const CreatureCard: React.FC<CreatureCardProps> = ({
  creature,
  size = 'medium',
  selected = false,
  showStats = true,
  isEnemy = false,
  currentHp,
  onClick
}) => {
  const hp = currentHp !== undefined ? currentHp : creature.hp;
  const hpPercent = (hp / creature.maxHp) * 100;
  
  const getHpColor = () => {
    if (hpPercent > 60) return 'bg-green-500';
    if (hpPercent > 30) return 'bg-yellow-500';
    return 'bg-red-500 animate-pulse';
  };

  const ELEMENT_ICONS: Record<string, React.ReactNode> = {
    Fire: <div className="w-12 h-12 rounded-full bg-orange-500 blur-sm opacity-50 absolute" />,
    Water: <div className="w-12 h-12 rounded-full bg-blue-500 blur-sm opacity-50 absolute" />,
    Earth: <div className="w-12 h-12 rounded-full bg-green-500 blur-sm opacity-50 absolute" />,
    Wind: <div className="w-12 h-12 rounded-full bg-purple-500 blur-sm opacity-50 absolute" />,
    Shadow: <div className="w-12 h-12 rounded-full bg-gray-500 blur-sm opacity-50 absolute" />,
  };

  const cardClasses = `
    relative fantasy-card cursor-pointer group
    ${size === 'small' ? 'w-40 h-56' : size === 'large' ? 'w-64 h-84' : 'w-52 h-72'}
    ${selected ? '-translate-y-2 border-orange-500/50 shadow-[0_10px_30px_rgba(234,88,12,0.2)]' : 'hover:-translate-y-1'}
    ${isEnemy ? 'border-red-500/30' : ''}
  `;

  return (
    <div 
      className={cardClasses}
      style={{ borderColor: selected ? ELEMENT_COLORS[creature.element] : 'rgba(255,255,255,0.1)' }}
      onClick={onClick}
    >
      {/* Rarity Shimmer */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ background: `linear-gradient(45deg, transparent, ${RARITY_COLORS[creature.rarity]}, transparent)` }}
      />

      {/* Header */}
      <div className="p-3 flex justify-between items-center text-[10px] uppercase font-black tracking-widest opacity-70">
        <span style={{ color: ELEMENT_COLORS[creature.element] }}>{creature.element}</span>
        <span>Lv.{creature.level}</span>
        <span style={{ color: RARITY_COLORS[creature.rarity] }}>{creature.rarity}</span>
      </div>

      {/* Sprite Area */}
      <div className="h-28 flex items-center justify-center relative overflow-hidden bg-white/5 mx-3 rounded-lg">
        {ELEMENT_ICONS[creature.element]}
        <div className="w-16 h-16 relative z-10 animate-float">
          {/* Simple CSS Creature Placeholder */}
          <div 
            className="w-full h-full rounded-2xl shadow-xl"
            style={{ 
              backgroundColor: ELEMENT_COLORS[creature.element],
              borderRadius: creature.element === 'Earth' ? '4px' : creature.element === 'Fire' ? '50% 50% 20% 20%' : '50%'
            }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h4 className="text-center text-lg font-fantasy mb-2 truncate">{creature.name}</h4>
        
        {/* HP Bar */}
        <div className="mb-3">
          <div className="flex justify-between text-[10px] mb-1 opacity-60 font-bold">
            <span>HP</span>
            <span>{hp}/{creature.maxHp}</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getHpColor()}`}
              style={{ width: `${hpPercent}%` }}
            />
          </div>
        </div>

        {showStats && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-bold">
            <div className="flex items-center gap-1 opacity-70">
              <Sword size={10} /> <span>ATK {creature.attack}</span>
            </div>
            <div className="flex items-center gap-1 opacity-70">
              <Shield size={10} /> <span>DEF {creature.defense}</span>
            </div>
            <div className="flex items-center gap-1 opacity-70">
              <Zap size={10} /> <span>SPD {creature.speed}</span>
            </div>
            <div className="flex items-center gap-1 opacity-70">
              <Sparkles size={10} /> <span>SPC {creature.specialPower}</span>
            </div>
          </div>
        )}
      </div>

      {/* XP Bar */}
      {!isEnemy && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
          <div 
            className="h-full bg-blue-500 opacity-50"
            style={{ width: `${(creature.xp % 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}

export default CreatureCard
