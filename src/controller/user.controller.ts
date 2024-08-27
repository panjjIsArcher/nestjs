import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/entity/user.entity';
import { apiResponse } from 'src/service/response.service';
import { Response as ApiResponse } from 'src/interfaces/response.interface';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(): Promise<ApiResponse<User[]>> {
    const users = await this.useService.getUsers();
    return apiResponse(users, 'success', 200);
  }

  @Post('/save')
  async saveUser(User): Promise<ApiResponse<boolean>> {
    const data = await this.useService.saveUser(User);
    return apiResponse(data, 'success', 200);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<ApiResponse<User>> {
    const data = await this.useService.findOne(params.id);
    return apiResponse(data, 'success', 200);
  }
}
