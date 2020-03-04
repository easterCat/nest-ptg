import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  createAt: string;

  @Column({ length: 300 })
  token: string;

  @Column({ length: 100 })
  account: string;
}
