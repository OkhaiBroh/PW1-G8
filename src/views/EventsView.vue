<template>
  <main class="general-container">
    <section class="sorter-section panel">
      <p class="sort-by-text title">Search By</p>
      <div class="input-group">
        <div class="input-pack">
          <label class="input-label" for="name-query"> Name </label>
          <input class="name-input input" name="name-query" type="text" v-model="name" />
        </div>
        <div class="input-pack">
          <label class="input-label" for="location-query"> Location </label>
          <input class="location-input input" name="location-query" type="text" v-model="location" />
        </div>
        <div class="input-pack">
          <label class="input-label" for="name-query"> Start Date </label>
          <input class="date-input input" name="date-query" type="date" v-model="date" />
        </div>
      </div>
      <button class="search-btn" v-on:click.prevent="search"> Search </button>
    </section>
    <section class="searcher-section panel">
      <div class="upper-searcher-section">
        <div class="search-bar">
          <input
            class="search-input"
            name="search-query"
            placeholder="Search..."
            type="text"
          /> <!-- v-model is the assignment to JS reference -->
          
        </div>
        <RouterLink class="create-btn" to="/create-event-1">
          Create
        </RouterLink>
      </div>
      <section class="events-panel">
        <Event v-for="event in event_query" :key="event.id" :name="event.username" :location="event.location" :date="event.date"/>
    </section>
    </section>
  </main>
</template>

<script>

import events from '../assets/js/events.js'

export default {
  extends: events
}
</script>


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
  margin-bottom: 60px;
}

/*************************
          SEARCHER
**************************/

.input-label {
  font-size: 18px;
}

.sorter-section {
  margin-right: 80px;
}

.input-group {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.input-pack {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.input {
  border: 2px solid var(--blue_color);
  border-radius: 100px;
  padding: 5px 20px 5px 20px;
}

.input-label {
  margin-left: 10px;
  margin-bottom: 10px;
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

.create-btn, .search-btn {
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
  margin: 0px;
  margin-top: 40px;
  margin-bottom: 30px;
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
