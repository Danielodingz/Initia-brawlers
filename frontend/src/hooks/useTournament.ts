import { useQuery } from '@tanstack/react-query'
import { useInterwovenKit } from './useInterwovenKit'
import { buildCreateTournament, buildEnterTournament, buildClaimPrize } from '../lib/transactions'
import { LCD_URL, CONTRACT_ADDRESS, MOCK_MODE } from '../lib/constants'
import { TournamentEntry } from '../lib/types'

export function useTournament() {
  const { address, requestTxBlock } = useInterwovenKit()

  // Fetch all active tournament IDs
  const { data: tournamentIds, isLoading: idsLoading } = useQuery({
    queryKey: ['tournamentIds'],
    queryFn: async (): Promise<number[]> => {
      try {
        const res = await fetch(`${LCD_URL}/initia/move/v1/accounts/${CONTRACT_ADDRESS}/view_functions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            function_name: 'get_active_tournament_ids',
            type_args: [],
            args: [],
          }),
        });
        const data = await res.json();
        return (data.data || []).map(Number);
      } catch (err) {
        console.error("Failed to fetch tournament IDs:", err);
        return [];
      }
    },
    refetchInterval: 10000,
  });

  // Fetch details for all IDs
  const { data: tournaments, isLoading: detailsLoading } = useQuery({
    queryKey: ['tournaments', tournamentIds],
    enabled: !!tournamentIds && tournamentIds.length > 0,
    queryFn: async (): Promise<TournamentEntry[]> => {
      try {
        const details = await Promise.all(tournamentIds!.map(async (id) => {
          const res = await fetch(`${LCD_URL}/initia/move/v1/accounts/${CONTRACT_ADDRESS}/view_functions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              function_name: 'get_tournament',
              type_args: [],
              args: [id.toString()],
            }),
          });
          const d = await res.json();
          const raw = d.data;
          
          return {
            id: Number(raw.id),
            name: raw.name, // String is returned as string from rest api
            participants: raw.participants || [],
            round: (raw.participants?.length || 0) < 4 ? 1 : 2, // simplified logic for now
            winner: raw.winner === '0x0' ? null : raw.winner,
            prizePool: Number(raw.entry_fee) * (raw.participants?.length || 0) / 1_000_000,
            isOpen: raw.state === 0,
            entryFee: Number(raw.entry_fee) / 1_000_000,
            weekNumber: 3, // hardcoded for theme
          } as any;
        }));
        return details;
      } catch (err) {
        console.error("Failed to fetch tournament details:", err);
        return [];
      }
    },
    refetchInterval: 10000,
  });

  const createTournament = async (name: string, feeInit: number) => {
    if (!address) throw new Error('Wallet not connected');
    const uinitFee = feeInit * 1_000_000;
    const message = buildCreateTournament(address, name, uinitFee);
    return await requestTxBlock({ messages: [message] });
  };

  const joinTournament = async (tournamentId: number, creatureId: number) => {
    if (!address) throw new Error('Wallet not connected');
    const message = buildEnterTournament(address, tournamentId, creatureId);
    return await requestTxBlock({ messages: [message] });
  };

  return {
    tournaments,
    isLoading: idsLoading || detailsLoading,
    createTournament,
    joinTournament,
  }
}
