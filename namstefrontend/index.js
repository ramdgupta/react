let name ={
    firstname: "Akshay",
    lastname: "Saini",
}
let printFullName =function( hometown, state){
    console.log(this.firstname + ' ' + this.lastname + ' from '+ hometown + ', ' + state)
}

let name2 ={
    firstname : "Sachin",
    lastname:"Tendulakar",

}

// function borrowing
printFullName.call(name, "Mumbai", "Maharastra");

// it's print Sachin Tendulakar 

// Apply Method
printFullName.apply(name2, ["Mumbai", "Maharastra"]);

// bind Method
let printMyName = printFullName.bind(name2, "Mumbai", "Mahrashtra");
console.log(printMyName);
printMyName();

// pollyfill bind , write own bind method
let name = {
    firstname : "Akshay",
    lastname:"Saini"
}
let printName = function(){
    console.log(this.firstname + " " + this.lastname )
}

let printMyName = printName.bind(name);

let printMyName2 =