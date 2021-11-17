import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.input';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async users() {
    return await this.prisma.user.findMany();
  }

  @Get('users/:id')
  async user(@Param('id') id: string) {
    return await this.prisma.user.findUnique({ where: { id: +id } });
  }

  @Post('user')
  async addUser(@Body() createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }
}
