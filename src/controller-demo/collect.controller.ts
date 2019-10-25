import {
  Controller,
  Get,
  Res,
  Req,
  Post,
  Body,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { CreateCollectDto } from './createCollect.dto';

@Controller('collect')
export class CollectController {
  @Get()
  findAll(): string {
    return `<div style="color:blue">
        <form action="/collect/create" method="post">
            <div>
                <label for="name">Name:</label>
                <input name="name" type="text" id="name">
            </div>
            <div>
                <label for="mail">E-mail:</label>
                <input name="email" type="email" id="mail">
            </div>
            <div>
                <label for="msg">Message:</label>
                <textarea name="msg" id="msg"></textarea>
            </div>
            <button type="submit">Send your message</button>
        </form>
    </div>`;
  }

  @Get('/redirect')
  @Redirect('https://www.baidu.com', 301)
  go(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://www.cnblogs.com/' };
    }
  }

  @Get(':id/:order')
  findOne(@Param('id') id: string, @Param('order') order: string): string {
    return `This action returns a #${id} cat order by ${order} `;
  }

  @Get('/match*')
  matchRoute() {
    return '能够匹配上';
  }

  @Get('info')
  findCollectInfo(): string {
    return '这里是collect集合中的info页面';
  }

  @Get('req')
  handleRequest(@Req() request: Request, @Res() response: Response): void {
    let string = '<p style="width:450px;word-break:break-word;">';
    Object.keys(request).forEach(key => {
      string += `<text style="display:inline-block;width:150px;">${key}</text>`;
    });
    string += '</p>';
    response.status(200).send(`<div style="color:red">${string}</div>`);
  }

  // @Post('/create')
  // @Header('Cookie', 'name=123;email=123;msg=123')
  // @HttpCode(500)
  // createNewCollect(@Body()
  // createCollect: {
  //   name: string;
  //   email: string;
  //   msg: string;
  // }): string {
  //   return `<div>${createCollect.name} + ${createCollect.email} + ${createCollect.msg}</div>`;
  // }

  @Post('/create')
  createNewCollect(
    @Body()
    createCollect: CreateCollectDto,
  ): string {
    return `<div>${createCollect.name} + ${createCollect.email} + ${createCollect.msg}</div>`;
  }
}
