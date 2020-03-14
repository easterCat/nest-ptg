import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('collect')
export class CollectEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 80 })
    public collectName: string;

    @Column('text', { nullable: true, default: null })
    public description: string;

    @Column('varchar', { length: 100, nullable: true, default: null })
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
