# **Promise Combinators in JavaScript**

**Promise Combinators** are used to handle multiple Promises at the same time.

JavaScript has 4 important Promise Combinators.

## **1. Promise.all()**

- Waits for all Promises to succeed.
- If even one Promise fails, the entire result is rejected.
- If all succeed, it returns an array of results.

```
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Output: ["A", "B", "C"]
```

**Remember:** One failure = Entire Promise.all fails.

## **2. Promise.allSettled()**

- Waits for all Promises to complete.
- Returns the result of every Promise, whether successful or failed.
- It does not reject just because one Promise fails.

```
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2])
  .then(result => console.log(result));
```

Output:

```
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" }
]
```

**Remember:** Get all results, whether success or failure.

## **3. Promise.race()**

- Returns the result of the Promise that completes first.
- It can be either successful or failed.

```
const p1 = new Promise(resolve =>
  setTimeout(() => resolve("A"), 2000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve("B"), 1000)
);

Promise.race([p1, p2])
  .then(result => console.log(result));

// Output: "B"
```

**Remember:** First completed Promise wins.

## **4. Promise.any()**

- Returns the result of the first successfully completed Promise.
- If all Promises fail, it returns an `AggregateError`.

```
const p1 = Promise.reject("Error A");
const p2 = Promise.resolve("Success B");
const p3 = Promise.resolve("Success C");

Promise.any([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Output: "Success B"
```

**Remember:** First successful Promise wins.

## **Quick Revision – Interview Notes**

| Method                 | Meaning                       |
| ---------------------- | ----------------------------- |
| `Promise.all()`        | All Promises must succeed     |
| `Promise.allSettled()` | Returns all results           |
| `Promise.race()`       | First completed Promise wins  |
| `Promise.any()`        | First successful Promise wins |

## **Easy Trick to Remember**

- **all** → All must succeed.
- **allSettled** → Get everyone's result.
- **race** → Who finishes first?
- **any** → Who succeeds first?

Important Interview Point

Difference between `Promise.race()` and `Promise.any()`:

- `race()` → First settled Promise wins (success or failure).
- `any()` → First fulfilled Promise wins (only success).

**One-line revision:**

`all` = All Success | `allSettled` = All Results | `race` = First Complete | `any` = First Success.