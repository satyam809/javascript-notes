### **1. Default Binding**

→ When a normal function is called without an object, `this` refers to the global object (in non-strict mode).

```
function show() {
    console.log(this);
}

show();
```

Note:

- Non-strict mode → Global object (`window` in browser).
- Strict mode → `undefined`.

### **2. Implicit Binding**

→ When a function is called using an object, `this` refers to that object.

```
const user = {
    name: "Satyam",
    show() {
        console.log(this.name);
    }
};

user.show(); // Satyam
```

Note: `this` = `user` object.

### **3. Explicit Binding**

→ We manually set the value of `this` using `call()`, `apply()`, and `bind()`.

**A. call()**

→ Calls function immediately and passes arguments one by one.

```
function show(city) {
    console.log(this.name, city);
}

const user = { name: "Satyam" };

show.call(user, "Delhi");
// Satyam Delhi
```

**B. apply()**

→ Same as `call()`, but arguments are passed as an array.

```
show.apply(user, ["Delhi"]);
// Satyam Delhi
```

**C. bind()**

→ Returns a new function with fixed `this`. Does not execute immediately.

```
const newFunc = show.bind(user, "Delhi");

newFunc();
// Satyam Delhi
```

**Remember:**

| Method  | Meaning                                |
| ------- | -------------------------------------- |
| call()  | Executes immediately                   |
| apply() | Executes immediately (array arguments) |
| bind()  | Returns a new function                 |

### **4. New Binding**

→ When we use `new` with a constructor function, `this` refers to the newly created object.

```
function User(name) {
    this.name = name;
}

const user1 = new User("Satyam");

console.log(user1.name);
// Satyam
```

Note: `this` = newly created object (`user1`).

### **5. Lexical this (Arrow Function)

→ Arrow functions don't have their own `this`.

They take `this` from their surrounding (parent) scope.

```
const user = {
    name: "Satyam",

    show() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user.show(); // Satyam
```

Note: Arrow function gets `this` from `show()`.

### **⭐ Quick Revision**

| Binding  | `this` refers to                    |
| -------- | ----------------------------------- |
| Default  | Global object / undefined           |
| Implicit | Calling object                      |
| Explicit | Object passed using call/apply/bind |
| New      | Newly created object                |
| Arrow    | Parent scope's `this`               |

**Interview Tip:**

Remember this order of priority:

`new` → Explicit → Implicit → Default

Arrow functions are different because they use lexical `this`.