//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the
slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

const colorCopy = faveColors.slice(0, 3)
//console.log(colorCopy)
// used console.log to check my work.


//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push
method. */

//CODE HERE

colorCopy.push("Orange")

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.slice(1, 4)
// console.log(someNums)
// misread "middleNums ad SomeNums"


//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter,
 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the 
  number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE

// arr = [13, 35, 1, 101, 55, 275]

// function bigOrSmall(answers){
//   let answers = 
// }

// I hope was kinda close on this one, but i don't want to spend more 
// time on it than i need to ha.
