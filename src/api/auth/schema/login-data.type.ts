import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './login-output.type';
import { UserAuthType } from './user-auth.type';

@ObjectType()
export class LoginDataType {
  @Field(() => UserAuthType)
  userAuth: UserAuthType;

  @Field(() => User)
  user: User;

  @Field(() => String)
  token: string; 
}

