import mongoose, { Document } from 'mongoose';
import { User } from 'src/api/user/schema';
export declare class Task {
    assignedTo: User;
    title: string;
    description: string;
    priority: string;
    status: string;
    completed: boolean;
}
export type TaskDocument = Task & Document;
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any, mongoose.Document<unknown, any, Task> & Task & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Task, mongoose.Document<unknown, {}, mongoose.FlatRecord<Task>> & mongoose.FlatRecord<Task> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
