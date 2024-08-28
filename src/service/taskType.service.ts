import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskTypeRepository } from 'src/repository/taskType.repository';
import { TaskType } from 'src/entity/taskType.entity';

@Injectable()
export class TaskTypeService {
  constructor(
    @InjectRepository(TaskType)
    private taskTypeRepository: TaskTypeRepository,
  ) {}

  async find(): Promise<TaskType[]> {
    return await this.taskTypeRepository.find();
  }

  async countById(id: number) {
    return await this.taskTypeRepository.count({ where: { id } });
  }
}
