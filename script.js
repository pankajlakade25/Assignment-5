 function myFunction() {
     var x = document.getElementById("name").value;
     var y = document.getElementById("username").value;
     var z = document.getElementById("password").value;
     var text;
     if (x == "" && y == "" && z == "") {
         text = "text empty";
         console.log("hello");
     } else {
         text = "Input ok";
         console.log("welcome");
     }
     document.getElementById("demo").innerHTML = text;
 }

 function login() {
     var a = document.getElementById("loginname");
     var b = document.getElementById("password");
     var txt;
     debugger;

     if (a == "" && b == "") {

         alert("fill text filed");


     } else {

         alert("user suceessfully fill text filed ");

     }
 }