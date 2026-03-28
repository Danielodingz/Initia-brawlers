import { calculateFee, GasPrice } from '@cosmjs/stargate'
import { CONTRACT_ADDRESS } from './constants'

// ── BCS ENCODING HELPERS ──
// Initia Move args must be BCS encoded as base64 strings
// Use @initia/initia.js BCS utilities

function encodeU64(value: number): string {
  const buf = new ArrayBuffer(8)
  const view = new DataView(buf)
  view.setBigUint64(0, BigInt(value), true) // little-endian
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
}

function encodeU8(value: number): string {
  return btoa(String.fromCharCode(value))
}

function encodeString(value: string): string {
  const bytes = new TextEncoder().encode(value)
  const lenPrefix = new Uint8Array([(bytes.length & 0xFF)])
  const combined = new Uint8Array(lenPrefix.length + bytes.length)
  combined.set(lenPrefix)
  combined.set(bytes, lenPrefix.length)
  return btoa(String.fromCharCode(...combined))
}

function encodeBool(value: boolean): string {
  return btoa(String.fromCharCode(value ? 1 : 0))
}

// ── MOVE MESSAGE BUILDER ──
function moveMsg(
  sender: string,
  moduleName: string,
  functionName: string,
  args: string[] = [],
  typeArgs: string[] = []
) {
  return {
    typeUrl: '/initia.move.v1.MsgExecute',
    value: {
      sender,
      moduleAddress: CONTRACT_ADDRESS,
      moduleName,
      functionName,
      typeArgs,
      args,
    },
  }
}

// ══════════════════════════════════════
// CREATURE / BRAWLERS TRANSACTIONS
// ══════════════════════════════════════

export function buildMintCreature(
  sender: string,
  name: string,
  element: number,   // 0=Fire,1=Water,2=Earth,3=Wind,4=Shadow
  rarity: number,    // 0=Common,1=Rare,2=Epic,3=Legendary
  seed: number,      // Date.now() % 10000
) {
  return moveMsg(sender, 'brawlers', 'mint_creature', [
    encodeString(name),
    encodeU8(element),
    encodeU8(rarity),
    encodeU64(seed),
  ])
}

export function buildSetUsername(sender: string, username: string) {
  return moveMsg(sender, 'brawlers', 'set_username', [
    encodeString(username),
  ])
}

// ══════════════════════════════════════
// BATTLE TRANSACTIONS
// ══════════════════════════════════════

export function buildStartPveBattle(
  sender: string,
  creatureId: number,
  botDifficulty: number,  // 0=Easy,1=Medium,2=Hard
) {
  return moveMsg(sender, 'battle', 'start_pve_battle', [
    encodeU64(creatureId),
    encodeU8(botDifficulty),
  ])
}

export function buildChallengePlayer(
  sender: string,
  creatureId: number,
  opponent: string,
) {
  return moveMsg(sender, 'battle', 'challenge_player', [
    encodeU64(creatureId),
    encodeString(opponent),
  ])
}

export function buildAcceptChallenge(
  sender: string,
  battleId: number,
  creatureId: number,
) {
  return moveMsg(sender, 'battle', 'accept_challenge', [
    encodeU64(battleId),
    encodeU64(creatureId),
  ])
}

// This is called every turn — MUST use auto-signing so no popup appears
export function buildSubmitMove(
  sender: string,
  battleId: number,
  moveType: number,  // 0=Attack,1=Heavy,2=Defend,3=Special
) {
  return moveMsg(sender, 'battle', 'submit_move', [
    encodeU64(battleId),
    encodeU8(moveType),
  ])
}

// ══════════════════════════════════════
// TOURNAMENT TRANSACTIONS
// ══════════════════════════════════════

export function buildEnterTournament(
  sender: string,
  creatureId: number,
) {
  return moveMsg(sender, 'tournament', 'enter_tournament', [
    encodeU64(creatureId),
    encodeU64(2_000_000), // 2 INIT entry fee in uINIT
  ])
}

export function buildClaimPrize(sender: string, tournamentId: number) {
  return moveMsg(sender, 'tournament', 'claim_prize', [
    encodeU64(tournamentId),
  ])
}

// ══════════════════════════════════════
// GAS HELPER
// ══════════════════════════════════════

// Use this for transactions that need custom fee (battle moves with auto-sign)
export async function estimateAndBuildFee(
  estimateGas: (args: { messages: any[] }) => Promise<number>,
  messages: any[]
) {
  const gas = await estimateGas({ messages })
  return calculateFee(gas, GasPrice.fromString('0.015uinit'))
}
