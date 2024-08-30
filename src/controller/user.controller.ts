import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/entity/user.entity';
import { apiResponse } from 'src/service/response.service';
import { Response } from 'src/interfaces/response.interface';
import { CustomExceptionFilter } from 'src/exceptionFilter';
import { ApiCreatedResponse, ApiProperty, ApiResponse } from '@nestjs/swagger';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  @ApiCreatedResponse({
    status: 200,
    description: '获取全部的用户',
    type: User,
  })
  async getUsers(): Promise<Response<User[]>> {
    try {
      const users = await this.useService.getUsers();
      return apiResponse(users, 'success', 200);
    } catch (err) {
      throw new CustomExceptionFilter();
    }
  }

  @Post()
  @ApiResponse({ description: '新增用户', status: 200 })
  async login(@Body() name: string, @Body() password: string) {
    try {
      if (!name) {
        throw new HttpException('name不为空', HttpStatus.BAD_GATEWAY);
      }

      if (!password) {
        throw new HttpException('密码不为空', HttpStatus.BAD_GATEWAY);
      }

      const data = await this.useService.login({ name, password });
      if (!data) {
        throw new HttpException('账号有误', HttpStatus.OK);
      }

      return apiResponse(true, '登陆成功', HttpStatus.OK);
    } catch (err) {
      throw new CustomExceptionFilter();
    }
  }

  @Post('/save')
  @ApiResponse({
    status: 200,
    description: '新增用户',
  })
  async saveUser(
    @Body() name: string,
    @Body() password: string,
  ): Promise<Response<boolean>> {
    const data = await this.useService.saveUser({ name, password });
    return apiResponse(data, 'success', 200);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Response<User>> {
    const data = await this.useService.findOne(params.id);
    return apiResponse(data, 'success', 200);
  }
}
