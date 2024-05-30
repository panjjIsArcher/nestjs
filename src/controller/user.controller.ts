import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UserService } from '../service/user.service';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(): Promise<string> {
    const users = await this.useService.getUsers();
    if (!users) {
      return '' + HttpStatus.NOT_FOUND;
    }
    return users;
  }
}
