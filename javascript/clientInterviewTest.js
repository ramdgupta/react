// #### Challenge 1: FizzBuzz
// **Problem:** Write a function that prints the numbers from 1 to 100. 
//But for multiples of three, print "Fizz" instead of the number, 
//and for the multiples of five print "Buzz." 
//For numbers which are multiples of both three and five, print "FizzBuzz."

//fizzBuzz(100)
// **Problem:** Write a function that takes a string as input and returns the string reversed.
// #### Challenge 3: Palindrome Check
// **Problem:** Write a function that checks if a given string is a palindrome (it reads the same backward as forward).

// #### Challenge 4: Find the Largest Number in an Array
// **Problem:** Write a function that takes an array of numbers and returns the largest number.

// #### Challenge 5: Fibonacci Sequence
// **Problem:** Write a function that returns the nth Fibonacci number.

// #### Challenge 6: Merge Two Sorted Arrays
// **Problem:** Write a function that merges two sorted arrays into one sorted array.

// #### Challenge 7: Count Vowels in a String
// **Problem:** Write a function that counts the number of vowels in a given string.

// #### Challenge 8: Remove Duplicates from an Array
// **Problem:** Write a function that removes duplicate values from an array.

  // #### Challenge 9: Find the Intersection of Two Arrays
// **Problem:** Write a function that returns the intersection of two arrays (values that appear in both).

// #### Challenge 10: Sum of All Numbers in an Array
// **Problem:** Write a function that returns the sum of all numbers in an array.




