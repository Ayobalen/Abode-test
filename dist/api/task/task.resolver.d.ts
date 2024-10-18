import { TaskService } from './task.service';
import { TaskDto, UpdateTaskDto } from './dtos';
import { TaskType } from './schema/task.type';
import { TaskFilterInput } from './taskFilter';
import { DeleteTaskInput } from './schema/deleteTask.type';
import { PaginatedTasks } from './schema/paginatedRes.type';
import { FilterTaskDto } from './schema/filter.type';
import { PaginationQuery } from './schema/pagination.type';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(data: TaskDto): Promise<TaskType>;
    getTask(filter: TaskFilterInput): Promise<TaskType | null>;
    updateTask(id: string, data: UpdateTaskDto): Promise<TaskType>;
    deleteTask(filter: DeleteTaskInput): Promise<TaskType | null>;
    getAllTasks(filter: FilterTaskDto, paginationQuery: PaginationQuery): Promise<PaginatedTasks>;
    hello(): string;
}
