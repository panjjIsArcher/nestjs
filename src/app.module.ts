import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
@Module({
  imports: [],
  controllers: Object.values(controller),
  providers: Object.values(service),
})
export class AppModule {}
