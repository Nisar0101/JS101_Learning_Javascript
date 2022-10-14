//Problem 3: Print a box patterns using "*"
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for (let farms=1;farms<=10;farms++){
  bag="";
  for (let seeds=1;seeds<=10;seeds++){
    if (farms==1||farms==10){
      bag=bag+"*"
    }else{
      if (seeds==1||seeds==10){
        bag=bag+"*"
      }else{
        bag=bag+" "
      }
    } 
       
  
  }
  console.log(bag)
}