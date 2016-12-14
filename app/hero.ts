//定义了一个类，具有一个构造函数和两个属性：id和name。
//TypeScript 提供的简写形式 —— 用构造函数的参数直接定义属性。
//声明了一个构造函数参数及其类型
//声明了一个同名的公共属性
//当我们new出该类的一个实例时，把该属性初始化为相应的参数值
//TypeScript 编译器为每个public构造函数参数生成一个公共字段，在创建新的英雄实例时，自动把参数值赋给这些公共字段。
//alterEgo是可选的，调用构造函数时可省略，注意alterEgo?中的问号 (?)。
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
//可以像这样创建新英雄：

//let myHero =  new Hero(42, 'SkyDog',
//  'Fetch any object at any distance',
//  'Leslie Rollover');
//console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
