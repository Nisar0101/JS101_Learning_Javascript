////Problem 1:>>
////Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12

let days
for(let month=1;month<=12;month++){
  if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    days=31;               //total days in month
  }else if (month==2){
    days=28;     //total days in month
  }else {
    days=30;         //total days in month
  }
  for (let dates=1;dates<=days;dates++){
    console.log(dates+"-"+month)
  }
}