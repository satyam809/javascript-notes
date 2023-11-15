// 1) swap two variable

// var a = 10;
// var b = 11;

// var temp = a;
// a = b;
// b = temp;
// [a,b] = [b,a];
// console.log(`a = ${a}, b = ${b}`);

// 2) largest number
// let num1 = 10;
// let num2 = 13;
// let num3 = 9;

// console.log(Math.max(num1, num2, num3));

// let arr = [10,4,12];
// console.log(Math.max(...arr));

// 3) check prime number or not

// function checkprime(num){
//     if(num <= 1){
//         return `${num} is not a prime number`;
//     }
//     for(var i = 2; i <= Math.sqrt(num); i++){
//       if(num % i === 0){
//         return `${num} is not a prime number`;
//       }
//     }
//     return `${num} is a prime number`;
// }

// console.log(checkprime(2));

// 4) display total prime number between two numbers
// function checkprime(num1, num2){
//     var arr = [];
//     for(var i = num1; i <= num2; i++){
//        if(i == 1){
//         continue;
//        }

//        let isPrime = true;
//         for(var j = 2; j <= Math.sqrt(i); j++){
//             if(i % j == 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime){
//             arr.push(i);
//         }

//     }
//     return arr;
// }
// console.log(checkprime(1,10));

// 5) factorial of a number

// function factorial(num){
//     var fact = 1;
//     for( var i = 1; i <= num; i++){
//          fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5))

// 6) multiplication of any number
// function multiple(num){
//     var string = "";
//     for( var i = 1; i <= 10; i++){
//        string += `${num} * ${i} = ${num * i}`;
//        string += `\n`;
//     }
//     return string;

// }

// console.log(multiple(3));

// 7) print fibnacci series for n terms

// function fibnacci(n){
//     var string = '';
//     var arr = [];
//     arr[0] = 0;
//     arr[1] = 1;
//     for(var i = 2; i <= n; i++){
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     for(var j = 0; j < arr.length; j++){
//      string += arr[j];
//      string += '\n';
//     }
//     return string;
// }
// console.log(fibnacci(5));

// 8) print total fibonacci series till particular number
// function fibnacci(n){
//     var arr = []
//     arr[0] = 0;
//     arr[1] = 1;

//     let i = 2;
//     while(arr[i - 1] + arr[i - 2] <= n){
//         arr[i] = arr[i - 1] + arr[i - 2];
//         i++;
//     }
//     return arr;
// }
// console.log(fibnacci(100))


// 9) check number is armstrong or not
// function checkArmstrong(n){
//  let arr = n.toString().split('');
//  let sum = 0;
//  for (let i = 0; i < arr.length; i++){
//     sum += arr[i]*arr[i]*arr[i];
//  }
//  if(sum == n){
//     return `${n} is armstrong number`;
//  }else{
//     return `${n} is not armstrong number`;
//  }
// }

// console.log(checkArmstrong(173))

// 10) display armstrong number between two numbers

// function displayArmstrong(n1, n2) {
//     let arr = [];
//     for (let i = n1; i <= n2; i++) {
//         var newArr = i.toString().split('');
//         var sum = 0;
//         for(let j = 0; j < newArr.length; j++) {
//             sum += newArr[j]*newArr[j]*newArr[j];
//         }
//         if(sum == i){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(displayArmstrong(8, 500));


