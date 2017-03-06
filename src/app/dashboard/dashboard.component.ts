import { Component, OnInit } from '@angular/core';

import { Hero } from './../models/hero';
import { HeroService } from './../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(result => this.heroes = result.slice(1, 5));
  }

  heroes: Hero[];

}
