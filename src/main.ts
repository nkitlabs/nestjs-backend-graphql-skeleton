import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  const options = new DocumentBuilder()
    .setTitle('Skeleton Backend')
    .setDescription('API for Skeleton Backend')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('doc', app, document)

  await Promise.all([app.listen(app.get(ConfigService).get('port'))])
}
bootstrap()
