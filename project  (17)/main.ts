//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
// only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at 
//the end of your program.




let guestList =["taha", "bilal","umair", "zeeshan"];

let dontCome = guestList[0];

console.log(dontCome, "nhi aa raha hai"); 

guestList.splice(0, 1, "talha");

console.log("Good news !  we have found a bigger table for dinner");  

guestList.unshift("Asad");

guestList.push("Azan");

let middleIndex : number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "basim");

console.log("update list") ;

guestList.forEach((guest) => console.log(`salam ${guest}, would you like to dinner ?`));

