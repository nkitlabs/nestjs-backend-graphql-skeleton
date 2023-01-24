import { ChainId } from 'src/common/enums'
import { ChainInfo } from 'src/common/interfaces'

export const SUPPORTED_CHAINS: Record<ChainId, ChainInfo> = {
  [ChainId.ETH]: {
    name: 'Ethereum Mainnet',
    shortName: 'Ethereum',
    explorer: 'https://etherscan.io',
    symbol: 'ETH',
  },
  [ChainId.KOVAN]: {
    name: 'Kovan Testnet',
    shortName: 'Kovan',
    explorer: 'https://kovan.etherscan.io/',
    symbol: 'ETH',
  },
  [ChainId.BSC]: {
    name: 'BSC Mainnet',
    shortName: 'BSC',
    explorer: 'https://bscscan.com/',
    symbol: 'BNB',
  },
  [ChainId.AVALANCHE]: {
    name: 'Avalanche',
    shortName: 'Avax',
    explorer: 'https://cchain.explorer.avax.network/',
    symbol: 'AVAX',
  },
  [ChainId.FANTOM]: {
    name: 'Fantom Opera',
    shortName: 'Fantom',
    explorer: 'https://rpc.ftm.tools/',
    symbol: 'FTM',
  },
  [ChainId.OPTIMISM]: {
    name: 'Optimism',
    shortName: 'Optimism',
    explorer: 'https://optimistic.etherscan.io',
    symbol: 'OP',
  },
}
