<template>
  <div class="profile box-shadow">
    <p class="title-text center-text">Profile</p>
    <img class="profile-image" id="image" />
    <button v-on:click="logoutAccount()" class="log-out-button">Log Out</button>
    <button v-on:click="deleteAccount()" class="del-acc-button">
      Delete Account
    </button>
  </div>
  <div class="personal-data box-shadow">
    <p class="title-text center-text">Personal Data</p>
    <div class="name-lastname-container">
      <div class="container">
        <label class="input-text" for="name"> Name </label>
        <input
          v-model="name"
          class="input input-margin"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div class="container">
        <label class="input-text" for="lastname"> Lastname </label>
        <input
          v-model="last_name"
          class="input"
          type="text"
          name="lastname"
          id="lastname"
        />
      </div>
    </div>
    <div class="email-container">
      <label class="input-text" for="email"> Email </label>
      <input
        v-model="email"
        class="email-input"
        type="text"
        name="email"
        id="email"
      />
    </div>
    <div class="save-changes-container">
      <button v-on:click.prevent="UpdatePersonalData()" class="save-changes">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
import AuthService from "/src/assets/js/AuthService.js";

export default {
  created() {
    let url =
      "http://puigmal.salle.url.edu/api/v2/users/" + AuthService.getID();

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + AuthService.getToken(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          document.getElementById("name").value = element.name;
          document.getElementById("lastname").value = element.last_name;
          document.getElementById("email").value = element.email;
          document.getElementById("image").src = element.image;
        });
      })
      .catch((error) => console.error(error));
  },

  data() {
    return {
      name: "",
      last_name: "",
      email: "",
    };
  },

  methods: {
    UpdatePersonalData() {
      let url = "http://puigmal.salle.url.edu/api/v2/users/";
      let data = {
        name: this.name,
        last_name: this.last_name,
        email: this.email,
      };

      fetch(url, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + AuthService.getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    },

    logoutAccount() {
      AuthService.setToken(null);
      AuthService.setID(null);

      console.log(AuthService.getToken());
      console.log(document.cookie);

      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }

      console.log(document.cookie);
      while (AuthService.getToken() != null) {
        AuthService.setToken(null);
        console.log(AuthService.getToken());
      }

      this.$router.push("/");
    },

    deleteAccount() {
      let url = "http://puigmal.salle.url.edu/api/v2/users/";

      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + AuthService.getToken(),
          "Content-Type": "application/json",
        },
      });

      alert("The account has been deleted!");
      this.logoutAccount();
    },
  },
};
</script>
