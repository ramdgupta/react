\### Main Differences Between `slice()` and `splice()`

- **`slice()` Method**:
  - Does **not modify** the original array; instead, it returns a **new array** containing the selected elements.
  - Takes two arguments: 
    - **startIndex**: The index from which to start slicing.
    - **endIndex**: The index where slicing ends (the element at this index is not included).
  - If called without arguments, `slice()` returns a **copy of the entire array**.
  - Supports **negative indices**, which count from the end of the array (e.g., `-1` refers to the last element).
  
- **`splice()` Method**:
  - **Modifies** the original array by **adding, removing, or replacing elements**.
  - Returns an array of the **removed elements**, which can be stored in a variable if needed.
  - Takes three parameters:
    - **startIndex**: The index where modification begins.
    - **deleteCount**: The number of elements to remove from the array.
    - **newElements** (optional): Elements to add to the array at the specified position.
  - Can be used to **remove**, **replace**, or **add** elements to the array.
  
---
Here’s a structured overview of important JavaScript topics with bullet points for clarity:

---

### 1. **Variables and Data Types**

- **Variables**:
  - Declared using `var`, `let`, and `const`.
  - `let` and `const` are block-scoped, while `var` is function-scoped.
  - `const` variables cannot be reassigned.

- **Data Types**:
  - **Primitive**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
  - **Non-primitive**: `object`, `array`, `function`.

---

### 2. **Operators**

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`.
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- **Logical Operators**: `&&`, `||`, `!`.
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`.
- **Ternary Operator**: `condition ? expression1 : expression2`.

---

### 3. **Control Flow**

- **Conditionals**:
  - `if`, `else`, `else if`, `switch`.
  
- **Loops**:
  - `for`, `while`, `do...while`.
  - `for...of` for iterating over arrays or iterable objects.
  - `for...in` for iterating over object properties.

---

### 4. **Functions**

- **Function Declaration**:
  - Syntax: `function functionName() {}`.
  - Hoisted to the top of their scope.

- **Function Expression**:
  - Syntax: `const func = function() {}`.
  - Not hoisted.

- **Arrow Functions**:
  - Syntax: `const func = () => {}`.
  - Shorter syntax and does not bind its own `this`.

- **Parameters**:
  - Default parameters: `function (param = defaultValue) {}`.
  - Rest parameters: `function (...args) {}`.

---

### 5. **Scope and Hoisting**

- **Global Scope**: Variables accessible throughout the script.
- **Function Scope**: Variables accessible only within the function.
- **Block Scope**: Variables accessible only within `{}` for `let` and `const`.
- **Hoisting**:
  - Variables declared with `var` are hoisted, but their values are not initialized until their line of code is executed.
  - Functions are fully hoisted.

---

### 6. **Arrays**

- **Array Methods**:
  - `push()`, `pop()`, `shift()`, `unshift()`.
  - `slice()`: Extracts elements without modifying the original array.
  - `splice()`: Adds/removes elements from the original array.
  - `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `findIndex()`, `some()`, `every()`.

---

### 7. **Objects**

- **Object Properties**:
  - Accessed with dot notation (`obj.prop`) or bracket notation (`obj['prop']`).
  - Can include functions (methods) as properties.

- **Object Methods**:
  - `Object.keys()`, `Object.values()`, `Object.entries()`.
  - `Object.assign()`: Copies properties from one object to another.
  - Destructuring: `const { prop1, prop2 } = obj`.

---

### 8. **Prototypes and Inheritance**

- **Prototype Chain**:
  - Objects inherit properties and methods from their prototype.
  - Every object has a `__proto__` property pointing to its prototype.

- **Constructor Functions**:
  - Functions used to create new objects with a specific prototype.

- **Classes (ES6)**:
  - Syntax: `class ClassName { constructor() {} }`.
  - Supports inheritance via `extends`.

---

### 9. **ES6 Features**

- **Let and Const**: Block-scoped variables.
- **Arrow Functions**: Shorter syntax with lexical `this`.
- **Template Literals**: String interpolation using backticks: `` `Hello ${name}` ``.
- **Destructuring Assignment**:
  - Arrays: `const [a, b] = array`.
  - Objects: `const { x, y } = object`.
  
- **Spread Operator**:
  - Expands arrays or objects: `const newArr = [...arr]`.
  
- **Rest Parameters**:
  - Collects all remaining elements into an array: `function(...args)`.

---

### 10. **Asynchronous JavaScript**

- **Callbacks**:
  - Functions passed as arguments and called later.

- **Promises**:
  - Handle asynchronous operations: `new Promise((resolve, reject) => {})`.
  - Methods: `then()`, `catch()`, `finally()`.

- **Async/Await**:
  - Makes asynchronous code easier to read and write.
  - Syntax: `async function() { await someAsyncFunc(); }`.

---

### 11. **Error Handling**

- **Try/Catch**:
  - Syntax for handling errors: 
    ```javascript
    try {
      // code
    } catch (error) {
      // error handling
    }
    ```
  - `finally`: Runs code after try/catch regardless of result.

---

### 12. **DOM Manipulation**

- **Selecting Elements**:
  - `document.getElementById()`, `document.getElementsByClassName()`, `document.querySelector()`.
  
- **Modifying Elements**:
  - `element.innerHTML`, `element.style`, `element.setAttribute()`, `element.classList.add()`.

- **Event Handling**:
  - `addEventListener()`, `removeEventListener()`.
  
- **Creating/Removing Elements**:
  - `document.createElement()`, `element.appendChild()`, `element.remove()`.

---

### 13. **Modules (ES6)**

- **Export/Import**:
  - Exporting: `export const func = () => {}`.
  - Importing: `import { func } from './module.js'`.

---

### 14. **Closures**

- **Closure**:
  - A function that remembers and has access to its lexical scope even after the outer function has finished executing.
  
---

### 15. **Event Loop and Asynchronous Execution**

- **Event Loop**:
  - JavaScript's mechanism for handling asynchronous tasks and executing them in the order they were added.
  
- **Call Stack & Callback Queue**:
  - The call stack handles synchronous code, while asynchronous callbacks are queued in the event loop.

---

### 16. **JSON (JavaScript Object Notation)**

- **Parsing and Stringifying**:
  - `JSON.parse()`: Converts JSON string to a JavaScript object.
  - `JSON.stringify()`: Converts a JavaScript object to a JSON string.

---

### 17. **Regular Expressions (RegEx)**

- **Pattern Matching**:
  - Used for searching or manipulating strings.
  - Methods: `match()`, `replace()`, `test()`, `exec()`.

---

### 18. **Local Storage and Session Storage**

- **Web Storage API**:
  - `localStorage`: Stores data with no expiration date.
  - `sessionStorage`: Stores data for the duration of the page session.

---

This list provides a well-rounded overview of the most important JavaScript topics, structured clearly for easy understanding.