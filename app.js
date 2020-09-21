var profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
     for (let i = 0; i < profileDataArr.length; i += 1) {
       console.log(profileDataArr[i]);
     }
   };


  printProfileData(profileDataArgs);
  
// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
  };

  // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

var one = 'one: declared outside the block';

if (true === true) {
  var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
  console.log(one); // prints 'one: declared inside the block'
}

console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

let two = 'two: declared outside the block';

if (true === true) {
  let two = 'two: declared inside the block';
  console.log(two); // prints 'two: declared inside the block'
}

console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.