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
    private readonly taskTypeSerivice: TaskTypeService,
  ) {}

  async getHomeTasks() {
    // 先查询全部类型
    const types: TaskType[] = await this.taskTypeSerivice.find();

    // 每种type去计算数目
    let result = [];
    for (let i = 0; i < types.length; i++) {
      const { name, id } = types[i];
      const typeId = id;
      result.push({ id, name, count: await this.getTaskCountByTypeId(typeId) });
    }
    return result;
  }

  async getTaskCountByTypeId(typeId: number) {
    return this.taskRepository.count({
      where: { type: typeId },
    });
  }
}
