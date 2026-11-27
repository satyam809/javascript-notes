# **📒 Asynchronous JavaScript**

**Asynchronous JavaScript**

→ Asynchronous means JavaScript can start a task and continue doing other work without waiting for that task to finish.

Example: API calls, timers, database operations.

### **1. Callbacks**

→ Callback is a function passed as an argument to another function, which is called later.

**Example:**

```
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Task completed");
}

greet("Satyam", done);
```

**Output:**

```
Hello Satyam
Task completed
```

Note: Callback = Function passed into another function.

**Callback Hell:**

→ When callbacks are nested inside callbacks, code becomes difficult to read and maintain.

### **2. Promises**

→ Promise is an object that represents the future result of an asynchronous operation.

**Promise has 3 states:**

1. Pending → Task is running.
2. Fulfilled → Task completed successfully.
3. Rejected → Task failed.

**Example:**

```
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

promise.then((result) => {
    console.log(result);
});
```

**Promise Chaining**

→ Using multiple `.then()` to execute tasks one after another.

```
Promise.resolve(10)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(result => console.log(result));

// Output: 25
```

**Error Handling**

→ `.catch()` handles errors when a Promise is rejected.

```
Promise.reject("Something went wrong")
    .catch(error => {
        console.log(error);
    });
```

Note:

- `.then()` → Handles success.
- `.catch()` → Handles errors.
- `.finally()` → Runs whether success or failure.

### **3. Async / Await**

→ `async` and `await` make asynchronous code easier to read.

- `async` → Makes a function return a Promise.
- `await` → Waits for a Promise to settle before continuing inside the async function.

**Example:**

```
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function fetchData() {
    const result = await getData();
    console.log(result);
}

fetchData();
```

**Output (after 1 second):**

```
Data received
```

**Error Handling with try...catch**

```
async function getUser() {
    try {
        const result = await Promise.reject("Error!");

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getUser();
```

Note: `try...catch` handles errors in async/await.

### **⭐ Quick Revision**

| Topic         | Simple Meaning                      |
| ------------- | ----------------------------------- |
| Callback      | Function passed to another function |
| Callback Hell | Too many nested callbacks           |
| Promise       | Represents future result            |
| Pending       | Still running                       |
| Fulfilled     | Successfully completed              |
| Rejected      | Failed                              |
| `.then()`     | Handles success                     |
| `.catch()`    | Handles errors                      |
| `async`       | Makes function return a Promise     |
| `await`       | Waits for Promise result            |
| `try...catch` | Handles errors                      |

**Remember:**

```
Callback → Promise → Async/Await
```

All three are ways to handle asynchronous operations in JavaScript.