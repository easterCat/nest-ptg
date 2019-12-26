import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from '../../project/project.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 40 })
  public account: string;

  @Column({ length: 100 })
  public avatarUrl: string;

  @Column({ length: 40 })
  public name: string;

  @Column({ length: 40 })
  public role: string;

  @Column('int')
  public createdAt: number;

  @Column('int')
  public updatedAt: number;

  @Column({ length: 250 })
  public password: string;

  @OneToMany(type => ProjectEntity, project => project.user)
  public posts: ProjectEntity[];
}
