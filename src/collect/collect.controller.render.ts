import { Controller, Get, Render } from '@nestjs/common';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';

@Controller('/render/collect')
export class CollectControllerRender {
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
    // const allArticles = await this.writeService.findAll();
    return { title: '文章列表', allCollects, allArticles: [] };
  }
}
