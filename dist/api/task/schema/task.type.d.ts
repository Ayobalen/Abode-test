import { User } from 'src/api/user/schema';
export declare class TaskType {
    _id: string;
    assignedTo: User;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'in-progress' | 'completed';
    completed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
