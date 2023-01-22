<script>
import FriendRequest from "./../assets/components/FriendRequestComponent.vue";
import Friend from "./../assets/components/FriendComponent.vue";
import FriendOptions from "./../assets/components/FriendOptions.vue";
import AuthService from "./../assets/js/AuthService.js";
export default{
  data () {
    return {
      token: AuthService.getToken(),
      userID: AuthService.getID(),
      friends: [],
      friends_request: [], 
      option: "list"
    }
  },
  components: {
    FriendRequest, 
    Friend,
    FriendOptions
  },
  methods: {
    toList: function(){
      this.friends.length = 0;
      this.option = "list"
      console.log("DIOS");

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
            user.image = "../icons/ico_profile_default.svg";
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
          
          if (user.image == null) {
            user.image = "../assets/icons/ico_profile_default.svg";
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
  <main class="background">
    
    <FriendOptions v-on:to-list="toList"/>
    <!-- List of friends-->
    <section v-if="option ==='list'" class="list_panel">
        <Friend v-for="friend in friends" :key="friend.id" :id="friend.id" :username="friend.username" :image="friend.image" />
    </section>
    <section v-if="option ==='request_list'" class="list_panel">
        <FriendRequest v-for="friend_request in friends_request" :key="friend_request.id" :id="friend_request.id" :username="friend_request.username" :image="friend_request.image" />
    </section>
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


.list_panel {
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


.friend_div {
  background-color: var(--white_color);
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 60px;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;

  width: 250px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.08);
}

.accept-button,
.reject-button {
  background-color: var(--green_color);
  border-radius: 40px;
  padding: 5px;
  margin: 10px;
  padding-left: 23px;
  padding-top: 10px;
  padding-right: 23px;
  justify-content: center;
}
.reject-button {
  background-color: var(--red_color);
}

.friend_row {
  display: flex;
  flex-direction: row;
  flex: 50%;
}

.friend_text {
  margin-top: 50px;
  font-size: 20px;
}

.friend_ico {
  border-radius: 56px;
  width: 112px;
  height: 112px;
}

.buttons {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}
.friend-text-buttons {
  font-size: 20px;
  margin-top: 30px;
}
.ico-accept,
.ico-reject {
  width: 20px;
  height: 20px;
}
.col {
  display: flex;
  

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
  .panel {
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 0px;
    padding-top: 20px;
    margin-top: 40px;
    padding-bottom: 10px;
  }
  .friends {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .friends_options {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .option {
    width: 110px;
    margin: 0;

    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
  }
  .list_panel {
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    justify-content: center;
  }
  .friend_row {
    display: flex;
    flex-direction: column;
  }
  .friend_div {
    margin: 0;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
