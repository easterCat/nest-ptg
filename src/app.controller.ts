import { Get, Controller, Render, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/home')
  async root() {
    return { title: '我是首页' };
  }
}
