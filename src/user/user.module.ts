import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { UserControllerApi } from './user.controller.api';
import { UserControllerRender } from './user.controller.render';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { Session } from '../session/entity/session.entity';
import { SessionService } from '../session/session.service';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../core/auth/auth.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Session]),
    forwardRef(() => AuthModule), // 处理模块间的循环依赖
    CommonModule,
  ],
  controllers: [UserControllerApi, UserControllerRender],
  providers: [UserService, SessionService],
  exports: [UserService],
})
export class UserModule {}
