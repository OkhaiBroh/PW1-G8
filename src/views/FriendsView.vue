<template>
  <main class="background">
    <section class="panel">
      <p class="friends">Friends</p>
      <div class="friends_options">
        <div class="option">
          <b class="option_text">Requests</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>

        <div class="option">
          <b class="option_text">List</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>
      </div>
    </section>

    <!-- List of friends-->
    <section class="list_panel">
      <div class="friend_row">
        <!-- Example of a friend -->
        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Tomas Uzcudun</b>
          </div>
        </article>

        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Tomas Uzcudun</b>
          </div>
        </article>

        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Tomas Uzcudun</b>
          </div>
        </article>
      </div>

      <div class="friend_row">
        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Tomas Uzcudun Tomas Uzcudun</b>
          </div>
        </article>
        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Arnau Ros Sánchez</b>
          </div>
        </article>

        <article class="friend_div">
          <img
            src="../assets/icons/ico_profile_default.svg"
            class="friend_ico"
          />

          <div class="friend-text-buttons">
            <b>Tomas </b>
          </div>
          <div class="buttons">
            <div class="accept-button">
              <img src="../assets/icons/ico_tick.svg" class="ico-accept" />
            </div>
            <div class="reject-button">
              <img src="../assets/icons/ico_close.svg" class="ico-reject" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.background {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 9vh;
}
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  flex-direction: column;
  flex: 100%;

  align-items: center;

  margin: 50px;
  background: var(--white_color);
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 20px;
  padding: 30px;
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
    flex-direction: column;
    padding-bottom: 20px;
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
