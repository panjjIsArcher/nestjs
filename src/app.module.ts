import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import repository from './repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(repository))],
  controllers: Object.values(controller),
  providers: [...Object.values(service), ...Object.values(repository)],
})
export class AppModule {}
