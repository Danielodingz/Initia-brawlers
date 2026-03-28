import { useQuery, useMutation } from '@tanstack/react-query'
import { TournamentEntry } from '../lib/types'
import { MOCK_MODE } from '../lib/constants'

export function useTournament() {
  const { data: tournament, isLoading } = useQuery({
    queryKey: ['tournament'],
    queryFn: async (): Promise<TournamentEntry | null> => {
      if (MOCK_MODE) {
        return {
          id: 1,
          participants: ["alice.init", "bob.init", "carol.init", "dave.init", "eve.init"],
          round: 1,
          winner: null,
          prizePool: 16000000,
          isOpen: true,
          weekNumber: 3,
        }
      }
      return null
    },
    refetchInterval: 10000,
  })

  const enter = useMutation({
    mutationFn: async (creatureId: number) => {
      if (MOCK_MODE) {
        await new Promise(r => setTimeout(r, 1000))
        return { success: true }
      }
    }
  })

  return {
    tournament,
    isLoading,
    enter: enter.mutate,
    isEntering: enter.isPending,
  }
}
