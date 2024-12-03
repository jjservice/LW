// Dummy user data for login and registration
let users = [
    { username: "user1", email: "user1@example.com", password: "password123" },
    { username: "user2", email: "user2@example.com", password: "password456" }
];

// Show registration form
document.getElementById('show-register').addEventListener('click', () => {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

// Show login form
document.getElementById('show-login').addEventListener('click', () => {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.register-container').style.display = 'none';
});

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let isAuthenticated = false;

    // Check if username, email, and password match
    for (let user of users) {
        if (user.username === username && user.email === email && user.password === password) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.music-player-container').style.display = 'block';
        document.getElementById('user-name').textContent = username;
    } else {
        document.getElementById('login-error-message').textContent = "Invalid username, email, or password.";
    }
});

// Handle registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const confirmEmail = document.getElementById('registerEmailConfirm').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerPasswordConfirm').value;
    let isUserExists = false;

    // Check if username or email already exists
    for (let user of users) {
        if (user.username === username || user.email === email) {
            isUserExists = true;
            break;
        }
    }

    // Validate email and password confirmation
    if (email !== confirmEmail) {
        document.getElementById('register-error-message').textContent = "Emails do not match. Please confirm your email.";
    } else if (password !== confirmPassword) {
        document.getElementById('register-error-message').textContent = "Passwords do not match. Please confirm your password.";
    } else if (isUserExists) {
        document.getElementById('register-error-message').textContent = "Username or email already exists. Please choose another one.";
    } else {
        // Register the new user
        users.push({ username, email, password });
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
        alert("Registration successful! You can now log in.");
    }
});

///Light Section/////

function ToggleLights(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}