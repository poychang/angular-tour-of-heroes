import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import { Hero } from "./../models/hero";
import { HEROES } from './../models/mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
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
    const url = `${this.herourl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
  update(hero: Hero): Promise<Hero> {
    const url = `${this.herourl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}
