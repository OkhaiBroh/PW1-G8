<script>

import FriendOptions from "./../assets/components/FriendOptions.vue";
import FriendList from "./../assets/components/FriendList.vue";
export default{
  
  components: {
   
    FriendOptions,
    FriendList
  }
  
}
</script>



<template>
  <main class="background">
    
    <FriendOptions v-on:to-list="this.$refs.list.toList()" v-on:to-request-list="this.$refs.list.toRequestList()"/>
    <FriendList  ref="list"/>
    
  </main>
</template>

<style scoped>
.background {
  height: 100%;
  display: flex;
  justify-content: left;
  align-content: center;
  padding: 5vh;
}
.list {
  width:1000px;
  height: 700px;
}

@media (max-width: 1000px) {
  .background {
    flex-direction: column;
    
    width: 100%;
    align-content: unset;
    justify-content: unset;
    padding: 0;
  }
}
</style>
