import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { Task, TaskSchema } from './schema/task.schema'; 
import { UtilService } from 'src/helpers';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  providers: [TaskService, UtilService, TaskResolver],
})
export class TaskModule {}
