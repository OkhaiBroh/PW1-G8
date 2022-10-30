<template>
  <div class="background">
    <div class="general-container">
      <section class="sorter-pack">
        <div class="sorter-panel">
          <p class="sort-by-text">Sort By</p>
          <button class="name-sort-but">Name</button>
          <button class="date-sort-but">Date</button>
          <button class="location-sort-but">Location</button>
          <button class="rating-sort-but">Rating</button>
        </div>
      </section>
      <section class="searcher-panel">
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
          <button class="create-btn">Create</button>
        </div>
        <div class="events-panel">
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
      </section>
    </div>
  </div>
</template>

<style scoped>
  .background {
    background-color: var(--gray_color);
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  .general-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
  }

    /*************************
             SORTER
    **************************/

.sorter-pack {
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-right: 30px;
}

.sorter-panel {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;

  background-color: white;
  padding: 35px;
}

.sort-by-text {
  font-weight: 900;
  font-size: 25px;

  margin-bottom: 25px;
}

.name-sort-but,
.date-sort-but,
.location-sort-but,
.rating-sort-but {
  border: 2px solid var(--bg_button);
  font-weight: 700;
  width: 150px;
  margin: 20px 0 0 0;

  background-color: white;
  color: black;
}

.name-sort-but:hover,
.date-sort-but:hover,
.location-sort-but:hover,
.rating-sort-but:hover {
  border: 2px solid var(--bg_button);
  font-weight: 700;
  width: 150px;
  margin: 20px 0 0 0;

  background-color: var(--bg_button);
  color: white;
}

/*************************
        SEARCHER + CREATE
    **************************/

.searcher-panel {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  background-color: white;
  padding: 30px 40px 20px 40px;

  border-radius: 20px;
  margin-top: 40px;
}

.upper-searcher-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 2px solid var(--bg_button);
  border-radius: 20px;
  margin-top: 2px;
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
  border: 2px solid var(--bg_button);
  font-weight: 700;
  width: 150px;
  margin: 0 0 0 20px;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.event-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
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
</style>
