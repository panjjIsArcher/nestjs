import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import repository from './repository';
@Module({
  imports: [],
  controllers: Object.values(controller),
  providers: [...Object.values(service), ...Object.values(repository)],
})
export class AppModule {}
