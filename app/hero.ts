//定义了一个类，具有一个构造函数和两个属性：id和name。
//TypeScript 提供的简写形式 —— 用构造函数的参数直接定义属性。
//声明了一个构造函数参数及其类型
//声明了一个同名的公共属性
//当我们new出该类的一个实例时，把该属性初始化为相应的参数值
export class Hero{
  constructor(
    public id: number,
    public name: string
  ){  }
}
