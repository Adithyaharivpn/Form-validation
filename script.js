var user=document.getElementById("user")
var pass=document.getElementById("pass")
var error=document.getElementById("error")
var button=document.getElementById("button")
function validate() {
    // Check username and password emptiness
    if (user.value.trim() === "" || pass.value.trim() === "") {
      alert("Username and password cannot be empty.");
      return false;
    }
  
    // Check email format (assuming 'user' input is for email)
    const emailRegex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (!emailRegex.test(user.value)) {
      alert("Invalid email format.");
      return false;
    }
  
    // Check password strength
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(pass.value)) {
      pass.style.border = "2px solid red";
      pass1.textContent = "Password must be at least 8 characters long, contain at least one uppercase and one lowercase letter, and one number.";
      return false;
    } else {
      // Determine password strength based on additional criteria
      let strength = "poor";
      if (pass.value.length >= 12) {
        strength = "strong";
      } else if (pass.value.length >= 8) {
        strength = "medium";
      }
  
      // Set border color and error message based on strength
      switch (strength) {
        case "strong":
          pass.style.border = "2px solid green";
          pass1.textContent = "Strong password!";
          break;
        case "medium":
          pass.style.border = "2px solid orange";
          pass1.textContent = "Medium password strength.";
          break;
        case "poor":
          pass.style.border = "2px solid red";
          pass1.textContent = "Weak password. Consider using a combination of uppercase and lowercase letters, numbers, and symbols.";
          break;
      }
    }
  
    // Validate phone number (assuming 'phone_number' input exists)
    var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phoneNumber = document.getElementById("phone_number").value;
    if (!phoneNumberRegex.test(phoneNumber)) {
      alert("Invalid phone number format.");
      return false;
    }
  
    // All validations passed
    return true;
  }