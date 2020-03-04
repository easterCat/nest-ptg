import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'article' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  createTime: string;

  @Column({ length: 100 })
  updateTime: string;

  @Column({ length: 100 })
  title: string;

  @Column()
  collectId: number;

  @Column({ length: 30 })
  authorId: string;

  @Column({ length: 50 })
  authorName: string;

  @Column({ length: 80 })
  collectName: string;

  @Column({ length: 300 })
  description: string;

  @Column({ length: 300 })
  savePath: string;

  @Column({ length: 300 })
  tags: string;
}
