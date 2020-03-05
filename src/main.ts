import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { registerPartials } from 'hbs';
import { address } from 'ip';
import { blue } from 'colors';
import { HttpExceptionFilter } from './core/filters/HttpException.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { logger } from './core/middleware/logger.moddleware';
// import { ResultInterceptor } from './core/interceptors/result.interceptor';
import * as passport from 'passport';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

const port = process.env.PORT || 6688;

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: false,
  });

  addGlobal(app);
  addEngine(app);
  addMiddleware(app);
  addSwagger(app);
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

function addGlobal(app: any) {
  // http错误异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局拦截器.优化返回数据
  // app.useGlobalInterceptors(new ResultInterceptor());
}

function addEngine(app: any) {
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
}

function addMiddleware(app: any) {
  // 中间件 - 解析cookies
  app.use(cookieParser());
  // app.use(logger);
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
}

function addSwagger(app: any) {
  // 配置swagger文档
  const options = new DocumentBuilder()
    .setTitle('平头哥')
    .setDescription('后端API接口文档')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
