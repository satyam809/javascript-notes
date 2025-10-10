1)What are the different data types present in javascript?
In **JavaScript**, data types are divided into two main categories:

### **1. Primitive Data Types** (single value, immutable)

* **String** → Text values.
  Example: `"Hello"`, `'World'`
* **Number** → Numbers (integer or decimal).
  Example: `42`, `3.14`
* **Boolean** → True/False values.
  Example: `true`, `false`
* **Undefined** → A variable declared but not assigned a value.
  Example: `let x; // x is undefined`
* **Null** → Represents an intentional empty value.
  Example: `let y = null;`
* **BigInt** → Very large numbers beyond the safe limit of Number.
  Example: `123456789012345678901234567890n`
* **Symbol** → Unique identifier.
  Example: `let id = Symbol("id");`

---

### **2. Non-Primitive (Reference) Data Types** (can hold collections, mutable)

* **Object** → Collection of key-value pairs.
  Example: `{ name: "John", age: 25 }`
* **Array** → Ordered list of values (special type of object).
  Example: `[1, 2, 3, 4]`
* **Function** → A block of code that can be called.
  Example: `function greet() { return "Hello"; }`

---

👉 In short:

* **Primitive** = single values (string, number, boolean, null, undefined, bigint, symbol).
* **Non-primitive** = collections/objects (object, array, function).

Do you want me to also make a **table with examples** for quick revision?
