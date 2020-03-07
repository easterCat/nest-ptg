import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';

// https://docs.nestjs.com/exception-filters
// https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = exception.message;
    let isDeepestMessage = false;

    while (!isDeepestMessage) {
      isDeepestMessage = !message.message;
      message = isDeepestMessage ? message : message.message;
    }

    // 异常过滤器中出现错误data的返回值默认设为null
    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      message: message || '请求失败',
      path: request.url,
      data: null,
    });
  }
}
