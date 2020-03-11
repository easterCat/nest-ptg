import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comment' })
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    createTime: string;

    @Column({ length: 300 })
    content: string;

    @Column({ length: 30 })
    articleId: string;

    @Column({ length: 30 })
    replyUser: string;

    @Column({ length: 30 })
    commentUser: string;
}
