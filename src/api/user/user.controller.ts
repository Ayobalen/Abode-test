// import { Body, Controller, Delete, Get, Param, Req, Put, Query, UseGuards } from '@nestjs/common';
// import { UserProvider } from './user.provider';
// import { IUserAuth } from 'src/interfaces';
// import { JwtGuard, MongoIDPipe, UserAuth, injectJoiSchema } from 'src/helpers';
// import { UpdateUserDto } from './dtos';
// import { UpdateUserSchema } from './schema-validators';
// import { Mutation, Args, ID } from '@nestjs/graphql';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userProvider: UserProvider) {}

//   @Put(':id')
//   @UseGuards(JwtGuard)
//   async updateUser(
//     @Body(injectJoiSchema(UpdateUserSchema))
//     updateUserDto: UpdateUserDto,
//     @Param('id', MongoIDPipe) id: string,
//   ) {
//     return this.userProvider.updateUsers(id, updateUserDto);
//   }

//   @Mutation('updateUser')
//   @UseGuards(JwtGuard)
//   async updateUserGraphQL(
//     @Args({ type: () => ID, name: 'id' }) id: string,
//     @Args({ type: () => UpdateUserDto, name: 'input' }) updateUserDto: UpdateUserDto,
//   ): Promise<any> {
//     return this.userProvider.updateUsers(id, updateUserDto);
//   }


//   @Delete(':id')
//   @UseGuards(JwtGuard)
//   async deleteUser(
//     @UserAuth() userAuth: IUserAuth,
//     @Req() req,
//     @Param('id', MongoIDPipe) user: string,
//   ) {
//     const response = await this.userProvider.deleteUser(user);
//     return response;
//   }

//   @Mutation('deleteUser')
//   @UseGuards(JwtGuard)
//   async deleteUserGraphQL(
//   @Args({ type: () => ID, name: 'id' }) id: string,
//   @UserAuth() userAuth: IUserAuth,
//   ): Promise<boolean> {
//     const result = await this.userProvider.deleteUser(id);
//     return !!result;
//   }
// }

    // @Get(':id')
    // @UseGuards(JwtGuard)
    // async getUser(@UserAuth() userAuth: IUserAuth, req, @Param('id', MongoIDPipe) id: string) {
    //   const response = await this.userProvider.getOneUser(id);
    //   return response;
    // }

    // @Get('/users')
    // @UseGuards(JwtGuard)
    // async getUsers(@Query() query: any, @Req() req) {
    //   const users = await this.userProvider.getUsers(query);
    //   return users;
  