# js

## [继承](./%E7%BB%A7%E6%89%BF.html)

- 原型链继承：无法传参;多个实例对引用类型的操作会被篡改。
- 借用构造函数继承：只能继承父类的实例属性和方法，不能继承原型属性/方法,无法实现复用，每个子类都有父类实例函数的副本，影响性能
- 组合继承：调用两次父类构造函数，实例对象和原型上存在相同的属性和方法

## 如何判断对象为空

```js
function isEmpty(obj) {
  // Reflect.ownKeys 方法返回一个由目标对象自身的属性组成的数组，它的返回值等同于 Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
  return Reflect.ownKeys(obj).length == 0;
}
```

## 熟悉的对象方法

## typeof 返回值有哪些

- number
- string
- undefined
- object
- function
- boolean

## [dom 事件流](./dom%E4%BA%8B%E4%BB%B6%E6%B5%81.html)

- 事件流：描述的就是从页面中接受事件的顺序。分有事件冒泡与事件捕获两种。
  DOM 事件流的三个阶段：
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

## get 请求和 post 请求的区别

- POST 请求相对安全，GET 请求相对不安全
- GET 请求可以缓存，POST 请求不能缓存
- GET 请求有长度限制，POST 请求没有长度限制
- GET 只能传输字符串，POST 可以传输多种类型数据
- GET 请求入参在 URL 上，POST 请求入参在 Request body 上
- POST 有可能产生两个数据包，GET 只会发送一个数据包
- 刷新和回退的时候 GET 请求无害，POST 数据会被重新提交

# ES6

## [解构赋值](./解构赋值.js)
