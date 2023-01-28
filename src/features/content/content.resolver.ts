import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { ContentService } from 'src/features/content/content.service'
import { Content } from 'src/features/content/entities'

import { CreateContentInput, UpdateContentInput } from './dto'

@Resolver('content')
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Query(() => [Content], { name: 'contents' })
  async contents() {
    return this.contentService.contents()
  }

  @Query(() => Content, { name: 'content' })
  async content(@Args('id') id: string) {
    return this.contentService.content(id)
  }

  @Mutation(() => Content, { name: 'createContent' })
  async createContent(@Args('input') input: CreateContentInput) {
    return this.contentService.createContent(input)
  }

  @Mutation(() => Content, { name: 'updateContent' })
  async updateContent(@Args('input') input: UpdateContentInput) {
    return this.contentService.updateContent(input)
  }

  @Mutation(() => Content, { name: 'deleteContent' })
  async deleteContent(@Args('id') id: string) {
    return this.contentService.deleteContent(id)
  }
}
