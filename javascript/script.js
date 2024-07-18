// Notes
//1. this inside the function
//2. this inside the classs

class Test{
   a=1;b=2;c=3;
    constructor(){
        console.log(this)
    }
}

const test = new Test();

const obj = {
    a:1,
    b:2,
    c:3,
    d:()=>{
        console.log(this)
    }
}

obj.d();