import { Controller, Get, Render, Post, Body, Param } from '@nestjs/common';
import { WriteService } from './write.service';
import {
  ensureDirSync,
  ensureFileSync,
  writeJsonSync,
  readJSONSync,
} from 'fs-extra';
import * as path from 'path';
import { CreateWriteDto, UpdateWriteDto } from './dto/write.dto';

const mo = require('moment');

const STATIC_PATH = path.join(__dirname, `../../static`);

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

  // 获取一个文章数据,用来预览
  @Post('/article')
  async findById(@Body() write: { id: number }) {
    const res = await this.writeService.findById(write.id);

    if (res && res.length > 0) {
      let data = res[0];
      const json = readJSONSync(data.SavePath);
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
  async create(@Body() createWrite: CreateWriteDto) {
    const newData = Object.assign(createWrite, {
      SavePath: '',
      CreateTime: Date.now(),
      UpdateTime: Date.now(),
      Tags: '',
      collectID: 23,
      collectName: 'default',
    });
    const data = await this.writeService.create(newData);
    return { code: 200, message: '创建成功', data };
  }

  // 更新或编辑文章
  @Post('/update')
  async updateWrite(@Body() updateWrite: UpdateWriteDto) {
    const result = await this.writeService.findById(updateWrite.id);
    const article = result[0];

    if (article) {
      const DIR_PATH = path.join(
        STATIC_PATH,
        `/articles/${article.collectName}`,
      );
      const FILE_PATH = path.join(DIR_PATH, `./${article.Title}.json`);
      ensureDirSync(DIR_PATH);
      ensureFileSync(FILE_PATH);

      writeJsonSync(FILE_PATH, {
        markdown: updateWrite.markdown,
        html: updateWrite.html,
      });

      article.UpdateTime = Date.now() + '';
      article.SavePath = FILE_PATH;

      if (updateWrite.collectName && updateWrite.collectName !== '') {
        article.collectName = updateWrite.collectName;
      }

      if (updateWrite.collectID && updateWrite.collectID >= 0) {
        article.collectID = updateWrite.collectID;
      }

      const data = await this.writeService.update(article);
      return { code: 200, message: '更新成功', data };
    } else {
      return { code: 400, message: '更新失败', data: {} };
    }
  }
}
