import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskTypeService } from 'src/service/taskType.service';
import { TaskType } from 'src/entity/taskType.entity';
import { TaskTypeController } from 'src/controller/taskType.controller';
@Module({
  imports: [TypeOrmModule.forFeature([TaskType])],
  providers: [TaskTypeService],
  controllers: [TaskTypeController],
})
export class TaskModule {}
