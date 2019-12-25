import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { registerPartials } from 'hbs';
import { address } from 'ip';
import * as cookieParser from 'cookie-parser';
import { blue } from 'colors';

const port = process.env.PORT || 6688;

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static/',
  });
  app.setBaseViewsDir(join(__dirname, '..', '/views'));
  app.setViewEngine('hbs');
  registerPartials(join(__dirname, '..', '/views/partials'));

  // 中间件 - 解析cookies
  app.use(cookieParser());
  // 开启跨域
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(port, () => {
    console.log(
      blue(
        `当前服务运行在 \n http://localhost:${port} \n http://${address()}:${port}`,
      ),
    );
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
