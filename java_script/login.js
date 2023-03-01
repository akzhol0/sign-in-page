const email = 'admin';
const password = 'admin';
const emailEx = document.querySelector('[data-email]');
const passwordEx = document.querySelector('[data-password]');
const res = document.querySelector('[data-res]');
let counter = 0;

window.addEventListener('click', function(event) {
    if (!event.target.classList.contains('need')) return;

    if (event.target.classList.contains('eye')) {
        counter++;
        if (counter %2 === 0) {
            passwordEx.setAttribute('type', 'password');
        } else {
            passwordEx.setAttribute('type', 'text');
        }
    }

    if (event.target.classList.contains('logined')) {
        if (emailEx.value === email && passwordEx.value === password) {
            res.textContent = 'Joined';
            res.classList.add('yes');
            res.classList.remove('no');
            window.location.href = 'https://google.com';
        } else {
            res.textContent = 'Your email or password is incorrect';
            res.classList.remove('yes');
            res.classList.add('no');
        }
    }
});