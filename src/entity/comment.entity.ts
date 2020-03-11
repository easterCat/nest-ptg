import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comment' })
export class CommentEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100 })
    public createTime: string;

    @Column({ length: 300 })
    public content: string;

    @Column({ length: 30 })
    public articleId: string;

    @Column({ length: 30 })
    public replyUser: string;

    @Column({ length: 30 })
    public commentUser: string;
}
