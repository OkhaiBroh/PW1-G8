<template>
  <main class="login-register-row">
    <div class="login-register-column center">
      <p class="login-register-title">Open Events</p>
      <div class="login-register-panel login-panel-width">
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_user.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="email"
              placeholder="Email"
              type="text"
              v-model="email"
            />
            <label class="label-input" for="email"> Email </label>
          </div>
        </div>
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_pass.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="password"
              placeholder="Password"
              type="password"
              v-model="password"
            />
            <label class="label-input" for="password"> Password </label>
          </div>
        </div>
        <button v-on:click.prevent="Login()">Login</button>
        <RouterLink class="link-text" to="/register-account">
          Not registered? Register
        </RouterLink>
      </div>
    </div>
    <div class="login-register-column">
      <img
        class="login-register-image"
        src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg"
      />
    </div>
  </main>
</template>

<script>

import AuthService from '/src/assets/js/AuthService.js'

export default {
  data() {
      return {
        email: '',
        password: ''
      }
  },
  methods: {
      Login() {
          let url = "http://puigmal.salle.url.edu/api/v2/users/login";
          
          let data = {
            email: this.email,
            password: this.password
          };

          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(data2 => {
              AuthService.setToken(data2.accessToken);

              let prueba = AuthService.getToken();
              console.log(prueba);
            })
      }
  }
}
</script>
