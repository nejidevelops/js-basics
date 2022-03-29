console.log('Hello World!');

let name = 'Newton'; //String Literal
console.log(name);

let age = 20; //Number Literal
console.log(age);

let isApproved = true; //Boolean Literal
console.log(isApproved);

let firsstName = undefined; //Undefined Literal
console.log(firsstName);

let selectedColor = null; //Null literal
console.log(selectedColor)

//typeof is used to state the type of a variable

let firstName = 'Newton';
let lastName = 'Ombese';
console.log(firstName, lastName);

const interestRate = 0.3;
console.log(interestRate);
// if you want the declared variable to change you use *let*

//object reference type
let neim = 'Newton';
let eiage = 20;
let person = {
    neim: 'Newton',
    eiage: 20
};
//changing the variable

//Dot Notation
person.neim = 'Bofulo';

//Bracket NOtation
let selection = 'neim';
person[selection] = 'Jillian';

console.log(person.neim);

//Array initialisation
let selectedcolors = ['red', 'blue'];
console.log(selectedcolors[1])