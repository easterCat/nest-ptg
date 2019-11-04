import { Controller, Get, Render, Param } from '@nestjs/common';
import { WriteService } from './write.service';
import { readJSONSync } from 'fs-extra';
import * as mo from 'moment';

@Controller('render/write')
export class WriteControllerRender {
  constructor(private readonly writeService: WriteService) {}

  @Get()
  @Render('write.hbs')
  async root() {
    const result = await this.writeService.findAll();
    return { title: '我是添加页面', message: '这里是person', result };
  }

  // 查看文章
  @Get('/all')
  @Render('articles.hbs')
  async findAll() {
    let result = await this.writeService.findAll();
    result = result.map(item => {
      item.CreateTime = mo(Number(item.CreateTime || 0)).fromNow();
      return item;
    });
    return { title: '文章列表', lists: result, hots: result.slice(0, 10) };
  }

  // 获取一个文章,并渲染
  @Get('/:id')
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
