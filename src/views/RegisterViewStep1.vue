<template>
  <main class="login-register-row">
    <div class="login-register-column center">
      <p class="login-register-title">Open Events</p>
      <div class="bar-container">
        <div class="line-container">
          <span class="circle-gray"></span>
          <hr class="line" />
          <span class="circle-gray"></span>
        </div>
        <div class="text-container">
          <p class="bar-text1">Account</p>
          <p class="bar-text2">Security</p>
        </div>
      </div>

      <form
        action="/register-security"
        class="login-register-panel register-panel-width">
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_user.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="name"
              placeholder="Name"
              type="text"
              v-model="name"
              required
            />
            <label class="label-input" for="name"> Name* </label>
          </div>
        </div>
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_user.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="lastname"
              placeholder="Lastname"
              type="text"
              v-model="lastname"
              required/>
            <label class="label-input" for="lastname"> Lastname* </label>
          </div>
        </div>
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_email.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="email"
              placeholder="Email"
              type="email"
              v-model="email"
              required
            />
            <label class="label-input" for="email"> Email* </label>
          </div>
        </div>
        <div class="horizontal-input">
          <img class="ico-25px" src="../assets/icons/ico_image.svg" />
          <div class="input-form">
            <input
              class="text-input"
              name="image"
              placeholder="Image URL"
              type="text"
              v-model="image"
              required
            />
            <label class="label-input" for="email"> Image URL </label>
          </div>
        </div>

        <RouterLink v-on:click.prevent="addUser" class="link-button" to="/register-security">
          Next
        </RouterLink>
        <RouterLink class="link-text" to="/"> Registered? Log in </RouterLink>
      </form>
    </div>
    <div class="login-register-column">
      <div class="opacity-black"></div>
      <img
        class="login-register-image"
        src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg"
      />
    </div>
  </main>
</template>

<style scoped>

.line {
  border: 2px solid var(--dark_gray_color);
  width: 100px;
}

.input-file {
  display: none;
}

.label-file {
  border: 1px solid var(--dark_gray_color);
  border-radius: 25px;

  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;

  font-size: 15px;
  color: var(--black_color);
}

.input-file:focus,
.label-file:hover {
  background-color: var(--dark_gray_color);
  border-radius: 25px;
}

.opacity-black {
  visibility: hidden;
}
/*
@media (max-width: 1000px) {
    .login-register-row {
        flex-direction: column-reverse;
    }

    .center {
        position: absolute;
        width: 100%;
    }

    .login-register-title {
        color: var(--white_color);
    }

    .horizontal-input {
        justify-content: center;
        width: 200px;
    }

    .register-panel-width {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .login-register-panel {
      padding: 35px 0 35px 0;
      border-radius: 20px 20px 0 0;
    }

    .link-button {
      width: 180px;
    }

    .bar-text1, .bar-text2 {
      color: var(--white_color);
    }

    .opacity-black {
      visibility: visible;
      color: var(--color_black);
      opacity: 0.5;
      position: absolute;
    }

    .bar-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--black_color);
      border-radius: 20px;
      padding: 15px;
    }

    .line-container {
      margin: 0;
    }

    .text-container {
      background-color: var(--black_color);
      border-radius: 20px;
      padding: 15px;
    }
}*/
</style>

<script>
import register from '../assets/js/register.js'

export default {
  extends: register
}
</script>

