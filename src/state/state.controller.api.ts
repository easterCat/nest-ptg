import { Controller, Post, Body, Redirect } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('/api/state')
export class StateControllerApi {
  constructor(private readonly stateService: StateService) {}

  @Post('/create')
  async handleCreateReq(@Body() body: { content: string }) {
    if (!body.content || body.content === '') {
      return { code: 400, message: '参数不正确', data: null };
    }
    const data = await this.stateService.create(body);
    return { code: 200, message: '创建成功', data };
  }

  @Post('/delete')
  async deleteState(@Body() body: { id: number }) {
    const data = await this.stateService.removeById(body.id);
    if (data) {
      return { code: 200, message: '删除成功', data };
    } else {
      return { code: 400, message: '删除失败', data };
    }
  }

  @Post('/find')
  async findState(@Body() body: { time: string }) {
    const data = await this.stateService.find(body.time);
    if (data) {
      return { code: 200, message: '筛选成功', data };
    } else {
      return { code: 400, message: '筛选失败', data };
    }
  }
}
