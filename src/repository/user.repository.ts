import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {}
