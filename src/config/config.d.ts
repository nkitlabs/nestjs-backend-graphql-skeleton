export type Config = {
  port: number
  redis: {
    host: string
    port: number
    ttl?: number
  }
  postgres?: {
    host: string
    port: number
    user: string
    password: string
    db: string
  }
  ghost?: {
    url: string
    adminKey: string
    contentKey: string
    blogAdminContentToken: string
  }
  rpcEndpoints: Record<number, string[]>
  rpcArchiveEndpoints: Record<number, string[]>
  explorerApiKey: Record<number, string>
  explorerApiEndpoint: Record<number, string>
  schedulerToken: string
  subgraphKey: string
}
