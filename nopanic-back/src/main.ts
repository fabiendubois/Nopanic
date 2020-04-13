// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as helmet from 'helmet';
// import * as morgan from 'morgan';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     logger: ['error', 'warn', 'log'],
//   });

//   const options = new DocumentBuilder()
//     .setTitle('Nopanic')
//     .setDescription('Nopanic application API')
//     .setVersion('1.0')
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('', app, document);

//   app.use(helmet());
//   app.enableCors();
//   app.use(morgan('tiny'));
//   await app.listen(3000);
// }
// bootstrap();

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';

let cachedServer: Server;

const bootstrapServer = async (): Promise<Server> => {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);

  const options = new DocumentBuilder()
    .setTitle('Nopanic')
    .setDescription('Nopanic application API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  app.use(helmet());
  app.enableCors();
  app.use(morgan('tiny'));

  await app.init();
  return awsServerlessExpress.createServer(expressApp);
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  if (!cachedServer) {
    const server = await bootstrapServer();
    cachedServer = server;
    return awsServerlessExpress.proxy(server, event, context, 'PROMISE')
      .promise;
  } else {
    return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
      .promise;
  }
};