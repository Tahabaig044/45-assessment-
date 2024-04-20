//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "mohammad taha Baig";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let titlecase = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titlecase);