export declare class TaskDto {
    assignedTo: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    completed?: boolean;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    priority?: string;
    status?: string;
    completed?: boolean;
}
