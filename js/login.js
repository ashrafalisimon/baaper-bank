document.getElementById('login-submit').addEventListener('click', function () {
    const emailField =document.getElementById('user-email');
    const userEmail=  emailField.value;

    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    if(userEmail == 'ashraf@gmail.com' && userPass == 'password'){
        window.location.href= 'banking.html';
    }
});
