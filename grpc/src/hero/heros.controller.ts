import { Controller } from '@nestjs/common';
import {
  Hero,
  HeroById,
  HeroesServiceController,
  HeroesServiceControllerMethods,
} from './hero';

@HeroesServiceControllerMethods()
@Controller('hero')
export class HeroesController implements HeroesServiceController {
  private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  findOne(data: HeroById): Hero {
    return this.items.find(({ id }) => id === data.id);
  }
}
