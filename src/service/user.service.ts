import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
