//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
////write more tests. Have at least one True and one False result for each of the following:
//import { using } from "rxjs";
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruites = ["apple ", "banana", "cherry"];
//test for equality and inequality with string
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n\nIs Apple is not equal to orange?");
console.log(apple != "orange");
// test using the lowerCase function
console.log("\nIs apple is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == apple);
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != apple);
//Namerical tests 
// equal to
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);
// not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);
//Greater then 
console.log("\n Is ten greater than zero?");
console.log(ten > 0);
//Less then
console.log("\n Is twenty less than ten?");
console.log(twenty < 10);
//Greater then or equal to 
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//less then or equal to 
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
//using && and
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
//using || (or) operator
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
//test whether an item is inclued in array
console.log("\n Is cheery  included in the fruits array ? ");
console.log(fruites.includes("cheery"));
