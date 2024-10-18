import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { isEmpty } from 'lodash';
import { UtilService } from 'src/helpers/utils.service';
import { PaginationQuery } from 'src/interfaces';
import { Task, TaskDocument } from './schema';
import { TaskType } from './schema/task.type';
import { PaginatedTasks } from './schema/paginatedRes.type';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<TaskDocument>,
    private readonly utilService: UtilService,
  ) {}

  async createNewTask(data: any): Promise<TaskType> {
    const task = await this.taskModel.create(data);
    return {
      _id: task._id.toString(),
      assignedTo: task.assignedTo,
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      completed: task.completed,
    } as TaskType;
  }

  async getAllTasks(
    filterQuery: FilterQuery<TaskDocument>,
    paginationQuery?: PaginationQuery,
  ): Promise<PaginatedTasks> {
    const count = await this.taskModel.countDocuments(filterQuery);
    const { limit, offset, totalPages } = this.utilService.getPaginationData(
      paginationQuery,
      count,
    );

    const data = isEmpty(paginationQuery)
      ? await this.taskModel.find(filterQuery).sort({ createdAt: -1 })
      : await this.taskModel.find(filterQuery).skip(offset).sort({ createdAt: -1 });

    const tasks = data as unknown as TaskType[];

    return {
      data: tasks,
      count,
      totalPages,
    };
  }

  async getTask(filterQuery: FilterQuery<TaskDocument>) {
    const task = await this.taskModel.findOne(filterQuery);
    return task as TaskDocument;
  }

  async updateTask(
    filterQuery: FilterQuery<TaskDocument>,
    updateQuery: UpdateQuery<TaskDocument>,
    options?: QueryOptions,
  ): Promise<TaskType> {
    const task = await this.taskModel.findOneAndUpdate(filterQuery, updateQuery, {
      new: true,
      ...options,
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task as TaskType;
  }

  async deleteTask(filterQuery: FilterQuery<TaskDocument>): Promise<TaskType | null> {
    const task = await this.taskModel.findOneAndDelete(filterQuery);
    return task
      ? ({
          _id: task._id.toString(),
          assignedTo: task.assignedTo,
          title: task.title,
          description: task.description,
          priority: task.priority,
          status: task.status,
          completed: task.completed,
        } as TaskType)
      : null;
  }
}
