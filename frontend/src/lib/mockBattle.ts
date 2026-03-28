import type { Creature, ActiveBattle, MoveType } from './types'

const MOVE_CODES: Record<MoveType, number> = {
  Attack: 0, HeavyAttack: 1, Defend: 2, Special: 3
}

// Element advantage table — mirrors battle.move exactly
function elementMultiplier(attackerEl: string, defenderEl: string): number {
  const advantages: Record<string, string> = {
    Fire: 'Earth', Earth: 'Wind', Wind: 'Water', Water: 'Fire'
  }
  const weaknesses: Record<string, string> = {
    Fire: 'Water', Earth: 'Fire', Wind: 'Earth', Water: 'Wind'
  }
  if (advantages[attackerEl] === defenderEl) return 1.3
  if (weaknesses[attackerEl] === defenderEl) return 0.7
  return 1.0
}

// Bot AI — mirrors battle.move bot_choose_move exactly
function botChooseMove(
  botHp: number, botMaxHp: number,
  playerHp: number, playerMaxHp: number,
  turn: number,
  difficulty: number
): MoveType {
  if (difficulty === 0) return 'Attack'

  if (difficulty === 1) {
    if (botHp < botMaxHp * 0.3) return 'Special'
    if (botHp < botMaxHp * 0.5) return 'Defend'
    if (playerHp < playerMaxHp * 0.25) return 'HeavyAttack'
    return (turn % 5 < 3) ? 'Attack' : 'Defend'
  }

  // Hard AI
  if (botHp < botMaxHp * 0.2) return 'Special'
  if (playerHp < playerMaxHp * 0.15) return 'HeavyAttack'
  return (turn % 2 === 0) ? 'Attack' : 'HeavyAttack'
}

// Resolve one turn — returns updated HPs and log entry
export function resolveTurn(
  playerCreature: Creature,
  botCreature: Creature,
  playerMove: MoveType,
  botMove: MoveType,
  playerHp: number,
  botHp: number,
  turn: number
): {
  newPlayerHp: number
  newBotHp: number
  playerDamageDealt: number
  botDamageDealt: number
  playerMissed: boolean
  botMissed: boolean
  logLine: string
} {
  const pMoveCode = MOVE_CODES[playerMove]
  const bMoveCode = MOVE_CODES[botMove]

  // Determine speed order
  const playerFirst = playerCreature.speed >= botCreature.speed

  let newPlayerHp = playerHp
  let newBotHp = botHp
  let playerDamageDealt = 0
  let botDamageDealt = 0
  let playerMissed = false
  let botMissed = false

  function calcDamage(
    attacker: Creature, defender: Creature,
    move: MoveType, defenderDefended: boolean,
    turnNum: number
  ): { damage: number; missed: boolean; selfCost: number } {
    const effectiveDefense = defenderDefended
      ? defender.defense * 2
      : defender.defense

    if (move === 'Defend') return { damage: 0, missed: false, selfCost: 0 }

    if (move === 'Attack') {
      const raw = Math.max(attacker.attack - effectiveDefense / 2, 1)
      return { damage: Math.floor(raw), missed: false, selfCost: 0 }
    }

    if (move === 'HeavyAttack') {
      const missed = (attacker.speed < defender.speed) && (turnNum % 3 === 0)
      if (missed) return { damage: 0, missed: true, selfCost: 0 }
      const raw = Math.max(attacker.attack * 1.8 - effectiveDefense / 2, 1)
      return { damage: Math.floor(raw), missed: false, selfCost: 0 }
    }

    if (move === 'Special') {
      const elMult = elementMultiplier(attacker.element, defender.element)
      const raw = attacker.specialPower * 2 * elMult
      const adjusted = Math.max(raw - effectiveDefense / 4, 1)
      const selfCost = Math.floor(attacker.maxHp * 0.1)
      return { damage: Math.floor(adjusted), missed: false, selfCost }
    }

    return { damage: 0, missed: false, selfCost: 0 }
  }

  // Heal from Defend
  function applyDefend(creature: Creature, currentHp: number): number {
    const healed = Math.floor(creature.maxHp * 0.05)
    return Math.min(currentHp + healed, creature.maxHp)
  }

  // Apply moves in speed order
  const actors = playerFirst
    ? [
        { move: playerMove, atk: playerCreature, def: botCreature, isPlayer: true },
        { move: botMove, atk: botCreature, def: playerCreature, isPlayer: false },
      ]
    : [
        { move: botMove, atk: botCreature, def: playerCreature, isPlayer: false },
        { move: playerMove, atk: playerCreature, def: botCreature, isPlayer: true },
      ]

  for (const actor of actors) {
    if (actor.move === 'Defend') {
      if (actor.isPlayer) newPlayerHp = applyDefend(playerCreature, newPlayerHp)
      else newBotHp = applyDefend(botCreature, newBotHp)
      continue
    }

    const defenderDefended = actor.isPlayer
      ? botMove === 'Defend'
      : playerMove === 'Defend'

    const { damage, missed, selfCost } = calcDamage(
      actor.atk, actor.def, actor.move, defenderDefended, turn
    )

    if (actor.isPlayer) {
      playerMissed = missed
      playerDamageDealt = damage
      newBotHp = Math.max(newBotHp - damage, 0)
      if (selfCost > 0) newPlayerHp = Math.max(newPlayerHp - selfCost, 1)
    } else {
      botMissed = missed
      botDamageDealt = damage
      newPlayerHp = Math.max(newPlayerHp - damage, 0)
      if (selfCost > 0) newBotHp = Math.max(newBotHp - selfCost, 1)
    }
  }

  const missedText = playerMissed ? ' (missed!)' : ''
  const elBonus = playerMove === 'Special' &&
    elementMultiplier(playerCreature.element, botCreature.element) > 1
    ? ' ✨ Super effective!' : ''

  const logLine = `Turn ${turn}: You used ${playerMove}${missedText} → ${playerDamageDealt} dmg${elBonus}. ` +
    `${botCreature.name} used ${botMove} → ${botDamageDealt} dmg.`

  return { newPlayerHp, newBotHp, playerDamageDealt, botDamageDealt, playerMissed, botMissed, logLine }
}

export { botChooseMove }
