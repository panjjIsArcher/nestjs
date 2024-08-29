import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserRepository } from 'src/repository/user.repository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async saveUser(User) {
    return this.userRepository.save(User);
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }

  async login(User) {
    // 先匹配
    const user = await this.findByName(User.name);
    if (user) {
      return false;
    }
  }
}
