<!--
We are not really convinced this will be the definitive version
of Messages View. In general, we believe that learning JS will
improve our design in this View considerably so we just made
a provisional version. 

The PC idea is fine, but we have realized
that in mobile phone we need to superimpose some divs to others
or making two different views instead and then combining them
in one at Desktop version.

For the next deliverable we will try to make a definitive
mobile version for this functionality.
-->

<script>
import ChatBox from './ChatBox.vue'
import ChatFriends from './ChatFriends.vue'
export default {
  components:{
    ChatBox,
    ChatFriends
  }
}
</script>


<template>
  <div class="general-container">
    <div class="chat_box">
      <ChatFriends class="left"></ChatFriends>
      <ChatBox class="right"></ChatBox>
    </div>
  </div>
</template>

<style scoped>
.general-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
}

.chat_box {
  height: auto;
  flex: 1 1 auto;
  justify-content: center;
  flex-direction: row;
  display: flex;
  border-radius: 20px;
}

/****************************************
    *                Right Side              *
    *****************************************/

.right {
  padding: 5px 50px 25px 50px;
  border-radius: 20px;
  margin: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
}

/****************************************
    *                Left Side              *
    *****************************************/

.left {
  display: flex;
  margin: 20px;
  align-items: center;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1000px) {
  .left{
    width: 100%;
  }
  .right{
    display: none;
  }
  
}
</style>
