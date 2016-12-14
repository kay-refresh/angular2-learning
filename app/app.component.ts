import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
//ngFor显示数组属性
export class AppComponent  {
  name = 'Angular';
  heroes = [
    new Hero(1, 'Windstorm','a','b'),
    new Hero(13, 'Bombasto','c','d'),
    new Hero(15, 'Magneta','e','f'),
    new Hero(20, 'Tornado','g','h')
  ];
  myHero = this.heroes[2].id;
}
