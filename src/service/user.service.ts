import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  constructor(private readonly userRepository: UserRepository) {}
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
