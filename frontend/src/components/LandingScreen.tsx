import React from 'react'
import WalletConnect from './WalletConnect'
import { useInterwovenKit } from '../hooks/useInterwovenKit'
import { Sword, Shield, Trophy, ChevronRight } from 'lucide-react'

interface LandingScreenProps {
  onEnter: () => void;
  onPlayGuest: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter, onPlayGuest }) => {
  const { isConnected } = useInterwovenKit()

  return (
    <div className="min-h-screen bg-dark overflow-hidden relative flex flex-col items-center justify-center p-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/background.png')] bg-cover bg-center pointer-events-none" 
        style={{ opacity: 0.5 }}
      />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6 opacity-50">
          <Sword size={24} />
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.5em] font-black uppercase">Initiate Hackathon</span>
          <div className="h-px w-12 bg-white/20" />
          <Sword size={24} className="scale-x-[-1]" />
        </div>

        <div className="relative group perspective-1000">
          <img
            src="/logo1.png"
            alt="Initia Brawlers"
            className="w-full max-w-2xl mx-auto mb-6 transform transition-all duration-700 hover:scale-105 active:scale-95 drop-shadow-[0_0_30px_rgba(234,88,12,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
          />
        </div>

        <p className="text-xl md:text-2xl text-white/60 font-medium tracking-wide mb-12 max-w-2xl mx-auto">
          The first fully on-chain creature battle engine built on Initia.
          Mint. Train. Battle. Dominate.
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          {!isConnected ? (
            <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
              <div className="transform scale-125 mb-4">
                <WalletConnect />
              </div>
              
              <div className="flex items-center gap-4 w-full opacity-30">
                <div className="h-px flex-1 bg-white" />
                <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Or continue without wallet</span>
                <div className="h-px flex-1 bg-white" />
              </div>

              <button
                onClick={onPlayGuest}
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-white/50 hover:text-white flex items-center gap-2 group"
              >
                <span>Play as Guest (PvE)</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-8 animate-in slide-in-from-bottom-8 duration-700">
               <div className="p-1 px-4 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Wallet Connected</span>
               </div>

              <button
                onClick={onEnter}
                className="group flex flex-col items-center gap-4"
              >
                <div className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl font-black text-2xl shadow-[0_0_50px_rgba(234,88,12,0.4)] hover:shadow-[0_0_80px_rgba(234,88,12,0.6)] transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                  <span>ENTER THE ARENA</span>
                  <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Prepare for combat</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Table */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500"><Sword /></div>
          <div>
            <div className="text-2xl font-fantasy font-bold">247</div>
            <div className="text-[10px] uppercase font-black text-white/40">Battles Today</div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Shield /></div>
          <div>
            <div className="text-2xl font-fantasy font-bold">1,204</div>
            <div className="text-[10px] uppercase font-black text-white/40">Creatures Summoned</div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500"><Trophy /></div>
          <div>
            <div className="text-2xl font-fantasy font-bold">340 INIT</div>
            <div className="text-[10px] uppercase font-black text-white/40">Prize Pools</div>
          </div>
        </div>
      </div>

      <footer className="mt-20 relative z-10 text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
        Built on Initia · Move VM · 2026
      </footer>
    </div>
  )
}

export default LandingScreen
