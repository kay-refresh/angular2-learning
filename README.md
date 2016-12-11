#angular2-learning

##Angular 应用中的 8 个主要构造块：
- 模块 (module)
- 组件 (component)
- 模板 (template)
- 元数据 (metadata)
- 数据绑定 (data binding)
- 指令 (directive)
- 服务 (service)
- 依赖注入 (dependency injection)

1. Angular 应用是模块化的，并且 Angular 有自己的模块系统，它被称为 Angular 模块或 NgModules。

每个 Angular 应用至少有一个模块（根模块），习惯上命名为AppModule。
每个模块都是一个内聚的代码块专注于某个应用领域、工作流或紧密相关的功能。
Angular 模块（无论是根模块还是特性模块）都是一个带有@NgModule装饰器的类。

>装饰器是用来修饰 JavaScript 类的函数。 Angular 有很多装饰器，它们负责把元数据附加到类上，以了解那些类的设计意图以及它们应如何工作。 关于装饰器的更多信息。

NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：

* declarations - 声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道。
* exports - declarations 的子集，可用于其它模块的组件模板。
* imports - 本模块声明的组件模板需要的类所在的其它模块。
* providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
* bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。

简单根模块例子:

`
 import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 @NgModule({
   imports:      [ BrowserModule ],
   providers:    [ Logger ],
   declarations: [ AppComponent ],
   exports:      [ AppComponent ],
   bootstrap:    [ AppComponent ]
 })
 export class AppModule { }`

我们通过引导根模块来启动应用。在开发期间，你通常在一个main.ts文件中引导AppModule，就像这样：
`
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
`

###Angular 模块 vs. JavaScript 模块

* Angular 模块（一个用@NgModule装饰的类）是 Angular 的基础特性。
* JavaScript 也有自己的模块系统，用来管理一组 JavaScript 对象。 它与 Angular 的模块系统完全不同且完全无关。
* JavaScript 中，每个文件是一个模块，文件中定义的所有对象都从属于那个模块。 通过export关键字，模块可以把它的某些对象声明为公共的。 其它 JavaScript 模块可以使用import 语句来访问这些公共对象。

`
import { NgModule }     from '@angular/core';
import { AppComponent } from './app.component';
`

`
export class AppModule { }
`

###Angular 模块库
Angular 提供了一组 JavaScript 模块。可以把它们看做库模块。
每个 Angular 库的名字都带有@angular前缀。
用 npm 包管理工具安装它们，用 JavaScript 的import语句导入其中某些部件。
例如，象下面这样，从@angular/core库中导入Component装饰器：
`
  import { Component } from '@angular/core';
`

还可以使用 JavaScript 的导入语句从 Angular 库中导入 Angular 模块。

`
  import { BrowserModule } from '@angular/platform-browser';
`
在上面那个简单的根模块的例子中，应用模块需要BrowserModule的某些素材。 要访问这些素材，就得把它加入@NgModule元数据的imports中，就像这样：
`imports:      [ BrowserModule ],`


*****


##组件(Components)
组件负责控制屏幕上的一小块区域，我们称之为视图。

##模板(Templates)
我们通过组件的自带的模板来定义组件视图。模板以 HTML 形式存在，告诉 Angular 如何渲染组件。

#元数据(Metadata)
在TypeScript 中，我们用装饰器 (decorator) 来附加元数据。 下面就是HeroListComponent的一些元数据。

`
@Component({
  moduleId: module.id,
  selector:    'hero-list',
  templateUrl: 'hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
`

`@Component`装饰器，它把紧随其后的类标记成了组件类。

`@Component`装饰器能接受一个配置对象， Angular 会基于这些信息创建和展示组件及其视图。

`@Component`的配置项包括：

* `moduleId`: 为与模块相关的 URL（例如`templateUrl`）提供基地址。
* `selector`： CSS 选择器，它告诉 Angular 在父级 HTML 中查找`<hero-list>`标签，创建并插入该组件。 例如，如果应用的 HTML 包含`<hero-list></hero-list>`， Angular 就会把HeroListComponent的一个实例插入到这个标签中。
* `templateUrl`：组件 HTML 模板的模块相对地址，如前所示。
* `providers` - 组件所需服务的依赖注入提供商数组。 这是在告诉 Angular：该组件的构造函数需要一个`HeroService`服务，这样组件就可以从服务中获得英雄数据。

`@Component`里面的元数据会告诉 `Angular` 从哪里获取你为组件指定的主要的构建块。

模板、元数据和组件共同描绘出这个视图。

其它元数据装饰器用类似的方式来指导 Angular 的行为。 例如`@Injectable`、`@Input`和`@Output`等是一些最常用的装饰器。

这种架构处理方式是：你向代码中添加元数据，以便 Angular 知道该怎么做。

##数据绑定(Data binding)

Angular 支持**数据绑定**，一种让模板的各部分与组件的各部分相互合作的机制。 我们往模板 HTML 中添加绑定标记，来告诉 Angular 如何把二者联系起来。

##指令(directive)

Angular 模板是**动态的**。当 Angular 渲染它们时，它会根据**指令**提供的操作对 DOM 进行转换。

指令是一个带有“指令元数据”的类。在 TypeScript 中，要通过`@Directive`饰器把元数据附加到类上。

组件是一个**带模板的指令**；`@Component`装饰器实际上就是一个`@Directive`装饰器，只是扩展了一些面向模板的特性。

