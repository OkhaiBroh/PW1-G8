<script>
import AuthService from "../js/AuthService.js";
import FriendRequest from "./FriendRequestComponent.vue";
import Friend from "./FriendComponent.vue";
export default {
    data() {
        return {
            token: AuthService.getToken(),
            userID: AuthService.getID(),
            friends: [],
            friends_request: [], 
            option: 'list'
        }
    },
    components: {
        FriendRequest, 
        Friend
    },
    methods: {
        toList: function(){
        this.friends.length = 0;
        this.option = "list";

        // API
        let url = "http://puigmal.salle.url.edu/api/v2/users";
        fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
            }
        }).then(response => response.json())
        .then(result => {
            result.forEach(element => { 
            let user = {
                id: element.id,
                username: element.name,
                image: element.image
            }
            
            if (user.image == null) {
                user.image = "../ico_profile_default.svg";
            }
            console.log(user);
            this.friends.push(user);
            
            });
        })
        .catch(error => console.error(error));


        },
        
        toRequestList: function(){
        this.friends_request.length = 0;
        this.option = "request_list";
        

        // API 
        let url = "http://puigmal.salle.url.edu/api/v2/friends/requests";
        fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
            }
        }).then(response => response.json())
        .then(result => {
            result.forEach(element => { 
            let user = {
                id: element.id,
                username: element.name,
                image: element.image
            }
            console.log(user);
            if (user.image == null) {
                user.image = "../icons/ico_profile_default.svg";
            }
            this.friends_request.push(user);
            
            });
        })
        .catch(error => console.error(error))
        }

    },
    mounted() {
        this.toList();
    }
} 


</script>

<template>
    <section v-if="option ==='list'" class="list-panel">
        <Friend v-for="friend in friends" :key="friend.id" :id="friend.id" :username="friend.username" :image="friend.image" />
    </section>
    <section v-if="option ==='request_list'" class="list-panel">
        <FriendRequest v-for="friend_request in friends_request" 
            :key="friend_request.id" :id="friend_request.id" 
            :username="friend_request.username"
            :image="friend_request.image" 
            v-on:update="toRequestList"
            />
    </section>
</template>

<style scoped>

    .list-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 30px;
  background: var(--white_color);
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.05);
 
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 20px;
  padding: 30px;

  overflow: hidden;
  overflow-y: scroll;
  width: 1000px;
  height: 700px;
}


.list-panel::-webkit-scrollbar {
  width: 15px;
  border-radius: 20px;
}

/* Track */
.list-panel::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
.list-panel::-webkit-scrollbar-thumb {
  background: var(--blue_color);
  border-radius: 10px;
}

/* Handle on hover */
.list-panel::-webkit-scrollbar-thumb:hover {
  background: var(--blue_color);
}


@media (max-width: 1000px) {

  .list-panel {
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    justify-content: center;
    width: fit-content;
    height: fit-content;
  }

}

</style>
