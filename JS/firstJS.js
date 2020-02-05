
var age ; 
var message ; 
var txt;
age = prompt("Please Enter Your Age ! ")
var msg;

function permission(age){


if (age >= 18 && age < 30 ){
    message = "you are allow to rejister "
    msg= window.alert(message);
  var C = confirm("Do you want to continue ? ");
  if (C == true) {
    txt = "OK Go ahead and fill out the form";
  } else {
    txt = "Ok No problem Thank you";
  }
  
  msg= window.alert(txt);

}
else {
    message = "Sorry, you can't rejister "
    msg= window.alert(message);
}

return msg;
}

permission(age);

