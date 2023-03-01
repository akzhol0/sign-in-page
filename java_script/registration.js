const nameUser = document.querySelector('[data-name]');
const lastNameUser = document.querySelector('[data-lname]');
const emailUser = document.querySelector('[data-email]');
const firstPasswordUser = document.querySelector('[data-first-passw]');
const secondPasswordUser = document.querySelector('[data-second-passw]');
const inputWrapper = nameUser.closest('.input-wrapper');

setInterval(() => {
    const nameUserArray = [...nameUser.value];
    if (nameUserArray.length >= 3) {
        inputWrapper.querySelector('.name').textContent = "✔";
    } else {
        inputWrapper.querySelector('.name').textContent = "×";
    }

    const LastnameUserArray = [...lastNameUser.value];
    if (LastnameUserArray.length >= 3) {
        inputWrapper.querySelector('.lname').textContent = "✔";
    } else {
        inputWrapper.querySelector('.lname').textContent = "×";
    }

    if (!emailUser.value.includes('@')) {
        inputWrapper.querySelector('.email').textContent = "×";
    } else if (emailUser.value.includes('@')) {
        inputWrapper.querySelector('.email').textContent = "✔";
    }

    const passw = inputWrapper.querySelectorAll('.pass');
    if (firstPasswordUser.value === '' && secondPasswordUser.value === '') {
        passw.forEach((item) => {
            item.textContent = "×";
        })
    }
    else if (firstPasswordUser.value != secondPasswordUser.value) {
        passw.forEach((item) => {
            item.textContent = "×";
        })
    } else if (firstPasswordUser.value === secondPasswordUser.value) {
        passw.forEach((item) => {
            item.textContent = "✔";
        })
    }
}, 100);

let counter = 0;
const eyePass = document.querySelectorAll('.eyes-pass');
eyePass.forEach((item) => {
    item.addEventListener('click', () => {
        const everyPassw = document.querySelectorAll('#passw');
        counter++;

        everyPassw.forEach((item) => {
            if (counter %2 === 0) {
                item.setAttribute('type', 'password')
            } else if (counter %2 === 1){
                item.setAttribute('type', 'text')
            }
        })
    })
})

const res = document.querySelector('#res');
document.querySelector('#button-res').addEventListener('click', function() {
    if (nameUser.value === '' || lastNameUser.value === '') {
        res.textContent = 'Write your Name and Last Name';
    } else if (!emailUser.value.includes('@')) {
        res.textContent = 'Email should has an "@"';
    } else if (firstPasswordUser.value != secondPasswordUser.value || 
        firstPasswordUser.value === '' || secondPasswordUser.value === '') {
        res.textContent = 'Passwords must match';
    } else {
        res.setAttribute('id', 'yes');
        res.textContent = 'Succesfully registered!';
        window.location.href = 'login.html';
    }
});