>虽然**严格来说组件就是一个指令**，但是组件非常独特，并在 Angular 中位于中心地位，所以在架构概览中，我们把组件从指令中独立了出来。

还有两种其它类型的指令：**结构型指令**和**属性 (attribute) 型指令**。

它们往往像属性 (attribute) 一样出现在元素标签中， 偶尔会以名字的形式出现，但多数时候还是作为赋值目标或绑定目标出现。

结构型指令通过在 DOM 中添加、移除和替换元素来修改布局。

两个内置的结构型指令：

`
  <li *ngFor=\"let hero of heroes"></li>
  
  <hero-detail *ngIf="selectedHero"></hero-detail>
`

* *ngFor告诉 `Angular` 为列表中的每个英雄生成一个`<li>`标签。
* *ngIf表示只有在选择的英雄存在时，才会包含`HeroDetail`组件。

**属性型**指令修改一个现有元素的外观或行为。 在模板中，它们看起来就像是标准的 HTML 属性，故名。

`ngModel`指令就是属性型指令的一个例子，它实现了双向数据绑定。 `ngModel`修改现有元素（一般是`<input>`）的行为：设置其显示属性值，并响应 `change` 事件。

`<input [(ngModel)]="hero.name">`

`Angular` 还有少量指令，它们或者修改结构布局（例如 `ngSwitch`）， 或者修改 DOM 元素和组件的各个方面（例如 `ngStyle` 和 `ngClass`）,也能编写自己的指令。

##服务(Services)

服务是一个广义范畴，包括：值、函数，或应用所需的特性。

几乎任何东西都可以是一个服务。 典型的服务是一个类，具有专注的、明确的用途。它应该做一件特定的事情，并把它做好。

例如：
* 日志服务
* 数据服务
* 消息总线
* 税款计算器
* 应用程序配置

服务没有什么特别属于 `Angular` 的特性。 `Angular` 对于服务也没有什么定义。 它甚至都没有定义服务的基类，也没有地方注册一个服务。

组件就是最大的服务消费者。

服务类的范例，用于把日志记录到浏览器的控制台：

    export class Logger {
    log(msg: any)   { console.log(msg); }
    error(msg: any) { console.error(msg); }
    warn(msg: any)  { console.warn(msg); }
    }

组件类应保持精简。组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。 它们把这些任务委托给服务。

组件的任务就是提供用户体验，仅此而已。它介于视图（由模板渲染）和应用逻辑（通常包括模型的某些概念）之间。 设计良好的组件为数据绑定提供属性和方法，把其它琐事都委托给服务。

`Angular` 不会强制要求我们遵循这些原则。 即使我们花 3000 行代码写了一个“厨房洗碗槽”组件，它也不会抱怨什么。

`Angular` 帮助我们遵循这些原则 —— 它让我们能轻易地把应用逻辑拆分到服务，并通过依赖注入来在组件中使用这些服务。

##依赖注入
“依赖注入”是提供类的新实例的一种方式，还负责处理好类所需的全部依赖。大多数依赖都是服务。 Angular 使用依赖注入来提供新组件以及组件所需的服务。

当 Angular 创建组件时，会首先为组件所需的服务请求一个**注入器 (injector)**。

注入器维护了一个服务实例的容器，存放着以前创建的实例。 如果所请求的服务实例不在容器中，注入器就会创建一个服务实例，并且添加到容器中，然后把这个服务返回给 Angular。 当所有请求的服务都被解析完并返回时，Angular 会以这些服务为参数去调用组件的构造函数。 这就是**依赖注入**。

通常会把提供商添加到根模块上，以便在任何地方使用服务的同一个实例。也可以在@Component元数据中的providers属性中把它注册在组件层。

把它注册在组件级表示该组件的每一个新实例都会有一个服务的新实例。

需要记住的关于依赖注入的要点是：

* 依赖注入渗透在整个 Angular 框架中，被到处使用。
* 注入器 (injector) 是本机制的核心。
  * 注入器负责维护一个容器，用于存放它创建过的服务实例。
  * 注入器能使用提供商创建一个新的服务实例。
* 提供商是一个用于创建服务的配方。
* 把提供商注册到注入器。

这里是一个简短的、按字母排序的列表，列出了其它重要的 Angular 特性和服务。 它们大多数已经（或即将）包括在这份开发文档中：

1. 动画：用 Angular 的动画库让组件动起来，而不需要对动画技术或 CSS 有深入的了解。
2. 变更检测：变更检测文档会告诉你 Angular 是如何决定组件的属性值变化，什么时候该更新到屏幕， 以及它是如何利用区域 (zone) 来拦截异步活动并执行变更检测策略。
事件：事件文档会告诉你如何使用组件和服务触发支持发布和订阅的事件。
3. 表单：通过基于 HTML 的验证和脏检查机制支持复杂的数据输入场景。
4. HTTP：通过 HTTP 客户端，可以与服务器通讯，以获得数据、保存数据和触发服务端动作。
5. 生命周期钩子：通过实现生命周期钩子接口，可以切入组件生命中的几个关键点：从创建到销毁。
6. 管道：在模板中使用管道转换成用于显示的值，以增强用户体验。例如，currency管道表达式：`price | currency:'USD':true`  它把价格"42.33"显示为$42.33。
7. 路由器：在应用程序客户端的页面间导航，并且不离开浏览器。
7. 测试：使用 Angular 测试平台，在你的应用部件与 Angular 框架交互时进行单元测试。

