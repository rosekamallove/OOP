/* Objects:
 * -> Creating Objects
 * -> Factories and Constructors
 * -> Primitives and Reference Types
 * -> Working with Properties
 * -> Private Properties
 * -> Getters / Setters
 */

const circleObject = {
  /* Props */
  radius: 1,
  location: {
    /* Key with an object as a value */
    x: 1,
    y: 1,
  },
  draw: function (/*Method*/) {
    //console.log("draw");
  },
}; /* Object Literal Syntax */

/*
    => Object literal syntax is not a good way to declare an object, suppose
    we wanted to make another circle then we would have to copy past the object
    circle, which will in return create another instance of the method.

    => Duplicate methods is not good, suppose the object has 10 methods and ,
    they have a bug now and we duplicated the object at multiple places now,
    we would have to fix the bug in all the instances.
 */

/* _Solution: Factory or a constructor Function:_ */

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      //console.log("draw");
    },
  };
}
const circle = createCircle(2);

// Constructor Function
function Circle(radius) {
  //console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    //console.log("draw");
  };
}

/* This new operator creates an empty object and then point the props
 * with the 'this' keyword towards it.
 *
 * Without this new keyword, the object created is a global object wich
 * obviously is not good.
 */

const another = new Circle(1);
Circle.call({}, 1);
/* same stuff, above two lines */
Circle.apply({}, [1, 2, 3]);

/*
 * Function are Ojects !!
 * Circle.name : "Circle",
 * Circle.length: 1,
 * Circle.constructor : Function() {[native code]}
 */

const AnotherCircle = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
`
); /* Same Object diff syntax */
const anotherCircle = new AnotherCircle(2);

/*
 * Objects in JS are Dynamic:
 * -> We can add and update props in them.
 */

circle.location = { x: 1 };
circle["location"] = { x: 1 };

const proprtyName = "location";
circle[proprtyName] = { x: 1 };

/* When the proprtyName has specialChar or Spaces */
const proprtyName1 = "center-location";
circle[proprtyName1] = { x: 3 };

delete circle.location;
delete circle[proprtyName1];
delete circle[proprtyName];

/* Iterating over the proprties */
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}
const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("circle has radius");

/*
 * _NOTE: For private Properties go to abstraction.js_
 */
