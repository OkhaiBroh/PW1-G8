<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
        <nav>
            <div class="header">
            <RouterLink class="header-text" to="/messages">Messages</RouterLink>
            <RouterLink class="header-text" to="/events">events</RouterLink>
            <RouterLink class="header-text" to="/friends">friends</RouterLink>
            <RouterLink class="header-text" to="/profile">profile</RouterLink>

            </div>
        </nav>

        </header>

          <RouterView />

</template>