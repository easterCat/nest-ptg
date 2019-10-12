import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  PersonID: number;

  @Column({ length: 100 })
  LastName: string;

  @Column({ length: 100 })
  FirstName: string;

  @Column({ length: 300 })
  Address: string;

  @Column({ length: 300 })
  City: string;
}
