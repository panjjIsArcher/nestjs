import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import Entity from './entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  entities: Object.values(Entity),
});
// 启动数据源连接
// dataSource
//   .initialize()
//   .then(() => {
//     // 在这里启动您的 Nest.js 应用或进行其他操作
//   })
//   .catch((error) => console.error(error));
