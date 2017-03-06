import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import { Hero } from "./../models/hero";
import { HEROES } from './../models/mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  private herourl = 'api/heroes'; // URL to web api
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.herourl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  };
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(p => p.id === id));
  }
}
