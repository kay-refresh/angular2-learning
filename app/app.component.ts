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
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[2].id;
}
