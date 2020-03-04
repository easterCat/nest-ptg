import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../entity/user.entity';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  async createToken(payload: { account: string }): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: { account: string }): Promise<UserEntity> {
    return await this.userService.findOneByAccount(payload.account);
  }
}
