import { Request, Response } from 'express';

// 全局中间件 - 跨域资源共享
export function corsMiddleware(req: Request, res: Response, next: () => void) {
  const origin = req.get('Origin');
  if (origin !== undefined) {
    res.set({
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Request-Headers':
        'Origin, X-Requested-With, content-Type, Accept, Authorization',
    });
    res.status(200).end();
    return;
  }
  next();
}
