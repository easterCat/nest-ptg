import { AppErrorEnum } from './AppErrorEnum';
import { HttpStatus } from '@nestjs/common';

export interface IErrorMessage {
  type: AppErrorEnum;
  httpStatus: HttpStatus;
  errorMessage: string;
  userMessage: string;
}
