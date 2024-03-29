///////////////////////////////////////
// Lecture: Hoisting

/*
// function declaration
calculateAge(1980);

function calculateAge(year){
    console.log(2019 - year);
}

//function expression
var retirement = function(year){
    console.log(65 - (2019 - year));
}

retirement(1997);



// variables

console.log(age);
var age = 23;
//console.log(age);



function foo(){
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();



function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}



function third() {
    var d = 'John';
    console.log(a + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1997);

function calculateAge(year){
    console.log(2019 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1980,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        
     /*   function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();



var mike = {
    name: 'Mike',
    yearOfBirth: 1997
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();







