/*
 * # How primitives and Objects behave differently
 *
 * => Primitives: Copied by their 'value'
 * => Objects: Copied by their 'reference'
 *
 */

// x and y are independent
let x = 10;
let y = x; /* value is being copied */
x = 20;

let a = { value: 10 };
let b = a; /* address or the reference is being copied */
a.value = 20; /* logs b = { value: 20 } */

/* Another example */
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj.value);
