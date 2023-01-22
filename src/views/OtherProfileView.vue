<script>
import AuthService from "../assets/js/AuthService.js";

export default {
  data() {
    return {
      // Con esto puedes saber el id del usuario
      profileId: this.$route.params.id,
    };
  },
  mounted() {
    let url = "http://puigmal.salle.url.edu/api/v2/users/" + this.profileId;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + AuthService.getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          document.getElementById("name").value = element.name;
          document.getElementById("lastname").value = element.last_name;
          document.getElementById("email").value = element.email;
          document.getElementById("img").src = element.image;
        });
      })
      .catch((error) => console.error(error));
  },
  methods: {
    sendFriendRequest() {
      let url = "http://puigmal.salle.url.edu/api/v2/friends/" + this.profileId;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + AuthService.getToken(),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Friend Request has been sent corretly!");
        })
        .catch((error) => {
          console.error(error);
          alert("An error has occurred while sending a friend request!");
        });
    },
  },
};
</script>

<template>
  <main class="general-container">
    <section class="profile-section panel">
      <p class="profile-title title">Profile</p>
      <img
        id="img"
        class="ppic"
        alt="profile pic"
        onerror="this.src='https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg';"
      />
      <button class="send-request-btn" v-on:click="sendFriendRequest">
        Send Request
      </button>
    </section>
    <section class="data-section panel">
      <p class="personal-data-title title"></p>
      <div class="user-data">
        <div class="user-name-lastname">
          <div class="user-name input">
            <p class="camp-title-text">Name</p>
            <input
              id="name"
              class="camp-content-text"
              type="text"
              readonly="readonly"
            />
          </div>
          <div class="user-lastname input">
            <p class="camp-title-text">Lastname</p>
            <input
              id="lastname"
              class="camp-content-text"
              type="text"
              readonly="readonly"
            />
          </div>
        </div>
        <div class="user-email input">
          <p class="camp-title-text">Email</p>
          <input
            id="email"
            class="email-camp camp-content-text"
            type="text"
            readonly="readonly"
          />
        </div>
      </div>
      <button class="send-message-btn">Send Message</button>
    </section>
  </main>
</template>

<style scoped>
.general-container {
  height: 100%;
  display: flex;

  flex-direction: row;
  justify-content: center;

  padding: 80px;
}

.panel {
  height: 75%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 20px;
  background-color: white;

  padding: 40px 60px 40px 60px;
}

.title {
  font-weight: 900;
  font-size: 25px;

  margin-top: 20px;
  margin-bottom: 30px;
}

/*************************
      PROFILE
**************************/

.profile-section {
  margin-right: 80px;
}

.ppic {
  width: 165px;
  height: 165px;
  border-radius: 10%;
}

.send-request-btn {
  border: 2px solid var(--bg_button);
  font-weight: 700;
  height: 40px;
  width: 170px;
  margin: 40px 0 60px 0;
}

/*************************
               DATA
    **************************/

.send-message-btn {
  border: 2px solid var(--bg_button);
  font-weight: 700;
  height: 40px;
  width: 520px;
  margin: 40px 25px 60px 25px;
}

.user-name-lastname {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.camp-title-text {
  font-weight: bold;
  margin-bottom: 6px;
  margin-left: 15px;
}

.camp-content-text {
  width: 180px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 5px 15px 5px 15px;
  margin-bottom: 20px;
}

.camp-content-text:focus {
  outline: none;
  border-color: var(--blue_color);
}

.email-camp {
  width: 490px;
  margin-bottom: 0px;
}

@media (max-width: 1000px) {
  .general-container {
    flex-direction: column;

    justify-content: start;
    align-items: center;

    padding: 20px;
  }

  .profile-section {
    margin: 0;
  }

  .panel {
    width: 90%;
    height: fit-content;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 18px;
    margin: 0 0 10px 0;
  }

  .ppic {
    height: 130px;
    width: 130px;
  }

  .send-request-btn,
  .send-message-btn {
    margin: 25px 0 25px 0;
    width: 130px;
  }

  .user-name-lastname {
    width: 100%;
    flex-direction: column;
  }

  .user-data {
    width: 90%;
    justify-content: left;
  }

  .camp-title-text,
  .camp-content-text {
    font-size: 14px;
  }

  .camp-content-text {
    width: 88%;
    text-overflow: ellipsis;
  }

  .input {
    width: 100%;
  }
}
</style>
