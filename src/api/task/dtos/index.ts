import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';

@InputType() 
export class TaskDto {
  @Field() 
  @IsString()
  @IsNotEmpty()
  assignedTo: string;

  @Field() 
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field() 
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => String) 
  @IsEnum(['low', 'medium', 'high'])
  priority: string;

  @Field(() => String) 
  @IsEnum(['pending', 'in-progress', 'completed'])
  status: string;

  @Field(() => Boolean, { nullable: true }) 
  completed?: boolean;
}

@InputType()
export class UpdateTaskDto {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  completed?: boolean;
}

