// let type
let a = 10
let b = 20

let c = a + b
console.log("The sum of",a,"b",b,"is",c)

// var type
var info = "Hello World"
console.log(info)

// const type
const pi = 3.14
console.log(pi)

// global variable
let x = 10
{
  // local variable
  let x = 20
  console.log(x,"with in the function value")
}

console.log(x,"outside function value")


// example
function myFunction() {
  var x = 10;
  console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined
