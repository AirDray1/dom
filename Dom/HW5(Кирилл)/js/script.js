//myReduce, но в нём есть маленький недостаток) 
a = [0,1,2,3,4,5,6]

let myReduce = (array, func, init) => {
  let acc = init; 
  for (const item of array) {
    acc = func(acc, item);
  }
  return acc;
};

let sum = myReduce(a, (acc, numbers) => (acc += numbers), a[0])
console.log(sum);