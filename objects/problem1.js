///Problem 1 :
// Given an array find the unique items in the array


let arr=["akshay","salman","akshay","rohit","salman","virat"]
let newArr={};
for (let i=0;i<=arr.length-1;i++){
  let key=arr[i];
  newArr[key]=1;
}
console.log(newArr);