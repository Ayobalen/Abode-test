import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { TaskDto, UpdateTaskDto } from './dtos';
import { TaskType } from './schema/task.type';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/helpers';
import { TaskFilterInput } from './taskFilter';
import { TaskDocument } from './schema/task.schema';
import { FilterQuery } from 'mongoose';
import { DeleteTaskInput } from './schema/deleteTask.type';
import { PaginatedTasks } from './schema/paginatedRes.type';
import { FilterTaskDto } from './schema/filter.type';
import { PaginationQuery } from './schema/pagination.type';

@Resolver(() => TaskType)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => TaskType)
  @UseGuards(JwtGuard)
  async createTask(@Args('data') data: TaskDto): Promise<TaskType> {
    const task = await this.taskService.createNewTask(data);
    return task;
  }

  @Query(() => TaskType, { nullable: true })
  @UseGuards(JwtGuard)
  async getTask(@Args('filter') filter: TaskFilterInput): Promise<TaskType | null> {
    const task = await this.taskService.getTask(filter);
    return task as TaskType;
  }

  @Mutation(() => TaskType)
  @UseGuards(JwtGuard)
  async updateTask(@Args('id') id: string, @Args('data') data: UpdateTaskDto): Promise<TaskType> {
    const updatedTask = await this.taskService.updateTask({ _id: id }, data);
    if (!updatedTask) {
      throw new NotFoundException('Task not found');
    }
    return updatedTask;
  }

  @Mutation(() => TaskType, { nullable: true })
  @UseGuards(JwtGuard)
  async deleteTask(@Args('filter') filter: DeleteTaskInput): Promise<TaskType | null> {
    const filterQuery: FilterQuery<TaskDocument> = { _id: filter._id };
    const deletedTask = await this.taskService.deleteTask(filterQuery);
    return deletedTask;
  }

  @Query(() => PaginatedTasks)
  @UseGuards(JwtGuard)
  async getAllTasks(
    @Args('filter', { nullable: true }) filter: FilterTaskDto,
    @Args('pagination', { nullable: true, type: () => PaginationQuery })
    paginationQuery: PaginationQuery,
  ) {
    return await this.taskService.getAllTasks(filter, paginationQuery);
  }

  @Query(() => String)
  hello(): string {
    return 'Hello, GraphQL!';
  }
}
