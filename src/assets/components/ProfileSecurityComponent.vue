<template>
    <div class="security-container box-shadow">
        <p class="title-text">Security</p>
        <div class="inputs-container">
            <!--<div class="container">
                <label class="input-text" for="old_password"> Current Password </label>
                <input v-model="old_password" class="input" type="text" name="old_password" id="old_password" />
            </div>-->
            <div class="container">
                <label class="input-text" for="new_password"> New Password </label>
                <input v-model="new_password" class="input" type="text" name="new_password" id="new_password" />
            </div>
            <div class="container">
                <label class="input-text" for="confnew_password"> Confirm Password </label>
                <input v-model="confnew_password" class="input" type="text" name="confnew_password" id="confnew_password" />
            </div>
        </div>
        <div class="save-changes-container">
            <button v-on:click="UpdatePassword()" class="save-changes margin-btn-password"> Change Password </button>
        </div>
    </div>
</template>

<script>
import AuthService from '/src/assets/js/AuthService.js'

let user_data = {
    name: '',
    last_name: '',
    email: '',
    image: '',
    password: ''
};

export default {
    created() {
        let url = "http://puigmal.salle.url.edu/api/v2/users/" + AuthService.getID();

        fetch (url, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + AuthService.getToken(),
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                user_data.name = element.name;
                user_data.last_name = element.last_name;
                user_data.email = element.email;
                user_data.image = element.image;
            });
        })
        .catch(error => console.error(error))
    },

    data() {
        return {
            new_password: '',
            confnew_password: '',
        }
    },

    methods: {
        UpdatePassword() {
            let url = "http://puigmal.salle.url.edu/api/v2/users/";
            let new_data = {
                name: user_data.name,
                last_name: user_data.last_name,
                email: user_data.email,
                password: this.new_password,
                image: user_data.image,
            };

            console.log("newpass: " + this.new_password + " confpass: " + this.confnew_password);

            // comprobamos que las contraseñas nuevas son iguales
            if (this.new_password === this.confnew_password) {
                alert('Password Updated!');
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Authorization": "Bearer " + AuthService.getToken(),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(new_data)
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
            } else alert('The passwords must be equals!');
        }
    }
}
</script>