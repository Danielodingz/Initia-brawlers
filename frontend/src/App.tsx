import React, { useState } from 'react'
import LandingScreen from './components/LandingScreen'
import MintScreen from './components/MintScreen'
import StableScreen from './components/StableScreen'
import BattleArena from './components/BattleArena'
import TournamentBracket from './components/TournamentBracket'
import Leaderboard from './components/Leaderboard'
import { useCreature } from './hooks/useCreature'
import { useInterwovenKit } from './hooks/useInterwovenKit'

type Screen = 'landing' | 'mint' | 'stable' | 'battle' | 'tournament'

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('landing')
  const [activeBattleId, setActiveBattleId] = useState<number | null>(null)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  
  const { creatures } = useCreature()
  const { isConnected } = useInterwovenKit()

  const handleEnter = () => {
    // If we have creatures, go to stable (menu). Otherwise, go to mint.
    const hasBrawlers = creatures && creatures.length > 0;
    if (hasBrawlers) {
      setScreen('stable')
    } else {
      setScreen('mint')
    }
  }

  const handlePlayGuest = () => {
    // In guest mode, useCreature will provide mock brawlers
    setScreen('stable')
  }

  const handleStartBattle = (creatureId: number) => {
    // In MOCK_MODE, we just generate an ID
    setActiveBattleId(Math.floor(Math.random() * 10000))
    setScreen('battle')
  }

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Dynamic Screens */}
      {screen === 'landing' && (
        <LandingScreen 
          onEnter={handleEnter} 
          onPlayGuest={handleEnter} 
        />
      )}

      {screen === 'mint' && (
        <MintScreen 
          onSuccess={() => setScreen('stable')} 
        />
      )}

      {screen === 'stable' && (
        <StableScreen 
          onStartBattle={handleStartBattle}
          onMint={() => setScreen('mint')}
          onViewTournament={() => setScreen('tournament')}
          onViewLeaderboard={() => setShowLeaderboard(true)}
        />
      )}

      {screen === 'battle' && activeBattleId && (
        <BattleArena 
          battleId={activeBattleId} 
          onFinish={() => setScreen('stable')} 
        />
      )}

      {screen === 'tournament' && (
        <div className="relative">
          <button 
            onClick={() => setScreen('stable')}
            className="fixed top-8 left-8 z-50 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-black uppercase hover:bg-white/10 transition-all"
          >
            ← Back to Stable
          </button>
          <TournamentBracket />
        </div>
      )}

      {/* Global Overlays */}
      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
      
      {/* Simple Sidebar trigger if not on landing */}
      {screen !== 'landing' && !showLeaderboard && (
        <button 
          onClick={() => setShowLeaderboard(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-panel border-l border-y border-white/10 p-3 rounded-l-2xl hover:bg-white/5 transition-all z-40 group shadow-2xl"
        >
          <div className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform">
             <div className="w-1 h-3 bg-white/20 rounded-full" />
             <div className="w-1 h-5 bg-orange-500 rounded-full" />
             <div className="w-1 h-3 bg-white/20 rounded-full" />
          </div>
        </button>
      )}
    </div>
  )
}

export default App
