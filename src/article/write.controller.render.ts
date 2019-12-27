import { Controller, Get, UseGuards, Render, Param } from '@nestjs/common';
import { WriteService } from './write.service';
import { AuthGuard } from '@nestjs/passport';
import { readJSONSync } from 'fs-extra';
import * as mo from 'moment';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../core/guards/roles.guard';

@Controller('')
export class WriteControllerRender {
  constructor(private readonly writeService: WriteService) {}

  @Get('/write')
  @Render('write.hbs')
  async root() {
    const result = await this.writeService.findAll();
    return { title: '我是添加页面', message: '这里是person', result };
  }

  // 查看文章
  @Get('/home')
  @Render('home.hbs')
  async findAll() {
    let result = await this.writeService.findAll();
    result = result.map(item => {
      item.CreateTime = mo(Number(item.CreateTime || 0)).fromNow();
      return item;
    });
    return { title: '文章列表', lists: result, hots: result.slice(0, 10) };
  }

  // 获取一个文章,并渲染
  @Get('/article/:id')
  @Render('article.hbs')
  async renderById(@Param() params) {
    const res = await this.writeService.findById(params.id);

    if (res && res.length > 0) {
      const result = res[0];
      const json = readJSONSync(result.SavePath);

      return {
        title: result.Title,
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
