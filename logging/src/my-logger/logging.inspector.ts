import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { catchError, Observable, throwError } from 'rxjs';
import { MyLoggerService } from './my-logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: MyLoggerService) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>();
    const requestData = {
      ip: request.ip,
      method: request.method,
      url: request.url,
      body: request.body || {},
    };

    this.logger.log(JSON.stringify(requestData));

    return next.handle().pipe(
      catchError((err) => {
        return throwError(() => new Error(err));
      }),
    );
  }
}
