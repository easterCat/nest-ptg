import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  login: string;

  @Column({ length: 100 })
  avatarUrl: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 30 })
  createdAt: string;

  @Column({ length: 30 })
  updatedAt: string;
}
