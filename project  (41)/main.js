//41. Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
// define a function to print each magician from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define an array cotaining name 
var magician_name = ["herry poter", " taha", "talha"];
// call tha fumction to print each marician name 
show_magicians(magician_name);
