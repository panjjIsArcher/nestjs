import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { format } from 'date-fns';

@Entity()
export class GeoType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
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
