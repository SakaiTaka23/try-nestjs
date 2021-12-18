import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller()
export class HeroesController {
  private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  @GrpcMethod('HeroesService')
  findOne(data: HeroById): Hero {
    return this.items.find(({ id }) => id === data.id);
  }
}
