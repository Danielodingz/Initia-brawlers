import React, { useState, useEffect } from 'react'
import { X, Search, Coins, Trophy, Zap, ChevronRight } from 'lucide-react'
import { useBattle } from '../hooks/useBattle'
import { LCD_URL, CONTRACT_ADDRESS } from '../lib/constants'

interface ChallengeModalProps {
  creatureId: number;
  onClose: () => void;
  onChallengeStarted: (battleId: number) => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ creatureId, onClose, onChallengeStarted }) => {
  const [players, setPlayers] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [wager, setWager] = useState('1.0');
  const [isLoading, setIsLoading] = useState(false);
  const { createChallenge } = useBattle(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(`${LCD_URL}/initia/move/v1/accounts/${CONTRACT_ADDRESS}/view_functions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            function_name: 'get_all_players',
            type_args: [],
            args: [],
          }),
        });
        const data = await res.json();
        if (data.data) setPlayers(data.data);
      } catch (err) {
        console.error("Failed to fetch players:", err);
      }
    };
    fetchPlayers();
  }, []);

  const handleChallenge = async (opponent: string) => {
    setIsLoading(true);
    try {
      const uinitWager = parseFloat(wager) * 1_000_000;
      const result = await createChallenge(creatureId, opponent, Math.floor(uinitWager));
      // In a real app, we'd parse the battleId from events
      // For now, we'll notify the user and close
      alert("Challenge sent! Wait for your opponent to accept.");
      onClose();
    } catch (err: any) {
      alert(`Challenge failed: ${err?.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPlayers = players.filter(p => p.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-panel w-full max-w-md rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
              <Trophy size={18} />
            </div>
            <div>
              <h3 className="font-fantasy font-bold text-lg leading-none">Find Opponent</h3>
              <p className="text-[10px] uppercase font-black opacity-30 tracking-widest mt-1">Challenge for Glory & INIT</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-50 hover:opacity-100">
            <X size={20} />
          </button>
        </div>

        {/* Wager Input */}
        <div className="p-6 bg-white/5 border-b border-white/5">
          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 block">Set Your Wager (INIT)</label>
          <div className="bg-dark/50 border border-white/10 rounded-xl p-4 flex items-center gap-4 group focus-within:border-orange-500/50 transition-colors">
            <Coins className="text-orange-500" size={20} />
            <input 
              type="number" 
              step="0.1"
              value={wager}
              onChange={(e) => setWager(e.target.value)}
              className="bg-transparent border-none outline-none flex-1 font-fantasy text-2xl text-white"
              placeholder="0.0"
            />
          </div>
          <p className="text-[9px] text-white/20 mt-3 italic">* Both players must escrow this amount. Winner takes all.</p>
        </div>

        {/* Search */}
        <div className="p-6 pb-2">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input 
              type="text"
              placeholder="Search by wallet address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-orange-500/50 transition-all font-medium"
            />
          </div>
        </div>

        {/* Player List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((addr) => (
              <button
                key={addr}
                onClick={() => handleChallenge(addr)}
                disabled={isLoading}
                className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-black text-[10px]">
                    {addr.slice(-2).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold font-mono opacity-80">{addr.slice(0, 8)}...{addr.slice(-6)}</div>
                    <div className="text-[9px] font-black uppercase text-white/20">Active Player</div>
                  </div>
                </div>
                <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                  <Zap size={14} fill="currentColor" />
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 text-center opacity-20">
              <p className="text-xs font-black uppercase tracking-widest leading-loose">
                No rivals found<br/>in this sector
              </p>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="absolute inset-0 bg-panel/80 backdrop-blur-sm z-20 flex items-center justify-center flex-col gap-4">
             <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
             <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Initializing Duel...</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChallengeModal
