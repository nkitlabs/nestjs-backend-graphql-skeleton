import { get } from 'lodash'

import { SUPPORTED_CHAINS } from 'src/common/constants'

import { Config } from 'src/config/config'

export const config = (): Config => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Loading env from .env.${process.env.ENV_NAME ?? 'development'}`)
  }

  const supportedChainIds = Object.keys(SUPPORTED_CHAINS)

  const rpcEndpoints = {}
  const rpcArchiveEndpoints = {}
  const explorerApiKey = {}
  const explorerApiEndpoint = {}

  for (const chainId of supportedChainIds) {
    rpcEndpoints[chainId] = get(process.env, `${chainId}_RPC_ENDPOINTS`, '').split(', ')
    rpcArchiveEndpoints[chainId] = get(process.env, `${chainId}_RPC_ARCHIVE_ENDPOINTS`, '').split(', ')
    explorerApiKey[chainId] = get(process.env, `${chainId}_EXPLORER_API_KEY`, '')
    explorerApiEndpoint[chainId] = get(process.env, `${chainId}_EXPLORER_API_ENDPOINT`, '')
  }

  const config: Config = {
    port: parseInt(process.env.PORT) || 5000,
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
      ttl: parseInt(process.env.REDIS_TTL) || 60 * 60 * 24,
    },
    postgres: {
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT) ?? 5432,
      user: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD,
      db: process.env.DB_NAME,
    },
    ghost: {
      url: process.env.GHOST_URL,
      adminKey: process.env.GHOST_ADMIN_KEY,
      contentKey: process.env.GHOST_CONTENT_KEY,
      blogAdminContentToken: process.env.BLOG_ADMIN_CONTENT_KEY,
    },
    rpcEndpoints,
    rpcArchiveEndpoints,
    explorerApiKey,
    explorerApiEndpoint,
    schedulerToken: process.env.SCHEDULER_TOKEN || '',
    subgraphKey: process.env.SUBGRAPH_KEY || '',
  }

  return config
}
