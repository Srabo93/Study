/**
 * 'this' keyword describes the dynamic context, entirely dependent on how it is called
 */
function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`);
  };
}
var assignment = classroom("Kyle"); // 'Kyle says to study undefined'

/**
 * Now we provide context that can utilize this 'this-aware function'
 */
var homework = {
  topic: "JS",
  assignment: assignment,
};

homework.assignment(); // Kyle says to study JS

// Or we can use the call method to bind wich takes an object use for setting the this reference
var otherHomework = {
  topic: "Math",
};

assignment.call(otherHomework); // Kyle says to study Math

/**
 * Prototypes
 * are a linkage betweent two objects, the linkage is
 * hidden, the purpose of prototype linkage is delegation
 * of property/method access of two or more objects to
 * cooperate with each other to perform tasks
 */

var homework = {
  topic: "JS",
};

var otherHomework = Object.create(homework);

otherHomework.topic; // "JS"

//Considering following
homework.topic;
// "JS"

otherHomework.topic;
// "JS"

otherHomework.topic = "Math";
otherHomework.topic; // "Math"

homework.topic; // "JS" -- not "Math"

/**
 * Now throwing the 'this' dynamic context to prototype linkage
 */
var homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  },
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study(); // Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study(); // Please study Math

/**
 * Classes are prototypes in the background
 */
class Classroom {
  constructor() {
    // ..
  }

  welcome() {
    console.log("Welcome, students!");
  }
}

var mathClass = new Classroom();

mathClass.welcome(); // Welcome, students!

/**
 * class definition under the hood with prototype linkage
 */
var Classroom = {
  welcome() {
    console.log("Welcome, students!");
  },
};

var mathClass = Object.create(Classroom);

mathClass.welcome(); // Welcome, students!

/**
 * The prototype classpattern would look like following
 */
function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome(); // Welcome, students!
