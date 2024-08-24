function verifier() {
event.preventDefault();
var emailValue = document.getElementById("exampleInputEmail1").value;
var mdpValue = document.getElementById("exampleInputPassword1").value;

if (emailValue.endsWith("@ieee.org") && mdpValue.trim() !== "") 
{
window.location.href = "second.html";
} 
else if (!emailValue.endsWith("@ieee.org")) {
alert("Your IEEE E-mail Must end With @ieee.org");
}
else if (!mdpValue.trim() !== ""){
alert("Please Enter Your Password");
}
}
