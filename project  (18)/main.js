//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its
//order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var guestList = ["taha", "bilal", "umair", "zeeshan"];
var dontCome = guestList[0];
console.log(dontCome, "nhi aa raha hai");
guestList.splice(0, 1, "talha");
console.log("Good news !  we have found a bigger table for dinner");
guestList.unshift("Asad");
guestList.push("Azan");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "basim");
console.log("update list");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner ?")); });
console.log("unfortunately, the new dinner table wont arrive on time, so i can only inite two guests to dinner with me");
//using whil-loop to guest from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " i cant invite you to dinner"));
}
//sending a invitatings to the last two on the list
console.log("invitation to the last 2 guests");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invited to dinner ")); });
//removing last two guest the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
