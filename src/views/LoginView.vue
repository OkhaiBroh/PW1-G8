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
              name="username"
              placeholder="Username"
              type="text"
              v-model="username"
            />
            <label class="label-input" for="username"> Username </label>
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
        <button v-on:click="addUser()">Login</button>
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
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    goToHome() {
      this.$router.push("/events");
    },

    addUser() {
      console.warn("Function Called!", this.username, this.password);
    },
  },
};

async function getUser (username) {
  const response = await fetch('http://puigmal.salle.url.edu/api/v2/users?');
}
</script>
