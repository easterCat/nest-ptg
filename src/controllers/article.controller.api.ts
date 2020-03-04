import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import {
  ensureDirSync,
  ensureFileSync,
  writeJsonSync,
  readJSONSync,
} from 'fs-extra';
import * as path from 'path';
import { CreateArticleDto } from '../dto/article/createArticle.dto';
import { UpdateArticleDto } from '../dto/article/updateArticle.dto';

const STATIC_PATH = path.join(__dirname, `../../static`);

@Controller('api/articles')
export class ArticleControllerApi {
  constructor(private readonly articleService: ArticleService) {}

  // 获取全部文章文章
  @Get('/all')
  async findAll() {
    const data = await this.articleService.findAll();
    return { code: 200, message: '获取成功', data };
  }

  // 通过id获取一个文章数据,用来预览
  @Get('/:id')
  async findById(@Param('id') id: string | number) {
    if (!id) {
      return {
        code: 400,
        message: '参数不正确,请检查传入的参数',
        data: null,
      };
    }
    const res = await this.articleService.findById(id);
    if (res && res.length > 0) {
      let data = res[0];
      if (data.savePath && data.savePath !== '') {
        const json = readJSONSync(data.savePath);
        data = Object.assign({}, data, {
          markdown: json.markdown,
          html: json.html,
        });
      } else {
        data = Object.assign({}, data, {
          markdown: '',
          html: '',
        });
      }
      return { code: 200, message: '获取成功', data };
    } else {
      return {
        code: 400,
        message: '获取失败',
        data: null,
      };
    }
  }

  // 获取一个文章数据,用来预览
  @Post('')
  async findByIdPost(@Body() write: { id: number }) {
    const res = await this.articleService.findById(write.id);

    if (res && res.length > 0) {
      let data = res[0];
      const json = readJSONSync(data.savePath);
      data = Object.assign({}, data, {
        markdown: json.markdown,
        html: json.html,
      });
      return { code: 200, message: '获取成功', data };
    } else {
      return {
        code: 400,
        message: '获取失败',
        data: null,
      };
    }
  }

  // 新建文章
  @Post('/create')
  async create(@Body() createArticle: CreateArticleDto) {
    const result = await this.articleService.create(createArticle);
    return { code: 200, message: '创建成功', data: result };
  }

  // 更新或编辑文章
  @Post('/update')
  async updateArticle(@Body() updateArticle: UpdateArticleDto) {
    const result = await this.articleService.findById(updateArticle.id);
    const article = result[0];

    if (article) {
      const DIR_PATH = path.join(
        STATIC_PATH,
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

  @Post('/delete')
  async deletArticle(@Body('id') id: string) {
    const article = await this.articleService.remove(id);
    if (article) {
      return { code: 200, message: '删除成功', article };
    } else {
      return { code: 400, message: '删除失败', data: {} };
    }
  }

  @Get('/getArticleByCollectId/:id')
  async getArticleByCollectId(@Param('id') id: string) {
    const article = await this.articleService.getArticleByCollectId(id);
    return { code: 200, message: '获取成功', data: article };
  }
}
