// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z

//read the index of the character
//console log it according to its index pos + 1, first time uppercase

//PARAMETERS
    //string of chars, could be upper or lowercase
//RETURN
    //each char concat relative to its index + 1, uppercase first time
//EXAMPLE
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
//PSEUDO CODE
    //split string
    //dup letters according to index
    //join or concat with '-' seperation 
    //return new str

//SOLUTION
const accum = s => s.split('').map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i)).join('-')
