/Factory function / 
//Factory function and constructer use to create a a dynamic object

function createRectangle() {
    return rectangel = {
        length:1,
        breadth:2,
        draw(){
            console.log('draw');
        }
    }
}
let rectangelObj1 = createRectangle();
// Constructor function > Name Pascal Notation > first letter of every word is capital 
// constructor function > property and method ko intialise and define karta hai
// in construction we don't need to return like factory function

// object creation using constructor
// new keword return empty object
function Rectangle(len, bre) {
    this.length=len;
    this.bredth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}


// object creation using constructor
// new keword return empty object

let rectangelObj = new Rectangle(4,5);