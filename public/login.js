 const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
    errorMsg.textContent = 'Please fill in all fields.';
    return;
    }

    // Simulate login (replace with real backend call)
    if (username === 'admin' && password === '7206') {
    errorMsg.textContent = '';
    alert('Login successful!');
    // Redirect or load dashboard here
    } else {
    errorMsg.textContent = 'Invalid credentials. Please try again.';
    }
});