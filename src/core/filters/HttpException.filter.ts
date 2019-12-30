import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
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

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      message: message || '请求失败',
      data: null,
    });
  }
}
