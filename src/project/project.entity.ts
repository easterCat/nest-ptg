import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/entity/user.entity';

@Entity({ name: 'project' })
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @ManyToOne(type => User, user => user.posts, {
    onDelete: 'CASCADE',
  })
  public user: User;
    createInput: Express.User;
}
