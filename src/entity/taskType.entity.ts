import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, BeforeInsert, UpdateDateColumn } from 'typeorm';
import { format } from 'date-fns';
@Entity()
export class TaskType {
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
    this.createdAt = new Date(format(this.createdAt, 'yyyy-MM-dd HH:mm:ss'));
    this.updatedAt = new Date(format(this.updatedAt, 'yyyy-MM-dd HH:mm:ss'));
  }
}
