// task:
// Create a website that lets users input some words
// it should return a list of all the unique words and how many times they appear.

// if a user inputs "League is is fun", the page should show:

// League 1
// is 2
// fun 1

// pseudo code:

// have a form submit event listener
// get the input value
// take out the punctuation marks like .?!,
// split the input into an array of words

// create an object to contain a property named the word and a value for the amount of times it appears
// ex: {Daniel: 1}
// loop through input words
// check if word is a property of the created object
// if yes add +1 to that property name
// if not create a property and give it a value of 1

// create a function to create and append an li
// give it the object we created as a parameter
// for each property in the object
// create an li
// create a text node containing the property name and its value
// append text node to li
// append li to ul
