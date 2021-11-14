import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(id: number): string {
    return `This action returns a #${id} cat`;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
