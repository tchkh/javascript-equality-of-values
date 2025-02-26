// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //false //false
Object.is(0, -0); //false //false
Object.is(NaN, 100); //false //false
Object.is("one", "two"); //false //false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //false //false
Object.is(null, undefined); //false //false

10 === 20; //false // false
10 === "10" //false //false
3.14 !== 3.14;  //false //false
"TechUp" !== "TechUp"; //false //false
NaN === NaN; //false //false
0 !== -0; //false //false

let objectA = { course: "Web Developer", price: 300000 }; 
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //false //false
