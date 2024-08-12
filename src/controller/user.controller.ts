import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { ResponseDto } from 'src/dto/response.dto';
import { UserEntity } from 'src/entity/user.entity';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(@Req() request: Request): Promise<ResponseDto<UserEntity[]>> {
    const users = await this.useService.getUsers();
    if (!users) {
      return new ResponseDto(0, [], 'success');
    }
    return new ResponseDto(0, users, 'success');
  }
}
