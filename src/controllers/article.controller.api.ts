import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import {
  ensureDirSync,
  writeJsonSync,
  readJSONSync,
  ensureFileSync,
} from 'fs-extra';
import * as path from 'path';
import { CreateArticleDto } from '../dto/article/createArticle.dto';
import { UpdateArticleDto } from '../dto/article/updateArticle.dto';
import config from '../../global.config';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('文章操作')
@Controller('api/articles')
export class ArticleControllerApi {
  constructor(private readonly articleService: ArticleService) {}

  @ApiTags('获取全部文章')
  @Get('/all')
  async findAll() {
    const data = await this.articleService.findAll();
    return { code: 200, message: '获取成功', data };
  }

  @ApiTags('通过id获取一个文章数据')
  @Get('/:id')
  async findArticleById(@Param('id') id: string | number) {
    if (!id) {
      throw new BadRequestException('参数不正确,请检查传入的参数');
    }
    const data = await this.articleService.findById(id);
    return { code: 200, message: '获取成功', data };
  }

  @ApiTags('新建文章')
  @Post('/create')
  async create(@Body() createArticle: CreateArticleDto) {
    const result = await this.articleService.create(createArticle);
    return { code: 200, message: '创建成功', data: result };
  }

  @ApiTags('更新文章')
  @Post('/update')
  async updateArticle(@Body() updateArticle: UpdateArticleDto) {
    const result = await this.articleService.findById(updateArticle.id);
    const article = result;

    if (article) {
      const DIR_PATH = path.join(
        config.STATIC_PATH,
        `/articles/${article.collectName}`,
      );
      const FILE_PATH = path.join(DIR_PATH, `./${article.title}.json`);
      ensureDirSync(DIR_PATH);
      ensureFileSync(FILE_PATH);

      writeJsonSync(FILE_PATH, {
        markdown: updateArticle.markdown,
        html: updateArticle.html,
      });

      article.updateTime = Date.now() + '';
      article.savePath = FILE_PATH;

      if (updateArticle.collectName && updateArticle.collectName !== '') {
        article.collectName = updateArticle.collectName;
      }

      if (updateArticle.collectId && updateArticle.collectId >= 0) {
        article.collectId = updateArticle.collectId;
      }

      if (updateArticle.id) {
        article.id = updateArticle.id;
      }

      if (updateArticle.title) {
        article.title = updateArticle.title;
      }

      const data = await this.articleService.update(article);
      return { code: 200, message: '更新成功', data };
    } else {
      return { code: 400, message: '更新失败', data: {} };
    }
  }

  @ApiTags('删除文章')
  @Post('/delete')
  async deletArticle(@Body('id') id: string) {
    const article = await this.articleService.remove(id);
    if (article) {
      return { code: 200, message: '删除成功', article };
    } else {
      return { code: 400, message: '删除失败', data: {} };
    }
  }

  @ApiTags('')
  @Get('/getArticleByCollectId/:id')
  async getArticleByCollectId(@Param('id') id: string) {
    const article = await this.articleService.getArticleByCollectId(id);
    return { code: 200, message: '获取成功', data: article };
  }
}
