// login-response.type.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { UserAuthType } from './user-auth.type';
import { UserTokenType } from './user-token.type';
import { LoginDataType } from './login-data.type';
import { LoginError } from './login-error.type';
import { User } from './login-output.type';


@ObjectType()
export class LoginResponseType {
  @Field(() => String)
  status?: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => UserAuthType)
  userAuth?: UserAuthType;

  @Field(() => UserTokenType)
  token?: UserTokenType;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [LoginError], { nullable: true })
  errors?: LoginError[]; 

  @Field(() => LoginDataType, { nullable: true })
  data?: LoginDataType; 
}