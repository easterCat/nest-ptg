import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('collects.hbs')
  root() {
    return { title: '我是首页' };
  }
}
