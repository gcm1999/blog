// 对象obj包含 a,b,c等多个属性
// （1）提取a,b,c三个属性返回新对象
// （2）提取a,b,c三个属性外的其他属性返回新对象
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7 };
let newObj1 = (({ a, b, c }) => {
  return {a, b, c};
})(obj);
let newObj2 = (({ a, b, c, ...obj }) => obj)(obj);
console.log(newObj1, newObj2);
