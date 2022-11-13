<template>
  <main class="general-container">
    <section class="sorter-section panel">
      <p class="sort-by-text title">Sort By</p>
      <div class="buttons-selecter">
        <div class="top-buttons">
          <button class="name-sort opt-but">Name</button>
          <button class="date-sort opt-but">Date</button>
        </div>
        <div class="bottom-buttons">
          <button class="location-sort opt-but">Location</button>
          <button class="rating-sort opt-but">Rating</button>
        </div>
      </div>
    </section>
    <section class="searcher-section panel">
      <div class="upper-searcher-section">
        <div class="search-bar">
          <input
            class="search-input"
            name="search-query"
            placeholder="Search..."
            type="text"
          />
          <button class="search-btn"></button>
        </div>
        <RouterLink class="create-btn" to="/create-event-1">
          Create
        </RouterLink>
      </div>
      <div class="events-panel">
        <div class="events-row">
          <RouterLink class="event-container box-shadow" to="event-details">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </RouterLink>
          <article class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </article>
          <article class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </article>
        </div>
        <div class="events-row">
          <article class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </article>
          <article class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </article>
          <article class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_location.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico"
                src="../assets/icons/ico_calendar.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.general-container {
  height: 100%;
  display: flex;

  justify-content: center;
  align-content: center;
  flex-direction: row;

  padding: 80px;
}

.panel {
  height: 85%;
  display: flex;

  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background-color: var(--white_color);

  padding: 40px 60px 40px 60px;
}

.title {
  font-weight: bold;
  font-size: 25px;

  margin-top: 20px;
  margin-bottom: 80px;
}

/*************************
          SORTER
**************************/

.opt-but {
  margin: 0; /* CSS ISSUE */
  border: 4px solid var(--blue_color);
  font-weight: 700;
  width: 150px;

  background-color: var(--white_color);
  color: var(--black_color);
}

.opt-but:hover {
  background-color: var(--blue_color);
  color: var(--white_color);
}

.buttons-selecter {
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.top-buttons,
.bottom-buttons {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.sorter-section {
  margin-right: 80px;
}

/*************************
      SEARCHER + CREATE
**************************/

.upper-searcher-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px 20px 0px 20px;
}

.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 4px solid var(--blue_color);
  border-radius: 100px;
  padding: 10px;
}

.search-input {
  width: 540px;
  vertical-align: center;
  border: none;
  margin: 2px 0px 2px 15px;
}

.search-input:focus {
  outline: none;
}

.create-btn {
  background-color: var(--blue_color);
  color: var(--white_color);
  border-radius: 25px;
  padding: 10px;
  text-decoration: none;
  text-align: center;

  border: 2px solid var(--blue_color);
  font-weight: 700;
  width: 150px;
  margin: 0 0 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-btn {
  width: 20px;
  height: 20px;
  border-radius: 0px;
  background: url(../assets/icons/ico_search.svg) no-repeat;
  padding: 0;
  margin: 0 15px 0 0;
}

/*************************
        EVENTS
**************************/

.events-panel {
  width: 100%;
}

.events-row {
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
}

.event-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
  text-decoration: none;
  color: var(--black_color);
}

.box-shadow {
  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
}

.event-image {
  max-width: 145px;
  border-radius: 15px;
}

.timeline-title-text {
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
}

.timeline-info-text {
  font-size: 12px;
}

.ico {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.info-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
}

@media (max-width: 1000px) {
  .general-container {
    flex-direction: column;

    justify-content: start;
    align-items: center;

    padding: 20px;
  }

  .panel {
    width: 90%;
    height: fit-content;
    margin: 0 0 20px 0;
    padding: 20px;
    align-items: center;
  }

  .title {
    font-size: 25px;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .buttons-selecter {
    width: 100%;
    flex-direction: row;
  }

  .opt-but {
    /*height: 40px;
    width: 120px;*/
    margin-bottom: 20px;
  }

  .buttons-selecter {
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  .top-buttons,
  .bottom-buttons {
    height: 100%;
    align-items: center;
  }

  .upper-searcher-section {
    flex-direction: column;
  }

  .search-input {
    height: 30px;
    width: 220px;
  }

  .search-bar {
    margin-bottom: 20px;
  }

  .create-btn {
    height: 30px;
    width: auto;
    margin: 0 0 20px 0;
    padding: 10px;
  }

  .events-panel {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .events-row {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .event-container {
    margin-bottom: 20px;
  }
}
</style>
