import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUsers(): Promise<string> {
    return 'users ssssssssss';
  }
}
