import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TaskFilterInput {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  assignedTo?: string;

  @Field({ nullable: true })
  priority?: 'low' | 'medium' | 'high';

  @Field({ nullable: true })
  status?: 'pending' | 'in-progress' | 'completed';
}
