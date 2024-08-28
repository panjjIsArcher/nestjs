import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { TaskService } from 'src/service/task.service';
import { TaskController } from 'src/controller/task.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskTypeModule {}
