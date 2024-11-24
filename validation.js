document.getElementById('secureForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation

    console.log("Form submission prevented for validation."); // Debug log

    // Clear previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    console.log("Cleared previous error messages.");

    // Form field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log({ firstName, lastName, email, password, confirmPassword }); // Debug log

    let isValid = true;

    // Validate first name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        console.log("First name validation failed.");
        isValid = false;
    }

    // Validate last name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        console.log("Last name validation failed.");
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        console.log("Email validation failed: empty field.");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        console.log("Email validation failed: invalid format.");
        isValid = false;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        console.log("Password validation failed: empty field.");
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        console.log("Password validation failed: too short.");
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        console.log("Confirm password validation failed: empty field.");
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        console.log("Password match validation failed.");
        isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
        console.log("Form validation passed. Submitting the form.");
        alert('Form submitted successfully!');
        this.submit(); // Only submit if valid
    } else {
        console.log("Form validation failed.");
    }
});
