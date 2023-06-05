// following example is only working in non-strict mode
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy"; // will reach out fo the outer function scope variable
  topic = "React"; // if no variable found it will be created <- this part not working in strict mode
  console.log("Welcome");
}

otherClass(); // Welcome
teacher; // Suzy
topic; // React

// Function Expressions
var clickHandler = function() {
  //.. this is anonymous function expression
};
var ids = people.map((person) => person.id);

var keyHandler = function keyHandler() {
  //.. named function expressions
};
var ids = people.map(function getId(person) {
  return person.id;
});

// IIFEs = immediatly invoked functino expressions
// IIFEs when invoked add a new Scope that is only available inside the function, thats why the variable did not get overwritten.
var teacher = "Kyle"
(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); //Suzy
})();

console.log(teacher); //Kyle

/**
 * to achieve the same effect we use block scoping via let declaration
 */

var teacher = "Kyle";

{
  // yes we can define actual blocks to scope stuff
  let teacher = "Suzy";
  console.log(teacher); //Suzy
}
console.log(teacher); //Kyle

/**
 * Closure = is when a function 'remembers' the variables outside of it
 * even when beeing passed somewhere else
 */
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}
var myQuestion = ask("what is closure?");
myQuestion(); // what is closure?

// This example shows closure working with async code
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}
ask("what is closure?"); // what is closure?
