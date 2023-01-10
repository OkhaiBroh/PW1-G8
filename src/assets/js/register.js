let data = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    image: ''
}

export default {
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            image: '',
            password: '',
            conf_password: ''
        }
    },
    methods: {
        addUser() {
            data.name = this.name;
            data.last_name = this.lastname;
            data.email = this.email;
            data.image = this.image;
        },

        registerAccount() {
            let url = "http://puigmal.salle.url.edu/api/v2/users";

            if (this.password === this.conf_password) {
              if (this.password.length >= 8) {
                data.password = this.password;
                
                fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
              } else {
                alert('The Password must be greater than 7!');
                this.$router.push("/register-security");
                data.password = '';
              }
            } else {
              alert('The Passwords are not the same!');
              this.$router.push("/register-security");
              data.password = '';
            }
        }
    }
}