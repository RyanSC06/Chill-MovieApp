import { getValidIdentity } from '../js/identity.js';

export function checkRegister(username, password, passwordConfirm) {
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
        return true;
    } else {
        alert('Konfirmasi password salah!');
        return false;
    }
}