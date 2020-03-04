import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'project' })
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @Column('int')
  public createdAt: number;

  @ManyToOne(type => UserEntity, user => user.posts, {
    onDelete: 'CASCADE',
  })
  public user: UserEntity;
  createInput: Express.User;
}
