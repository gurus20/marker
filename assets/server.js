$('#login-form').submit(function (e) {
    e.preventDefault();
    login();
});

function login() {
    var email = $('#email').val();
    var password = $('#password').val();

    if (email === 'pawan@gmail.com' && password === 'abc@1234') {
        window.location.href = 'http://localhost:5500/viewmark.html'
    }
}

