import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger();

  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
