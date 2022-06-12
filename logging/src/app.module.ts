import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerService } from './my-logger/my-logger.service';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './my-logger/logging.inspector';

@Module({
  imports: [MyLoggerModule],
  controllers: [AppController],
  providers: [
    AppService,
    MyLoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
