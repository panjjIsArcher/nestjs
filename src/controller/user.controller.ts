import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../service/user.service';
@Controller('user')
export class UserController {
  constructor(private useService: UserService) {}

  @Get()
  getUsers(@Req() request: Request): string {
    console.info(request);
    return 'here are users all';
  }
}
