import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collect {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  collectName: string;

  @Column({ length: 300 })
  description: string;

  @Column({ length: 100 })
  collectTags: string;

  @Column({ length: 30 })
  createTime: string;

  @Column({ length: 30 })
  updateTime: string;

  @Column({ length: 30 })
  authorId: string;

  @Column({ length: 50 })
  authorName: string;

  @Column({ length: 300 })
  articleIds: string;

  @Column()
  articleNum: number;

  @Column({ length: 120 })
  imagePath: string;
}
