import { Controller, Get } from '@nestjs/common';
import { Task } from 'src/entity/task.entity';
import { apiResponse } from 'src/service/response.service';
import { TaskService } from 'src/service/task.service';
import { Response as ApiResponse } from 'src/interfaces/response.interface';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('homeData')
  async getHomeTasks() {
    // 先查询全部的类型
    const data = await this.taskService.getHomeTasks();
    return apiResponse(data, 'success', 200);
  }

  @Get()
  async findTask(): Promise<ApiResponse<Task[]>> {
    const data = await this.taskService.getTaskCount();
    return apiResponse(data, 'success', 200);
  }
}
