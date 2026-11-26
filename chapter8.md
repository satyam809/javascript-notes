# **📒 Closures in JavaScript**

**1. Closure**

→ Closure means a function remembers variables from its parent function, even after the parent function has finished executing.

**Example:**

```
function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

let result = outer();
result(); // 10
```

Note: `inner()` remembers `a` even after `outer()` finishes.

**2. Lexical Scoping**

→ A function can access variables from where it is written (parent scope).

**Example:**

```
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        console.log(a, b);
    }

    inner();
}

outer(); // 10 20
```

Note: Inner function can access parent variables.

**3. Private State / Encapsulation**

→ Closure helps to protect variables from direct access outside the function.

**Example:**

```
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let result = counter();

result(); // 1
result(); // 2
result(); // 3
```

Note: `count` cannot be directly accessed or changed from outside.

**4. Memoization**

→ Memoization means storing previous results to avoid repeating the same calculation.

**Example:**

```
function memo() {
    let cache = {};

    return function (n) {
        if (cache[n]) {
            return cache[n];
        }

        cache[n] = n * n;
        return cache[n];
    };
}

let square = memo();

console.log(square(5)); // 25
console.log(square(5)); // 25 (from cache)
```

Note: Saves time by reusing previous results.

**5. Classic Loop Closure Bug**

→ Problem occurs when using `var` inside a loop with asynchronous functions like `setTimeout`.

**Example (Wrong):**

```
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output: 4 4 4
```

Why?

- `var` has function scope.
- All callbacks share the same `i`.
- Loop finishes with `i = 4`.

**Solution: Use&#x20;**`let`

```
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output: 1 2 3
```

Note: `let` creates a separate binding for each loop iteration.

### **⭐ Quick Revision**

| Topic            | Simple Meaning                                      |
| ---------------- | --------------------------------------------------- |
| Closure          | Function remembers parent variables                 |
| Lexical Scoping  | Access variables based on where function is written |
| Encapsulation    | Protect data from outside access                    |
| Memoization      | Store previous results                              |
| Loop Closure Bug | `var` shares one variable across callbacks          |

**Remember:** Closure = Function + Its remembered outer variables.