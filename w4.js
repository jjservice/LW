// Load users from localStorage, or set to an empty array if none exist
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: "user1", email: "user1@example.com", password: "password123" },
    { username: "user2", email: "user2@example.com", password: "password456" }
];

// Save users to localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

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

// Show password recovery form
document.getElementById('show-password-recovery').addEventListener('click', () => {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.password-recovery-container').style.display = 'block';
});

// Show email recovery form
document.getElementById('show-email-recovery').addEventListener('click', () => {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.email-recovery-container').style.display = 'block';
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
        saveUsers(); // Save updated user list to localStorage
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
        alert("Registration successful! You can now log in.");
    }
});

// Handle password recovery
document.getElementById('passwordRecoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('recoveryEmail').value;
    let userExists = false;

    for (let user of users) {
        if (user.email === email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert(`Password recovery link sent to ${email}. Please check your inbox.`);
        document.querySelector('.password-recovery-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    } else {
        document.getElementById('password-recovery-error').textContent = "Email not found. Please check your email address.";
    }
});

// Handle email recovery (simulated here)
document.getElementById('emailRecoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailRecoveryEmail').value;
    let userExists = false;

    for (let user of users) {
        if (user.email === email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert(`An email has been sent to ${email} to recover your account.`);
        document.querySelector('.email-recovery-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    } else {
        document.getElementById('email-recovery-error').textContent = "Email not found. Please check your email address.";
    }
});


///Light Section////

function toggleLights(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}




           // Handle logout
           document.getElementById('logoutButton').addEventListener('click', function() {
            // Hide the music player container and show the login container
            document.querySelector('.music-player-container').style.display = 'none';
            document.querySelector('.login-container').style.display = 'block';
            
            // Reset the user-related UI (if needed)
            document.getElementById('user-name').textContent = "";
        
            // Optionally, you can clear any session or user data if you're using session storage or cookies.
            // For now, localStorage won't be affected, but if you're storing session-specific data, you can clear it here.
            // localStorage.removeItem('currentUser'); // Example for clearing session info
        
            // Optionally, hide the logout button when logged out
            document.getElementById('logoutButton').style.display = 'none';
        });
        
        // Show the logout button after a successful login
        function handleSuccessfulLogin(username) {
            document.querySelector('.login-container').style.display = 'none';
            document.querySelector('.music-player-container').style.display = 'block';
            document.getElementById('user-name').textContent = username;
            document.getElementById('logoutButton').style.display = 'inline-block'; // Show logout button
        }
        
        // Modify the login form handling to show the logout button
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
                handleSuccessfulLogin(username);
            } else {
                document.getElementById('login-error-message').textContent = "Invalid username, email, or password.";
            }
        });