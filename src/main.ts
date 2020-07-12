import { setEnvironment } from './common/config/env.config';
setEnvironment();
import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';
import { crudGlobalConfig } from './common/config/crud.config';
CrudConfigService.load(crudGlobalConfig);
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { appConfig } from './common/config/app.config';
import * as pacote from '../package.json';
import * as bodyParser from 'body-parser';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });

  const options = new DocumentBuilder();
  options.setTitle(pacote.name);
  options.setDescription(pacote.description);
  options.setVersion(pacote.version);

  if (appConfig.env === 'production') {
    options.setSchemes('https', 'http');
  } else {
    options.setSchemes('http', 'https');
  }
  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('/docs', app, document);

  await app.listen(appConfig.port);
  app.use(bodyParser.json({ limit: '150mb' }));
  app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
  Logger.log(`App listening on port ${appConfig.port}`, 'Bootstrap');
}

bootstrap();
