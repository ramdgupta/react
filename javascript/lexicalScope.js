// Lexical scoping and clouser :Lexical Scoping

/* 
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init(); 
// only variable scope is accees within a function scope this default definition
// if we decalear a function with name outer and declear a variable username="Ram" withing the outer function
// after we trying to console.log or access this username variable outside of the function outer 
// it's give us error related 
/* 
Uncaught ReferenceError: username is not defined
    at clouser.js:16:15
*/
/* function  outer(){
    let username ="Ram"
}
console.log(username);
 */
// in clouser the clouser function able to call their parent function scope variable too
// for this we can see with example 

function outer(){
  // declearing global variable
    let username= "Ram";
    // create clouser a child function to call parent variable acceess
    function inner(){
      let innerSecret = "I have one secrete : 534"
      // accessing parent variable in inner function scope
      console.log("I am inner: ", username);
    }
    // can otehr child function access  of it's parellal function variable or not
    // with example we can see here
    function inner2(){
      console.log("I am inner brother inner2: ", username)
      // should we check we can access our adjsent function property
      console.log("I am inner2 I don't know my brother (inner) secrate: ", innerSecret);
      //No we don't access to we caought error 
      /*  
        Uncaught ReferenceError: innerSecret is not defined
            at inner2 (clouser.js:41:76)
            at outer (clouser.js:44:5)
            at clouser.js:55:1
        inner2 @ clouser.js:41
        outer @ clouser.js:44
        (anonymous) @ clouser.js:55Understand this error
      */
    }
    inner();
    inner2();
    // is outer function have inner function secret let see
    //console.log("I am outer but unable to know my child inner secret: ", innerSecret);
    // in this case we get Uncaught ReferenceError 
    /* 
    Uncaught ReferenceError: innerSecret is not defined
    at outer (clouser.js:45:74)
    at clouser.js:52:1
    */
}
// we have prove here if we create a closure function means function within function we can call the parent function outside of their scope or lexical scope throug clouser even after excution of parent function done 
outer();
// We have prove the first point lexical or function scope of varible to prove variable declaration withing a function can not call outside of their lexical scope
console.log("I am outer: ", username)
  


// Lexical scoping and clouser :Clouser Scoping
