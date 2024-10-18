import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TaskType } from './task.type';

@ObjectType()
export class PaginatedTasks {
  @Field(() => [TaskType])
  data: TaskType[];

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  totalPages: number;
}
