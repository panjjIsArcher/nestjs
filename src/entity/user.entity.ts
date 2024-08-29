import {
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { format } from 'date-fns';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class User {
  @Column()
  @ApiProperty()
  name: string;

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  password: string;

  @CreateDateColumn({ type: 'datetime' })
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @ApiProperty()
  updatedAt: Date;

  @BeforeInsert()
  setCreateDate() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    // YYYY-MM-DD HH:mm:ss 的格式
    this.createdAt = new Date(format(this.createdAt, 'yyyy-MM-dd HH:mm:ss'));
    this.updatedAt = new Date(format(this.updatedAt, 'yyyy-MM-dd HH:mm:ss'));
  }
}
