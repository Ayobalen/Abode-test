import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class UserAuth {
  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: User;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  access_token: string;

  @Prop()
  refresh_token: string;

  @Prop({ default: false })
  deleted: boolean;
}

export type UserAuthDocument = UserAuth & Document;
export const UserAuthSchema = SchemaFactory.createForClass(UserAuth);