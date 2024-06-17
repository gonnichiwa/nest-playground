import { Injectable } from '@nestjs/common';
import { Cat } from './dto/cat.dto';

@Injectable() // provider
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
