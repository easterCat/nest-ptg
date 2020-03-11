import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'image' })
export class ImageEntiry {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar', { length: 100 })
    public name: string;

    @Column({ length: 300 })
    public path: string;

    @Column({ length: 50 })
    public createdBy: string;

    @Column('int', { name: 'createAt' })
    public createAt: number;
}
