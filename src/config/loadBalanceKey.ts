export class LoadBalanceKeyConfig {
  private key: string

  constructor(key: string) {
    this.key = key
  }

  private getKeys = () => {
    let i = 0
    const keyIds = []
    do {
      keyIds.push(process.env[`${this.key}${i}`])
      i++
    } while (process.env[`${this.key}${i}`])

    return keyIds
  }

  getKey = () => {
    const keyIds = this.getKeys()
    const hours = new Date().getUTCHours()
    return keyIds[hours % keyIds.length] || ''
  }
}
