import { Injectable } from '@angular/core';

import { Hero } from "./models/hero";
import { HEROES } from './models/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };
  getHeroSlowly(): Promise<Hero[]> {
    var timer = 2000;
    // 寫法一：http://origin.angular.live/docs/ts/latest/tutorial/toh-pt4.html#!#slow
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), timer);
    });
  }
}
