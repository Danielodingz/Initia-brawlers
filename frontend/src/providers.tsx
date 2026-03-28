import { PropsWithChildren, useEffect } from 'react'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  initiaPrivyWalletConnector,
  injectStyles,
  InterwovenKitProvider,
  TESTNET,
} from '@initia/interwovenkit-react'
import interwovenKitStyles from '@initia/interwovenkit-react/styles.js'

// Wagmi config — required peer dependency
const wagmiConfig = createConfig({
  connectors: [initiaPrivyWalletConnector],
  chains: [mainnet],
  transports: { [mainnet.id]: http() },
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      refetchInterval: 5000,
      retry: 1,
    },
  },
})

export default function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    // REQUIRED: inject InterwovenKit stylesheet into shadow DOM
    injectStyles(interwovenKitStyles)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        {/*
          Use the TESTNET preset as the base config — this provides all
          required service URLs (registry, router, glyph, etc.) so the
          SDK initializes without crashing.

          We override defaultChainId to point to Initia testnet.
          enableAutoSign lets the SDK know we handle battle UX without popups.
        */}
        <InterwovenKitProvider
          {...TESTNET}
          defaultChainId={TESTNET.defaultChainId}
          theme="dark"
          enableAutoSign
        >
          {children}
        </InterwovenKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
