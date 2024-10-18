import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilService } from 'src/helpers';
import { UserService } from 'src/services';
import { AuthModule } from '../auth/auth.module';
import { User, UserSchema } from './schema';
//import { UserController } from './user.controller';
import { UserProvider } from './user.provider';
import { UserAuthResolver } from '../auth/auth.resolver';
import { AuthProvider } from '../auth/auth.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserProvider, UserService, UtilService, AuthProvider, JwtService, UserAuthResolver],
  exports: [UserService],
  controllers: [],
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
})
export class UserModule {}
