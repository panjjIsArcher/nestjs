import { Injectable } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskCount() {
    return this.taskRepository.find();
  }
}
