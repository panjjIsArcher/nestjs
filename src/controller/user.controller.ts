import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Req() request: Request): string {
    console.info(request);
    return 'here are users all';
  }
}
