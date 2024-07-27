const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior (reloading the page)
  event.preventDefault();

  // Get the form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;

  // Validate the data (optional)
  // You can add checks for empty fields, email format, etc.

  // Process the data (send to server, display message, etc.)
  console.log("Student Name:", name);
  console.log("Student Email:", email);

  // Example: Send data to server using AJAX (if needed)
  // You'll need to implement an API endpoint on your server to receive the data

  // Display a success message (optional)
  alert("Registration successful!");
});