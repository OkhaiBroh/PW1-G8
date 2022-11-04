<template>
  <div class="login-register-row">
    <div class="login-register-column center">
      <p class="login-register-title">Open Events</p>
      <div class="bar-container">
        <div class="line-container">
          <span class="circle-blue"></span>
          <hr class="line" />
          <span class="circle-gray"></span>
        </div>
        <div class="text-container">
          <p class="bar-text1">Account</p>
          <p class="bar-text2">Security</p>
        </div>
      </div>
      <div class="login-register-panel register-panel-width">
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_pass.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <label class="label-input" for="password"> Password* </label>
          </div>
        </div>
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_pass.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="confirm-password"
              placeholder="Confirm Password"
              type="password"
              required
            />
            <label class="label-input" for="confirm-password">
              Confirm Password*
            </label>
          </div>
        </div>
        <RouterLink class="link-button" to="/register-successful">
          Register
        </RouterLink>
        <!--<button class="next"> Register </button>-->
        <RouterLink class="link-text" to="/"> Registered? Log in </RouterLink>
      </div>
    </div>
    <div class="login-register-column">
      <img
        class="login-register-image"
        src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
  .line {
    border: 2px solid var(--blue_color);
    width: 100px;
  }
</style>
