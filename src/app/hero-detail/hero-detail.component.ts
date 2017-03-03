import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './../models/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // 原本的做法
    // this.route.params
    //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);

    // 包含多個 Statement 時的 Arrow Function
    // 查看路由參數 params
    this.route.params
      .switchMap((params: Params) => {
        console.log(params);
        return this.heroService.getHero(+params['id']);
      })
      .subscribe(hero => this.hero = hero);
  }

  @Input()
  hero: Hero;

  goBack(): void {
    this.location.back();
  }
}
