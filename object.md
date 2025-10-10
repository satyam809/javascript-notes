1. Count properties in an object
function checkObj(obj){
  let count = 0;
  for(let key in obj){
    count++;
  }
  return count;
}
console.log(checkObj({name: "satyam", age: 26}))

2. Convert object to array
input : { a: 1, b: 2 }
output : [["a", 1], ["b", 2]]

function objToArr(obj){
 let newArr = [];
 for(key in obj){
   newArr.push([key, obj[key]])
 }
 return newArr;
}
console.log(objToArr({ a: 1, b: 2 }))

3. Find the highest value in an object
input  { apple: 10, mango: 25, banana: 15 };
output mango 

function findHighestValue(obj){
  let maxValue = null;
  let maxKey;
  for(key in obj){
    if(obj[key] > maxValue){
      maxValue = obj[key];
      maxKey = key;
    }
  }
  return {[maxKey]:maxValue};
}
console.log(findHighestValue({ apple: 10, mango: 25, banana: 15 }))

4. Swap keys and values
// inpput  {a: 1, b: 2 }
//output { '1': 'a', '2': 'b' }
function swapKeyValue(obj){
    let newObj = {};
    for(key in obj){
        newObj[obj[key]] = key;
    }
    return newObj;
}
console.log(swapKeyValue({ a: 1, b: 2 }))

5. Merge two object
function mergeTwoObj(obj1, obj2){
    let newObj = {};
    for(let key in obj1){
       if(typeof obj1[key] == "object"){
           newObj[key] = mergeTwoObj(obj1[key], {})
       }else{
           newObj[key] = obj1[key];
       }
    }
    for(let key in obj2){
        if(typeof obj2[key] == "object"){
            newObj[key] = mergeTwoObj(newObj[key]|| {}, obj2[key])
        }else{
            newObj[key] = obj2[key]
        }
    }
    return newObj;
    
}
console.log(mergeTwoObj({ a: 1, b: { x: 10 } }, { b: { y: 20 }, c: 3 }))

//{ a:1, b:{x:10,y:20}, c:3 }

6. Flatten a nested object

function deepClone(obj, parentkey = "", newObj={}){
    for(let key in obj){
        let newKey = parentkey ? `${parentkey}.${key}` : key;
        if(typeof obj[key] == "object"){
            deepClone(obj[key], newKey, newObj);
        }else{
            newObj[newKey] = obj[key];
        }
    }
    return newObj;
}
console.log(deepClone({a:1, b:{c:2}, d:{e:{f:4}}}))
//output {a: 1, b.c : 2, d.e.f:4}