//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
//creating a guest list Array
var guestList = ["taha", "bilal", "umair", "zeeshan"];
//making variable for those guset who cant come 
var dontCome = guestList[0];
//print the name of guest list Array
console.log(dontCome, "nhi aa sakta");
//add oe remove values form guest list array
guestList.splice(0, 1, "talha");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner ?")); });
