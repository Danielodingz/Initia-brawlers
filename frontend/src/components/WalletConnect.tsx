import { useState, useRef, useEffect } from 'react'
import { useInterwovenKit } from '../hooks/useInterwovenKit'
import { Wallet, Zap, Copy, LogOut, ChevronDown, ExternalLink } from 'lucide-react'

// Shortens an address: init1abc...xyz
function shortenAddress(addr: string): string {
  if (!addr) return ''
  if (addr.length <= 16) return addr
  return `${addr.slice(0, 8)}...${addr.slice(-6)}`
}

export default function WalletConnect() {
  const {
    address,
    username,
    isConnected,
    openConnect,
    openWallet,
    disconnect,
    autoSign,
  } = useInterwovenKit()

  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Copy address to clipboard
  const copyAddress = async () => {
    if (!address) return
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Display: prefer .init username, fall back to shortened address
  const displayName = username
    ? username.endsWith('.init') ? username : `${username}.init`
    : shortenAddress(address ?? '')

  const chainId = typeof autoSign?.isEnabledByChain === 'object'
    ? Object.keys(autoSign.isEnabledByChain)[0]
    : undefined
  const isAutoSignEnabled = chainId ? autoSign?.isEnabledByChain?.[chainId] : false

  // ── NOT CONNECTED ──────────────────────────────────────────────────────────
  if (!isConnected) {
    return (
      <button
        id="connect-wallet-btn"
        onClick={openConnect}
        className="
          group relative flex items-center gap-2.5
          px-5 py-2.5 rounded-xl
          bg-gradient-to-r from-violet-600/20 to-purple-600/20
          border border-violet-500/30
          text-white font-semibold text-sm
          hover:from-violet-600/40 hover:to-purple-600/40
          hover:border-violet-400/60
          hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]
          transition-all duration-200
          active:scale-95
        "
      >
        {/* Initia purple dot */}
        <span className="w-2 h-2 rounded-full bg-violet-500 group-hover:animate-pulse" />
        <Wallet size={15} className="text-violet-400" />
        <span>Connect Wallet</span>
      </button>
    )
  }

  // ── CONNECTED ──────────────────────────────────────────────────────────────
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Pill button */}
      <button
        id="wallet-pill-btn"
        onClick={() => setOpen(o => !o)}
        className="
          flex items-center gap-2.5 px-4 py-2 rounded-xl
          bg-violet-600/15 border border-violet-500/30
          text-white text-sm font-semibold
          hover:bg-violet-600/25 hover:border-violet-400/50
          transition-all duration-200
        "
      >
        {/* Green alive dot */}
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        {username && (
          <span className="text-violet-300 font-bold">{displayName}</span>
        )}
        {!username && (
          <span className="font-mono text-white/80">{displayName}</span>
        )}
        {isAutoSignEnabled && (
          <Zap size={12} className="text-yellow-400" title="Auto-sign active" />
        )}
        <ChevronDown size={14} className={`text-white/40 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="
          absolute right-0 top-[calc(100%+8px)] w-72
          bg-[#0c0c1a] border border-white/10 rounded-2xl
          shadow-[0_16px_48px_rgba(0,0,0,0.6)]
          overflow-hidden z-50
          animate-in fade-in slide-in-from-top-2 duration-200
        ">
          {/* Identity block */}
          <div className="p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                <Wallet size={16} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                {username ? (
                  <>
                    <p className="text-violet-300 font-bold text-sm truncate">{displayName}</p>
                    <p className="text-white/30 text-xs font-mono truncate">{shortenAddress(address ?? '')}</p>
                  </>
                ) : (
                  <p className="text-white/80 font-mono text-sm truncate">{shortenAddress(address ?? '')}</p>
                )}
              </div>
            </div>

            {/* Auto-sign badge */}
            {isAutoSignEnabled && (
              <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <Zap size={12} className="text-yellow-400" />
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Auto-Sign Active</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-2 space-y-1">
            <button
              onClick={copyAddress}
              className="
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-white/60 hover:text-white hover:bg-white/5
                text-sm transition-all duration-150
                text-left
              "
            >
              <Copy size={14} />
              {copied ? 'Copied!' : 'Copy Address'}
            </button>

            <button
              onClick={() => { openWallet(); setOpen(false) }}
              className="
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-white/60 hover:text-white hover:bg-white/5
                text-sm transition-all duration-150
                text-left
              "
            >
              <ExternalLink size={14} />
              Wallet Manager
            </button>

            <div className="h-px bg-white/5 my-1" />

            <button
              onClick={() => { disconnect(); setOpen(false) }}
              className="
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-red-400/70 hover:text-red-400 hover:bg-red-500/5
                text-sm transition-all duration-150
                text-left
              "
            >
              <LogOut size={14} />
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
