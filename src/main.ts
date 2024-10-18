import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'aws-lambda';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { createServer, proxy } from 'aws-serverless-express';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors();

  await app.init();
  return createServer(expressApp);
}

function getHandler(): Handler {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return (event, context) => proxy(cachedServer, event, context, 'PROMISE').promise;
}

export default getHandler;
