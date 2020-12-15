let email = document.querySelector('#email1'),
    pass = document.querySelector('#pass1'),
    login = document.querySelector('.login'),
    remember = document.querySelector('.remember').firstElementChild,
    modal = document.querySelector('.modal'),
    span = document.querySelector('.close'),
    resModal = document.querySelector('.resModal'),
    modalBody = document.querySelector('.modal-body');


login.addEventListener('click', (e) => {
    e.preventDefault();
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
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        resModal.textContent = 'Login completed successfully';
        modalBody.textContent = 'Now you can use the site)'
        pass.value = '';
        email.value = '';
        remember.checked = false
    } else {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        resModal.textContent = 'Login failed';
        modalBody.textContent = 'You entered incorrect password or login details';
    }
}

span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = ''
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = ''
    }
}