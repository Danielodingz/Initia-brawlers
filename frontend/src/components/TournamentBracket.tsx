import React from 'react'
import { Trophy, Swords } from 'lucide-react'

const TournamentBracket: React.FC = () => {
  // Mock bracket data
  const rounds = [
    {
      name: 'Round of 8',
      matches: [
        { p1: 'alice.init', p2: 'bot_alpha', winner: 'alice.init' },
        { p1: 'bob.init', p2: 'bot_beta', winner: 'bob.init' },
        { p1: 'carol.init', p2: 'bot_gamma', winner: 'carol.init' },
        { p1: 'dave.init', p2: 'bot_delta', winner: 'dave.init' },
      ]
    },
    {
      name: 'Semi-Finals',
      matches: [
        { p1: 'alice.init', p2: 'bob.init', winner: 'alice.init' },
        { p1: 'carol.init', p2: 'dave.init', winner: 'carol.init' },
      ]
    },
    {
      name: 'Finals',
      matches: [
        { p1: 'alice.init', p2: 'carol.init', winner: null },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-dark p-8 flex flex-col items-center">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-4 animate-pulse">
           <Trophy size={14} /> Week 3 Championship
        </div>
        <h2 className="text-5xl font-fantasy font-bold">Tournament Bracket</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl">
        {rounds.map((round, rIdx) => (
          <div key={rIdx} className="flex-1 space-y-12">
            <div className="text-center font-black uppercase tracking-[0.3em] text-white/20 text-[10px]">{round.name}</div>
            <div className="space-y-8">
              {round.matches.map((match, mIdx) => (
                <div key={mIdx} className="relative">
                  <div className="fantasy-card bg-panel/50 border-white/5 overflow-hidden">
                    <div className={`p-3 text-xs font-bold border-b border-white/5 flex items-center justify-between ${match.winner === match.p1 ? 'bg-yellow-500/10 text-yellow-500' : 'opacity-60'}`}>
                      <span>{match.p1}</span>
                      {match.winner === match.p1 && <Trophy size={12} />}
                    </div>
                    <div className={`p-3 text-xs font-bold flex items-center justify-between ${match.winner === match.p2 ? 'bg-yellow-500/10 text-yellow-500' : 'opacity-60'}`}>
                      <span>{match.p2}</span>
                      {match.winner === match.p2 && <Trophy size={12} />}
                    </div>
                  </div>
                  {/* Connector lines (simplified) */}
                  {rIdx < rounds.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 max-w-xl">
        <div className="p-4 bg-orange-600 rounded-xl animate-pulse shadow-lg"><Swords /></div>
        <div>
          <div className="text-lg font-bold">Next Battle: alice.init vs carol.init</div>
          <p className="text-xs text-white/40 font-medium">Tournament finals starting soon. Winners take 14.40 INIT.</p>
        </div>
      </div>
    </div>
  )
}

export default TournamentBracket
