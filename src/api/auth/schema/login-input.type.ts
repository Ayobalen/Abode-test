import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginPayloadInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
