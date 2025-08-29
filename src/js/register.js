export async function checkRegister(users, username, password, passwordConfirm, createUser) {
    if (password == passwordConfirm) {
        if (users.some((user) => user.username === username)) {
            alert('Username sudah terpakai!');
            return;
        };

        const newUser = await createUser({
            name         : username,
            avatar       : "/images/avatar/avatar1.png",
            username     : username, 
            password     : password,
            subscription : "Regular",
            continueList : [],
            email        : "",
        });
        return newUser.id;
    } else {
        alert('Konfirmasi password salah!');
        return null;
    }
}