# **DOM & Browser Events in JavaScript**

**DOM (Document Object Model):** DOM is a way JavaScript interacts with HTML elements.

Example: JavaScript can change text, styles, buttons, and handle clicks.

## **1. Event Bubbling**

**Event Bubbling** means an event starts from the element you clicked and moves upward to its parent elements.

Example:

```
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```
document.getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent clicked");
  });

document.getElementById("child")
  .addEventListener("click", () => {
    console.log("Button clicked");
  });
```

**When you click the button, output:**

```
Button clicked
Parent clicked
```

**Remember:** Child → Parent → Grandparent.

## **2. Event Capturing**

**Event Capturing** means an event starts from the top (parent) and moves down to the target element.

It is the opposite of Event Bubbling.

```
document.getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent clicked");
  }, true);

document.getElementById("child")
  .addEventListener("click", () => {
    console.log("Button clicked");
  }, true);
```

**Output:**

```
Parent clicked
Button clicked
```

Here, `true` means capturing phase.

**Remember:** Parent → Child.

## **3. event.target vs event.currentTarget**

Both are used to identify elements during an event.

- `event.target` → The actual element where the event happened.
- `event.currentTarget` → The element where the event listener is attached.

Example:

```
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```
document.getElementById("parent")
  .addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
  });
```

When you click the button:

```
event.target        → button
event.currentTarget → div (parent)
```

**Remember:**

- `target` = Where event happened.
- `currentTarget` = Where listener is attached.

## **4. Event Delegation**

**Event Delegation** means adding one event listener to a parent element instead of adding separate listeners to every child.

It works because of Event Bubbling.

Example:

```
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>
```

```
document.getElementById("list")
  .addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {
      console.log(event.target.textContent);
    }

  });
```

**Output when you click Banana:**

```
Banana
```

**Why use Event Delegation?**

- Fewer event listeners.
- Better performance for large lists.
- Works for dynamically added child elements too.

**Remember:** One parent listener handles multiple child events.

## **Quick Revision – Interview Notes**

| Concept               | Simple Meaning                           |
| --------------------- | ---------------------------------------- |
| Event Bubbling        | Child → Parent                           |
| Event Capturing       | Parent → Child                           |
| `event.target`        | Actual clicked element                   |
| `event.currentTarget` | Element with attached listener           |
| Event Delegation      | One parent listener handles child events |

## **Easy Trick to Remember**

**Event Bubbling**

Bottom to Top

# **Child ↑ Parent ↑ Grandparent**

**Event Capturing**

Top to Bottom

# **Grandparent ↓ Parent ↓ Child**

**Event Delegation**

One Listener

One parent handles multiple children.

## **Important Interview Questions**

### **1. What is Event Bubbling?**

### **2. What is Event Capturing?**

### **3. What is the difference between `event.target` and `event.currentTarget`?**

### **4. What is Event Delegation?**

### **5. Why is Event Delegation useful?**

Event Delegation is useful because it:

- Uses fewer event listeners and can reduce memory usage.
- Improves performance for large lists.
- Handles dynamically added child elements automatically.
- Centralizes event handling logic in the parent.

**Example:**

If a new `li` is added to the existing `ul`, the parent listener will also handle clicks on it without attaching a new listener.

### **6. What is the difference between `stopPropagation()` and `preventDefault()`?**

`stopPropagation()` stops the event from moving to other elements in the event propagation path.

```javascript
button.addEventListener("click", (event) => {
  event.stopPropagation();
});
```

The button handler runs, but the event does not continue bubbling to parent elements.

`preventDefault()` prevents the browser's default action for the event.

```javascript
link.addEventListener("click", (event) => {
  event.preventDefault();
});
```

This prevents the link from navigating, but the event can still propagate.

| Method                | Purpose                                |
| --------------------- | -------------------------------------- |
| `stopPropagation()`   | Stops event propagation                |
| `preventDefault()`    | Stops the browser's default behavior   |

Both methods can be used together when both behaviors are required.

**One-line revision:** Bubbling = Up, Capturing = Down, Target = Actual element, CurrentTarget = Listener element, Delegation = Parent handles children.