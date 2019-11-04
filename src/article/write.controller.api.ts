import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WriteService } from './write.service';
import {
  ensureDirSync,
  ensureFileSync,
  writeJsonSync,
  readJSONSync,
} from 'fs-extra';
import * as path from 'path';
import { CreateWriteDto, UpdateWriteDto } from './dto/write.dto';

const STATIC_PATH = path.join(__dirname, `../../static`);

@Controller('api/article')
export class WriteControllerApi {
  constructor(private readonly writeService: WriteService) {}

  // 获取全部文章文章
  @Get('/all')
  async findAll() {
    const data = await this.writeService.findAll();
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
    const res = await this.writeService.findById(id);
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

  // 获取一个文章数据,用来预览
  @Post('')
  async findByIdPost(@Body() write: { id: number }) {
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
