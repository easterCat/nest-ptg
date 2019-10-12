import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  root() {
    return {
      title: '我是首页',
      message: '《处处见生机:生命、生灵、生意及一切生活背后的秘密》 梁冬 ...',
    };
  }
}
