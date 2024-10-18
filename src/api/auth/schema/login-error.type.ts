import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginError {
  @Field(() => String)
  message: string;
}