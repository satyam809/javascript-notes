### Level 1: Fundamentals (Must-Know Basics)

* **Variables & Scope:** `var`, `let`, `const`, global/function/block scope, and the Temporal Dead Zone (TDZ).
* **Data Types & Coercion:** Primitives vs. objects, truthy/falsy values, implicit vs. explicit type conversion.
* **Equality:** `==` vs. `===` vs. `Object.is()`.
* **Functions:** Declarations vs. expressions, arrow functions, default parameters, and rest/spread operators.
* **Arrays & Objects:** Destructuring, `map`, `filter`, `reduce`, `find`, `some`, `every`, and mutating vs. non-mutating methods.
* **ES6+ Essentials:** Template literals, optional chaining (`?.`), nullish coalescing (`??`), and ES Modules (`import`/`export`) vs. CommonJS.

---

### Level 2: Intermediate (Core Interview Focus)

* **Hoisting & Execution Context:** Creation phase vs. execution phase, call stack, and lexical environment.
* **Closures:** Lexical scoping, private state/encapsulation, memoization, and classic loop closure bugs.
* **The `this` Keyword:** Default, implicit, explicit (`call`, `apply`, `bind`), `new` binding, and lexical `this` in arrow functions.
* **Asynchronous JavaScript:** Callbacks, Promises (states, chaining, error handling), and `async`/`await`.
* **Promise Combinators:** `Promise.all`, `Promise.allSettled`, `Promise.race`, and `Promise.any`.
* **Object Copying & References:** Pass-by-value vs. pass-by-reference behavior, shallow copy (`...`, `Object.assign`) vs. deep copy (`structuredClone`).
* **DOM & Browser Events:** Event bubbling, capturing, `event.target` vs. `event.currentTarget`, and event delegation.

---

### Level 3: Advanced (Senior & Under-the-Hood Mastery)

* **Event Loop Internals:** Call stack, Web APIs, **Microtask queue** (`Promise`, `queueMicrotask`) vs. **Macrotask queue** (`setTimeout`, `setInterval`, I/O), and render steps.
* **Prototypes & Inheritance:** Prototype chain (`__proto__` / `Object.getPrototypeOf`), `.prototype`, constructor functions, and how ES6 `class` works under the hood.
* **Functional Programming Patterns:** Currying, partial application, function composition, higher-order functions, and immutability.
* **Performance & Optimization:** **Debouncing**, **throttling**, lazy loading, and avoiding unnecessary re-renders/reflows.
* **Memory Management:** Garbage collection (mark-and-sweep), `WeakMap` / `WeakSet`, and common memory leaks (detached DOM nodes, uncleaned timers/listeners, accidental globals).
* **Polyfills & Custom Implementations:** Writing `debounce`, `throttle`, `Promise.all`, `Function.prototype.bind`, `Array.prototype.reduce`, and `deepClone` from scratch.
* **Meta-Programming & Modern Internals:** Symbols, Iterators & Generators (`function*`, `yield`), and `Proxy` / `Reflect`.