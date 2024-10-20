import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserTokenType {
  @Field(() => String)
  access_token?: string;

  @Field(() => String)
  refresh_token?: string;
}
