import { NestFactory } from '@nestjs/core';
import { exit } from 'process';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

function localRun() {
  const appService = new AppService();
  console.log(appService.getHello());

  exit();
}

bootstrap();
