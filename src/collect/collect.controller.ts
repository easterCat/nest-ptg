import { Controller, Get, Post, Body, Render, Redirect } from '@nestjs/common';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { CreateCollectDto } from './dto/collect.dto';

@Controller('collect')
export class CollectController {
  constructor(
    private readonly collectService: CollectService,
    private readonly writeService: WriteService,
  ) {}

  @Get()
  @Render('collectCreate.hbs')
  renderCreateCollect() {
    return '';
  }

  @Get('/write')
  @Render('write.hbs')
  async renderCollect() {
    const allCollects = await this.collectService.findAll();
    const allArticles = await this.writeService.findAll();
    return { allCollects, allArticles };
  }

  @Post('/create')
  async createNewCollect(
    @Body()
    createCollect: CreateCollectDto,
  ) {
    const body = Object.assign(
      {},
      { ...createCollect },
      {
        createTime: +new Date(),
        updateTime: +new Date(),
        imagePath: '',
        articleIds: '',
        articleNum: 0,
      },
    );
    const data = await this.collectService.create(body);
    return { code: 200, message: '创建成功', data };
  }
}
