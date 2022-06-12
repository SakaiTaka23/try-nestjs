import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerService } from './my-logger/my-logger.service';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [MyLoggerModule],
  controllers: [AppController],
  providers: [AppService, MyLoggerService],
})
export class AppModule {}
