<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header v-if="!['login','register security','register account','register successful'].includes($route.name)"> <!-- Here we include the names where we don't want to display the header-->
        <img class="ico_logo" src="./assets/icons/ico_logo.svg" >
        
        <nav class="options">
            <div class="header-option">
                <RouterLink class="header-text" to="/messages">
                   <img class="ico" src="./assets/icons/ico_message.svg">
                   <p>Messages</p>
                </RouterLink>
            </div>
                
            <div class="header-option">
                <RouterLink class="header-text" to="/events">
                    <img class="ico" src="./assets/icons/ico_event.svg">
                    <p>Events</p>
                </RouterLink>
            </div>
                
            <div class="header-option">
                <RouterLink class="header-text" to="/friends">
                    <img class="ico_friends" src="./assets/icons/ico_friends.svg">
                    <p>Friends</p>  
                </RouterLink>
            </div>   
  
            <div  class="header-option">
                <RouterLink class="header-text" to="/profile">
                    <img class="ico_user" src="./assets/icons/ico_user.svg">
                    <p>Profile</p>
                </RouterLink>
            </div>
        </nav>
    </header>
    <RouterView />
</template>
  