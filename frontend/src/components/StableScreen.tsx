import React, { useState } from 'react'
import CreatureCard from './CreatureCard'
import WalletConnect from './WalletConnect'
import { useCreature } from '../hooks/useCreature'
import { Plus, Swords, Trophy, BarChart3, ChevronRight } from 'lucide-react'
import { Creature } from '../lib/types'

interface StableScreenProps {
  onStartBattle: (creatureId: number) => void;
  onMint: () => void;
  onViewTournament: () => void;
  onViewLeaderboard: () => void;
}

const StableScreen: React.FC<StableScreenProps> = ({ 
  onStartBattle, 
  onMint, 
  onViewTournament, 
  onViewLeaderboard 
}) => {
  const { creatures, isLoading } = useCreature()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedCreature = creatures?.find(c => c.id === selectedId)

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-white/5 bg-panel/50 backdrop-blur-md px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-fantasy font-black tracking-tighter text-orange-500">INITIA BRAWLERS</h2>
          <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-widest text-white/40">
            <button onClick={onViewTournament} className="hover:text-white transition-colors flex items-center gap-2">
              <Trophy size={14} /> Tournament
            </button>
            <button onClick={onViewLeaderboard} className="hover:text-white transition-colors flex items-center gap-2">
              <BarChart3 size={14} /> Leaderboard
            </button>
          </nav>
        </div>
        <WalletConnect />
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Stable Grid */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-fantasy font-bold">Your Stable</h3>
            <span className="text-xs font-black text-white/30 uppercase tracking-widest">
              {creatures?.length || 0} / 6 Creatures
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {creatures?.map(creature => (
              <CreatureCard
                key={creature.id}
                creature={creature}
                selected={selectedId === creature.id}
                onClick={() => setSelectedId(creature.id)}
              />
            ))}
            
            {(creatures?.length || 0) < 6 && (
              <button 
                onClick={onMint}
                className="h-72 border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all text-white/20 hover:text-white/40 group"
              >
                <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">Summon New</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Actions Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="fantasy-card p-6 bg-orange-500/5 border-orange-500/20 sticky top-24">
            <h3 className="text-xs font-black uppercase tracking-widest text-orange-500/60 mb-6">Battle Operations</h3>
            
            <div className="space-y-6">
              {selectedCreature ? (
                <div className="animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-2xl">
                      {selectedCreature.element === 'Fire' ? '🔥' : '💧'}
                    </div>
                    <div>
                      <div className="font-fantasy font-bold">{selectedCreature.name}</div>
                      <div className="text-[10px] uppercase font-black opacity-40">Ready for combat</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => onStartBattle(selectedCreature.id)}
                      className="w-full py-4 bg-orange-600 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(234,88,12,0.2)] hover:bg-orange-500 transition-all active:scale-95"
                    >
                      <Swords size={20} />
                      <span>TRAIN VS BOT</span>
                    </button>
                    
                    <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                      <span>CHALLENGE PLAYER</span>
                      <ChevronRight size={18} className="opacity-40" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-2xl">
                  <p className="text-sm font-bold text-white/20 uppercase tracking-widest px-8">
                    Select a creature from your stable to begin
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Upcoming Tournament</span>
                  <span className="text-[10px] font-black px-2 py-0.5 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20 uppercase">Open</span>
                </div>
                <div className="text-xl font-fantasy font-bold mb-1">Week 3 Arena</div>
                <div className="text-xs text-white/40 mb-6">Prize Pool: 16.00 INIT</div>
                <button 
                  onClick={onViewTournament}
                  className="w-full py-3 bg-yellow-600/10 border border-yellow-600/30 text-yellow-600 rounded-lg font-black text-sm hover:bg-yellow-600/20 transition-all"
                >
                  VIEW BRACKET
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StableScreen
