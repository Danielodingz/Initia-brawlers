import { useQuery } from '@tanstack/react-query'
import { LeaderboardEntry } from '../lib/types'
import { MOCK_MODE } from '../lib/constants'

export function useLeaderboard() {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: async (): Promise<LeaderboardEntry[]> => {
      if (MOCK_MODE) {
        return [
          { address: "0x1", username: "alice.init", totalBattles: 39, totalWins: 34, tournamentWins: 2, bestCreatureLevel: 14 },
          { address: "0x2", username: "bob.init", totalBattles: 37, totalWins: 28, tournamentWins: 1, bestCreatureLevel: 11 },
          { address: "0x3", username: "carol.init", totalBattles: 36, totalWins: 24, tournamentWins: 1, bestCreatureLevel: 10 },
          { address: "0x4", username: "dave.init", totalBattles: 27, totalWins: 19, tournamentWins: 0, bestCreatureLevel: 9 },
          { address: "0x5", username: "eve.init", totalBattles: 22, totalWins: 14, tournamentWins: 0, bestCreatureLevel: 8 },
        ]
      }
      return []
    },
    refetchInterval: 30000,
  })
}
