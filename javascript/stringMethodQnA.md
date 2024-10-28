Here’s a set of cross-questions (Q) and answers (A) based on the string methods discussed earlier. These questions will encourage you to think critically about the methods and their uses.

---

### **1. Length and Indexing**

**Q1:** If a string has a length of 10, what will `str.charAt(10)` return?

**A1:** It will return an empty string (`""`) because string indices start at 0 and go up to `length - 1`. So, for a string of length 10, valid indices are from 0 to 9.

---

### **2. Case Conversion**

**Q2:** What will be the output of `console.log("hello".toUpperCase().toLowerCase())`?

**A2:** The output will be `"hello"` because the `toUpperCase()` method converts the string to uppercase, and then `toLowerCase()` converts it back to lowercase.

---

### **3. Substring Methods**

**Q3:** How does `substring()` differ from `slice()` when negative indices are used?

**A3:** `substring()` does not support negative indices. If negative indices are provided, it treats them as 0. In contrast, `slice()` interprets negative indices as offsets from the end of the string.

---

### **4. Search Methods**

**Q4:** If `str = "Hello, world!"`, what will `str.indexOf("o")` return, and how would `str.includes("o")` behave?

**A4:** `str.indexOf("o")` will return `4` because the first occurrence of "o" is at index 4. `str.includes("o")` will return `true` since "o" is present in the string.

---

### **5. Replacement Behavior**

**Q5:** If `str = "Hello, world!"`, what will `str.replace("o", "0")` do?

**A5:** It will return `"Hell0, world!"`, replacing only the first occurrence of "o" with "0". To replace all occurrences, you would need to use a regular expression, like `str.replace(/o/g, "0")`.

---

### **6. Array Conversion**

**Q6:** What happens when you use `split(",")` on a string without commas, like `let str = "Hello world"`?

**A6:** The result will be an array containing the entire string as the only element: `["Hello world"]`.

---

### **7. Trimming Spaces**

**Q7:** How does `str.trim()` behave differently from `str.trimStart()` and `str.trimEnd()`?

**A7:** `str.trim()` removes whitespace from both ends of the string, while `str.trimStart()` removes whitespace from the beginning only, and `str.trimEnd()` removes it from the end only.

---

### **8. String Repetition**

**Q8:** What will `str.repeat(0)` return?

**A8:** It will return an empty string (`""`) because repeating a string zero times results in no characters.

---

### **9. Padding Methods**

**Q9:** What will `console.log("5".padStart(3, "0"))` output? What about `padEnd()`?

**A9:** `console.log("5".padStart(3, "0"))` will output `"05"`, while `padEnd()` will output `"50"`.

---

### **10. Matching Patterns**

**Q10:** If you execute `let matches = "abc 123 xyz".match(/\d+/g)`, what will be stored in `matches`?

**A10:** `matches` will be `["123"]`, as it matches the sequence of digits in the string.

---

### **11. Converting to String**

**Q11:** If you run `let num = 123; console.log(num.toString() + " is a number.");`, what will be the output?

**A11:** The output will be `"123 is a number."` because `toString()` converts the number to a string before concatenation.

---

### **12. Character Codes**

**Q12:** What will `String.fromCharCode(65)` return, and why?

**A12:** It will return `"A"` because 65 is the Unicode value for the uppercase letter "A".

---

### **13. Combining String Methods**

**Q13:** How would you reverse the string `"Hello"` using a combination of methods?

**A13:** You can reverse the string with:
```javascript
let reversed = "Hello".split("").reverse().join("");
console.log(reversed); // Output: "olleH"
```

---

### **14. Checking Start and End**

**Q14:** Given `let str = "JavaScript"; what does `str.startsWith("Java")` and `str.endsWith("Script")` return?

**A14:** Both will return `true` since "JavaScript" starts with "Java" and ends with "Script".

---

### **15. Edge Cases with `slice()` and `substring()`**

**Q15:** If `str = "example"`, what will `str.slice(2, 5)` and `str.substring(2, 5)` return? Are they the same?

**A15:** Both will return `"amp"` and they behave the same way in this case, returning characters from index 2 to 4. 

---

### **Bonus Challenge**

**Q16:** What would happen if you run `let str = "Hello"; console.log(str.charAt(-1));`?

**A16:** It will return an empty string (`""`) because negative indices are treated as 0 in `charAt()`.

---

These cross-questions provide a deeper understanding of string methods in JavaScript and how they can be applied in different scenarios. Practicing these will help solidify your knowledge and improve your coding skills!