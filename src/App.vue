<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header
    v-if="
      ![
        'login',
        'register security',
        'register account',
        'register successful',
      ].includes($route.name)
    "
  > <!-- Here we include the names where we don't want to display the header-->

    <div class="minimalist">
      <img class="ico_logo" src="./assets/icons/ico_logo.svg" />
      <div id="dropbtn" class="container dropbtn" @click="openMenuForMobile (); myFunction (this);">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>

    <nav id="options" class="options">
        <RouterLink class="header-option" to="/messages">
          <img class="ico-header" src="./assets/icons/ico_message.svg" />
          <p class="header-text">Messages</p>
        </RouterLink>
      
        <RouterLink class="header-option" to="/events">
          <img class="ico-header" src="./assets/icons/ico_event.svg" />
          <p class="header-text">Events</p>
        </RouterLink>
      
        <RouterLink class="header-option" to="/friends">
          <img class="ico_friends" src="./assets/icons/ico_friends.svg" />
          <p class="header-text">Friends</p>
        </RouterLink>

        <RouterLink class="header-option last-option" to="/profile">
          <img class="ico_user" src="./assets/icons/ico_user.svg" />
          <p class="header-text">Profile</p>
        </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  .options {
    text-align: center;
    padding: 20px;
    display: flex;
}

.header-option {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    align-items: center;
    text-decoration: none;
    color: var(--black_color);
}

.ico-header {
    width: 35px;
    height: 35px;
}

.ico_friends {
    width: 45px;
    height: 35px;
}

.ico_user {
    width: 35px;
    height: 30px;
    
    margin-top: 5px;
}

.ico_logo {
    width: 100px;
    height: 100px;
    margin-left: 40px;
}

.header-text {
  margin-top: 10px;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--white_color);
}

@media (max-width: 1000px) {
  header {
    flex-direction: column;
  }

  .options {
    justify-content: center;
    flex-direction: column;
  }

  .header-option {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 20px;
    border-top: 5px solid var(--black_color);
    margin: 0;
  }

  .header-text {
    margin: 0;
    margin-right: 25px;
  }

  .last-option {
    border-bottom: 5px solid var(--black_color);
  }

  /*************************
    NAV MENU FOR PHONE ICO
  **************************/

  .container {
      /*display: none;*/
      cursor: pointer;
  }
    
  .bar1, .bar2, .bar3 {
      width: 35px;
      height: 5px;
      background-color: var(--black_color);
      margin: 6px 0;
      transition: 0.4s;
  }
    
  .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
  }
    
  .change .bar2 {opacity: 0;}
    
  .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
  }

  .minimalist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 35px;
  }

  .options {
    display: none;
  }
}

</style>

<script>
let check = true;

export default {
  methods: ({
    openMenuForMobile: () => {
      if (check) {
        document.getElementById("options").style.display = "block";
        check = false;
      } else {
        document.getElementById("options").style.display = "none";
        check = true;
      }
    },
    
    myFunction () {
      var x = document.getElementById("dropbtn");
      x.classList.toggle("change");
    }
  }),
};
</script>