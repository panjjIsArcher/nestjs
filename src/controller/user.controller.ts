import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(@Req() request: Request): Promise<string> {
    const users = await this.useService.getUsers();
    if (!users) {
      return '' + HttpStatus.NOT_FOUND;
    }
    return users;
  }
}
