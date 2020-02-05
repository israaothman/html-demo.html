var userName; 
var password ; 
var input ="";


userName = prompt("Please Enter the user name ... 'Hint for the TAs user name & password is user' ");
password = prompt("please Enter the passwor .... dont forget its ''user'");

if(userName === 'user' && password === 'user'){ 
    window.alert("Welcome to your profile :) ");
    cours(result(input));
}
else {
    window.alert("The user name or the passwor is wrong"); 
    openHome();
}


function openHome() {
    window.open("https://israaothman.github.io/html-demo.html/HomePage" , "_self");
  }

function result(input){
    while(input !== 'pass' && input !== 'fail' ){
       input = prompt("Do you want to see the courses that you pass in or that you fail in ... please just enter pass or fail");
          }

     return input;
    }

      function cours(input){
     if(input === 'pass'){
       document.write("<article id='pass'> <p> You have passed on : <ul> <li>word</li> <li>Excel</li> <li>Computer Essential</li> </ul> </p></article>")
     }
     else if(input === 'fail'){
        document.write("<article id='fail'> <p> You have failed on: <ul> <li>Online colaboration</li> <li>DataBase</li> <li>Power point</li> </ul> </p></article>") 
     }
    }
    
