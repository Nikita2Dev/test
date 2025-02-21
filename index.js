// let name = "mahesh chopade"; // string

// let age = 20; // number

// let isMale = true; // boolean

// console.log(name , " : " , typeof name);

// console.log(age , " : " , typeof age);

// console.log(isMale , " : " , typeof isMale);

/////////////////////////////////////////////////////////////////////////////////////////////

//// Array.at()  //

// description:  The at() method returns the specified element from an array.
// example:  array.at(index)

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// console.log(fruits.at(0)); // apple

// Array.slice()  //

// description:  The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// console.log(fruits.slice(0,3));

// Array Search Methods

// Array.indexOf()
// description:  The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.

// indexOf funtion aaplyala array madhlya element chi index return karto.
// example:  array.indexOf(element)

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// console.log(fruits.indexOf("mango"));

// Array.includes()
// description:  The includes() method determines whether an array includes a certain value among its entries,
//  returning true or false as appropriate.

// includes function aaplyala array madhlya element ahe ka nahi te check karto.

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// console.log(fruits.includes("banana")); // true

// Array.find()

// description:  The find() method returns the value of the first element in the provided
// array that satisfies the provided testing function.  If no values satisfy the testing function,
//  undefined is returned.

// find function aaplyala array madhlya element find karto.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let element = numbers.find(findElement)

// function findElement(element) {
//      console.log(element);
// }
// console.log(element);

/// Array Sort Methods

// Array.sort()

// description:  The sort() method sorts the elements of an array in place and returns the sorted array.

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// fruits.sort()
// fruits.reverse()

// console.log(fruits);

// Array.toSorted()

// let fruits = ["apple", "banana", "mango", "orange", "grapes"];

// let sortedfruits = fruits.toSorted();

// console.log(fruits);

// console.log(sortedfruits);

// Functions

// description:  A function is a block of code that performs a specific task.

// Types oF Functions

// 1. Named Function
// 2. Arrow Function
// 3. Self Invoking Function // self calling function
// 4. Callback Function

// 1.Named Function

// sytax

// function Function_name(){
//     // statement
// }

// parameters / arguments

// function addtion(a,b){
//    return a+b;
// }

// let result = addtion(10,60)

// console.log(result);

// 2. Arrow Function

// why we use arrow fucntion?
// 1. short syntax
// 2. no need to write function keyword
// 3. no need to write return keyword // if we have only one statement **
// 4. no need to write curly braces // if we have only one statement **
// 5. no need to write paranthesis  // if we have only one parameter **
// 6. no need to write semicolon // if we have only one statement **

// sytax

// let function_name = (paramters) => {
//     // statement
// }

// example

// let square = (a,b,c,d) =>{

// }

// let result = square(10)
// console.log(result);

// 3. Self Invoking Function // self calling function

// sytax

// (function () {
//    console.log("hello");
// })();

// 4. Callback Function

// description: A callback function is a function passed into another function as an parameter,

// example

let student = {
  name: "mahesh",
  age: 20,
  isMale: true,
  address: "pune",
};

// let name  = ["mahesh", "chopade", "pune", "maharashtra", "india", "411041"]

// let [a1, a2 ,a3,a4,a5,a6] = name  // destructuring

// console.log(a1);

// fetch api

// fetch api

// fetch api is a modern way to make http requests. It is a promise-based api that is built into the browser. It is not supported in Internet Explorer.

// promises

// promises

// promises are a way to handle asynchronous operations. They can be in one of three states:

// pending: initial state, neither fulfilled nor rejected.

// fulfilled: meaning that the operation completed successfully.

// rejected: meaning that the operation failed.

console.log("order ghya cake cha");

const p1 = new Promise((resove, reject) => {
  setTimeout(() => {
    resove("cake order success d1");
  }, 2000);
});

p1.then((value) => {
  return value + "cake orer success d2";
})
  .then((value) => {
    return value + "cake order success d3";
  })
  .then((value) => {
    console.log(value);
  });


// fetch api

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
