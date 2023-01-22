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

            if (data.name.length > 2 && data.name.length <= 20) {
              if (data.last_name.length > 2 && data.last_name.length <= 20) {
                if (data.email.length > 0 && data.email.length <= 200) {
                  if (data.image.length > 0 && data.image.length <= 200) {

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
                      }
                    } else {
                      alert('The Passwords are not the same!');
                      this.$router.push("/register-security");
                    }
                    
                  } else alert ('The image must be greater than 0 and less than 200.');
                } else alert ('The email must be greater than 0 and less than 200.');
              } else alert ('The last name must be greater than 0 and less than 20.');
            } else alert('The name must be greater than 3 and less than 20.');
        }
    }
}