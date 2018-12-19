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

let textArea = document.querySelector('textarea');
let list = document.createElement('ul');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  // empty list in case its already submitted
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // input value
  let inputParagraph = textArea.value;
  let filteredInputParagraph = inputParagraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let filteredInputWords = filteredInputParagraph.split(' ');

  // object to store word and word counter
  let words = {};

  // loop to fill words object with input values
  filteredInputWords.forEach(function (word) {
    if (Object.keys(words).includes(word)) {
      words[word] += 1
    } else {
      words[word] = 1;
    }
  });

  createAndAppendListItems(list, words);

  // append the list to .container
  document.querySelector('.container').appendChild(list);

  function createAndAppendListItems (list, object) {
    for (property in object) {
      let listItem = document.createElement('li');
      let textNode = document.createTextNode(property + ': ' + object[property]);
      listItem.appendChild(textNode);
      list.appendChild(listItem);
    }
  }
});