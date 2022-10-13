////Problem 1 :////
////Given a string count the number of words in that string


let string = "string is collection of characters";
count = 0;
for (let i = 0; i <= string.length - 1; i++) {
  if (string[i] == [" "]) {
    count=count+1;
  }
}
////this if else is for when string is empty("") it gives output  "1" so for that purpose use if else here so it became "0" for empty string
if (string.length - 1 != 0) {
  console.log(count + 1);
} else {
  console.log(0);
}