/* 
// #### Challenge 1: FizzBuzz
// **Problem:** Write a function that prints the numbers from 1 to 100. 
//But for multiples of three, print "Fizz" instead of the number, 
//and for the multiples of five print "Buzz." 
//For numbers which are multiples of both three and five, print "FizzBuzz."

function fizzBuzz(number) {
        for(let i=1; i<=number; i++){
           // console.log(i);
            if(i% 3 ==0 && i%5==0){
                console.log(i, "FizzBuzz");
            }
            else if(i%5==0){
                console.log(i, ": Buzz");
            }
            else if(i%3==0){
                console.log(i, ': Fizz');
            }
            else{
                console.log(i);
            }
        }
}
//fizzBuzz(100)
// **Problem:** Write a function that takes a string as input and returns the string reversed.
 function reversedString(str){
    return str.split("").reverse().join("");
 }
 console.log(reversedString("ram"));
// #### Challenge 3: Palindrome Check
// **Problem:** Write a function that checks if a given string is a palindrome (it reads the same backward as forward).
 function checkPalindrome(str){
     let reversed = str.split("").reverse().join("");
    // console.log(reversed == str);
    return str.toLowerCase() === reversed.toLowerCase();
}
    console.log("Plindrome check for string 'Ajay' ", checkPalindrome("Ajay"));
    console.log("Plindrome check for string 'Gaag' ", checkPalindrome("Gaag"));
        

// #### Challenge 4: Find the Largest Number in an Array
// **Problem:** Write a function that takes an array of numbers and returns the largest number.
 function getLargestNumbeer(arr){
    return Math.max(...arr);
 }
 console.log(getLargestNumbeer([10,20,50,7]));

// #### Challenge 5: Fibonacci Sequence
// **Problem:** Write a function that returns the nth Fibonacci number.
function fibonacci(num){
     let result = [0, 1];
     if(num<=1) return  [num, result.slice(0,num+1)];
     for(let i=2; i<=num; i++){
        result[i] = result[i-1] + result[i-2];
     }
     return [result[num], result];
}
const [total, res] = fibonacci(3)
console.log("Fibonacci", total, res);

// #### Challenge 6: Merge Two Sorted Arrays
// **Problem:** Write a function that merges two sorted arrays into one sorted array.
 function mergeSortedArray(arr1, arr2){
    let i = 0; // arr1 pointer
    let j =0; //arr2 pointer
    let sortedArray = []; // hold merged sorted array
   // loop until we reach the end of one of the arrays
    while(i<arr1.length && j<arr2.length){
        // compare and push the smaller to larger one to mergedarrya
        if(arr1[i] < arr2[j]){
            sortedArray.push(arr1[i]);
            i++;
        }
        else{
            sortedArray.push(arr2[j]);
            j++;
        }
    }

    //if there are remaining elements in arr1 add to megedArray
    while(i<arr1.length){
        sortedArray.push(arr1[i]);
        i++;
    }
    // if there are remaining elment in arr2 add them sortedArray
    while(j<arr2.length){
        sortedArray.push(arr2[j]);
        j++;
    }
    return sortedArray; // returned the merged sorted array

 }
 const array1 =[1,2,0,5,3];
 const array2 = [2,4,,0,12,3];
 const result  =  mergeSortedArray (array1,array2);
console.log(result)
function mergedArray(arr1, arr2){
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)].sort((a,b)=> a-b);
    //const sortedUniqueArray = Array.from(uniqueArray).sort((a,b)=> a-b);
    return uniqueArray; // Ascending order
}
console.log(mergedArray(array1, array2));

// #### Challenge 7: Count Vowels in a String
// **Problem:** Write a function that counts the number of vowels in a given string.
 function countVovels(str){
    const vowels = 'aeiouAEIOU';
    let count =0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
 }
 console.log('countVovels', countVovels("ram dulare"));

// #### Challenge 8: Remove Duplicates from an Array
// **Problem:** Write a function that removes duplicate values from an array.
  function removeDuplicateInArray(arr){
     const result = [...new Set(arr)];
     return result;
  }
  console.log('unique array', removeDuplicateInArray([1,4,5,6,3,1,2,3,4,5,5,6,8,11]))

  // #### Challenge 9: Find the Intersection of Two Arrays
// **Problem:** Write a function that returns the intersection of two arrays (values that appear in both).
function intersection(arr1, arr2){
    return arr1.filter((value)=>(arr2.includes(value)));
}
console.log(intersection(array1, array2))

// #### Challenge 10: Sum of All Numbers in an Array
// **Problem:** Write a function that returns the sum of all numbers in an array.
function sumOfArray(arr){
     return arr.reduce((acc, curr)=> acc + curr, 0);
}
console.log(sumOfArray([1,2,3,4,5]));

 */


// #### Challenge 1: FizzBuzz
// **Problem:** Write a function that prints the numbers from 1 to 100. 
//But for multiples of three, print "Fizz" instead of the number, 
//and for the multiples of five print "Buzz." 
//For numbers which are multiples of both three and five, print "FizzBuzz."
 function fizzBuzz(number){
     
 }
//fizzBuzz(100)
// **Problem:** Write a function that takes a string as input and returns the string reversed.
// #### Challenge 3: Palindrome Check
// **Problem:** Write a function that checks if a given string is a palindrome (it reads the same backward as forward).

// #### Challenge 4: Find the Largest Number in an Array
// **Problem:** Write a function that takes an array of numbers and returns the largest number.

// #### Challenge 5: Fibonacci Sequence
// **Problem:** Write a function that returns the nth Fibonacci number.

// #### Challenge 6: Merge Two Sorted Arrays
// **Problem:** Write a function that merges two sorted arrays into one sorted array.

// #### Challenge 7: Count Vowels in a String
// **Problem:** Write a function that counts the number of vowels in a given string.

// #### Challenge 8: Remove Duplicates from an Array
// **Problem:** Write a function that removes duplicate values from an array.

  // #### Challenge 9: Find the Intersection of Two Arrays
// **Problem:** Write a function that returns the intersection of two arrays (values that appear in both).

// #### Challenge 10: Sum of All Numbers in an Array
// **Problem:** Write a function that returns the sum of all numbers in an array.
