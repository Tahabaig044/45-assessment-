//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
var friendName = ["talha", "bilal", "umair", "zeeshan"];
friendName.forEach(function (nameFriend) { return console.log("Hello ".concat(nameFriend, " how are you")); });
