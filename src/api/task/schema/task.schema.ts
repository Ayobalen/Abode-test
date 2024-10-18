import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema';
import { ObjectType, Field } from '@nestjs/graphql'; 

@ObjectType()
@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class Task {
  @Field(() => User) 
  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  assignedTo: User;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field() 
  @Prop({ required: true })
  description: string;

  @Field(() => String) 
  @Prop({ enum: ['low', 'medium', 'high'], default: 'medium' })
  priority: string;

  @Field(() => String) 
  @Prop({ enum: ['pending', 'in-progress', 'completed'], default: 'pending' })
  status: string;

  @Field(() => Boolean) 
  @Prop({ default: false })
  completed: boolean;
}

export type TaskDocument = Task & Document;

export const TaskSchema = SchemaFactory.createForClass(Task);
