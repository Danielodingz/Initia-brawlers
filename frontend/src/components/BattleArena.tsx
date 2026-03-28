import React, { useState, useEffect, useCallback } from 'react'
import CreatureCard from './CreatureCard'
import BattleCanvas from './BattleCanvas'
import { useBattle } from '../hooks/useBattle'
import { useAutoSign } from '../hooks/useAutoSign'
import { MoveType, ActiveBattle } from '../lib/types'
import { MOVE_DESCRIPTIONS, MOCK_MODE } from '../lib/constants'
import { resolveTurn, botChooseMove } from '../lib/mockBattle'
import { Swords, Info, Zap, Lock, ChevronRight } from 'lucide-react'

interface BattleArenaProps {
  battleId: number;
  onFinish: () => void;
}

const BattleArena: React.FC<BattleArenaProps> = ({ battleId, onFinish }) => {
  const { battle: chainBattle, isLoading: chainLoading, submitMove: chainSubmitMove } = useBattle(battleId)
  const { sessionActive, enableSession, submitBattleMove } = useAutoSign()
  
  // Local state for MOCK_MODE
  const [mockBattle, setMockBattle] = useState<ActiveBattle | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [battleLog, setBattleLog] = useState<string[]>([])
  const [selectedMove, setSelectedMove] = useState<MoveType | null>(null)

  const battle = MOCK_MODE ? mockBattle : chainBattle
  const isLoading = MOCK_MODE ? !mockBattle : chainLoading

  // Initialize Mock Battle
  useEffect(() => {
    if (MOCK_MODE && !mockBattle) {
      // Create a dummy battle state for frontend demonstration
      const dummyCreature = {
        id: 1, name: 'Brawler', element: 'Fire' as any, rarity: 'Common' as any,
        level: 5, xp: 0, hp: 120, maxHp: 120, attack: 15, defense: 12, speed: 14,
        specialPower: 18, wins: 0, losses: 0, inBattle: true
      }
      const dummyBot = { ...dummyCreature, name: 'Bot Ignitron', element: 'Water' as any, hp: 100, maxHp: 100 }
      
      setMockBattle({
        battleId,
        player1: '0x1', player2: '0x0',
        creature1: dummyCreature, creature2: dummyBot,
        creature1Hp: 120, creature2Hp: 100,
        turn: 1, p1MoveSubmitted: false, p2MoveSubmitted: false,
        state: 'active', winner: null, isPve: true, botDifficulty: 1,
        battleLog: []
      })
    }
  }, [battleId, mockBattle])

  const handleMove = async (type: MoveType) => {
    if (!battle || battle.state !== 'active' || isAnimating) return
    setSelectedMove(type)
    setIsAnimating(true)

    if (MOCK_MODE && mockBattle) {
      // 1. Bot chooses move
      const bMove = botChooseMove(
        mockBattle.creature2Hp, mockBattle.creature2.maxHp,
        mockBattle.creature1Hp, mockBattle.creature1.maxHp,
        mockBattle.turn, mockBattle.botDifficulty
      )
      
      // 2. Resolve turn locally
      const result = resolveTurn(
        mockBattle.creature1, mockBattle.creature2,
        type, bMove,
        mockBattle.creature1Hp, mockBattle.creature2Hp,
        mockBattle.turn
      )

      // 3. Simulate "chain delay"
      await new Promise(r => setTimeout(r, 800))

      // 4. Update state
      setMockBattle(prev => {
        if (!prev) return null
        const newState = (result.newBotHp === 0 || result.newPlayerHp === 0) ? 'finished' : 'active'
        const winner = result.newBotHp === 0 ? prev.player1 : (result.newPlayerHp === 0 ? prev.player2 : null)
        
        return {
          ...prev,
          creature1Hp: result.newPlayerHp,
          creature2Hp: result.newBotHp,
          turn: prev.turn + 1,
          state: newState as any,
          winner
        }
      })
      setBattleLog(prev => [result.logLine, ...prev])
      setIsAnimating(false)
      setSelectedMove(null)
    } else {
      // REAL MODE: use the submitBattleMove from useAutoSign
      try {
        await chainSubmitMove(type)
      } finally {
        setIsAnimating(false)
        setSelectedMove(null)
      }
    }
  }

  if (isLoading || !battle) return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col overflow-hidden">
      {/* HUD Header */}
      <div className="p-4 bg-panel/80 border-b border-white/5 flex items-center justify-between backdrop-blur-md z-30">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Swords size={20} /></div>
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-tighter">Battle #{battleId}</div>
            <div className="font-fantasy font-bold uppercase tracking-widest text-sm">
                {MOCK_MODE ? 'Mock Training Session' : 'On-Chain Arena'}
            </div>
          </div>
        </div>

        {/* Auto-sign Status */}
        <div 
          onClick={enableSession}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-pointer transition-all ${
            sessionActive 
              ? 'bg-green-500/10 border-green-500/30 text-green-400' 
              : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
          }`}
        >
          {sessionActive ? <Zap size={14} fill="currentColor" /> : <Lock size={14} />}
          <span className="text-[10px] font-black uppercase tracking-widest">
            {sessionActive ? 'Auto-sign ON' : 'Manual Sign'}
          </span>
        </div>

        <button onClick={onFinish} className="px-4 py-2 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-[10px] font-black tracking-widest transition-all uppercase border border-white/5">
          SURRENDER
        </button>
      </div>

      {/* Auto-sign Banner */}
      {!sessionActive && !MOCK_MODE && (
        <div 
          onClick={enableSession}
          className="bg-orange-600 p-2 text-center text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 group"
        >
          <Zap size={12} fill="currentColor" className="animate-pulse" />
          Enable Auto-signing for instant battle moves
          <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </div>
      )}

      <div className="flex-1 relative flex flex-col pt-12">
        {/* Opponent Side */}
        <div className="absolute top-4 right-8 z-10">
           <CreatureCard 
             creature={battle.creature2} 
             size="small" 
             isEnemy 
             showStats={false} 
             currentHp={battle.creature2Hp} 
           />
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center p-4">
           <BattleCanvas />
        </div>

        {/* Player Side */}
        <div className="absolute bottom-40 left-8 z-10">
           <CreatureCard 
             creature={battle.creature1} 
             size="small" 
             currentHp={battle.creature1Hp} 
           />
        </div>

        {/* Controls */}
        <div className="bg-panel/90 backdrop-blur-xl border-t border-white/10 p-6 z-20 pb-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {(['Attack', 'HeavyAttack', 'Defend', 'Special'] as MoveType[]).map(type => (
                <button
                  key={type}
                  disabled={battle.state !== 'active' || isAnimating}
                  onClick={() => handleMove(type)}
                  className={`
                    flex flex-col items-center justify-center p-4 rounded-xl border transition-all relative overflow-hidden group
                    ${selectedMove === type ? 'bg-orange-600 border-white/40 scale-105 shadow-[0_0_30px_rgba(234,88,12,0.4)]' : 'bg-white/5 border-white/5 hover:border-white/20'}
                    ${(battle.state !== 'active' || isAnimating) && selectedMove !== type ? 'opacity-30 cursor-not-allowed' : ''}
                  `}
                >
                  <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">{MOVE_DESCRIPTIONS[type].emoji}</span>
                  <span className="text-[10px] font-black uppercase tracking-tight">{MOVE_DESCRIPTIONS[type].label}</span>
                  {selectedMove === type && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
                </button>
              ))}
            </div>

            <div className="w-full md:w-80 h-32 bg-black/40 rounded-xl border border-white/5 p-4 overflow-y-auto font-medium text-[11px] leading-relaxed text-white/50 custom-scrollbar">
               {battleLog.length > 0 ? (
                 battleLog.map((log, i) => (
                   <div key={i} className={`mb-2 ${i === 0 ? 'text-white font-bold' : ''}`}>
                      {log}
                   </div>
                 ))
               ) : (
                 <div className="flex items-center justify-center h-full gap-2 opacity-30">
                    <Info size={14} />
                    <span>Waiting for move...</span>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>

      {battle.state === 'finished' && (
        <div className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="fantasy-card p-12 text-center max-w-sm w-full animate-in zoom-in-95 duration-300 border-orange-500/30">
             <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Swords size={40} />
             </div>
             <h2 className="text-5xl font-fantasy font-bold mb-4 tracking-tighter italic">
               {battle.winner === (MOCK_MODE ? '0x1' : battle.player1) ? 'VICTORY' : 'DEFEAT'}
             </h2>
             <p className="text-white/60 mb-8 font-medium leading-relaxed">
               {battle.winner === (MOCK_MODE ? '0x1' : battle.player1) 
                 ? `Your ${battle.creature1.name} has proven its strength and gained 50 XP!` 
                 : `Better luck next time. ${battle.creature1.name} gained 10 XP.`}
             </p>
             <button 
               onClick={onFinish}
               className="w-full py-5 bg-gradient-to-r from-orange-600 to-red-700 text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-2xl tracking-widest uppercase italic"
             >
               RETURN TO STABLE
             </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BattleArena
