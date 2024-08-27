import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GeoType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
