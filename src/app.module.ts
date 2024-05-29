import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import controller from './controller';

const controllers = Object.values(controller);
console.log(controllers);
@Module({
  imports: [],
  controllers: [AppController, ...controllers],
  providers: [AppService],
})
export class AppModule {}
