// Handle registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful! You can now log in.');
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
/////Log Out////
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('authToken'); // Clear the token
    document.querySelector('.login-container').style.display = 'block'; // Show login page
    document.querySelector('.music-player-container').style.display = 'none'; // Hide music player
});
