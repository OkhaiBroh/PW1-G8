<template>
  <div class="background-color">
    <div class="div-container">
      <section class="profile-data">
        <div class="profile box-shadow">
          <p class="title-text center-text">Profile</p>
          <img class="profile-image" src="../assets/icons/ico_user.svg" />
          <button class="log-out-button">Log Out</button>
          <button class="del-acc-button">Delete Account</button>
        </div>
        <div class="personal-data box-shadow">
          <p class="title-text center-text">Personal Data</p>
          <div class="name-lastname-container">
            <div class="container">
              <label class="input-text" for="name"> Name </label>
              <input
                class="input input-margin"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div class="container">
              <label class="input-text" for="lastname"> Lastname </label>
              <input class="input" type="text" name="lastname" id="lastneme" />
            </div>
          </div>
          <div class="email-container">
            <label class="input-text" for="email"> Email </label>
            <input class="email-input" type="text" name="email" id="email" />
          </div>
          <div class="save-changes-container">
            <button class="save-changes">Save Changes</button>
          </div>
        </div>
      </section>

      <section class="security">
        <div class="security-container box-shadow">
          <p class="title-text">Security</p>
          <div class="inputs-container">
            <div class="container">
              <label class="input-text" for="lastname">
                Current Password
              </label>
              <input class="input" type="text" name="lastname" id="lastneme" />
            </div>
            <div class="container">
              <label class="input-text" for="lastname"> New Password </label>
              <input class="input" type="text" name="lastname" id="lastneme" />
            </div>
            <div class="container">
              <label class="input-text" for="lastname">
                Confirm Password
              </label>
              <input class="input" type="text" name="lastname" id="lastneme" />
            </div>
          </div>
          <div class="save-changes-container">
            <button class="save-changes margin-btn-password">
              Change Password
            </button>
          </div>
        </div>
      </section>

      <section class="statistics">
        <div class="statistics-container box-shadow">
          <p class="title-text center-text">Statistics</p>
          <div class="graphs">
            <div class="event-container box-shadow statistics-block">
              <p class="statistics-text">Average Event Score</p>
              <div class="progress-container">
                <svg class="bg-circle">
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    stroke-linecap="round"
                    pathLength="100"
                  ></circle>
                </svg>
                <svg class="aes-progress-circle">
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    stroke-linecap="round"
                    pathLength="100"
                  ></circle>
                </svg>
                <p class="progress-text">6,5</p>
              </div>
            </div>
            <div class="event-container box-shadow statistics-block">
              <p class="statistics-text">Number of Comments</p>
              <div>
                <p class="num-comm-text">53</p>
              </div>
            </div>
            <div class="event-container box-shadow statistics-block">
              <p class="statistics-text">
                % Users with lower number of comments
              </p>
              <div class="progress-container">
                <svg class="bg-circle">
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    stroke-linecap="round"
                    pathLength="100"
                  ></circle>
                </svg>
                <svg class="ulnc-progress-circle">
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    stroke-linecap="round"
                    pathLength="100"
                  ></circle>
                </svg>
                <p class="progress-text">45 %</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline">
        <div class="timeline-container box-shadow">
          <p class="title-text center-text">Timeline</p>
          <div class="events-container">
            <div class="event-container box-shadow">
              <img
                class="event-image"
                src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
                alt=""
              />
              <p class="timeline-title-text">La Fiestita</p>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/location_ico.svg"
                  alt="location ico"
                />
                <p class="timeline-info-text">Barcelona</p>
              </div>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/calendar_ico.svg"
                  alt="calendar ico"
                />
                <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
              </div>
            </div>

            <div class="event-container box-shadow">
              <img
                class="event-image"
                src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
                alt=""
              />
              <p class="timeline-title-text">La Fiestita</p>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/location_ico.svg"
                  alt="location ico"
                />
                <p class="timeline-info-text">Barcelona</p>
              </div>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/calendar_ico.svg"
                  alt="calendar ico"
                />
                <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
              </div>
            </div>

            <div class="event-container box-shadow">
              <img
                class="event-image"
                src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
                alt=""
              />
              <p class="timeline-title-text">La Fiestita</p>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/location_ico.svg"
                  alt="location ico"
                />
                <p class="timeline-info-text">Barcelona</p>
              </div>
              <div class="info-container">
                <img
                  class="ico-25px"
                  src="../assets/icons/calendar_ico.svg"
                  alt="calendar ico"
                />
                <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
              </div>
            </div>

            <div class="round-button-arrow">
              <button class="rounded-button">
                <img
                  class="ico-25px"
                  src="../assets/icons/ico_right_arrow.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

.round-button-arrow {
  display: flex;
  align-items: center;
}

.rounded-button {
  width: 75px;
  height: 75px;

  border-radius: 100%;

  margin: 0;
  padding: 0;

  align-items: center;
  display: flex;
  justify-content: center;
}

