<template>
  <div class="row">
    <div class="column center">
      <p class="title">Open Events</p>
      <div class="panel">
        <div class="horizontal">
          <img class="ico" src="../assets/icons/ico_user.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="username"
              placeholder="Username"
              type="text"
            />
            <label class="label-input" for="username"> Username </label>
          </div>
        </div>
        <div class="horizontal">
          <img class="ico" src="../assets/icons/ico_pass.svg" />
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
        <button>Login</button>
        <RouterLink class="login-text" to="/register-account">
          Not registered? Register
        </RouterLink>
      </div>
    </div>
    <div class="column">
      <img
        class="image"
        src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
body {
  overflow: hidden;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}

.image {
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
}

.panel {
  text-align: center;
  width: 200px;

  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 50px 75px 50px 75px;
}

.title {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 50px;
}

.center {
  display: flex;
  align-items: center; /* center horizontal */
  justify-content: center; /* center vertical */
  flex-direction: column;
}

.ico {
  width: 25px;
  height: 25px;
}

.horizontal {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>
