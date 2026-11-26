# Equality: `==`, `===`, and `Object.is()`

These compare two values, but they don't all behave the same way.

## `==` (loose equality)

`==` may convert values to the same type before comparing:

```js
console.log(5 == "5"); // true: the string is converted to a number
```

## `===` (strict equality)

`===` compares both value and type, without converting:

```js
console.log(5 === "5"); // false: number and string are different types
console.log(5 === 5);   // true
```

## `Object.is()`

`Object.is()` is like strict equality, but handles two special cases differently:

```js
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false
```

**Quick rule:** Use `===` most of the time. Use `Object.is()` when you need to distinguish `0` from `-0` or compare `NaN` with itself. Avoid `==` unless you specifically want automatic type conversion.
