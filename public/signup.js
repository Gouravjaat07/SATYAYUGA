const form = document.getElementById('signupForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !username || !password) {
    errorMsg.textContent = 'Please fill in all fields.';
    return;
    }

    // Simulate signup (replace with real backend call)
    alert('Signup successful! Welcome to SATYAYUGA, ' + name);
    errorMsg.textContent = '';
    form.reset();
});