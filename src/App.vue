<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
        <nav style="text-align: right">

          
            <div class="header">

              <div class="header-option">
                <RouterLink class="header-text" to="/messages">
                   <img class="ico_messages" src="./assets/icons/ico_message.svg">

                  <p>Messages</p>
                </RouterLink>
              </div>

            
              <div class="header-option">
                <RouterLink class="header-text" to="/events">
                <img class="ico_messages" src="./assets/icons/ico_event.svg">
                  <p>Events</p>
                  
                  </RouterLink>
              </div>

              <div class="header-option">
                <RouterLink class="header-text" to="/friends">
                <img class="ico_header" src="./assets/icons/ico_friends.svg">
                  <p>Friends</p>
                  
                  </RouterLink>
              </div>   

              <div  class="header-option">
                <RouterLink class="header-text" to="/profile">
                <img class="ico_profile" src="./assets/icons/ico_user.svg">
                  <p>Profile</p>
                  
                  </RouterLink>
              </div>           

            </div>
            

            
        </nav>

        </header>

          <RouterView />

</template>