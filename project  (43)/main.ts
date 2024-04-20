//43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

//function to make magicians great through.map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `the great ${name}`);
}
//define an array cotaining name    
let magician_names =["herry poter", " taha", "talha"];

//making a copy  of Orignal array through .slice() function
let copy_magician_names = magician_names.slice()

//modyfy the copyed array to inclued "the great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

//show both array original and copyed

//original
console.log("original array\n")
show_magicians(magician_names);

//copyed
console.log("copyed array\n") 
show_magicians(copy_great_magicians)