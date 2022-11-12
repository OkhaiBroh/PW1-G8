<template>
  <div class="login-register-row">
    <div class="login-register-column center">
      <p class="login-register-title">Open Events</p>
      <div class="bar-container">
        <div class="line-container">
          <span class="circle-blue"></span>
          <hr class="line" />
          <span class="circle-blue"></span>
        </div>
        <div class="text-container">
          <p class="bar-text1">Account</p>
          <p class="bar-text2">Security</p>
        </div>
      </div>
      <div class="login-register-panel register-panel-width panel-padding">
        <p class="panel-title">Congratulations!</p>
        <p class="panel-text">Registration has been successfully</p>

        <RouterLink class="link-button button-margin" to="/">
          Log In
        </RouterLink>
        <!--<button class="next"> Log In </button>-->
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

.panel-title {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 75px;
}

.panel-text {
  font-size: 18px;
}

.button-margin {
  margin-top: 75px;
}
</style>
