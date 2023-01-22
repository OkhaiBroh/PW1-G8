let savedId;
let savedToken;

class AuthService {
  constructor() {}
  setToken(token) {
    savedToken = token;
  }
  getToken() {
    if (savedToken == null) {
      let cookie = document.cookie.split("; ");
      savedToken = cookie[0].split("=")[1];
    }
    return savedToken;
  }

  setID(id) {
    savedId = id;
  }
  getID() {
    if (savedId == null) {
      let cookie = document.cookie.split("; ");
      savedId = cookie[1].split("=")[1];
    }
    return savedId;
  }
}

const instance = new AuthService();
Object.freeze(instance);
export default instance;
