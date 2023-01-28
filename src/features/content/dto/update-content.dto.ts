import { Field, InputType, Int } from '@nestjs/graphql'
import { IsBoolean, IsInt, IsString } from 'class-validator'

@InputType()
export class UpdateContentInput {
  @Field(() => Int, { description: 'content id' })
  @IsInt()
  id: number

  @Field({ description: 'title of the content' })
  @IsString()
  title: string

  @Field({ description: 'data inside the content' })
  @IsString()
  content: string

  @Field({ description: 'data inside the content' })
  @IsBoolean()
  published: boolean
}
