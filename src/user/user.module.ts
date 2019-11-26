import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserControllerApi } from './user.controller.api';
import { UserControllerRender } from './user.controller.render';
import { UserService } from './user.service';
import { HttpStrategy } from './http.strategy';
import { User } from './entity/user.entity';
import { Session } from '../session/entity/session.entity';
import { SessionService } from '../session/session.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Session]),
  ],
  controllers: [UserControllerApi, UserControllerRender],
  providers: [UserService, HttpStrategy, SessionService],
})
export class UserModule {}
