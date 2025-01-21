// Select the login form
const loginForm = document.getElementById('login-form');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Capture input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login process (you'll connect this to the backend later)
  if (email === "student@example.com" && password === "password123") {
    alert("Login successful!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
// Select the links
const forgotPasswordLink = document.getElementById('forgot-password');
const signUpLink = document.getElementById('sign-up');

// Event listener for "Forgot Password"
forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  alert("Redirecting to the Forgot Password page (Feature coming soon!)");
});

// Event listener for "Sign Up"
signUpLink.addEventListener('click', (event) => {
  event.preventDefault();
  alert("Redirecting to the Sign Up page (Feature coming soon!)");
});
