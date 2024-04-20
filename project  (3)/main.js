//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "mohammad taha Baig";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
var titlecase = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titlecase);
