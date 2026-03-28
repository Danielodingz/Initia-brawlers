import React, { createContext, useContext, useState } from 'react'

// Export context so useInterwovenKit can safely read it with useContext
// (reading a context that has no provider just returns the default value — no crash)
export const MockKitContext = createContext<any>(null)

export const MockInterwovenKitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)
  const [userName] = useState<string | null>(null)

  const value = {
    address: isConnected ? 'init1mock7890abcdefghijklmnopqrstuvwxy' : null,
    initiaAddress: isConnected ? 'init1mock7890abcdefghijklmnopqrstuvwxy' : null,
    username: isConnected ? userName ?? 'brawler' : null,
    isConnected,
    isOpen: false,
    openConnect: () => setIsConnected(true),
    openWallet: () => console.log('[Mock] Open Wallet'),
    openBridge: () => console.log('[Mock] Open Bridge'),
    openDeposit: () => console.log('[Mock] Open Deposit'),
    openWithdraw: () => console.log('[Mock] Open Withdraw'),
    disconnect: () => setIsConnected(false),
    requestTxBlock: async (_req: any) => ({ transactionHash: 'mock_' + Date.now() }),
    requestTxSync: async (_req: any) => 'mock_' + Date.now(),
    submitTxBlock: async (_params: any) => ({ transactionHash: 'mock_' + Date.now() }),
    submitTxSync: async (_params: any) => 'mock_' + Date.now(),
    estimateGas: async (_req: any) => 100000,
    simulateTx: async (_req: any) => ({ gasInfo: { gasUsed: 100000n, gasWanted: 100000n } }),
    waitForTxConfirmation: async (_params: any) => null,
    offlineSigner: null,
    hexAddress: isConnected ? '0x' + '0'.repeat(40) : null,
    autoSign: {
      isLoading: false,
      enable: async (_chainId?: string) => {},
      disable: async (_chainId?: string) => {},
      expiredAtByChain: {} as Record<string, Date | null | undefined>,
      isEnabledByChain: {} as Record<string, boolean>,
      granteeByChain: {} as Record<string, string | undefined>,
    },
  }

  return <MockKitContext.Provider value={value}>{children}</MockKitContext.Provider>
}

// Kept for backwards compat — components importing this directly still work
export function useInterwovenKit() {
  const context = useContext(MockKitContext)
  return context
}
