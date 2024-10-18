"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const utils_service_1 = require("../../helpers/utils.service");
const schema_1 = require("./schema");
let TaskService = class TaskService {
    constructor(taskModel, utilService) {
        this.taskModel = taskModel;
        this.utilService = utilService;
    }
    async createNewTask(data) {
        const task = await this.taskModel.create(data);
        return {
            _id: task._id.toString(),
            assignedTo: task.assignedTo,
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
            completed: task.completed,
        };
    }
    async getAllTasks(filterQuery, paginationQuery) {
        const count = await this.taskModel.countDocuments(filterQuery);
        const { limit, offset, totalPages } = this.utilService.getPaginationData(paginationQuery, count);
        const data = (0, lodash_1.isEmpty)(paginationQuery)
            ? await this.taskModel.find(filterQuery).sort({ createdAt: -1 })
            : await this.taskModel.find(filterQuery).skip(offset).sort({ createdAt: -1 });
        const tasks = data;
        return {
            data: tasks,
            count,
            totalPages,
        };
    }
    async getTask(filterQuery) {
        const task = await this.taskModel.findOne(filterQuery);
        return task;
    }
    async updateTask(filterQuery, updateQuery, options) {
        const task = await this.taskModel.findOneAndUpdate(filterQuery, updateQuery, Object.assign({ new: true }, options));
        if (!task) {
            throw new common_1.NotFoundException('Task not found');
        }
        return task;
    }
    async deleteTask(filterQuery) {
        const task = await this.taskModel.findOneAndDelete(filterQuery);
        return task
            ? {
                _id: task._id.toString(),
                assignedTo: task.assignedTo,
                title: task.title,
                description: task.description,
                priority: task.priority,
                status: task.status,
                completed: task.completed,
            }
            : null;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        utils_service_1.UtilService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map