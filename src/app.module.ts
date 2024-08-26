import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
@Module({
  providers: Object.values(service),
  imports: [TypeOrmModule.forRoot(), UserModule],
  controllers: Object.values(controller),
=======
import repository from './repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(repository))],
  controllers: Object.values(controller),
  providers: [...Object.values(service), ...Object.values(repository)],
>>>>>>> 15f00984aaee7af60f9c17d077d7f7bf0ac6d579
})
export class AppModule {}
