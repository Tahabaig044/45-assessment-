
//37. Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love TypeScript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different
//message.


function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){ 
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a funtion with by-default values 

make_shirt();

// Calling a funtion now with Medium size and default message 
make_shirt("Medium")

// Calling a funtion now with small size and also different print message 

make_shirt("small", "I love javascript")