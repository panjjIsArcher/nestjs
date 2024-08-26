import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { User } from './entity/user.entity';
@Module({
  providers: Object.values(service),
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: Object.values(controller),
})
export class AppModule {}
