<script>
import FriendRequest from "./../assets/components/FriendRequestComponent.vue";
import Friend from "./../assets/components/FriendComponent.vue";
import FriendOptions from "./../assets/components/FriendOptions.vue";
import FriendList from "./../assets/components/FriendList.vue";
import AuthService from "./../assets/js/AuthService.js";
export default{
  
  components: {
    FriendRequest, 
    Friend,
    FriendOptions,
    FriendList
  }
  
}
</script>



<template>
  <main class="background">
    
    <FriendOptions v-on:to-list="this.$refs.list.toList()" v-on:to-request-list="this.$refs.list.toRequestList()"/>
    <FriendList ref="list"/>
    
  </main>
</template>

<style scoped>
.background {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5vh;
}

@media (max-width: 1000px) {
  .background {
    flex-direction: column;

    justify-content: center;
    width: 100%;
    align-content: unset;
    justify-content: unset;
    padding: 0;
  }
}
</style>
