import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pjj19930911',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  database: 'nestjs',
};
export default config;
