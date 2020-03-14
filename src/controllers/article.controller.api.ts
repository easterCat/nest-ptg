import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { ensureDirSync, writeJsonSync, ensureFileSync, removeSync } from 'fs-extra';
import * as path from 'path';
import { CreateArticleDto } from '../dto/article/createArticle.dto';
import { UpdateArticleDto } from '../dto/article/updateArticle.dto';
import config from '../../global.config';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('文章操作')
@Controller('api/articles')
export class ArticleControllerApi {
    constructor(private readonly articleService: ArticleService) {}

    @Get('/all')
    async findAll() {
        const data = await this.articleService.findAll();
        return { code: 200, message: '获取成功', data };
    }

    @Get('/:id')
    async findArticleById(@Param('id') id: string | number) {
        if (!id) {
            throw new BadRequestException('参数不正确,请检查传入的参数');
        }
        const data = await this.articleService.findById(id);
        return { code: 200, message: '获取成功', data };
    }

    @Post('/create')
    async create(@Body() createArticle: CreateArticleDto) {
        const result = await this.articleService.create(createArticle);
        return { code: 200, message: '创建成功', data: result };
    }

    @Post('/update')
    async updateArticle(@Body() updateArticleData: UpdateArticleDto) {
        const article = await this.articleService.findById(updateArticleData.id);
        const DIR_PATH = path.join(config.STATIC_PATH, `/articles/${article.collectName}`);

        if (updateArticleData.title !== article.title) {
            const OLD_FILE_PATH = path.join(DIR_PATH, `./${article.title}.json`);
            const FILE_PATH = path.join(DIR_PATH, `./${updateArticleData.title}.json`);

            ensureDirSync(DIR_PATH);
            ensureFileSync(FILE_PATH);
            removeSync(OLD_FILE_PATH);

            writeJsonSync(FILE_PATH, {
                markdown: article.markdown,
                html: article.html,
            });

            article.savePath = FILE_PATH;
        }

        if (updateArticleData.markdown && updateArticleData.html) {
            const FILE_PATH = path.join(DIR_PATH, `./${article.title}.json`);
            ensureDirSync(DIR_PATH);
            ensureFileSync(FILE_PATH);

            writeJsonSync(FILE_PATH, {
                markdown: updateArticleData.markdown,
                html: updateArticleData.html,
            });

            article.savePath = FILE_PATH;
        }

        if (updateArticleData.collectName) {
            article.collectName = updateArticleData.collectName;
        }

        if (updateArticleData.collectId) {
            article.collectId = updateArticleData.collectId;
        }

        if (updateArticleData.id) {
            article.id = updateArticleData.id;
        }

        if (updateArticleData.title) {
            article.title = updateArticleData.title;
        }

        article.updateTime = Date.now() + '';

        const data = await this.articleService.update(article);

        return { code: 200, message: '更新成功', data };
    }

    @Post('/delete')
    async deletArticle(@Body('id') id: string) {
        const article = await this.articleService.remove(id);
        if (!article) {
            throw new BadRequestException('删除失败');
        }

        const DIR_PATH = path.join(config.STATIC_PATH, `/articles/${article.collectName}`);
        const FILE_PATH = path.join(DIR_PATH, `./${article.title}.json`);
        removeSync(FILE_PATH);

        return { code: 200, message: '删除成功', article };
    }

    @Get('/getArticleByCollectId/:id')
    async getArticleByCollectId(@Param('id') id: string) {
        const article = await this.articleService.getArticleByCollectId(id);
        return { code: 200, message: '获取成功', data: article };
    }
}
