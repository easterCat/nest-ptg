import { Controller, Get, UseGuards, Render, Param } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { AuthGuard } from '@nestjs/passport';
import { readJSONSync } from 'fs-extra';
import * as mo from 'moment';
import { Roles } from '../core/decorators/roles.decorator';
import { RolesGuard } from '../core/guards/roles.guard';

@Controller('')
export class ArticleControllerRender {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/article')
  @Render('write.hbs')
  async root() {
    const result = await this.articleService.findAll();
    return { title: '我是添加页面', message: '这里是person', result };
  }

  // 查看文章
  @Get('/articles')
  @Render('home.hbs')
  async findAll() {
    let result = await this.articleService.findAll();
    result = result.map(item => {
      item.createTime = mo(Number(item.createTime || 0)).fromNow();
      return item;
    });
    return { title: '文章列表', lists: result, hots: result.slice(0, 10) };
  }

  // 获取一个文章,并渲染
  @Get('/article/:id')
  @Render('article.hbs')
  async renderById(@Param() params) {
    const res = await this.articleService.findById(params.id);

    if (res) {
      const result = res;
      const json = readJSONSync(result.savePath);

      return {
        title: result.title,
        ...result,
        markdown: json.markdown,
        html: json.html,
      };
    } else {
      return {
        title: '1',
        result: {
          WriteID: 1,
          CreateTime: '1',
          Title: '1',
          Description: '1',
          Tags: '1',
          markdown: '1',
          html: '1',
        },
      };
    }
  }
}
