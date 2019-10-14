import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Write {
  @PrimaryGeneratedColumn()
  WriteID: number;

  @Column({ length: 100 })
  CreateTime: string;

  @Column({ length: 100 })
  Title: string;

  @Column({ length: 100 })
  collect: string;

  @Column({ length: 300 })
  Description: string;

  @Column({ length: 300 })
  SavePath: string;

  @Column({ length: 300 })
  Tags: string;
}
