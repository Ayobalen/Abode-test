import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAuthType {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  phone_number?: string;

  @Field(() => String)
  password: string; 

  @Field(() => String, { nullable: true })
  confirm_password?: string; 

  @Field(() => [String], { nullable: true })
  previousPasswords?: string[];

  @Field(() => Boolean)
  deleted: boolean;

  @Field(() => String, { nullable: true })
  userAuthId?: string;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
