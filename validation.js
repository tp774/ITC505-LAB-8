document.getElementById('secureForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission for validation

    // Clear previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    // Form field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate first name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        isValid = false;
    }

    // Validate last name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If all validations pass, display the entered data
    if (isValid) {
        alert('Form submitted successfully!');

        // Display the form data
        const resultContainer = document.createElement('div');
        resultContainer.style.marginTop = '20px';
        resultContainer.style.padding = '10px';
        resultContainer.style.border = '1px solid #ccc';
        resultContainer.style.borderRadius = '8px';
        resultContainer.style.backgroundColor = '#f9f9f9';

        resultContainer.innerHTML = `
            <h3>Form Data Submitted:</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
        `;

        // Append the result container to the body (or any specific location)
        const formElement = document.getElementById('secureForm');
        formElement.insertAdjacentElement('afterend', resultContainer);

        console.log("Form data submitted:", { firstName, lastName, email, password });
    }
});
