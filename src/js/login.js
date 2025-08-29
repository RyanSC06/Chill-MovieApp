export function checkLogin(users, username, password) {
    const foundUser = users.find(
        (user) => user.username === username && user.password === password
    );

    if (foundUser) {
        return foundUser.id;
    }

    return null;
}
