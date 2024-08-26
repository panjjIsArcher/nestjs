import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
=======
import { UserEntity } from 'src/entity/user.entity';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
>>>>>>> 15f00984aaee7af60f9c17d077d7f7bf0ac6d579
  }
}
