import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.headers['user-agent'] || 'Unknown';

    console.log('--- Incoming Request Log ---');
    console.log(`Timestamp      : ${new Date().toISOString()}`);
    console.log(`Method         : ${method}`);
    console.log(`URL            : ${originalUrl}`);
    console.log(`Client IP      : ${ip}`);
    console.log(`User Agent     : ${userAgent}`);
    console.log('--------------------------------');

    res.on('finish', () => {
      console.log('--- Response Log ---');
      console.log(`Status Code    : ${res.statusCode}`);
      console.log(`Response Time  : ${Date.now() - new Date().getTime()}ms`);
      console.log('--------------------------------');
    });

    next();
  }
}
