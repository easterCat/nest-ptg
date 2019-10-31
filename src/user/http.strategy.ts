import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

interface IJwtPayload {
  name: string;
  pwd: string;
}

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: IJwtPayload, done) {
    const user = await this.userService.validateUser(payload.name);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
