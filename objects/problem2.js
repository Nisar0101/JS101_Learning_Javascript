// Problem 2 :
// Given a string print, the number of times each character appears

let str="masai"
let newstr={};
for (let i=0;i<=str.length-1;i++){
  let key=str[i];
  
  if (!newstr[key]){
    newstr[key]=1
  }else{
    newstr[key]=newstr[key]+1
  }
}
console.log(newstr);