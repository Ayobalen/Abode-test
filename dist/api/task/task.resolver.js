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
exports.TaskResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const task_service_1 = require("./task.service");
const dtos_1 = require("./dtos");
const task_type_1 = require("./schema/task.type");
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const taskFilter_1 = require("./taskFilter");
const deleteTask_type_1 = require("./schema/deleteTask.type");
const paginatedRes_type_1 = require("./schema/paginatedRes.type");
const filter_type_1 = require("./schema/filter.type");
const pagination_type_1 = require("./schema/pagination.type");
let TaskResolver = class TaskResolver {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(data) {
        const task = await this.taskService.createNewTask(data);
        return task;
    }
    async getTask(filter) {
        const task = await this.taskService.getTask(filter);
        return task;
    }
    async updateTask(id, data) {
        const updatedTask = await this.taskService.updateTask({ _id: id }, data);
        if (!updatedTask) {
            throw new common_1.NotFoundException('Task not found');
        }
        return updatedTask;
    }
    async deleteTask(filter) {
        const filterQuery = { _id: filter._id };
        const deletedTask = await this.taskService.deleteTask(filterQuery);
        return deletedTask;
    }
    async getAllTasks(filter, paginationQuery) {
        return await this.taskService.getAllTasks(filter, paginationQuery);
    }
    hello() {
        return 'Hello, GraphQL!';
    }
};
exports.TaskResolver = TaskResolver;
__decorate([
    (0, graphql_1.Mutation)(() => task_type_1.TaskType),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.TaskDto]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createTask", null);
__decorate([
    (0, graphql_1.Query)(() => task_type_1.TaskType, { nullable: true }),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, graphql_1.Args)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [taskFilter_1.TaskFilterInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "getTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_type_1.TaskType),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "updateTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_type_1.TaskType, { nullable: true }),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, graphql_1.Args)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteTask_type_1.DeleteTaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "deleteTask", null);
__decorate([
    (0, graphql_1.Query)(() => paginatedRes_type_1.PaginatedTasks),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, graphql_1.Args)('filter', { nullable: true })),
    __param(1, (0, graphql_1.Args)('pagination', { nullable: true, type: () => pagination_type_1.PaginationQuery })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_type_1.FilterTaskDto,
        pagination_type_1.PaginationQuery]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "getAllTasks", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TaskResolver.prototype, "hello", null);
exports.TaskResolver = TaskResolver = __decorate([
    (0, graphql_1.Resolver)(() => task_type_1.TaskType),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskResolver);
//# sourceMappingURL=task.resolver.js.map