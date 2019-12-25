import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 40 })
  public login: string;

  @Column({ length: 100 })
  public avatarUrl: string;

  @Column({ length: 40 })
  public name: string;

  @Column({ length: 30 })
  public firstName: string;

  @Column({ length: 30 })
  public lastName: string;

  @Column('int')
  public createdAt: number;

  @Column('int')
  public updatedAt: number;

  @Column({ length: 250, select: false, name: 'password' })
  public passwordHash: string;
}
