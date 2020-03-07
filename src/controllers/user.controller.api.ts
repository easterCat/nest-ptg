import {
  Controller,
  Get,
  Query,
  Redirect,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UseGuards,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service';
import { SessionService } from '../services/session.service';
import { Roles } from '../core/decorators/roles.decorator';
import { IResult } from '../core/interfaces/result.interface';
import { AuthService } from '../core/auth/auth.service';
import { RolesGuard } from '../core/guards/roles.guard';
import { UserEntity } from '../entity/user.entity';
import { ApiTags } from '@nestjs/swagger';
import config from '../../global.config';
import { CreateUserDto } from '../dto/user/create.user.dto';

@ApiTags('用户账号')
@Controller('api/user')
export class UserControllerApi {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly authService: AuthService,
  ) {}

  @ApiTags('用户登录')
  @Post('login')
  public async login(
    @Body()
    loginData: CreateUserDto,
  ): Promise<IResult> {
    const userResult = await this.userService.login(
      loginData.account,
      loginData.password,
    );
    const session = await this.sessionService.find({
      account: loginData.account,
    });

    let token;
    if (session) {
      token = session.token;
    } else {
      token = await this.authService.createToken({
        account: loginData.account,
      });

      await this.sessionService.create({
        token,
        createAt: +Date.now(),
        account: userResult.account,
      });
    }

    const user = await this.userService.findOneByAccount(loginData.account);
    const data = { ...user, token };
    return { code: 200, message: '登录成功', data };
  }

  @ApiTags('用户注册')
  @Post('register')
  public async register(
    @Body()
    user: {
      account: string;
      password: string;
    },
  ): Promise<IResult> {
    const result = await this.userService.register(user);
    return { code: 200, message: '注册成功', data: result };
  }

  @ApiTags('用户删除')
  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(), RolesGuard)
  async remove(@Param() id: number): Promise<IResult> {
    const data = await this.userService.remove(id);
    return { code: 200, message: '删除用户成功', data };
  }

  @ApiTags('用户更新')
  @Put(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(), RolesGuard)
  async update(@Param() id: number, updateInput: UserEntity): Promise<IResult> {
    const data = await this.userService.update(id, updateInput);
    return { code: 200, message: '更新用户成功', data };
  }

  @ApiTags('查询用户')
  @Get(':id')
  async findOne(@Param() id: number): Promise<IResult> {
    const data = await this.userService.findOneWithPostsById(id);
    return { code: 200, message: '查询用户成功', data };
  }

  @ApiTags('查询所有用户')
  @Get()
  @Roles('admin')
  @UseGuards(AuthGuard(), RolesGuard)
  async findAll(): Promise<IResult> {
    const data = await this.userService.findAll();
    return { code: 200, message: '查询所有用户成功', data };
  }

  @ApiTags('登录状态验证')
  @Post('/logged')
  public async logged(@Body() tokenInfo: { token: string }) {
    if (!tokenInfo || !tokenInfo.token) {
      throw new UnauthorizedException('token参数不存在,请检查token');
    }
    const session = await this.sessionService.find({
      token: tokenInfo.token,
    });
    if (!session) {
      throw new UnauthorizedException('session不存在,登录已失效');
    } else {
      if (+session.createAt - +new Date() > config.sessionTime) {
        throw new UnauthorizedException('登录已过期');
      }
      const user = await this.userService.findOneByAccount(session.account);
      if (!user) {
        throw new NotFoundException('用户不存在');
      }
      return {
        code: 200,
        message: '已经登录',
        data: { ...user, token: session.token },
      };
    }
  }

  @Get('/oauth')
  @Redirect('/', 301)
  public async githubOauth(@Query() queryData: { code: string }) {
    const parseResult = await this.userService.assessToken(queryData);
    const parseUser = await this.userService.getGithubUserInfo(parseResult);
    const find = await this.userService.validateUser(parseUser.name);
    let user = {};

    if (!find && parseUser.name !== '') {
      user = await this.userService.register({
        login: parseUser.login,
        avatarUrl: parseUser.avatar_url,
        name: parseUser.name,
      });
    }
    const loginStatus = await this.userService.login(parseUser.name, '111111');
    await this.sessionService.create({
      token: loginStatus,
      createAt: +Date.now(),
      account: parseUser.name,
    });

    return {
      url: `${config.webUrl}/logged?name=${parseUser.name}`,
    };
  }
}
