import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'article' })
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100 })
    public createTime: string;

    @Column({ length: 100 })
    public updateTime: string;

    @Column({ length: 100 })
    public title: string;

    @Column('int', { name: 'collectId' })
    public collectId: number;

    @Column({ length: 30 })
    public authorId: string;

    @Column({ length: 50 })
    public authorName: string;

    @Column({ length: 80 })
    public collectName: string;

    @Column({ length: 300 })
    public description: string;

    @Column({ length: 300 })
    public savePath: string;

    @Column({ length: 300 })
    public tags: string;

    @Column('int', { name: 'view', default: 0 })
    public view: number;

    @Column('int', { name: 'favorite', default: 0 })
    public favorite: number;

    @Column('int', { name: 'like', default: 0 })
    public like: number;
}
