import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/api/user/schema'; 

@ObjectType()
export class TaskType {
  @Field(() => String)
  _id: string;

  @Field(() => User)
  assignedTo: User;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  priority: 'low' | 'medium' | 'high';

  @Field(() => String)
  status: 'pending' | 'in-progress' | 'completed';

  @Field(() => Boolean)
  completed: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
