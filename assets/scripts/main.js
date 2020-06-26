const userName = 'admin';
const password = 'admin';

document.querySelector('.login100-form-btn').addEventListener('click', event => {
    event.preventDefault();
    const usName = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (userName === usName && password === pass) {
        window.location.href = "map.html";
    }
});