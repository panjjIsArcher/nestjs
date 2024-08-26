import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { User } from './entity/user.entity';
import { ConfigModule } from '@nestjs/config';
import setting from '../ormconfig';
@Module({
  providers: Object.values(service),
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(setting),
    UserModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: Object.values(controller),
})
export class AppModule {}
