import { Controller, Get, Post, Body, Render, Redirect } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CreateCollectDto } from './dto/collect.dto';

@Controller('/api/collect')
export class CollectControllerApi {
  constructor(private readonly collectService: CollectService) {}

  @Get('/all')
  async renderCollect() {
    const data = await this.collectService.findAll();
    return { code: 200, message: '获取成功', data };
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
