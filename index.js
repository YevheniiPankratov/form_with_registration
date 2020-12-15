let email = document.querySelector('#email1'),
    pass = document.querySelector('#pass1'),
    login = document.querySelector('.login'),
    remember = document.querySelector('.remember').firstElementChild;


login.addEventListener('click', (e) => {
    e.preventDefault();
    pass.value = '';
    email.value = '';
    remember.checked = false
    form();
})

function checkEmail(value) {
    let expEmail = /^[^\s\-]+[a-zA-Z\-\][\w\d]+\@[\w]+\.[a-zA-Z]+$/;

    if (expEmail.test(value)) {
        return true;
    }
}

function checkPass(value) {
    let expPass = /^\S[a-zA-Z0-9]{5,12}$/;

    if (expPass.test(value)) {
        return true;
    };
}

function form() {
    if (checkPass(pass.value) && checkEmail(email.value)) {
        console.log('good');
    }
}
