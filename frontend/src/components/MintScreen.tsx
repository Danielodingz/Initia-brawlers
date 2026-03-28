import React, { useState } from 'react'
import { ELEMENTS, RARITIES, ELEMENT_COLORS, RARITY_COLORS } from '../lib/constants'
import { ElementType, RarityType, Creature } from '../lib/types'
import CreatureCard from './CreatureCard'
import { Sparkles, ChevronRight, Wand2 } from 'lucide-react'
import { useCreature } from '../hooks/useCreature'

interface MintScreenProps {
  onSuccess: () => void;
}

const MintScreen: React.FC<MintScreenProps> = ({ onSuccess }) => {
  const [element, setElement] = useState<ElementType>('Fire')
  const [rarity, setRarity] = useState<RarityType>('Common')
  const [name, setName] = useState('')
  const { mintCreature } = useCreature()
  const [isMinting, setIsMinting] = useState(false)

  const handleMint = async () => {
    if (!name) return
    setIsMinting(true)
    try {
      await mintCreature(name, ELEMENTS.indexOf(element), RARITIES.indexOf(rarity))
      onSuccess()
    } catch (err) {
      console.error('Minting failed:', err)
    } finally {
      setIsMinting(false)
    }
  }

  const previewCreature: Creature = {
    id: 0,
    name: name || 'Enter Name...',
    element: element,
    rarity: rarity,
    level: 1,
    xp: 0,
    hp: 100,
    maxHp: 100,
    attack: 12,
    defense: 10,
    speed: 10,
    specialPower: 15,
    wins: 0,
    losses: 0,
    inBattle: false,
  }

  return (
    <div className="min-h-screen bg-dark p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        
        {/* Left: Configuration */}
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <section>
              <h1 className="text-4xl font-fantasy font-bold mb-2 text-orange-500">Summon Brawler</h1>
              <p className="text-white/40 font-medium text-xs uppercase tracking-widest">Setup your first creature origins</p>
            </section>
            <button 
              onClick={onSuccess}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              Skip to Menu
            </button>
          </div>

          {/* Step 1: Element */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">1</span>
              Choose Element
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {ELEMENTS.map(el => (
                <button
                  key={el}
                  onClick={() => setElement(el as ElementType)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                    element === el 
                    ? 'bg-white/10 border-white/40 scale-105' 
                    : 'bg-white/5 border-white/5 hover:border-white/20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: ELEMENT_COLORS[el] }} />
                  <span className="text-[10px] font-bold uppercase">{el}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Rarity */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">2</span>
              Select Rarity
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {RARITIES.map(r => (
                <button
                  key={r}
                  onClick={() => setRarity(r as RarityType)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    rarity === r 
                    ? 'bg-white/10 border-white/40' 
                    : 'bg-white/5 border-white/5 hover:border-white/20 opacity-50'
                  }`}
                >
                  <div className="text-[10px] font-black uppercase mb-1" style={{ color: RARITY_COLORS[r] }}>{r}</div>
                  <div className="text-[8px] text-white/40 font-bold">Multiplier 1.{r === 'Common' ? '0' : r === 'Rare' ? '2' : r === 'Epic' ? '4' : '6'}x</div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Name */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">3</span>
              Assign Name
            </h3>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter brawler name..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-orange-500/50 outline-none transition-all font-fantasy text-lg"
              />
              <Wand2 className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" />
            </div>
            <div className="mt-3 flex gap-2">
              {['Flambo', 'Aquara', 'Stonkus', 'Umbra'].map(n => (
                <button 
                  key={n} 
                  onClick={() => setName(n)}
                  className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 text-white/40 hover:text-white"
                >
                  {n}
                </button>
              ))}
            </div>
          </section>

          <button
            onClick={handleMint}
            disabled={!name || isMinting}
            className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all ${
              !name || isMinting 
              ? 'bg-white/5 text-white/20 cursor-not-allowed' 
              : 'bg-orange-600 hover:bg-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)]'
            }`}
          >
            {isMinting ? (
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles size={20} />
                <span>SUMMON CREATURE</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Preview */}
        <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
            style={{ background: `radial-gradient(circle at center, ${ELEMENT_COLORS[element]}, transparent 70%)` }} 
          />
          <div className="relative scale-125 md:scale-[1.5]">
             <CreatureCard creature={previewCreature} size="medium" />
          </div>
          <div className="mt-16 text-center">
            <h4 className="text-xl font-fantasy font-bold mb-2">Live Preview</h4>
            <p className="text-xs text-white/40 font-medium uppercase tracking-widest">Stats are randomized within rarity bounds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintScreen
