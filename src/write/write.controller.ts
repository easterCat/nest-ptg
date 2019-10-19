import { Controller, Get, Render, Post, Body, Param } from '@nestjs/common';
import { WriteService } from './write.service';
import {
  ensureDirSync,
  ensureFileSync,
  writeJsonSync,
  readJSONSync,
} from 'fs-extra';
import * as path from 'path';

const STATIC_PATH = path.join(__dirname, `../../static`);

@Controller('write')
export class WriteController {
  constructor(private readonly WriteService: WriteService) {}

  @Get()
  @Render('write.hbs')
  async root() {
    let result = await this.WriteService.findAll();
    return { title: '我是添加页面', message: '这里是person', result: result };
  }

  // 查看文章
  @Get('/all')
  @Render('articles.hbs')
  async findAll() {
    const result = await this.WriteService.findAll();
    return { title: '文章列表', lists: result };
  }

  @Get('/:id')
  @Render('article.hbs')
  async findById(@Param() params) {
    const res = await this.WriteService.findById(params.id);

    if (res && res.length > 0) {
      let result = res[0];
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

  // 编写文章
  @Post('/create')
  @Render('write.hbs')
  async create(@Body() data: any) {
    const DIR_PATH = path.join(STATIC_PATH, `/articles/${data.collect}`);
    const FILE_PATH = path.join(DIR_PATH, `./${data.Title}.json`);
    ensureDirSync(DIR_PATH);
    ensureFileSync(FILE_PATH);
    writeJsonSync(FILE_PATH, {
      markdown: data.markdown,
      html: data.html,
    });

    const newData = Object.assign(data, {
      SavePath: FILE_PATH,
      CreateTime: Date.now(),
    });

    return this.WriteService.create(newData);
  }
}
