import { getValidIdentity } from '../js/identity.js';

export function checkLogin(username, password) {
    let validIdentity = getValidIdentity();

    for (const identity of validIdentity) {
        if (identity.username == username && 
            identity.password == password) {
            return true;
        }
    }

    return false;
}