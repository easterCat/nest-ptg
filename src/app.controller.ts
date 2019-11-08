import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('write.hbs')
  root() {
    return { title: '我是首页' };
  }
}
