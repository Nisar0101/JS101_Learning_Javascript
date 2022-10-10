//for ref
//Given stored username and password and input username and password, Print if the user can login or not.

// for the matching database (username ,password ) with the user entered credentials (usename and password).



//database data

let database_username = "user@gmail.com"
let database_password = "user@123"

//user entered data

let username = "user@gmail.com"
let password = "user@123"

//checking credentials and complete signing process

if (database_username == username) {
  if (database_password == password) {
    console.log("Log in Successful");
    
  } else{
    console.log("Incorrect Password");
  }
} else {
  console.log("Invalid Credentials");
}