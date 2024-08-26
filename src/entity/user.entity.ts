import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

<<<<<<< HEAD
@Entity()
export class User {
=======
@Entity('user')
export class UserEntity {
>>>>>>> 15f00984aaee7af60f9c17d077d7f7bf0ac6d579
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
