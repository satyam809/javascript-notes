# **JavaScript Notes – Arrays & Objects**

## **1. Destructuring**

**Meaning:** Extract values from an array or object and store them in variables easily.

```
// Array Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10

// Object Destructuring
const user = { name: "Satyam", age: 28 };

const { name, age } = user;

console.log(name); // Satyam
```

**Remember:** Destructuring = Extract values easily.

## **2. map()**

**Meaning:** Creates a new array by performing an operation on every element.

```
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result); // [2, 4, 6]
```

**Remember:** map() = Transform every element.

## **3. filter()**

**Meaning:** Returns a new array containing only elements that match a condition.

```
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 3);

console.log(result); // [4, 5]
```

**Remember:** filter() = Select matching elements.

## **4. reduce()**

**Meaning:** Combines all array elements into a single value.

```
const numbers = [10, 20, 30];

const result = numbers.reduce((total, num) => total + num, 0);

console.log(result); // 60
```

**Remember:** reduce() = One final result.

## **5. find()**

**Meaning:** Returns the first element that matches a condition.

```
const numbers = [10, 20, 30, 40];

const result = numbers.find(num => num > 20);

console.log(result); // 30
```

**Remember:** find() = First matching element.

## **6. some()**

**Meaning:** Checks whether at least one element matches a condition.

```
const numbers = [1, 2, 3, 4];

const result = numbers.some(num => num > 3);

console.log(result); // true
```

**Remember:** some() = At least ONE?

## **7. every()**

**Meaning:** Checks whether all elements match a condition.

```
const numbers = [2, 4, 6];

const result = numbers.every(num => num % 2 === 0);

console.log(result); // true
```

**Remember:** every() = ALL?

## **8. Mutating vs Non-Mutating Methods**

**Mutating:** Changes the original array.

```
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]
```

**Non-Mutating:** Does not change the original array.

```
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(numbers); // [1, 2, 3]
console.log(result);  // [2, 4, 6]
```

### **Common Methods**

| Mutating Methods | Non-Mutating Methods |
| ---------------- | -------------------- |
| push()           | map()                |
| pop()            | filter()             |
| shift()          | slice()              |
| unshift()        | concat()             |
| splice()         | reduce()             |
| sort()           | find()               |
| reverse()        | some()               |
|                  | every()              |

**Note:** `sort()` and `reverse()` modify the original array. Use `toSorted()` and `toReversed()` to get new arrays.

## **Quick Revision (Interview Important)**

| Method        | Remember        |
| ------------- | --------------- |
| Destructuring | Extract values  |
| map()         | Transform all   |
| filter()      | Select matching |
| reduce()      | Single result   |
| find()        | First match     |
| some()        | At least one    |
| every()       | All elements    |

### **Real-World Examples**

- `map()` → Convert user data into a list for React UI.
- `filter()` → Show only active users.
- `reduce()` → Calculate total shopping cart price.
- `find()` → Find a user by ID.
- `some()` → Check if any user is an admin.
- `every()` → Check if all users are verified.

**Interview Tip:** `map()`, `filter()`, and `reduce()` are frequently used in JavaScript and React development. Practice these with arrays of objects.