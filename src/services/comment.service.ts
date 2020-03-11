import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from '../entity/comment.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>,
    ) {}

    public async create(data: any): Promise<CommentEntity> {
        return await this.commentRepository.save({
            ...data,
            createTime: Date.now() + '',
        });
    }

    public async findAll(articleId: number | string): Promise<CommentEntity[]> {
        return await this.commentRepository.find({
            where: { articleId },
        });
    }
}
