// 1) find the missing number in a given integer array of 1 to 100

// function missingNumber(arr) {
//     let miss_arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== i + 1) {
//             miss_arr.push(i + 1);
//         }
//     }
//     return miss_arr;
// }
// console.log(missingNumber([1, 2, 3, 5, 6, 8, 10]))

// 2)find the duplicate number on a given integer array

// function duplicateNumber(arr) {
//     let dup_arr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//           if(arr[i] === arr[j] && !dup_arr.includes(arr[i])) {
//             dup_arr.push(arr[i]);
//             break;
//           }
//         }
        
//     }
//     return dup_arr;

// }
// console.log(duplicateNumber([1,2,3,3,1,4,3]));

// 3)find minimum number from array

// function minimumNumber(arr) {
//   let minNum = arr[0];
//   for(let i = 1; i < arr.length; i++) {
//      if(arr[i] < minNum){
//        minNum = arr[i];
//      }
//   }
//   return minNum;
// }
// console.log(minimumNumber([13,12,9,30]))

// 4) sort array

// function sortArr(arr){
//   for(let i = 0;i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length - i; j++) {
//       if(arr[i] >  arr[j]) {
//         const temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;

// }
// console.log(sortArr([13,12,9,30]))
// 5) find index of particular element in array
// function linearSearch(arr, element){
//  for(let i = 0; i < arr.length; i++){
//    if(arr[i] === element){
//     return i;
//    }
//  }
// }
// console.log(linearSearch([2,4,5,8,9,12],9));

// function binarySearch(arr, element){
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while(leftIndex <= rightIndex){
//     midIndex = Math.floor((leftIndex + rightIndex)/2);
//     if(arr[midIndex] === element){
//       return midIndex;
//     }else if(arr[midIndex] < element){
//       leftIndex = midIndex + 1;
//     }else{
//       rightIndex = midIndex + 1;
//     }
//   }
//   return `Not found`;
// }
// console.log(binarySearch([2,4,5,8,9,12],9));

// 6)
// input : [
//   "name,brand,price,specification",
//   "v1,dell,2000,ssd,15inch",
//   "l1,lenovo,5000,ssd,14inch",
// ];

// Output:

// [
//   {
//     name: 'v1',
//     brand: 'dell',
//     price: '2000',
//     specification: { ssd: '15inch' }
//   },
//   {
//     name: 'l1',
//     brand: 'lenovo',
//     price: '5000',
//     specification: { ssd: '14inch' }
//   }
// ]

// const input = [
//     "name,brand,price,specification",
//     "v1,dell,2000,ssd,15inch",
//     "l1,lenovo,5000,ssd,14inch",
//   ];
  
//   function parseCSV(input) {
//     // Extract the header and remove it from the input array
//     const [header, ...data] = input;
  
//     // Split the header into an array of property names
//     const properties = header.split(',');
  
//     // Initialize the result array to store the transformed objects
//     const result = [];
  
//     // Loop through the data rows
//     for (const row of data) {
//       const values = row.split(',');
//       const obj = {};
  
//       // Loop through the properties and assign values from the row
//       for (let i = 0; i < properties.length; i++) {
//         if (properties[i] === 'specification') {
//           // Handle the 'specification' property by creating a nested object
//           const specObj = {};
//           const specName = values[i];
//           const specValue = values[i + 1];
//           specObj[specName] = specValue;
//           obj[properties[i]] = specObj;
//           i++; // Skip the next value, which is already used
//         } else {
//           obj[properties[i]] = values[i];
//         }
//       }
  
//       result.push(obj);
//     }
  
//     return result;
//   }
  
//   const output = parseCSV(input);
//   console.log(output);
  

