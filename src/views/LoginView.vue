<template>
  <main class="login-register-row">
    <div class="login-register-column center">
      <p class="login-register-title">Open Events</p>
      <form
        action="/events"
        method=""
        class="login-register-panel login-panel-width"
      >
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_user.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="email"
              placeholder="Email"
              type="text"
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
            />
            <label class="label-input" for="password"> Password </label>
          </div>
        </div>
        <button @click="goToHome()">Login</button>
        <RouterLink class="link-text" to="/register-account">
          Not registered? Register
        </RouterLink>
      </form>
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
export default {
  methods: {
    goToHome() {
      this.$router.push("/events");
    },
  },
};
</script>
