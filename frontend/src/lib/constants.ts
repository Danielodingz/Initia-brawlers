export const CHAIN_ID = "initia-brawlers-1"
export const RPC_URL = "http://localhost:26657"
export const LCD_URL = "http://localhost:1317"
export const CONTRACT_ADDRESS = "0x1"  // update after deploy

export const ELEMENTS = ['Fire', 'Water', 'Earth', 'Wind', 'Shadow'] as const
export const RARITIES = ['Common', 'Rare', 'Epic', 'Legendary'] as const

// Element colours for UI
export const ELEMENT_COLORS: Record<string, string> = {
  Fire:   '#FF4D00',
  Water:  '#0EA5E9',
  Earth:  '#84CC16',
  Wind:   '#A78BFA',
  Shadow: '#6B7280',
}

// Rarity colours
export const RARITY_COLORS: Record<string, string> = {
  Common:    '#9CA3AF',
  Rare:      '#3B82F6',
  Epic:      '#A855F7',
  Legendary: '#F59E0B',
}

export const MOVE_DESCRIPTIONS = {
  Attack:      { label: 'Attack',       emoji: '⚔️',  desc: 'Standard strike' },
  HeavyAttack: { label: 'Heavy Attack', emoji: '💥',  desc: '1.8× power, may miss' },
  Defend:      { label: 'Defend',       emoji: '🛡️', desc: 'Block + heal 5%' },
  Special:     { label: 'Special',      emoji: '✨',  desc: 'Elemental burst, costs HP' },
}

export const BOT_NAMES = [
  'Bot Flambo', 'Bot Aquara', 'Bot Stonk', 'Bot Gale', 'Bot Shade'
]

export const MOCK_MODE = false // Set true only if running without a node
