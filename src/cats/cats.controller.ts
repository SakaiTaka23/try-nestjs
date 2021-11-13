import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { createCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createCatDto: createCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
