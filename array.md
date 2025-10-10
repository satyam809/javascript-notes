1)How to count the frequency of each element in an array?
input const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
output { apple: 3, banana: 2, orange: 1 }
function countFrequency(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] + 1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    return obj;
}
console.log(countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]));

2)How to find the second largest number in an array?
[10, 5, 20, 8, 15];

function secondLargestNumber(arr){
    // let newArr = arr.sort((a,b) => b - a);
    // return newArr[1];
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(i != minIndex){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        //console.log(arr)
    }
    return arr[arr.length - 2];
}
console.log(secondLargestNumber([10, 5, 20, 8, 15]))

3)How to flatten a deeply nested array?
input [1, [2, [3, [4, [5]]]]];
output [1, 2, 3, 4, 5]

function flattenArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
        }else{
            newArr.push(...flattenArr(arr[i]))
        }
    }
    return newArr;
}
console.log(flattenArr([1, [2, [3, [4, [5]]]]]))

4) How to chunk an array into groups of N elements?
input [1, 2, 3, 4, 5, 6, 7], 3
output [[1,2,3], [4,5,6], [7]]

function arrayChunk(arr, size){
    let newArr = [];
    for(let i = 0; i < arr.length; i = i + size){
        //newArr.push(arr.slice(i,size + i))
        let chunkArr = [];
        for(let j = i; j < i + size && j < arr.length; j++){
            chunkArr.push(arr[j])
        }
        newArr.push(chunkArr);
    }
    return newArr;
}
console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7], 3))

5) How to rotate an array by K positions?
input [1, 2, 3, 4, 5], 2
output [4, 5, 1, 2, 3]

function rotateArr(arr, k){
    //return arr.slice(-k).concat(arr.slice(0,-k))
    reverse(0, arr.length - 1, arr)
   reverse(0, k -1, arr)
   reverse(k, arr.length - 1, arr)
   return arr
}
function reverse(startIndex, endIndex, arr){
  while(startIndex < endIndex){
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
  return arr;
}
console.log(rotateArr([1, 2, 3, 4, 5], 2))

6) How to find all pairs in an array that sum up to a target?
input [1, 2, 3, 4, 5, 6], 7
ouput [[4,3], [5,2], [6,1]]

function findSumOfPair(arr, target){
  let newArr = [];
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    let result = target - arr[i];
    if(result in obj){
      newArr.push([arr[i],result]);
    }
    obj[arr[i]] = 1;
    
  }
  return newArr;
  
}
console.log(findSumOfPair([1, 2, 3, 4, 5, 6], 7))

7) How to group objects in an array by a property?
input [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
]
output {
  Delhi: [{name: "Alice"}, {name: "Charlie"}],
  Mumbai: [{name: "Bob"}]
}

function groupObject(arr){
  let obj = {}
  for(let i = 0; i < arr.length; i++){
    let city = arr[i].city;
    if(!(city in obj)){
      obj[city] = [];
    }
    obj[city].push(arr[i])
  }
  return obj;
  
}
console.log(groupObject([
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
]));

8) How to shuffle an array randomly (Fisher-Yates)?

function shuffleArr(arr){
  for(let i = 0; i < arr.length; i++){
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffleArr([1,2,3,4,5]))

9) How to find the intersection of two arrays?
input const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

output [3, 4]

function findIntersection(arr1, arr2){
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]))