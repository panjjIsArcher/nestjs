import { Controller, Get, Param, Post, Req } from '@nestjs/common';
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

  @Post('/save')
  async saveUser(User): Promise<boolean> {
    const data = await this.useService.saveUser(User);
    return data;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    const data = await this.useService.findOne(params.id);
    return data;
  }
}
