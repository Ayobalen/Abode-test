export declare class TaskFilterInput {
    _id?: string;
    title?: string;
    assignedTo?: string;
    priority?: 'low' | 'medium' | 'high';
    status?: 'pending' | 'in-progress' | 'completed';
}
