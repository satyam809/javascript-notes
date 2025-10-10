let arr = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr.map((num) => num * 2));
console.log(arr.filter((num) => num % 2 === 0 ));
console.log(arr.reduce((acc, num) => acc + num, 0))
console.log([new Set(...arr)]);