function validateForm() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate username
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  var isFormValid = true;
  if (username === '' || !usernameRegex.test(username)) {
    isFormValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailRegex.test(email)) {
    isFormValid = false;
  }

  // Validate password
  if (password === '' || password.length < 8) {
    isFormValid = false;
  }

  // All fields are valid
  if(isFormValid === true) {
    console.log('Form submitted successfully');
  } else {
    console.log('Form submission failed');
  }
}