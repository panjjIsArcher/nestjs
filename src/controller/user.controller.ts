import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
<<<<<<< HEAD
import { User } from 'src/entity/user.entity';
=======
import { ResponseDto } from 'src/dto/response.dto';
import { UserEntity } from 'src/entity/user.entity';
>>>>>>> 15f00984aaee7af60f9c17d077d7f7bf0ac6d579
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
<<<<<<< HEAD
  async getUsers(): Promise<User[]> {
    const users = await this.useService.getUsers();
    return users;
=======
  async getUsers(@Req() request: Request): Promise<ResponseDto<UserEntity[]>> {
    const users = await this.useService.getUsers();
    if (!users) {
      return new ResponseDto(0, [], 'success');
    }
    return new ResponseDto(0, users, 'success');
>>>>>>> 15f00984aaee7af60f9c17d077d7f7bf0ac6d579
  }
}
