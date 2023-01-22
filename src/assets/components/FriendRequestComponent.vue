<script>
      import AuthService from "../js/AuthService.js";

export default {

    data() {
        return {
            token: AuthService.getToken(),
        }
    },
    props: ["id", "username", "image"], 
    methods: {
        accept: function(){
            console.log("accept");
             // API
            let url = "http://puigmal.salle.url.edu/api/v2/friends/" + this.id;
            fetch(url, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
                }
            }).then(response => response.json())
            .then(result => {
               alert("Friend added");
               this.$emit('update');
            })
            .catch(error => console.error(error));
        },
        reject: function(){
            console.log("reject");
            let url = "http://puigmal.salle.url.edu/api/v2/friends/" + this.id;
            fetch(url, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
                }
            }).then(response => response.json())
            .then(result => {
               alert("Friend request rejected");
               this.$emit('update');
            })
            .catch(error => console.error(error));
        }
    }
}
</script>

<template>
    <article class="friend_div">
          <img
            src="../icons/ico_profile_default.svg"
            class="friend_ico"
          />

          <div class="friend-text-buttons">
            <b> {{ username }} </b>
          </div>
          <div class="buttons">
            <div class="accept-button" v-on:click="accept()">
              <img src="../icons/ico_tick.svg" class="ico-accept" />
            </div>
            <div class="reject-button" v-on:click="reject()">
              <img src="../icons/ico_close.svg" class="ico-reject" />
            </div>
          </div>
        </article>
</template>

<style scoped>

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

</style>
