import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql'; // Import Field and ObjectType

@ObjectType('UserType') // Ensure User is a GraphQL output type
@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
})
export class User {
  @Field() // Field decorator for email
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
  })
  email: string;

  @Field({ nullable: true }) // Optional field for phone_number
  @Prop()
  phone_number: string;

  @Field({ nullable: true }) // Optional field for password
  @Prop({ type: String, default: null })
  password: string;

  @Field({ nullable: true }) // Optional field for confirm_password
  @Prop({ type: String, default: null })
  confirm_password: string;

  @Field(() => [String]) // Field for previousPasswords
  @Prop({
    type: [String],
    default: [],
  })
  previousPasswords: string[];

  @Field() // Field for deleted
  @Prop({ type: Boolean, default: false })
  deleted: boolean;

  // Add _id field to the User class if necessary for GraphQL
  @Field() // Add _id field
  _id: string;

  @Field({ nullable: true }) // Add userAuthId as a field
  @Prop({ type: String, default: null }) // Ensure it's defined in the schema
  userAuthId?: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
