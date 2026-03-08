document.getElementById('login-btn').addEventListener('click', () => {
    const userName = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;

    if(userName == 'admin' && password == 'admin123'){
        window.location.assign("./home.html");
    }else{
        alert("Login Failed");
    }
    
})