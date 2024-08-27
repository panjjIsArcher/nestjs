import { Module } from '@nestjs/common';
import controller from './controller';
import service from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import entity from './entity/index';
import { ConfigModule } from '@nestjs/config';
import setting from '../ormconfig';
import { GeoModule } from './module/geo.module';

@Module({
  providers: Object.values(service),
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(setting),
    UserModule,
    GeoModule,
    TypeOrmModule.forFeature(Object.values(entity)),
  ],
  controllers: Object.values(controller),
})
export class AppModule {}
