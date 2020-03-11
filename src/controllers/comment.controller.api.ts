import { Controller, Get, Post, Body, Param, BadRequestException, Query } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('评论')
@Controller('api/comment')
export class CommentControllerApi {
    constructor(private readonly commentService: CommentService) {}

    @Post('')
    public async createComment(
        @Body() createData: { id: number; content: string; articleId: string; replyUser: string; commentUser: string },
    ) {
        const result = await this.commentService.create(createData);
        return { code: 200, message: '提交成功', data: result };
    }

    @Get(':articleId')
    public async findCommentByArticle(@Param('articleId') articleId: number | string) {
        const result = await this.commentService.findAll(articleId);
        return { code: 200, message: '查找完成', data: result };
    }
}
