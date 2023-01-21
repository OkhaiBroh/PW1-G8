let savedToken;

class AuthService {
    constructor() {}
    setToken(token) {
        savedToken = token;
    }
    getToken() {
        return savedToken;
    }
}

const instance = new AuthService();
Object.freeze(instance);
export default instance;