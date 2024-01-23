"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "8d1fab163dc6a3185ef6b2621d8f67f8"

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId
})

export function Web3ModalProvider({ children }: {
    children: React.ReactNode
}) {
    return children;
}