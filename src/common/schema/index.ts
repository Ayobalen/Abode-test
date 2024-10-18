import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { UserAuth } from 'src/api/auth/schema';
import { User } from 'src/api/user/schema';
import { OtpReason, OtpType } from 'src/constants';
import { getServerLocalTime } from 'src/utils/helperfunctions';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class Otp {
  @Prop({
    required: true,
  })
  code: string;

  @Prop()
  from: string;

  @Prop({
    required: true,
  })
  to: string;

  @Prop({
    required: true,
  })
  message: string;

  @Prop({
    ref: User.name,
    type: MongooseSchema.Types.ObjectId,
  })
  user: User;

  @Prop({
    ref: UserAuth.name,
    type: MongooseSchema.Types.ObjectId,
  })
  auth: UserAuth;

  @Prop({
    required: true,
    enum: Object.values(OtpType),
  })
  otp_type: string;

  @Prop({
    required: true,
    enum: Object.values(OtpReason),
  })
  otp_reason: string;

  @Prop({
    required: true,
    default: false,
  })
  is_validated: boolean;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  meta: any;

  @Prop({ required: true, default: getServerLocalTime() })
  createdAt: Date;

  @Prop({ required: true, default: getServerLocalTime() })
  updatedAt: Date;

  @Prop({
    type: Date,
    required: true,
  })
  expires_at;

  @Prop({
    required: false,
  })
  unique_identifier: string;
}
export type OtpDocument = Otp & Document;
export const OtpSchema = SchemaFactory.createForClass(Otp);
