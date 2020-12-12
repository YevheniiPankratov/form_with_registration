let email = document.querySelector('#email1'),
    pass = document.querySelector('#pass1'),
    login = document.querySelector('.login');

login.addEventListener('click', form)

function checkEmail(value) {
    let expEmail = /^[^\s\-]+[a-zA-Z\-\][\w\d]+\@[\w]+\.[a-zA-Z]+$/;


    if (expEmail.test(value)) {
        console.log('login');
    }
}

function checkPass(value) {
    let expPass = /^\S[a-zA-Z0-9]{6,12}$/;

    if (expPass.test(value)) {
        console.log(13);
    };
}

function form() {
    checkEmail(email.value);
    checkPass(pass.value);
}

form()

const regex = /^[^\s\-]+[a-zA-Z\-\][\w\d]+\@[\w]+\.[a-zA-Z]+$/;
const str = ' sergey.makarenko@nure.ua';
let m;

if ((m = regex.exec(str)) !== null) {
    // The result can be accessed through the m-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}