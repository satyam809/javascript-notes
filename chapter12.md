# **Object Copying & References in JavaScript**

## **1. Pass-by-Value vs Pass-by-Reference**

**Pass-by-Value:**

- A copy of the value is passed.
- Changing the copied variable does not affect the original variable.

```
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

**Remember:** Changing `b` does not change `a`.

**Pass-by-Reference (Objects):**

- When you assign an object to another variable, both variables refer to the same object.
- Changing the object through one variable affects the other.

```
let obj1 = { name: "Satyam" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
```

**Remember:** Both variables point to the same object.

*Important:* JavaScript actually passes all arguments by value. For objects, the copied value is a reference to the same object.

## **2. Shallow Copy**

A shallow copy creates a new object, but nested objects are still shared.

Two common ways:

**A. Spread Operator (...)**

```
const obj1 = {
  name: "Satyam",
  address: {
    city: "Delhi"
  }
};

const obj2 = { ...obj1 };

obj2.name = "Rahul";
obj2.address.city = "Mumbai";

console.log(obj1.name);         // Satyam
console.log(obj1.address.city); // Mumbai
```

Why?

- `name` is copied independently.
- `address` is a nested object, so its reference is shared.

**B. Object.assign()**

It also creates a shallow copy.

```
const obj1 = { name: "Satyam", age: 28 };

const obj2 = Object.assign({}, obj1);

obj2.name = "Rahul";

console.log(obj1.name); // Satyam
console.log(obj2.name); // Rahul
```

**Remember:** Spread (`...`) and `Object.assign()` = Shallow Copy.

## **3. Deep Copy**

A deep copy creates a completely independent copy, including nested objects.

**Using structuredClone()**

```
const obj1 = {
  name: "Satyam",
  address: {
    city: "Delhi"
  }
};

const obj2 = structuredClone(obj1);

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi
console.log(obj2.address.city); // Mumbai
```

Here, changing the nested object does not affect the original.

**Remember:** `structuredClone()` = Deep Copy.

Note: `structuredClone()` supports many built-in data types, but not functions or DOM nodes.

## **Quick Revision – Interview Notes**

| Concept             | Meaning                                     |
| ------------------- | ------------------------------------------- |
| Pass-by-Value       | A copy of the value is passed               |
| Object Reference    | Both variables can point to the same object |
| Shallow Copy        | Copies the first level only                 |
| Deep Copy           | Copies nested objects too                   |
| `...`               | Shallow copy                                |
| `Object.assign()`   | Shallow copy                                |
| `structuredClone()` | Deep copy                                   |

## **Easy Trick to Remember**

- **Pass-by-Value** → Separate value.
- **Object Reference** → Same object.
- **Shallow Copy** → New outer object, shared nested objects.
- **Deep Copy** → New outer and nested objects.

Important Interview Question

**What is the difference between shallow copy and deep copy?**

- Shallow copy copies only the first level. Nested objects remain shared.
- Deep copy creates independent copies of nested objects as well.