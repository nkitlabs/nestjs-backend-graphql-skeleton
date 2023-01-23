import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import { config } from 'src/config'

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: config().postgres.host,
    port: config().postgres.port,
    username: config().postgres.user,
    password: config().postgres.password,
    database: config().postgres.db,
    synchronize: false,
    entities: [],
  }
}
