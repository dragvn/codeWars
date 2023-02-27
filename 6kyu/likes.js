// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//SOLUTION

// use P.R.E.P
    //PARAMETERS
        //an array, could be empty
    //RETURN
        //a hardcoded string OR a concat string
    //EXAMPLES
        //hardcoded --- 'no one likes this'
        //concat --- 'Peter likes this'
    //PSEUDO CODE
        //check if array is empty
            //if empty return hardcoded str
        //check if one element 
            //concat str
        //check if 2 element
            //concat str
        //check if 3 e 
            //concat str
        //check if more than 3

function likes(names){
    if(names.length > 3) return(`${names[0]}, ${names[1]}, and ${names.length-2} others like this`)
    if(names.length === 3) return(`${names[0]}, ${names[1]}, and ${names[2]} like this`)
    if(names.length === 2) return(`${names[0]} and ${names[1]} like this`)
    if(names.length === 1) return(`${names[0]} likes this`)
    return console.log('no one likes this')
}


function likesRefactor(names){
    switch(true){
        case names.length > 3:
            console.log(`${names[0]}, ${names[1]}, and ${names.length-2} others like this`)
            break
        case names.length === 3:
            console.log(`${names[0]}, ${names[1]}, and ${names[2]} like this`)
            break
        case names.length === 2:
            console.log(`${names[0]} and ${names[1]} like this`)
            break
        case names.length === 1:
            console.log(`${names[0]} likes this`)
            break
        default:
            console.log('no one likes this')
    }
}


//TESTS
likes([])
likes(['Leroy', 'Jimi'])
likes(['Leroy', 'Jimi', 'Donny'])
likes(['Leroy', 'Jimi', 'Donny', 'Toot'])

likesRefactor([])
likesRefactor(['Leroy', 'Jimi'])
likesRefactor(['Leroy', 'Jimi', 'Donny'])
likesRefactor(['Leroy', 'Jimi', 'Donny', 'Toot'])