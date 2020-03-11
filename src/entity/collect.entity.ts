import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collect {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 80 })
    public collectName: string;

    @Column({ length: 300 })
    public description: string;

    @Column({ length: 100 })
    public collectTags: string;

    @Column({ length: 30 })
    public createTime: string;

    @Column({ length: 30 })
    public updateTime: string;

    @Column({ length: 30 })
    public authorId: string;

    @Column({ length: 50 })
    public authorName: string;

    @Column({ length: 300 })
    public articleIds: string;

    @Column('int', { name: 'articleNum' })
    public articleNum: number;

    @Column({ length: 120 })
    public imagePath: string;
}
