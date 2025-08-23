export function getValidIdentity() {
    let validIdentity = localStorage.getItem('valid');

    try {
        validIdentity = JSON.parse(validIdentity) || [];
    } catch (error) {
        console.log(error);
        validIdentity = [];
    }

    return (validIdentity);
}