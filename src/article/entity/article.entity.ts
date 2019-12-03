import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  WriteID: number;

  @Column({ length: 100 })
  CreateTime: string;

  @Column({ length: 100 })
  UpdateTime: string;

  @Column({ length: 100 })
  Title: string;

  @Column()
  collectID: number;

  @Column({ length: 80 })
  collectName: string;

  @Column({ length: 300 })
  Description: string;

  @Column({ length: 300 })
  SavePath: string;

  @Column({ length: 300 })
  Tags: string;
}
