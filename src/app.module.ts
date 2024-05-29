import { Module } from '@nestjs/common';
import { AppService } from './service/app.service';
import controller from './controller';

@Module({
  imports: [],
  controllers: Object.values(controller),
  providers: [AppService],
})
export class AppModule {}
