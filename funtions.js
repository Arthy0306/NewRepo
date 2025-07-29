//function declaration
function abc (){
    console.log("Arthy");
}
abc();

function abc1(name,age){
    console.log("My name is" ,name , "& age is" ,age)
}
abc1("Arthy",30);

function abc2(){
    let name = "Atheena";
    let age = 4;
    console.log("My name is" ,name , "& age is" ,age)
}
abc2();

//Arrow function
const a = () => {
    console.log("Arthy");
}
a();

const a1 = (name,age) => {
    console.log("My name is" ,name , "& age is" ,age)
}
a1("Arthy",30);

const a2 = () => {
    let name = "Atheena";
    let age = 4;
    console.log("My name is" ,name , "& age is" ,age)
}
a2();

//function Expression or Anonymous function
let ab = function () {
    console.log("Arthy");
}
ab();

let ab1 = function (name,age) {
    console.log("My name is" ,name , "& age is" ,age)
}
ab1("Arthy",30);

const ab2 = function() {
    let name = "Atheena";
    let age = 4;
    console.log("My name is" ,name , "& age is" ,age)
}
ab2();

//Immediate Invoke function
(function art() {
    console.log("Arthy");
})
();

(function art(name,age) {
    console.log("My name is" ,name , "& age is" ,age)
})
("Arthy",30);

(function art() {
    let name = "Atheena";
    let age = 4;
    console.log("My name is" ,name , "& age is" ,age)
})
();