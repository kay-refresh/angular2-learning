//从 Angular 库中导入Component装饰器
import { Component } from '@angular/core';
//导入刚刚创建的Hero模型。
import { Hero }    from './hero';
@Component({
  //moduleId: module.id属性设置了基地址，用于从相对模块路径加载templateUrl。
  moduleId: module.id,
  //@Component选择器"hero-form"表示可以用<hero-form>标签把这个表单放进父模板。
  selector: 'hero-form',
  //templateUrl属性指向一个独立的 HTML 模板文件，名叫hero-form.component.html。
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  //为model和powers定义了供演示用的假数据。
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're
  //最后增加diagnostic属性，它返回这个模型的 JSON 形式。 在开发过程中，它用于调试，最后清理时会丢弃它。
  get diagnostic() { return JSON.stringify(this.model); }
}
