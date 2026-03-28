# Initia Brawlers ⚔️

## Initia Hackathon Submission

- **Project Name**: Initia Brawlers

### Project Overview
Initia Brawlers is a fully on-chain creature battle game built on the Initia blockchain.
Players mint unique elemental creatures, train them against AI opponents, challenge
other players in strategic turn-based PvP battles, and compete in weekly tournaments
for INIT token prizes. Every battle move is a blockchain transaction — but thanks to
Initia's auto-signing, it feels like a regular web game.

### Implementation Detail

- **The Custom Implementation**: Full turn-based battle engine on Move VM with elemental
  type advantages, 4 distinct moves (Attack, Heavy Attack, Defend, Special), bot AI with
  3 difficulty levels, XP/leveling system, and 8-player tournament brackets with on-chain
  prize pools. HTML5 Canvas battle animations render creature sprites and attack effects.

- **The Native Feature**: Auto-signing (Session UX) — players approve a session key once
  when entering the battle arena. All subsequent move submissions (submit_move transactions)
  are signed automatically without wallet popups. This makes the game feel seamless and
  real-time, not like a blockchain app. Implementation: `frontend/src/components/BattleArena.tsx`

### How to Run Locally

1. Install dependencies: `cd frontend && npm install`
2. Start frontend: `npm run dev` → open http://localhost:5173
3. Game runs in `MOCK_MODE` by default (no chain needed for judging)
4. To run against real appchain: set `MOCK_MODE = false` in `frontend/src/lib/constants.ts`
   and ensure appchain is running at `localhost:26657`

### Architecture
- **Smart contracts**: Move VM (3 modules: `brawlers`, `battle`, `tournament`)
- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS
- **Canvas**: HTML5 Canvas API for battle animations
- **Wallet**: InterwovenKit (`@initia/interwovenkit-react`)
- **Native feature**: Auto-signing for seamless battle UX
