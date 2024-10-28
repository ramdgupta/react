Here is a **Q&A format** on the **differences between `slice()` and `splice()`**:

---

### 1. **Q**: What is the main difference between `slice()` and `splice()`?
   **A**: The main difference is that `slice()` does not modify the original array and returns a new array, while `splice()` modifies the original array by adding, removing, or replacing elements.

---

### 2. **Q**: Does `slice()` change the original array?
   **A**: No, `slice()` creates a copy of the selected portion of the array and does not modify the original array.

---

### 3. **Q**: How does `splice()` affect the original array?
   **A**: `splice()` directly modifies the original array by removing, replacing, or adding elements at a specified index.

---

### 4. **Q**: What does `slice()` return?
   **A**: `slice()` returns a new array that is a shallow copy of the selected elements from the original array.

---

### 5. **Q**: What does `splice()` return?
   **A**: `splice()` returns an array containing the removed elements. If no elements are removed, it returns an empty array.

---

### 6. **Q**: Can `slice()` be used to add elements to an array?
   **A**: No, `slice()` cannot be used to add elements. It only extracts a portion of the array without modifying it.

---

### 7. **Q**: Can `splice()` be used to both remove and add elements at the same time?
   **A**: Yes, `splice()` can remove elements and add new elements at the same time, starting at a specified index.

---

### 8. **Q**: What happens if you call `slice(2, 4)` on an array `[1, 2, 3, 4, 5]`?
   **A**: It will return a new array `[3, 4]` and the original array will remain `[1, 2, 3, 4, 5]`.

---

### 9. **Q**: What happens if you call `splice(2, 2)` on an array `[1, 2, 3, 4, 5]`?
   **A**: It will remove 2 elements starting at index 2, so the original array will become `[1, 2, 5]`. The removed elements `[3, 4]` will be returned.

---

### 10. **Q**: Can you use negative indices in `slice()` or `splice()`?
   **A**: Yes, both `slice()` and `splice()` accept negative indices. Negative indices count from the end of the array (-1 is the last element, -2 is the second last, and so on).

---

### 11. **Q**: What does `splice(2, 0, 'a', 'b')` do to an array `[1, 2, 3, 4, 5]`?
   **A**: It adds `'a'` and `'b'` at index 2 without removing any elements. The array becomes `[1, 2, 'a', 'b', 3, 4, 5]`.

---

### 12. **Q**: Is it possible to remove elements with `slice()`?
   **A**: No, `slice()` cannot remove elements from the original array. It only extracts elements without modification.

---
Here are some **logical questions** with answers that delve deeper into the understanding of **`slice()` and `splice()`** in JavaScript:

---

### 1. **Q**: If you want to remove the last 3 elements from an array without modifying the original array, which method would you use—`slice()` or `splice()`? Why?
   **A**: You would use `slice()` because it does not modify the original array. You can use negative indices to extract all elements except the last 3. For example, `array.slice(0, -3)` will return a new array without the last 3 elements.

---

### 2. **Q**: You have an array `[10, 20, 30, 40, 50]`. How can you use `splice()` to remove the second and third elements and add `60` and `70` in their place?
   **A**: You can use `splice()` to remove the elements at index 1 and 2, then add `60` and `70`. The code would be:
   ```javascript
   let arr = [10, 20, 30, 40, 50];
   arr.splice(1, 2, 60, 70);  // arr becomes [10, 60, 70, 40, 50]
   ```

---

### 3. **Q**: What happens if you use `slice()` with no arguments? For example, `array.slice()`?
   **A**: If `slice()` is called without any arguments, it returns a shallow copy of the entire array. For example:
   ```javascript
   let arr = [1, 2, 3];
   let newArr = arr.slice();  // newArr becomes [1, 2, 3]
   ```

---

### 4. **Q**: Can `splice()` remove all elements from an array? How would you do that?
   **A**: Yes, `splice()` can remove all elements from an array by setting the `deleteCount` equal to the array's length. For example:
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   arr.splice(0, arr.length);  // arr becomes []
   ```

---

### 5. **Q**: What’s the result of `arr.slice(-2)` if `arr = [1, 2, 3, 4, 5]`? Explain why.
   **A**: The result will be `[4, 5]` because `slice(-2)` means start slicing from the second-to-last element of the array, and return the rest of the elements. It doesn't modify the original array.

---

### 6. **Q**: How can you remove the first 3 elements of an array using `splice()` and return the modified array?
   **A**: You can remove the first 3 elements by using `splice(0, 3)`, which removes elements starting from index 0 and removes 3 elements. For example:
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   arr.splice(0, 3);  // arr becomes [4, 5]
   ```

---

### 7. **Q**: How would you use `slice()` to copy all elements except the first and last from an array `[5, 10, 15, 20, 25]`?
   **A**: You can use `slice(1, -1)` to skip the first and last elements. For example:
   ```javascript
   let arr = [5, 10, 15, 20, 25];
   let newArr = arr.slice(1, -1);  // newArr becomes [10, 15, 20]
   ```

---

### 8. **Q**: If you want to replace elements from index 2 to 4 in an array `[1, 2, 3, 4, 5, 6]` with the values `9, 10`, how can you do that using `splice()`?
   **A**: You can use `splice(2, 3, 9, 10)` to replace elements from index 2 to 4 with `9` and `10`. For example:
   ```javascript
   let arr = [1, 2, 3, 4, 5, 6];
   arr.splice(2, 3, 9, 10);  // arr becomes [1, 2, 9, 10, 6]
   ```

---

### 9. **Q**: If you mistakenly remove elements from an array using `splice()`, how can you recover the removed elements?
   **A**: `splice()` returns an array of the removed elements, so you can store those removed elements in a variable. For example:
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   let removed = arr.splice(1, 3);  // removed is [2, 3, 4], arr becomes [1, 5]
   ```

---

### 10. **Q**: How would you extract the last 2 elements of an array without modifying the original array using `slice()`?
   **A**: You can use `slice(-2)` to get the last two elements. For example:
   ```javascript
   let arr = [10, 20, 30, 40, 50];
   let lastTwo = arr.slice(-2);  // lastTwo is [40, 50], arr remains [10, 20, 30, 40, 50]
   ```

---

This set of logical Q&A digs deeper into different scenarios and practical usages of `slice()` and `splice()` methods, testing deeper understanding.