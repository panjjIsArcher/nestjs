import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
@Module({
  providers: Object.values(service),
  imports: [],
  controllers: Object.values(controller),
})
export class AppModule {}
