import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { join } from 'path'

import { ContentModule } from 'src/features/content/content.module'

import { AppController } from 'src/app.controller'
import { AppService } from 'src/app.service'
import { config } from 'src/config'

import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: `envs/.env.${process.env.ENV_NAME ?? 'development'}`,
      load: [config],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      sortSchema: true,
      playground: process.env.NODE_ENV === 'development',
      introspection: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    }),
    PrismaModule,
    ContentModule,
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
