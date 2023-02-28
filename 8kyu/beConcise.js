// Be Concise IV - Index of an element in an array
// Task
// Provided is a function 'find' which accepts two parameters in the following order: 
// array, element and returns the index of the element if found and "Not found" otherwise. 
// Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. 
// (no more than 85) You may assume that all array elements are unique.

//PROVIDED CODE
// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
//   }

//SOLUTION(CODE REFACTORED)
    const find = (arr, e) => arr.includes(e) ? arr.indexOf(e) : "Not found"

    // let array = [1,2,3,4,5,6]
    // console.log(find(array, 2))