import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from 'src/app.controller'
import { AppService } from 'src/app.service'
import { config } from 'src/config'
import { getTypeOrmConfig } from 'src/db/db.util'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: `envs/.env.${process.env.ENV_NAME ?? 'development'}`,
      load: [config],
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          forbidUnknownValues: true,
          whitelist: true,
        }),
    },
    AppService,
  ],
})
export class AppModule {}
