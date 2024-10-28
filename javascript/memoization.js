console.log("memoization");
// var restult = null;
// function sum(){
//     if(restult){
//         return restult
//     }
//     let i=0;
//     while(i<1000000){
//         i++;
//     }
//     restult = 1+1;
//     return 1+1;
// }


// function memoizedSum(){
//     let result = null;
//     return function(){
//         if(result){
//             return result;
//         }
//         let i=0;
//         while (i<10000000){
//             i++;
//         }
//         result = 1+1;
//         return 1+1;
//     }
// } 
// const sum = memoizedSum();
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());

//now we need to convert result in object so we track this 
function memoizedSum(){
    let result = {};
    return function(n1, n2){
      
        if(result[`${n1}, ${n2}`]){
            console.log("cached");
            return result[`${n1}, ${n2}`];
        }
        
        const sumresult = n1+n2;
        result[`${n1}, ${n2}`]= sumresult;
        return sumresult;
    }
} 
const sum = memoizedSum();

console.log(sum(2,3));
console.log(sum(3,1));
console.log(sum(3,1));
console.log(sum(5,4));


// we can't use above function for memoization because it's static
// let's assume we need fabonic number series


// now we use higher order function  an utility function
function memoized(fn){
    let restult = {}
    return function(...args){
        if(result[args]){
            return result[args];
        }
        const res = fn(...args)
        restult[n] = res
        return res
    }
}


function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
// console.time("fibonacci43");
// console.log(fibonacci(43))
// console.timeLog("fibonacci43");

// if any function 1ms it's not costly untill you are not doing and DOM manipulation if it's getting more than 1 milisecond or usase jayada time le raha hai so we need to memoization in this function
// How above function we memoize
var memo = {};
function fibmemo(n){
    if(memo[n]){
        return memo[n];
    }
    if(n<=1){
        return n;
    }
    const res = fibmemo(n-1) + fibmemo(n-2);
    memo[n] = res;
    return res;
}

// console.time("fibonacci1");
// console.log(fibonacci(43))
// console.timeLog("fibonacci1");

// console.time("fibonacci2");
// console.log(fibonacci(434))
// console.timeLog("fibonacci2");

// memoization technique
// you keep in mind you have limited memory
// you have check at time of memozation is there need to remove something
// cache optmization 
// last recently use: may be only keep latest one only other we remove
//least recently use : last 5 very less use we removed
// limit cache size 
// picking the right data structure
// object is not grabage collect while they have data even they are never in use
// we have two type of data set weekmap and weekset
// advantage of this weekmap and weekset me aisi koi information save ki hai jo tumne bahar se delete kar diya hai to ye apne andar se delete kar dete hai
// lets example

     let person = {name:"ram"};
     const data = {person:person, data:123};
  //  person = null;
    console.log(data.person)

    // console me abhi bhi object dikh raha kyon ki data abhi bhi person ko apne andar rakhe huye hai
    // ye grabage collect hoga hi nah
    // jabki mai chahta hun jaise hi person object kahi se bhi null assign ho ye object reference se hut jaye
    // to ab object definatly hum use nahi kar sakte ab ese manully aker set karege

//    data.person = null;
    // yaha par hum leverage kar sakte hai weeekmap ka 
    // weekmap object ki traf kam karta hai ismen key ko hi garbage collect karne ke lyak bana sakte hai
    // jasie hi kisi cheez ko grabage collect karni ho use hum key men dal deta hai

    const wkMap = new WeakMap();
    

    wkMap.set(person, "some heavy data");
    person = null;
    console.log('wkMap', wkMap.get(person));

    // eska example tab shine karta hai tumhe dom manipulation ka data rakhna hai , tumhe todo se related node ki information rakhni hai
    // How much memory we use for memoization
    // you can use as low as low 10 mb everything work great or you can use memory as high as 1gb, 2gb , 3g 
    // jitna jyda memory use kroge apki app utni hi unpredictable ho jayegi may be user ki device 1 gb ko hi afford kar paye
    // so tab pko uske according decide karna target audiance like amzon for low memory and for high memory youtube