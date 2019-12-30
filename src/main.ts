import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { registerPartials } from 'hbs';
import { address } from 'ip';
import * as cookieParser from 'cookie-parser';
import { blue } from 'colors';
import { DispatchError } from './common/filters/DispatchError';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as passport from 'passport';
import * as session from 'express-session';

const port = process.env.PORT || 6688;

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 异常过滤器
  app.useGlobalFilters(new DispatchError());

  // 设置public文件存放文件夹
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/',
  });
  // 设置静态文件存放文件夹
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static/',
  });
  // 设置视图文件夹
  app.setBaseViewsDir(join(__dirname, '..', '/views'));
  // 设置视图引擎
  app.setViewEngine('hbs');
  // 设置视图部件的文件夹
  registerPartials(join(__dirname, '..', '/views/partials'));

  // 中间件 - 解析cookies
  app.use(cookieParser());
  // 开启跨域
  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(
    session({
      secret: 'secret-key',
      name: 'sess-tutorial',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const options = new DocumentBuilder()
    .setTitle('平头哥')
    .setDescription('后端API接口文档')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

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
