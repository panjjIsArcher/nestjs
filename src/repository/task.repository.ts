import { Task } from 'src/entity/task.entity';
import { Repository } from 'typeorm';

export class TaskRepository extends Repository<Task> {}
