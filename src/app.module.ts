import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import controller from './controller';
import service from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entity from './entity/index';
import { ConfigModule } from '@nestjs/config';
import setting from '../ormconfig';
import modules from './module/index';
import { AuthMiddleware } from './middleware/auth.middleware';
import Controllers from './controller/index';
@Module({
  providers: Object.values(service),
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(setting),
    ...Object.values(modules),
    TypeOrmModule.forFeature(Object.values(entity)),
  ],
  controllers: Object.values(controller),
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const excludeControllers = [
      controller.AppController,
      controller.GeoController,
      controller.TaskController,
      controller.TaskTypeController,
    ];
    consumer.apply(AuthMiddleware).forRoutes(...excludeControllers);
  }
}
