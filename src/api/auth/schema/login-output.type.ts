import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
    _id: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field()
  email: string;
}
