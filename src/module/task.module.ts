import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { TaskService } from 'src/service/task.service';
import { TaskController } from 'src/controller/task.controller';
import { TaskTypeService } from 'src/service/taskType.service';
import { TaskType } from 'src/entity/taskType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskType])],
  providers: [TaskService, TaskTypeService],
  controllers: [TaskController],
})
export class TaskTypeModule {}
