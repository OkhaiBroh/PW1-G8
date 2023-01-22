<script>
import FriendButton from './FriendButton.vue'
import ChatBox from './ChatBox.vue'
//import AuthService from '../assets/js/AuthService.js'
export default {
    data(){
        return{
            userID: 9/*AuthService.getID()*/,
            token: "ksksksksksk"/*AuthService.getToken()*/,
            friends:[
                {id: 1, friendname: "Arnau Ros"},
                {id: 2, friendname: "David Deu"},
                {id: 3, friendname: "Tomas Uzcudun"},
            ],
        }    
    },
    components:{
        FriendButton,
        ChatBox
    },
    methods:{
    showChatByName(){
        let friendName = this.$el.querySelector("#friend-Name");
        let name = friendName.innerText;
        alert(name);
        let nameInChat = this.$el.querySelector("#friend-name-chat");
        nameInChat.innerText = name;
        
    },
    getFriends(){
      this.friends.length = 0;
      let url = 'http://puigmal.salle.url.edu/api/v2/messages/users';
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer' + this.token
        }
      }).then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(element => {
          friend = {
            id: element.id,
            friendname: element.name
          }
          this.friends.push(friend);
        })
      }).catch(error => console.error(error))
    }
  }
}
</script>

<template>
    <div>
        <input class="input_search" type="text" placeholder="Search" />
        <ul class="list_chats" id="friends-list">
          <FriendButton id="vforFriends" @click="showChatByName()" v-for="friend in friends" :key="friend.id" :friendname="friend.friendname"/>
        </ul>
    </div>
</template>

<style scoped>
    .list_chats {
        list-style-type: none;
        height: fit-content;
    }
    .input_search {
        border: none;
        background-color: var(--light_gray_color);
        height: 40px;
        outline: none;
        border-radius: 20px;
        padding: 0px 0px 0px 15px;
        margin: 15px 10px 0 10px;
        border: 1px solid var(--white_color);
    }
    @media (max-width: 1000px) {
        .list_chats{
            width: fit-content;
        }
    }
</style>