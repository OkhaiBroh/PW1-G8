let savedId;
let savedToken;

class AuthService {
    constructor() {}
    setToken(token) {
        savedToken = token;
    }
    getToken() {
        return savedToken;
    }

    setID(id) {
        savedId = id;
    }
    getID() {
        return savedId;
    }
}

const instance = new AuthService();
Object.freeze(instance);
export default instance;