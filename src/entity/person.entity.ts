import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100 })
    public lastName: string;

    @Column({ length: 100 })
    public firstName: string;

    @Column({ length: 300 })
    public address: string;

    @Column({ length: 300 })
    public city: string;
}
