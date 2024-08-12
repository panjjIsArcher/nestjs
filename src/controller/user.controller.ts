import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/interfaces/user.interface';
import { ResponseDto } from 'src/dto/response.dto';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  async getUsers(@Req() request: Request): Promise<ResponseDto<User[]>> {
    const users = await this.useService.getUsers();
    if (!users) {
      return new ResponseDto(0, [], 'success');
    }
    return new ResponseDto(0, users, 'success');
  }
}
