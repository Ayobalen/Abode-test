import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { UtilService } from 'src/helpers/utils.service';
import { PaginationQuery } from 'src/interfaces';
import { TaskDocument } from './schema';
import { TaskType } from './schema/task.type';
import { PaginatedTasks } from './schema/paginatedRes.type';
export declare class TaskService {
    private readonly taskModel;
    private readonly utilService;
    constructor(taskModel: Model<TaskDocument>, utilService: UtilService);
    createNewTask(data: any): Promise<TaskType>;
    getAllTasks(filterQuery: FilterQuery<TaskDocument>, paginationQuery?: PaginationQuery): Promise<PaginatedTasks>;
    getTask(filterQuery: FilterQuery<TaskDocument>): Promise<TaskDocument>;
    updateTask(filterQuery: FilterQuery<TaskDocument>, updateQuery: UpdateQuery<TaskDocument>, options?: QueryOptions): Promise<TaskType>;
    deleteTask(filterQuery: FilterQuery<TaskDocument>): Promise<TaskType | null>;
}
