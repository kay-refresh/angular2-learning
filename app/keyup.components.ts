import {Component} from "@angular/core";
@Component({
  selector: 'key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';

  onKey(event:any) { // without type info
    //或者可以用event.key替代event.target.value，积累各个按键本身，这样同样的用户输入可以产生：
    this.values += event.target.value + ' | ';
    // this.values += event.key + ' | ';
  }
}
@Component({
  selector: 'key-up2',
  template: `
<!--在标识符前加上井号 (#) 就能声明一个模板引用变量。-->
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)" >
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_V3{
  value = '';
  onEnter(value:string){ this.value = value; }
}

@Component({
  selector:'key-up4',
  template: `
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
    <p>{{value}}</p>
  `
})
export  class KeyUpComponent_V4{
  value = '';
  update(value:string){ this.value = value; }
}

@Component({
  selector:'litter-tour',
  template:`
<!--第一句调用addHero。第二句newHero.value=''在添加新英雄到列表中后清除输入框。-->
    <input #newHero (keyup.enter)="addHero(newHero.value); newHero.value=''" (blur)="addHero(newHero.value); newHero.value='' "  />
    <button (click)="addHero(newHero.value)">add</button>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero }}</li>    
    </ul>
  `
})
export class LitterTourComponent{
  heroes = ['a','b','c'];
  addHero(newHero:string){
    if(newHero){
      this.heroes.push(newHero);
    }
  }
}
