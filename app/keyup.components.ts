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