/*****************************************
    *               Background               *
    ******************************************/

.background-color {
  background-color: var(--light_gray_color);
  display: flex;
  justify-content: center;
  
}

.div-container {
  width: fit-content;
}

/*****************************************
    *             Profile Section            *
    ******************************************/

.profile-data {
  display: flex;
  justify-content: space-between;

  margin-top: 50px;
}

/*****************************************
    *               Profile Box              *
    ******************************************/

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;

  background-color: white;

  margin-right: 25px;
  padding: 45px;
}

.box-shadow {
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
}

.title-text {
  font-size: 30px;
  font-weight: 700;
}

.center-text {
  text-align: center;
}

.profile-image {
  width: 100px;
  height: 200px;

  margin: 25px 50px 25px 50px;
}

.log-out-button {
  font-weight: 700;
  background-color: var(--orange_color);
  margin: 0;
}

.del-acc-button {
  font-weight: 700;
  background-color: var(--red_color);
  margin: 25px 0 0 0;
}

.del-acc-button:hover {
  background-color: var(--selected_red_color);
}

.log-out-button:hover {
  background-color: var(--selected_orange_color);
}

/*****************************************
    *            Personal Data Box           *
    ******************************************/

.personal-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 20px;

  background-color: white;

  margin-left: 25px;
  padding: 45px 65px 45px 65px;

  flex: 1;
}

.name-lastname-container {
  display: flex;
  justify-content: space-between;
}

.input-text {
  font-size: 15px;
  font-weight: 700;

  margin-left: 20px;
}

.email-input {
  outline: none;
  border: 3px solid black;
  border-radius: 25px;
  height: 35px;

  margin-top: 10px;
  padding-left: 15px;
}

.input {
  outline: none;
  border: 3px solid black;
  border-radius: 25px;
  width: 200px;
  height: 35px;

  margin-top: 10px;
  padding-left: 15px;
}

.input-margin {
  margin-right: 25px;
}

.container {
  display: flex;
  flex-direction: column;
}

.email-container {
  display: flex;
  flex-direction: column;
}

.save-changes {
  font-weight: 700;
  margin: 0;
  width: fit-content;
  padding: 10px 25px 10px 25px;
}

.save-changes-container {
  display: flex;
  justify-content: center;
}

/*****************************************
    *             Security Section           *
    ******************************************/

.margin-btn-password {
  margin-top: 50px;
}

/*****************************************
    *           Statistics Section           *
    ******************************************/

.num-comm-text {
  font-size: 35px;
  font-weight: 700;
  margin: 50px;
}

.statistics-text {
  font-size: 15px;
  margin-bottom: 25px;
  max-width: 175px;
  text-align: center;
  font-weight: 700;
}

.statistics-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.graphs {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  margin-top: 50px;
}

.security-container,
.statistics-container,
.timeline-container {
  display: flex;
  flex-direction: column;

  border-radius: 20px;

  background-color: white;

  margin-top: 50px;
  padding: 50px;
}

.statistics,
.timeline {
  margin-bottom: 50px;
}

.inputs-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
}

/*****************************************
    *           Rounded Progress Bar         *
    *           Average Event Score          *
    ******************************************/

.aes-progress-circle {
  position: absolute;

  width: 140px;
  height: 140px;

  fill: none;

  stroke: var(--blue_color);
  stroke-width: 20px;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;

  animation: anim 2s linear forwards;
}

.bg-circle {
  position: absolute;

  width: 140px;
  height: 140px;

  fill: none;

  stroke: var(--dark_gray_color);
  stroke-width: 20px;
  stroke-dasharray: 472;
}

/* 
        100 - 65 = 35

        100 = maximo del progress
        65 el porcetaje que quieres mostrar
    */

@keyframes anim {
  100% {
    stroke-dashoffset: 35;
  }
}

.progress-container {
  width: 140px;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-text {
  font-size: 25px;
  font-weight: 700;
}

/*****************************************
    *           Rounded Progress Bar         *
    *           Users Lower Num Com          *
    ******************************************/

.ulnc-progress-circle {
  position: absolute;

  width: 140px;
  height: 140px;

  fill: none;

  stroke: var(--blue_color);
  stroke-width: 20px;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;

  animation: anim2 2s linear forwards;
}

@keyframes anim2 {
  100% {
    stroke-dashoffset: 55;
  }
}

/*****************************************
    *             Timeline Section           *
    ******************************************/

.timeline-title-text {
  font-weight: 700;
  font-size: 20px;

  margin-top: 20px;
}

.timeline-info-text {
  font-size: 14px;
}

.ico {
  margin-right: 10px;
}

.info-container {
  display: flex;
  justify-content: center;
  flex-direction: row;

  margin-top: 10px;
}

.event-image {
  max-width: 175px;
  border-radius: 15px;
}

.events-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}

.event-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 35px;
  margin: 25px;

  border-radius: 25px;
}
</style>
