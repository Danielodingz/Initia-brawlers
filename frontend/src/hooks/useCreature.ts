import { useQuery } from '@tanstack/react-query'
import { useInterwovenKit } from './useInterwovenKit'
import { useCallback } from 'react'
import { buildMintCreature, buildSetUsername } from '../lib/transactions'
import { LCD_URL, CONTRACT_ADDRESS, MOCK_MODE } from '../lib/constants'
import { getMockCreatures } from '../lib/initia'
import type { Creature } from '../lib/types'

export function useCreature(overrideAddress?: string) {
  const { address, requestTxBlock, isConnected } = useInterwovenKit()
  const targetAddress = overrideAddress ?? address

  // Fetch creature list from on-chain view function
  const { data: creatures, isLoading, error, refetch } = useQuery<Creature[]>({
    queryKey: ['creatures', targetAddress],
    queryFn: async () => {
      // If MOCK_MODE is on OR if we're a guest (no address), return mock data for preview
      if (MOCK_MODE || !targetAddress) return getMockCreatures()

      // Call Move view function: brawlers::get_stable(addr)
      const res = await fetch(`${LCD_URL}/initia/move/v1/accounts/${CONTRACT_ADDRESS}/view_functions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          function_name: 'get_stable',
          type_args: [],
          args: [btoa(targetAddress)],  // BCS-encoded address
        }),
      })
      const data = await res.json()
      return parseCreaturesFromChain(data.data)
    },
    enabled: !!targetAddress || MOCK_MODE,
    refetchInterval: 5000,
    staleTime: 4000,
  })

  // Mint a new creature
  const mintCreature = useCallback(async (
    name: string,
    element: number,
    rarity: number,
  ) => {
    if (MOCK_MODE) return { transactionHash: 'mock_hash' }
    if (!address) throw new Error('Wallet not connected')
    const seed = Math.floor(Date.now() / 1000) % 100000
    const message = buildMintCreature(address, name, element, rarity, seed)
    const result = await requestTxBlock({ messages: [message] })
    await refetch()
    return result
  }, [address, requestTxBlock, refetch])

  // Set .init username on-chain
  const setUsername = useCallback(async (username: string) => {
    if (MOCK_MODE) return { transactionHash: 'mock_hash' }
    if (!address) throw new Error('Wallet not connected')
    const message = buildSetUsername(address, username)
    const result = await requestTxBlock({ messages: [message] })
    return result
  }, [address, requestTxBlock])

  return {
    creatures: (creatures ?? []) as Creature[],
    isLoading,
    error,
    refetch,
    mintCreature,
    setUsername,
    hasCreatures: ((creatures as Creature[])?.length ?? 0) > 0,
    isConnected
  }
}

// Parse Move struct return value into TypeScript Creature type
function parseCreaturesFromChain(data: any[]): Creature[] {
  if (!data || !Array.isArray(data)) return []
  return data.map((c: any) => ({
    id: Number(c.id),
    name: c.name,
    element: ['Fire','Water','Earth','Wind','Shadow'][c.element] as any,
    rarity: ['Common','Rare','Epic','Legendary'][c.rarity] as any,
    level: Number(c.level),
    xp: Number(c.xp),
    hp: Number(c.hp),
    maxHp: Number(c.max_hp),
    attack: Number(c.attack),
    defense: Number(c.defense),
    speed: Number(c.speed),
    specialPower: Number(c.special_power),
    wins: Number(c.wins),
    losses: Number(c.losses),
    inBattle: Boolean(c.in_battle),
  }))
}
