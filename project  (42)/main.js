//42. Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to
//see that the list has actually been modified.
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through.map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array cotaining name    
var magician_names = ["herry poter", " taha", "talha"];
//call make_great function to modify magicians names
var great_magicions = make_great(magician_names);
//call show magicians function that show modifyed list of magicians
show_magicians(great_magicions);
