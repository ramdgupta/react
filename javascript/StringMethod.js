let preStr = "Ram Dulare";
// How do you find the length of a string?

console.log("How do you find the length of a string?");
function findStringLength(str){
    return str.length;
}

console.log(`orginal array is  :`, preStr );
console.log(`find String lenght using lenght method : `, findStringLength(preStr));
console.log("-------------------------");

// How do you convert a string to uppercase?
console.log("How do you convert a string to uppercase?");
function uppercaseString(str){
    return str.toUpperCase();
}

console.log(`orginal string is  :`, preStr );
console.log(`Convert a string in UPPERCASE using toUpperCase string method  : `, uppercaseString(preStr));
console.log("-------------------------");


// How do you convert a string to lowercase?
console.log("How do you convert a string to lowercase?");
function lowercaseString(str){
    return str.toLowerCase();
}

console.log(`orginal string is  :`, preStr );
console.log(`Convert a string in lowercase using lowercase string method  : `, lowercaseString(preStr));
console.log("-------------------------");


// How do you convert a string to lowercase?
console.log("How do you convert a string to lowercase?");
function lowercaseString(str){
    return str.toLowerCase();
}

console.log(`orginal string is  :`, preStr );
console.log(`Convert a string in lowercase using lowercase string method  : `, lowercaseString(preStr));
console.log("-------------------------");


// How do you get the character at a specific index in a string?
console.log("How do you convert a string to lowercase?");
function findCharIndexString(str){
    return str.charAt(4);
}

console.log(`orginal string is  :`, preStr );
console.log(`Getting character index in given string using charAt string method : `, findCharIndexString(preStr));
console.log("-------------------------");


// How do you find the index of the first occurrence of a substring?
console.log("How do you convert a string to lowercase?");
function findIndexOffirstOccureanceOfSubString(str){
    return str.indexOf('Dulare');
}

console.log(`orginal string is  :`, preStr );
console.log(`find the index of the first occurrence of a substring using indexOf Method : `, findIndexOffirstOccureanceOfSubString(preStr));
console.log("-------------------------");


// How do you check if a string contains a certain substring?
console.log("How do you check if a string contains a certain substring");
function findStringHasSubString(str, subStr){
    return str.includes(subStr);
}

console.log(`orginal string is  :`, preStr );
console.log(`find string contains subscring or not with method includes Method : `, findStringHasSubString(preStr, "Ram"), findStringHasSubString(preStr, "RAM"));
console.log("-------------------------");



// How do you extract a part of a string using substring()?
console.log("How do you extract a part of a string using substring()");
function extractSubstring(str, start, end){
    return str.substring(start,end);
}

console.log(`orginal string is  :`, preStr,  ': 3, 8', preStr, ': 0, 2' );
console.log(`Extract part of   substring using substring Method : `, extractSubstring(preStr, 4, 7), extractSubstring(preStr, 0,3));
console.log("-------------------------");

//How is slice() different from substring()? Extract "Java" using slice().

console.log("Extract java from javascript string using slice method");
function sliceSubstring(str, start, end){
    return str.slice(start,end);
}

console.log(`orginal string is  : JavaScript` );
console.log(`Extracting java from string javascript using slice method : `, sliceSubstring('JavaScript', 0 ,4), sliceSubstring('JavaScript', -6, -1));
console.log("-------------------------");

//How do you split a string into an array of substrings?
console.log("How do you split a string into an array of substrings?");
function splitstring(str){
    return str.split(" ");
}

console.log(`orginal string is  : JavaScript` );
console.log(`split string and create array using split method : `, splitstring(preStr));
console.log("-------------------------");

//How do you replace a part of a string with another string?
console.log("How do you replace a part of a string with another string using replace method?");
function splitstring(str, target, newString){
    return str.replace(target, newString);
}

console.log(`orginal string is  :`, preStr, ': target: Ram, newString : Ajay  another string : target : Dulare, newString:Singh'   );
console.log(`replace a part of a string with another string using replace method : `, splitstring(preStr, "Ram", "Ajay"), " other stirng is ", splitstring(preStr, "Dulare", "Singh"));
console.log("-------------------------");





/*
11. trim()
Q11: How do you remove whitespace from the beginning and end of a string?

javascript
Copy code
let str = "   Hello, world!   ";
A11:

javascript
Copy code
console.log(str.trim()); // Output: "Hello, world!"
12. concat()
Q12: How do you concatenate two strings?

javascript
Copy code
let str1 = "Hello";
let str2 = "World";
A12:

javascript
Copy code
console.log(str1.concat(", ", str2)); // Output: "Hello, World"
13. repeat()
Q13: How do you repeat a string multiple times?

javascript
Copy code
let str = "abc";
A13:

javascript
Copy code
console.log(str.repeat(3)); // Output: "abcabcabc"
14. startsWith()
Q14: How do you check if a string starts with a specific substring?

javascript
Copy code
let str = "JavaScript is awesome";
A14:

javascript
Copy code
console.log(str.startsWith("Java")); // Output: true
console.log(str.startsWith("Script")); // Output: false
15. endsWith()
Q15: How do you check if a string ends with a specific substring?

javascript
Copy code
let str = "Learning JavaScript";
A15:

javascript
Copy code
console.log(str.endsWith("JavaScript")); // Output: true
console.log(str.endsWith("Learning")); // Output: false
16. padStart() and padEnd()
Q16: How do you pad a string with characters so it reaches a certain length?

javascript
Copy code
let str = "5";
A16:

javascript
Copy code
console.log(str.padStart(3, "0")); // Output: "005"
console.log(str.padEnd(3, "0"));   // Output: "500"
17. match()
Q17: How do you use match() to search for patterns in a string?

javascript
Copy code
let str = "The rain in SPAIN stays mainly in the plain";
A17:

javascript
Copy code
let result = str.match(/ain/g);
console.log(result); // Output: ["ain", "ain", "ain"]
18. toString()
Q18: How do you convert other data types to a string?

javascript
Copy code
let num = 123;
let bool = true;
A18:

javascript
Copy code
console.log(num.toString()); // Output: "123"
console.log(bool.toString()); // Output: "true"
19. charCodeAt()
Q19: How do you get the Unicode of a character at a specific index?

javascript
Copy code
let str = "Hello";
A19:

javascript
Copy code
console.log(str.charCodeAt(0)); // Output: 72 (Unicode of 'H')
20. fromCharCode()
Q20: How do you convert a Unicode value to a character?

A20:

javascript
Copy code
console.log(String.fromCharCode(72)); // Output: "H"
Bonus Challenge!
Q21: How do you reverse a string in JavaScript?

javascript
Copy code
let str = "JavaScript";
A21:

javascript
Copy code
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: "tpircSavaJ"

*/ 

