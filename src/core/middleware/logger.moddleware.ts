import { Logger } from '../utils/logger';

/**
 * 全局日志
 * @param req
 * @param res
 * @param next
 */
export function logger(req, res, next) {
  const statusCode = res.statusCode;
  const logFormat = `${req.method} ${req.originalUrl} ip: ${req.ip} statusCode: ${statusCode}`;

  next();

  if (statusCode >= 500) {
    Logger.error(logFormat);
  } else if (statusCode >= 400) {
    Logger.warn(logFormat);
  } else {
    Logger.log(logFormat);
  }
}
