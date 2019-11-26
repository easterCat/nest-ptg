import {
  Controller,
  Get,
  Query,
  Redirect,
  Req,
  Param,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { SessionService } from '../session/session.service';
import { Request } from 'express';
import { config } from '../../global.config';

@Controller('api/user')
export class UserControllerApi {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  @Get('login/:name')
  public async login(@Param() paramData: { name: string }) {
    const session = await this.sessionService.find({ name: paramData.name });
    const token = session.token;
    const user = await this.userService.findOneByName(paramData.name);
    const data = { ...user, token };
    return { code: 200, message: '登录成功', data };
  }

  @Post('/logged')
  public async logged(@Req() req: Request) {
    const session = await this.sessionService.find({
      token: req.cookies['ptg-token'],
    });
    console.log('session :', req.cookies['ptg-token']);
    if (session) {
      if (Number(session.createAt) - +new Date() > config.sessionTime) {
        return { code: 400, messsage: '登录已过期', data: null };
      }
      const user = await this.userService.findOneByName(session.name);
      if (user) {
        return {
          code: 200,
          message: '已经登录',
          data: { ...user, token: session.token },
        };
      } else {
        return { code: 400, message: '用户不存在', data: null };
      }
    } else {
      return { code: 400, message: '登录已过期', data: null };
    }
  }

  @Get('/oauth')
  @Redirect('/', 301)
  public async githubOauth(@Query() queryData: { code: string }) {
    const parseResult = await this.userService.assessToken(queryData);
    const parseUser = await this.userService.getGithubUserInfo(parseResult);
    const find = await this.userService.validateUser(parseUser.name);

    if (!find && parseUser.name !== '') {
      await this.userService.create({
        login: parseUser.login,
        avatarUrl: parseUser.avatar_url,
        name: parseUser.name,
        createdAt: parseUser.created_at,
        updatedAt: parseUser.updated_at,
      });
    }
    const loginStatus = await this.userService.login(parseUser.name);
    await this.sessionService.create({
      token: loginStatus,
      createAt: +Date.now(),
      name: parseUser.name,
    });

    return { url: `/render/user/logged?name=${parseUser.name}` };
  }
}
