import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { TaskService } from 'src/service/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  async findTask() {
    return this.taskService.getTaskCount();
  }
}
