<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
        <nav>
            
            <RouterLink to="/messages">messages</RouterLink>
            <RouterLink to="/events">events</RouterLink>
            <RouterLink to="/friends">friends</RouterLink>


        </nav>
        </header>

          <RouterView />

</template>