//37. Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love TypeScript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different
//message.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a funtion with by-default values 
make_shirt();
// Calling a funtion now with Medium size and default message 
make_shirt("Medium");
// Calling a funtion now with small size and also different print message 
make_shirt("small", "I love javascript");
