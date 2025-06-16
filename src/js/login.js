const form = document.getElementById('login-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = form.usernameInput.value;
    const password = form.passwordInput.value;

    let validIdentity = getValidIdentity();

    for (const identity of validIdentity) {
        if (identity.username == username && 
            identity.password == password) {
            window.location.href = '../html/beranda.html?login=success'
            return;
        }
    };

    alert("Username atau password salah!");
});


function getValidIdentity() {
    let validIdentity = localStorage.getItem('valid');

    try {
        validIdentity = JSON.parse(validIdentity) || [];
    } catch (error) {
        console.log(error);
        validIdentity = [];
    }

    return (validIdentity);
}