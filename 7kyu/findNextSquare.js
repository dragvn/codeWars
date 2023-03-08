// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//PARAMETERS 
// --- num, non-neg
//RETURN 
// --- -1 if num is not perfect square
// --- next perfect square
//EXAMPLE 
// --- pass in 5 return -1
// --- pass in 4 return 9
//PSEUDO-CODE 
// --- check to see if num is perfect square
//  --- return -1 if false
// --- NOT FINISHED

 
//SOLUTION
const findNextSquare = num => Number.isInteger(Math.sqrt(num)) ? Math.pow(Math.sqrt(num)+1, 2) : -1


console.log(findNextSquare(4))