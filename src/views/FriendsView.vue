<script>
import FriendRequest from "./../assets/components/FriendRequestComponent.vue";
import Friend from "./../assets/components/FriendComponent.vue";
import AuthService from "./../assets/js/AuthService.js";
export default{
  data () {
    return {
      token: AuthService.getToken(),
      userID: AuthService.getID(),

      friends: [
        { id: 1, username: "Tomas" },
        { id: 2, username: "Arnau" },
        { id: 3, username: "David" },
      ],
      friends_request: [
        { id: 1, username: "Tomas" },
        { id: 2, username: "Arnau" },
         { id: 3, username: "Tomas" },
        { id: 4, username: "Arnau" },
         { id: 5, username: "Tomas" },
        { id: 6, username: "Arnau" },
        { id: 7, username: "David" }
      ], 
      option: "list"
    }
  },
  components: {
    FriendRequest, 
    Friend
  },
  methods: {
    toList: function(){
      this.option = "list"
      document.getElementById("list").style.backgroundColor = "var(--blue_color)";
      document.getElementById("list").style.color = "var(--white_color)";

      document.getElementById("request_list").style.backgroundColor = "var(--white_color)";
      document.getElementById("request_list").style.color = "var(--black_color)";

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
            username: element.name
          }
          this.friends.push(user);
          
        });
      })
      .catch(error => console.error(error));



    },
    toRequestList: function(){
      this.option = "request_list";
      document.getElementById("request_list").style.backgroundColor = "var(--blue_color)";
      document.getElementById("request_list").style.color = "var(--white_color)";

      document.getElementById("list").style.backgroundColor = "var(--white_color)";
      document.getElementById("list").style.color = "var(--black_color)";

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
        console.log(result);
      })
      .catch(error => console.error(error))

    }
  }
  
}
</script>



<template>
  <main class="background">
    <section class="panel">
      <p class="friends">Friends</p>
      <div class="friends_options">
        <div id="list" class="option" v-on:click=toList>
          <b class="option_text">List</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>

        <div id="request_list" class="option" v-on:click=toRequestList>
          <b class="option_text">Requests</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>
      </div>
    </section>

    <!-- List of friends-->
    <section v-if="option ==='list'" class="list_panel">
        <Friend v-for="friend in friends" :key="friend.id" :id="friend.id" :username="friend.username" />
end v-for="friend in friends" :key="friend.id" :username="friend.username" />
    </section>
    <section v-if="option ==='request_list'" class="list_panel">
        <FriendRequest v-for="friend_request in friends_request" :key="friend_request.id" :username="friend_request.username" />
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
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 50px;
  background-color: white;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 20px;
  padding: 100px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.friends {
  font-size: 45px;
  font-weight: 700;
}
.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 4px solid var(--blue_color);
  margin-top: 70px;
  width: 80%;
  padding: 30px;
}
.option:active {
  background-color: var(--blue_color);
}
.option_text {
  margin-bottom: 15px;
  font-size: 20px;
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
  height: 700px;
}
.ico {
  width: 25px;
  height: 25px;
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
