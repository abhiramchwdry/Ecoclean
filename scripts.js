document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    if (email) {
        messageElement.textContent = 'Thank you for subscribing!';
        messageElement.style.color = 'green';
        document.getElementById('email').value = '';
    } else {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
    }
});
