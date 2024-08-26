import { User } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/service/user.service';
import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
