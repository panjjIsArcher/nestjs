// 异常过滤器

import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const message = exception.message;
    if (exception instanceof HttpException) {
      // http异常
      const status = exception.getStatus();
      response.status(status).json({
        message,
        code: status,
      });
    } else if (exception instanceof BadRequestException) {
      // 请求异常
      response.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message,
      });
    } else {
      // 服务器异常
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
