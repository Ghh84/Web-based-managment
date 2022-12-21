export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username) {
        return { 'username': user.accessToken,'role': user.role };
    } else {
        return {};
    }
}