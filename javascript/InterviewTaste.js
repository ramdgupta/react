// Write a function that checks if a given string is a
// palindrome (a word that reads the same forward and 
console.log("palindrome string check");
console.log("-------------------------");
function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str == reversed;
}
console.log(`Plindrome string is 'gagan :' ${isPalindrome("gagan")} and 'lalal' ${isPalindrome("lalal")} `)

// Write a function that returns the Fibonacci sequence 
//up to a certain number n
console.log("Fibonacci sequence up to a cetain number n");
console.log("-------------------------");
function fibonacci(number){
    let fib = [0,1];
    for(let i=2; i<=number; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(`restult: ${fibonacci(10)}`);
// Prime Number Check
//Write a function that checks if a number is prime
console.log("Prime Number Check for given number");
console.log("-------------------------");

function isPrimeNumber(number){
    if(number<=1) return false;
    for(let i=2; i<number; i++){
        if(number % i ==0){
            return false;
            break;
        }
    }
    return true;
}
console.log(`restult : ${isPrimeNumber(9)}`);
console.log(`restult : ${isPrimeNumber(7)}`);

//Factorial Calculation
//Write a function that calculates the factorial of a number.
console.log("Factorial calculates for given number");
console.log("-------------------------");
function factorial(number){
    if(number<=1)return 1;
    return number * factorial(number -1);
}
console.log(`restult : ${factorial(5)}`);


//Find the Largest Number in an Array
//Write a function that returns the largest number from an array
console.log("Find the Largest Number in an Array");
console.log("-------------------------");

function findLargestNumber(arr){
    return Math.max(...arr);
}
console.log(`orginal array : [1,88,900,56,78,5,3,4]` );
console.log(`restult : ${findLargestNumber([1,88,900,56,78,5,3,4])}` );

//Reverse Words in a String
//Write a function that reverses the words in a string.
console.log("Reverse Words in a String");
console.log("-------------------------");

function reverseWord(str){
    return str.split(" ").reverse().join(" ");
}

//Example 
console.log(`orginal String : Hello Word`);
console.log(reverseWord('Hello Word'));


//Sum of Array Elements
//Write a function that calculates the sum of all elements in an array.

console.log("Sum of Array Elements");
console.log("-------------------------");

function sumArrayNumber(arr){
    if(!Array.isArray(arr) || !arr.every(num => typeof num==='number')){
        throw new Error("Input must be an arrys of number")
    }
    return arr.reduce((sum, num)=> sum + num,0) 
}

console.log(`orginal Array : [1,2,3,4]` );
console.log(`restult: ${sumArrayNumber([1,2,3,4])}`)


//Find Duplicates in an Array
//Write a function that finds duplicate values in an array.
console.log("Find Duplicates in an Array");
console.log("-------------------------");

function findDuplicateInArray(arr){
     let duplicate =[];
     let sortedArry = arr.sort();
     for(let i=0; i<sortedArry.length; i++){
        if(sortedArry[i]===sortedArry[i+1]){
            duplicate.push(sortedArry[i]);
        }
     }
     return duplicate;
}
console.log(`orginal Array : [1,1,1,4,2,5,3]` );
console.log(`restult: ${findDuplicateInArray([1,2,3,4,2,5,3])}`)

//Remove Duplicates from Array
//Write a function that removes duplicates from an array.
console.log("Remove Duplicates from Array");
console.log("-------------------------");

function removeDuplicateInArray(arr){
    return [...new Set(arr)];
}
console.log(`orginal Array : [1,2,3,4,2,5,3]` );
console.log(`restult: ${removeDuplicateInArray([1,2,3,4,2,5,3])}`)

//flatten nested  Array
//Write a function that removes duplicates from an array.
console.log("flatten nested Array");
console.log("-------------------------");
function flattenArr(arr){
    const restult = [];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            restult.push(...flattenArr(arr[i]));
        }
        else{
            restult.push(arr[i]);
        }
    }
    return restult;
}

console.log(`original array array is: [1,2,[4,5,[6,7, [11,16],1],2],66,77]`);

console.log(`flatten array of the given array is: ${flattenArr([1,2,[4,5,[6,7, [11,16],1],2],66,77])} `)



// find duplicate character 

console.log("Find duplicate character in given strting");
console.log("-------------------------");
function findDuplicateChar(str){
    // create an object to store character counts
    const charCount = {};
    const duplicate = [];
    // Iterate over each charater over string
    for(let char of str){
        //if character is already in the object, increment it's count
        charCount[char] =(charCount[char] || 0) + 1;

    }
    // find character with count greater than 1
    for(let char in charCount){
        if(charCount[char] > 1){
            duplicate.push(charCount[char]);
        }
    }
    return duplicate;
}

console.log(`orginal String :programming` );
console.log(`restult: ${findDuplicateChar('programming')}`)


