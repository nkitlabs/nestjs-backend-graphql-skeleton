import { Module } from '@nestjs/common'

import { ContentResolver } from './content.resolver'
import { ContentService } from './content.service'

@Module({
  imports: [],
  providers: [ContentResolver, ContentService],
})
export class ContentModule {}
