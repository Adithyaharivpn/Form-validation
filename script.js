var user=document.getElementById("user")
var pass=document.getElementById("pass")
var pass1=document.getElementById("pass1")
var button=document.getElementById("button")
function validate() {
    if (user.value.trim()=="" || pass.value.trim()=="") {
        alert("Fleid cannot be empty");
        return false
    }
    else if(pass.value.length<8){
        pass.style.border="2px solid red";
        pass1.textContent="Password should be 8 characters long";
        return false
    }
    else {
        pass.style.border="2px solid green";
        pass1.textContent="";
        return true
    }
}
function phonenumber() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phoneno.test(phoneno.value)) {
      return true;
    }  
    else {  
      alert("message");
      return false;
    }
  }