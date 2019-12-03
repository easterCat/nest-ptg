import { Controller, Get, Post, Body } from '@nestjs/common';
import { CollectService } from './collect.service';
import { WriteService } from '../article/write.service';
import { CreateCollectDto } from './dto/collect.dto';

@Controller('/api/collect')
export class CollectControllerApi {
  constructor(
    private readonly collectService: CollectService,
    private readonly writeService: WriteService,
  ) {}

  @Get('/all')
  async renderCollect() {
    const data = await this.collectService.findAll();
    return { code: 200, message: '获取成功', data };
  }

  @Post('/info')
  async getCollectInfo(@Body() body: { id: number }) {
    const { id } = body;
    const collect = await this.collectService.findById(id);
    if (collect && collect.length > 0) {
      const sql = `SELECT * FROM article WHERE collectId = ${id}`;
      const articles = await this.writeService.query(sql);

      return {
        code: 200,
        message: '获取成功',
        data: { ...collect[0], articles },
      };
    } else {
      return { code: 400, message: '合集id错误,请检查传参', data: {} };
    }
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
