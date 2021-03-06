import { Controller, Get, Param, Render } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';

@Controller('')
export class UserControllerRender {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  @Get('register')
  @Render('register.hbs')
  public async register(@Param() paramData: { name: string }) {
    return { code: 200, message: '登录成功', data: {} };
  }

  @Get('login')
  @Render('login.hbs')
  public async login(@Param() paramData: { name: string }) {
    return { code: 200, message: '登录成功', data: {} };
  }

  @Get('logged')
  @Render('logged.hbs')
  public async logged(@Param() paramData: { name: string }) {
    return { code: 200, message: '登录成功', data: {} };
  }
}
