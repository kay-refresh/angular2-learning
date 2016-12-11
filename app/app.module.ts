import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//import语句之后，可以看到一个@NgModule装饰器修饰的类。
//@NgModule装饰器将AppModule标记为 Angular 模块类（也叫NgModule类）。 @NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用。
@NgModule({
  imports:      [ BrowserModule ],
  //imports — BrowserModule，这个和每个在浏览器中运行应用都需要它。
  //当应用需要模块的特性时，将其添加到imports数组中。
  declarations: [ AppComponent ],
  //declarations — 应用的唯一组件
  //每个组件必须在且仅在一个NgModule类中声明。
  //指令和管道 — 它们也必须被添加到declarations数组。
  bootstrap:    [ AppComponent ]
  //bootstrap — 根组件，Angular 创建它并插入index.html宿主页面。
})
export class AppModule { }
