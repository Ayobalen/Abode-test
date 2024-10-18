import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteTaskInput {
  @Field()
  _id: string;
}
