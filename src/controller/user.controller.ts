import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user.interface';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(@Req() request: Request): Promise<User[]> {
    const users = await this.useService.getUsers();
    if (!users) {
      return [];
    }
    return users;
  }
}
