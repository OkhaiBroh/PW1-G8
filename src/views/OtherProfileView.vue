<template>
  <div class="general-container">
    <section class="profile-section panel">
      <p class="profile-title title">Profile</p>
      <img
        class="ppic"
        src="../assets/icons/ico_profile_default.svg"
        alt="profile pic"
      />
      <button class="send-request-btn">Send Request</button>
    </section>
    <section class="data-section panel">
      <p class="personal-data-title title">Personal Data</p>
      <div class="user-data">
        <div class="user-name-lastname">
          <div class="user-name-input">
            <p class="camp-title-text">Name</p>
            <p class="camp-content-text">Tomas</p>
          </div>
          <div class="user-lastname-input">
            <p class="camp-title-text">Lastname</p>
            <p class="camp-content-text">Uzcudun</p>
          </div>
        </div>
        <div class="user-email-input">
          <p class="camp-title-text">Email</p>
          <p class="email-camp camp-content-text">
            tomas.uzcudun@students.salle.url.edu
          </p>
        </div>
      </div>
      <button class="send-message-btn">Send Message</button>
    </section>
  </div>
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
  border-radius: 50%;
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

.email-camp {
  width: 490px;
  margin-bottom: 0px;
}
</style>
