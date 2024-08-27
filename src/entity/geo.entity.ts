import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Geo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  typeId: number;
}
