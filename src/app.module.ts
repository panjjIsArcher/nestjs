import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: Object.values(service),
  imports: [TypeOrmModule.forRoot()],
  controllers: Object.values(controller),
})
export class AppModule {}
