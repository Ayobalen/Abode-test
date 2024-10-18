import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';
import { IResponse } from 'src/interfaces';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Get the status code from the exception or use 500 if not available
    const status = exception.getStatus ? exception.getStatus() : 500;

    const data: IResponse = {
      status: 'fail',
      message: exception.message,
      error: {
        name: exception.name,
      },
    };

    // Set the status and return the JSON response
    response.status(status).json(data);
  }
}
