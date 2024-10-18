import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone_number: string;

  @Field(() => String)
  full_name: string;

  @Field(() => String)
  display_picture: string;

  @Field(() => Boolean)
  deleted: boolean;

  @Field(() => String)
  status: string;

  @Field(() => Boolean)
  is_account_verified: boolean;

}