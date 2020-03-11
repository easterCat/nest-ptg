import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentControllerApi } from '../controllers/comment.controller.api';
import { CommentService } from '../services/comment.service';
import { CommentEntity } from '../entity/comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity])],
    controllers: [CommentControllerApi],
    providers: [CommentService],
})
export class CommentModule {}
