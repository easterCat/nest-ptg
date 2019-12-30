import { AppErrorEnum } from './AppErrorEnum';
import { IErrorMessage } from './IErrorMessage';
import { HttpStatus } from '@nestjs/common';

export class AppError extends Error {
  public errorCode: AppErrorEnum;
  public httpStatus: number;
  public errorMessage: string;
  public userMessage: string;

  constructor(errorCode: AppErrorEnum) {
    super();
    const errorMessageConfig: IErrorMessage = this.getError(errorCode);
    if (!errorMessageConfig) {
      throw new Error('无法找到错误代码');
    }
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.httpStatus = errorMessageConfig.httpStatus;
    this.errorCode = errorCode;
    this.errorMessage = errorMessageConfig.errorMessage;
    this.userMessage = errorMessageConfig.userMessage;
  }

  public getError(errorCode: AppErrorEnum): IErrorMessage {
    let res: IErrorMessage;

    switch (errorCode) {
      case AppErrorEnum.USER_NOT_FOUND:
        res = {
          type: AppErrorEnum.USER_NOT_FOUND,
          httpStatus: HttpStatus.NOT_FOUND,
          errorMessage: '用户未找到',
          userMessage: '当前提供信息无法找到该用户',
        };
        break;
      case AppErrorEnum.USER_EXISTS:
        res = {
          type: AppErrorEnum.USER_EXISTS,
          httpStatus: HttpStatus.UNPROCESSABLE_ENTITY,
          errorMessage: '用户已存在',
          userMessage: '用户名已存在',
        };
        break;
      case AppErrorEnum.NOT_IN_SESSION:
        res = {
          type: AppErrorEnum.NOT_IN_SESSION,
          httpStatus: HttpStatus.UNAUTHORIZED,
          errorMessage: 'session不存在',
          userMessage: 'session过期',
        };
        break;
      case AppErrorEnum.NO_USERS_IN_DB:
        res = {
          type: AppErrorEnum.NO_USERS_IN_DB,
          httpStatus: HttpStatus.NOT_FOUND,
          errorMessage: '数据库不存在该用户',
          userMessage: '没有用户,进行创建',
        };
        break;
    }
    return res;
  }
}
