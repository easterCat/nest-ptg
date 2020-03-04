import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { UserControllerApi } from '../controllers/user.controller.api';
import { UserControllerRender } from '../controllers/user.controller.render';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entity/user.entity';
import { Session } from '../entity/session.entity';
import { SessionService } from '../services/session.service';
import { CommonModule } from '../core/common.module';
import { AuthModule } from '../core/auth/auth.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([Session]),
    forwardRef(() => AuthModule), // 处理模块间的循环依赖
    CommonModule,
  ],
  controllers: [UserControllerApi, UserControllerRender],
  providers: [UserService, SessionService],
  exports: [UserService],
})
export class UserModule {}
