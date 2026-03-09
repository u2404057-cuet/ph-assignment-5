## Q1: What is the difference between var, let, and const?

**Ans:**  
var is an old way to declare a variable which is function scoped, can be redeclared and can be reassigned.  

let is used when the variable might change. It is block scoped, can not be redeclared but can be reassigned.  

const is used when a variable needs to be constant. It is also block scoped, can’t be redeclared and can’t be reassigned.

---

## Q2. What is the spread operator (...)?

**Ans:**  
spread operator is used to expand the elements of an array or an object. When we use for example `console.log(...nums)`, it takes all the elements of the array and outputs them. It is widely used for copying, merging and passing values.

---

## Q3. What is the difference between map(), filter(), and forEach()?

**Ans:**  

`map()` applies a function to all the elements in an array and returns the modified array.  

`filter()` only allows those elements that fulfil some condition which the user set and returns an array.  

`forEach()` does some task to every single element of an array but doesn’t return an array. What to want to do with every element depends on the user.

---

## Q4. What is an arrow function?

**Ans:**  
Arrow function is a shorter way to write a function that increases productivity and simplicity. Its notation is like: (parameter) => {function}.In the left bracket we pass the parameter and in the right bracket after the arrow-like symbol the user writes the desired function.

---

## Q5. What are template literals?

**Ans:**  
Template literals allows users to create a string using backtics ( ` `` ` ) to easily insert variables and expressions inside the string. It makes multiline string easier and a user can use a javascript variable or expression by using `${}` this symbol.
