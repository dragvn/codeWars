//PROBLEM:
//CREATE A FUNCTION THAT ACCEPTS A STRING AND A SINGLE CHARACTER, AND RETURNS AN INTEGER OF THE COUNT OF OCCURENCES THE 2ND ARG IS FOUND IN THE FIRST OCCURENCES
// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
//SOLUTION:

//this works 
function occurrencesInString(str, char){
    let count = 0
    for(i=0;i<str.split('').length;i++){
        if(str[i]=== char){
            count++
        }
    }
    return count
}
console.log(occurrencesInString('Hello', 'o'))

//this also works
function strCount(str, letter){  
    return str.split(letter).length-1
}