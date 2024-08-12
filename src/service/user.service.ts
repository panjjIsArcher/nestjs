import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
