import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(200)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  // findOne(@Param() params): string {
  //   return `This action returns a #${params.id} cat`;
  // }
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
