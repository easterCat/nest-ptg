import { PassportSerializer } from '@nestjs/passport/dist/passport.serializer';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CookieSerializer extends PassportSerializer {
  // tslint:disable-next-line: ban-types
  serializeUser(user: any, done: Function): any {
    done(null, user);
  }
  // tslint:disable-next-line: ban-types
  deserializeUser(payload: any, done: Function): any {
    done(null, payload);
  }
}
