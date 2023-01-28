import { Injectable } from '@nestjs/common'
import { Content } from '@prisma/client'

import { CreateContentInput, UpdateContentInput } from 'src/features/content/dto'

import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  async content(id: string): Promise<Content | null> {
    return this.prisma.content.findUnique({ where: { id: Number(id) } })
  }

  async contents(): Promise<Content[]> {
    return this.prisma.content.findMany()
  }

  async createContent(input: CreateContentInput): Promise<Content | null> {
    return this.prisma.content.create({
      data: input,
    })
  }

  async updateContent(input: UpdateContentInput): Promise<Content | null> {
    const { id, title, content, published } = input
    return this.prisma.content.update({
      where: { id: Number(id) },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    })
  }

  async deleteContent(id: string): Promise<Content> {
    return this.prisma.content.delete({ where: { id: Number(id) } })
  }
}
