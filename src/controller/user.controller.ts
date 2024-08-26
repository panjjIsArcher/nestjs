import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/entity/user.entity';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.useService.getUsers();
    return users;
  }
}
