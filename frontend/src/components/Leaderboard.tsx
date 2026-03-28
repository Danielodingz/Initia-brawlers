import React from 'react'
import { useLeaderboard } from '../hooks/useLeaderboard'
import { Trophy, ChevronLeft, BarChart3 } from 'lucide-react'

interface LeaderboardProps {
  onClose: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ onClose }) => {
  const { data: entries, isLoading } = useLeaderboard()

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-panel border-l border-white/10 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-orange-500" />
          <h3 className="text-lg font-fantasy font-bold uppercase tracking-tight">Leaderboard</h3>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <ChevronLeft className="rotate-180" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full opacity-40 italic text-sm">
            Fetching legends...
          </div>
        ) : (
          entries?.map((entry, index) => (
            <div 
              key={entry.address}
              className={`
                flex items-center gap-4 p-3 rounded-xl border border-white/5 transition-all hover:bg-white/5
                ${index === 0 ? 'bg-yellow-500/5 border-yellow-500/20' : ''}
                ${index === 1 ? 'bg-slate-400/5 border-slate-400/20' : ''}
                ${index === 2 ? 'bg-orange-700/5 border-orange-700/20' : ''}
              `}
            >
              <div className={`
                w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs
                ${index === 0 ? 'bg-yellow-500 text-dark' : index === 1 ? 'bg-slate-400 text-dark' : index === 2 ? 'bg-orange-700 text-white' : 'bg-white/5 text-white/40'}
              `}>
                {index + 1}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm truncate">{entry.username}</div>
                <div className="text-[10px] font-black uppercase tracking-tighter text-white/30">Lv.{entry.bestCreatureLevel} · {entry.totalWins} Wins</div>
              </div>

              {entry.tournamentWins > 0 && (
                <div className="flex items-center gap-1 text-yellow-500">
                  <Trophy size={14} />
                  <span className="text-[10px] font-black">{entry.tournamentWins}</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="p-6 bg-dark/50 border-t border-white/5">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-3">Your Rank</div>
        <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-black text-xs">12</div>
          <div className="flex-1">
            <div className="font-bold text-sm">you.init</div>
            <div className="text-[10px] font-black uppercase tracking-tighter text-white/30">Top 15%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
