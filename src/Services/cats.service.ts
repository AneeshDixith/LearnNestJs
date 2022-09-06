import { Injectable } from '@nestjs/common';
import { Cat } from '../Interfaces/Cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): string {
    this.cats.push(cat);
    return "Cat created";
  }

  findAll(): Cat[] {
    return this.cats;
  }
}