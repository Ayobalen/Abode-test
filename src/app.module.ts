/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NODE_ENV, ENV } from './constants';
import { AuthModule } from './api/auth/auth.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './api/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './api/task/task.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TaskModule,
    LoggerModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === NODE_ENV.PROD
          ? '.prod.env'
          : process.env.NODE_ENV === NODE_ENV.STAGING
          ? '.staging.env'
          : '.dev.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(ENV.MONGO_URI),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: true,
      csrfPrevention: false,

    }),
  ],
})
export class AppModule {}
