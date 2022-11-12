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
    
    <img class="ico_logo" src="./assets/icons/ico_logo.svg" />

    <nav class="options">
      
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


        <RouterLink class="header-option" to="/profile">
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


</style>