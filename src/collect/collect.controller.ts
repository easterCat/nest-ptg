import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CreateCollectDto } from './collect.dto';

@Controller('collect')
export class CollectController {
  @Get()
  @Render('collect.hbs')
  findAll() {
    return { title: '专栏' };
  }

  @Get('/create')
  @Render('collectCreate.hbs')
  renderCreateCollect() {
    return '';
  }

  @Post('/create')
  @Render('collectCreate.hbs')
  createNewCollect(
    @Body()
    createCollect: CreateCollectDto,
  ) {
    console.log('createCollect :', createCollect);
    createCollect = Object.assign(
      {},
      { ...createCollect },
      {
        createTime: +new Date(),
        updateTime: +new Date(),
        imagePath: '',
      },
    );
    return '';
  }
}
