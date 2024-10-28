// How do you add an element to the end of an array in JavaScript?
let  preArr = [1, 2, 3];
let  preStrArr = ["Banana", "Apple", "Orage"];
console.log("Add new Element in array with method push");
function addItemInArray(arr, number){
    let newArr = [...arr]; // output [1,2,3,number]
    newArr.push(number)
    return newArr;
}

console.log(`orginal array is  :`, preArr );
console.log(`After adding number 4  using  push method: ${addItemInArray(preArr, 4)}`);
console.log(`Above using template literals which convert output to string rather than array`)


//console.log(`After adding number 4 using push method as array output: ${JSON.stringify(addItemInArray(preArr, 4))}`);
//console.log(`Above in template literals we use JOSN.stringify to get expected out as an array`)
console.log("-------------------------");


// How do you remove an item to the end of an array in JavaScript?
console.log("Remove  Item in array with method put");

function removeItemInArray(arr){
    let newArray = [...arr]
    newArray.pop() // output [1,2]
    return newArray;
}

console.log(`orginal array is  :`, preArr );
console.log(`After remove last item  with pop method: `, removeItemInArray(preArr));

console.log("-------------------------");

// What method is use to add item in the begining of an array in JavaScript?
console.log("Add item in the beging of an array with method unshift");

function addItemInStartAtArray(arr, number){
    let newArry = [...arr];
    newArry.unshift(number);
    return newArry;
}

console.log(`orginal array is for unshift :`, preArr );
console.log(`After adding item in the begning of an array using unshift method: `, addItemInStartAtArray(preArr, 0));
console.log("-------------------------");

// What method is use to remove item in the begining of an array in JavaScript?
console.log("remove item in the beging of an array with method shift");
function removetemInStartAtArray(arr){
    let newarr = [...arr] // output [2,3]
    newarr.shift();
    return newarr;
}


console.log(`orginal array is  for shift method :`, preArr );
console.log(`After removing item in the begning of an array using shift method: `, removetemInStartAtArray(preArr));
console.log("-------------------------");

// What method is use to create a new array from part of an existing array 
//without modifying the orignal array  in JavaScript? 

console.log("creat a new array taking  of existing one array somepart without modifying original one");
function sliceArray(arr, svalue, evalue){
    let newArray = [...arr];
    return newArray.slice(svalue,evalue)
}

console.log(`orginal array is  :`, preArr );
console.log(`After using slice method creating new array without modifying existing one: `, sliceArray(preArr, 0,2));
console.log("-------------------------");

// What method is use to remove element in array and optionaly add new element on that place 

console.log("remove elements from an array and optionally add new elements in their place");
function spliceArray(arr){
    let newArray = [...arr]
     newArray.splice(1,2, 'a', 'b');
     return newArray;
}

console.log(`orginal array is  :`, preArr );
console.log(`After using splice method creating new array : `, spliceArray(preArr));
console.log("-------------------------");


// What method can you use to check if an array contains a specific value?

console.log("Check an array if contains a specific value");
function includeArray(arr, number){
    let newArray = [...arr]
    return newArray.includes(number);
}

console.log(`orginal array is  :`, preArr, 'check value for 1 and 5' );
console.log(`After using include getting value true or false on the basis of their existance : `, includeArray(preArr, 1), includeArray(preArr, 5));
console.log("-------------------------");

// What method can you use reverse and array?

console.log("Use method reverse to reverse array element");
function reverseArray(arr, number){
    let newArray = [...arr]
    return newArray.reverse();
}

console.log(`orginal array is  :`, preArr, 'check value for 1 and 5' );
console.log(`After using include getting value true or false on the basis of their existance : `, reverseArray(preArr));
console.log("-------------------------");

// What method can you use to join an array all element using specific delemeter?

console.log("Use method join to join all element of array using specific delemeter");
function reverseArray(arr, number){
    let newArray = [...preStrArr]
    return newArray.join(", ");
}

console.log(`orginal array is  :`, preStrArr );
console.log(`After using join method and delemeter ', ' we get this result : `, reverseArray(preStrArr));
console.log("-------------------------");

// How you can Iterate each element of an array and perform some operation

console.log("perform iteration on array using foreach method");
function foreachArray(arr){
    let newArray = [];
    arr.forEach(element => {
        newArray.push(element * 2);    
    });
    return newArray
}

console.log(`orginal array is  :`, preStrArr );
console.log(`Using foreach method to iterate on an array and performing operation : `, foreachArray(preArr));
console.log("-------------------------");

