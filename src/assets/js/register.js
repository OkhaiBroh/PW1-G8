let data = {
    name: '',
    lastname: '',
    email: '',
    userimage: '',
    password: ''
}

export default {
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            userimage: '',
            password: ''
        }
    },
    methods: {
        /*async addUser() {
          let url = "http://puigmal.salle.url.edu/api/v2/users";
          
          let data = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            userimage: this.userimage
          };
  
          let post = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type" : "application/json",
            }
          };
    
          fetch(url, post).then((response) => response.json());
        }*/

        addUser() {
            console.log("DATA1");

            data.name = this.name;
            data.lastname = this.lastname;
            data.email = this.email;
            data.userimage = this.userimage;

            console.log(data);
        },

        registerAccount() {
            console.log('Registered!');
            
            data.password = this.password;
            console.log(data);

            if (this.password === this.conf_password) {
                console.log("Password Validated.");
            }
        }
    }
}