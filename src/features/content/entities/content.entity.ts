import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Content {
  @Field(() => Int, { description: 'content id' })
  id: number

  @Field({ description: 'title of the content' })
  title: string

  @Field({ description: 'data inside the content' })
  content: string

  @Field({ description: 'data inside the content' })
  published: boolean

  @Field({ description: 'unix timestamp at the creation of the content' })
  createdAt: number
}
