import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('int')
  public createAt: number;

  @Column({ length: 300 })
  public content: string;
}
