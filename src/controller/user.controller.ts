import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UserService } from '../service/user.service';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {
    // this.useService = new UserService();
  }

  @Get()
  async getUsers(): Promise<string> {
    const users = await this.useService.getUsers();
    if (!users) {
      // response.status(HttpStatus.NOT_FOUND).send();
      return '' + HttpStatus.NOT_FOUND;
    }
    return users;
  }
}
