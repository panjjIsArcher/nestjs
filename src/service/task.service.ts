import { Injectable } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from 'src/repository/task.repository';
import { TaskType } from 'src/entity/taskType.entity';
import { TaskTypeService } from './taskType.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: TaskRepository,
  ) {}

  async getHomeTasks() {
    // 先查询全部类型
  }

  async getTaskCount() {
    return this.taskRepository.find();
  }
}
