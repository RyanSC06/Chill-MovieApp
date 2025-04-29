const form = document.getElementById('register-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = form.usernameInput.value;
    const password = form.passwordInput.value;
    const passwordConfirm = form.confirmPasswordInput.value;

    if (password == passwordConfirm) {
        let validIdentity = getValidIdentity();

        for (const identity of validIdentity) {
            if (identity.username == username) {
                alert('Username sudah terpakai!');
                return;
            }
        };

        validIdentity.push({username: username, password: password});
        localStorage.setItem('valid', JSON.stringify(validIdentity));

        window.location.href = '../html/beranda.html?register=success'
    } else {
        alert('Konfirmasi password salah!');
    }
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