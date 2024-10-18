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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskType = void 0;
const graphql_1 = require("@nestjs/graphql");
const schema_1 = require("../../user/schema");
let TaskType = class TaskType {
};
exports.TaskType = TaskType;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskType.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => schema_1.User),
    __metadata("design:type", schema_1.User)
], TaskType.prototype, "assignedTo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskType.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskType.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskType.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TaskType.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], TaskType.prototype, "completed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], TaskType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], TaskType.prototype, "updatedAt", void 0);
exports.TaskType = TaskType = __decorate([
    (0, graphql_1.ObjectType)()
], TaskType);
//# sourceMappingURL=task.type.js.map