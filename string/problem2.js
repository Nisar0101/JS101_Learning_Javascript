////Problem 2 :////

//Given an array of string count the overall total number of characters


let array_string = ["shera", "babbar", "khan", "coders"];

sum = 0;

for (let i = 0; i <= array_string.length - 1; i++) {
  sum = sum + array_string[i].length;

}
console.log(sum)
