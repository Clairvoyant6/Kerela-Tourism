document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateSignupForm()) {
        signupForm.submit();
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateLoginForm()) {
        loginForm.submit();
      }
    });
  }
});

function validateSignupForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  return true;
}


function validateLoginForm() {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  if (!loginEmail || !loginPassword) {
    alert("Please fill in all fields for login.");
    return false;
  }

  // Additional validation logic if needed

  return true; // Return true if the form passes validation
}
