// Write a function that checks if a given string is a
// palindrome (a word that reads the same forward and 
console.log("palindrome string check");
console.log("-------------------------");
function isPalindrome(str){
      const reversed = str.split('').reverse().join('');
      return str === reversed;
}

// Write a function that returns the Fibonacci sequence 
//up to a certain number n
console.log("Fibonacci sequence up to a cetain number n");
console.log("-------------------------");
function fibonacci(number){
    fib = [0, 1];
    for(let i=2; i<number; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
console.log(`restult: ${fibonacci(10)}`);

// Prime Number Check
//Write a function that checks if a number is prime
console.log("Prime Number Check for given number");
console.log("-------------------------");

function isPrimeNumber(number) {
      if(number<=1) return false;
      for(let i=2; i<=number; i++){
        if(number%i===0){
            return false;
        }
        return true;
      }
        
}
console.log(`restult : ${isPrimeNumber(9)}`);
console.log(`restult : ${isPrimeNumber(7)}`);

//Factorial Calculation
//Write a function that calculates the factorial of a number.
console.log("Factorial calculates for given number");
console.log("-------------------------");

function factorial(number) {
    if(number===0) return 1;  // why should I write 1 here why not simply return
    return number * factorial (number-1);
}
console.log(`restult : ${factorial(5)}`);

//Find the Largest Number in an Array
//Write a function that returns the largest number from an array
console.log("Find the Largest Number in an Array");
console.log("-------------------------");

function findLargestNumber(arr){
    //if(arr.isArray){
        return (Math.max(...arr));
    //}
}
console.log(`orginal array : [1,88,900,56,78,5,3,4]` );
console.log(`restult : ${findLargestNumber([1,88,900,56,78,5,3,4])}` );

//Reverse Words in a String
//Write a function that reverses the words in a string.
console.log("Reverse Words in a String");
console.log("-------------------------");

function reverseWord(str){
    return str.split(' ').reverse().join(' ');
}

//Example 
console.log(`orginal String : Hello Word`);
console.log(reverseWord('Hello Word'));

//Sum of Array Elements
//Write a function that calculates the sum of all elements in an array.

console.log("Sum of Array Elements");
console.log("-------------------------");

function  sumArrayNumber(arr){
    return arr.reduce((sum,num)=> sum+num,0);
}
console.log(`orginal Array : [1,2,3,4]` );
console.log(`restult: ${sumArrayNumber([1,2,3,4])}`)

//Find Duplicates in an Array
//Write a function that finds duplicate values in an array.
console.log("Find Duplicates in an Array");
console.log("-------------------------");

function findDuplicateInArray(arr){
     let duplicate =[];
     let sortedArr = arr.sort();
     for(let i=0; i <  sortedArr.length; i++){
        if(sortedArr[i]=== sortedArr[i+1]){
            duplicate.push(sortedArr[i]);
        }
     }
     return duplicate;
}

console.log(`orginal Array : [1,2,3,4,2,5,3]` );
console.log(`restult: ${findDuplicateInArray([1,2,3,4,2,5,3])}`)

// FizzBuzz
// Write a function that prints numbers from 1 to 100. 
// But for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5, print "Buzz". 
// For numbers that are multiples of both 
// 3 and 5, print "FizzBuzz".

console.log("FizzBuzz");
console.log("-------------------------");
 function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if(i%3===0 && i % 5 ===0){
            console.log(i,'FizzBuzz');
        } else if (i%3===0){
            console.log(i, 'Fizz');
        }
        else if (i%5===0){
            console.log(i, 'Buzz');
        }
        else{
            console.log(i);
        }
    }
 }

console.log(`restult: ${fizzBuzz()}`)


//Remove Duplicates from Array
//Write a function that removes duplicates from an array.
console.log("Remove Duplicates from Array");
console.log("-------------------------");

function removeDuplicateInArray(arr){
     return [...new Set(arr)];
}

console.log(`orginal Array : [1,2,3,4,2,5,3]` );
console.log(`restult: ${removeDuplicateInArray([1,2,3,4,2,5,3])}`)
