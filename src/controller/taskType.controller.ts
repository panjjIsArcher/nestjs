import { Controller } from '@nestjs/common';
import { TaskTypeService } from 'src/service/taskType.service';

@Controller('taskType')
export class TaskTypeController {
  constructor(private taskTypeService: TaskTypeService) {}
}
