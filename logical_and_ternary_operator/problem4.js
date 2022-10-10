// Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > c && b > a) {
  console.log("b is greatest");
} else if (c > a && c > b) {
  console.log("c is greatest");
}