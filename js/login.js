function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
window.location = "classwork3.html"; // Redirecting to other page.
return false;
}
}
}