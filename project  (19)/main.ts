//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.


//making a array of countries and print its orginal order

let countresToVisit: string[] = ["china", "Denmark","Brazil","Argentina"];
console.log("orginal order:" , countresToVisit);

//print the array in alphabetical order withoit modifycing the actual Array list
console.log("alphabetical order:", [...countresToVisit].sort()); 

//show that the array is still in its orginal order 
console.log("still in its orginal order:", countresToVisit);

//print the array in reversed order  without modifycing the actual Array list
console.log("reverse order:", [...countresToVisit].reverse()); 


//show that the array is still in its orginal order 
console.log("still in its orginal order:", countresToVisit);

//we have changed the orginal array order now
console.log("orginal array reversed:", countresToVisit.reverse()); 

//print the array to show that it's back to  its original order
console.log("back to orginal reversed:", countresToVisit.reverse()); 

// print the array to show that its order has been changed in alphabeticsal order
console.log("sorted in alphabeticsal order:", countresToVisit.sort()); 

//we have changed again the orginal array order now in reverse order again
console.log("orginal array reversed again:", countresToVisit.reverse()); 
