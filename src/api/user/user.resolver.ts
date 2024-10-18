// import { Args, Mutation, Query, QueryOptions, Resolver } from '@nestjs/graphql';
// import { User } from './schema/user.type';
// import { UserService } from './user.service';
// import { UserDocument } from './schema';
// import { UtilService } from 'src/helpers/utils.service';
// import { FilterQuery } from 'mongoose';

// @Resolver(() => User)
// export class UserResolver {
//   constructor(
//     private readonly userService: UserService,
//     private readonly utilService: UtilService,
//   ) {}

//   @Mutation(() => Boolean)
//   async deleteUser(@Args('filter') filter: FilterQuery<UserDocument>): Promise<boolean> {
//     const result = await this.userService.deleteUser(filter);
//     return !!result;
//   }

//   @Mutation(() => User)
//   async updateUser(
//     @Args('filter') filter: FilterQuery<UserDocument>,
//     @Args('updateData') updateData: Partial<UserDocument>,
//     @Args('options', { nullable: true }) options?: QueryOptions,
//   ): Promise<UserDocument | null> {
//     const result = await this.userService.updateUser(filter, updateData, options);
//     return result;
//   }
// }
