var user = document.getElementById("user");
var pass = document.getElementById("pass");
var error = document.getElementById("error");
var button = document.getElementById("button");

function validate() {
    // Check for empty fields
    if (user.value.trim() === "" || pass.value.trim() === "") {
        alert("Username and password cannot be empty.");
        return false;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user.value)) {
        alert("Invalid email format.");
        return false;
    }

    // Validate phone number format
    var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneNumber = document.getElementById("phone_number").value;
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Invalid phone number format.");
        return false;
    }

    return true;
}

function checkPasswordStrength() {
    const password = pass.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!password) {
        pass.style.border = "";
        error.textContent = "";
        return;
    }

    if (!passwordRegex.test(password)) {
        pass.style.border = "2px solid red";
        error.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
        return;
    } else {
        let strength = "poor";
        if (password.length >= 12) {
            strength = "strong";
        } else if (password.length >= 8) {
            strength = "medium";
        }

        switch (strength) {
            case "strong":
                pass.style.border = "2px solid green";
                error.textContent = "Strong password!";
                break;
            case "medium":
                pass.style.border = "2px solid orange";
                error.textContent = "Medium password strength.";
                break;
            case "poor":
                pass.style.border = "2px solid red";
                error.textContent = "Weak password. Consider using a combination of uppercase and lowercase letters, numbers, and symbols.";
                break;
        }
    }
}

pass.addEventListener("input", checkPasswordStrength);
