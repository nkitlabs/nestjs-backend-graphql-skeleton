import { Field, InputType, Int } from '@nestjs/graphql'
import { Length } from 'class-validator'

@InputType()
export class CreateContentInput {
  @Field({ description: 'title of the content' })
  @Length(1, 10)
  title: string

  @Field({ description: 'data inside the content' })
  @Length(1, 300)
  content: string
}
