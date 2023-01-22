<script>
import events from '../js/events.js'

export default {
  extends: events,
}
</script>

<template>
    <div class="upper-section">
        <div class="sorter">
            <img class="ico" src="../icons/rating_sort_ico.svg" alt="calendar ico"/>
            <p class="text"> SORT BY RATING </p>
        </div>
        <RouterLink class="create-btn" to="/create-event-1">
          Create
        </RouterLink>
    </div>
    <section class="events-panel">
        <Event v-for="event in event_query" :key="event.id" :id="event.id" :name="event.name" :image="event.image" :location="event.location" :date="event.date"></Event>
    </section>
</template>

<style scoped>
.upper-section {
  width: 86%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10px 40px 0px 20px;
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
  margin: 0 0 0 320px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
    font-size: 20px;
    font-weight: bold;
}

.text:hover {
    color: var(--blue_color);
}


.ico {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-top: 2px;
}

.sorter {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
    text-align: center;
}

.sorter:hover {
    cursor: pointer;
}

.events-panel {
  height: 530px;
  width: 857px;
  margin-top: 20px;
  padding-bottom: 40px;

  overflow: hidden;
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.events-panel::-webkit-scrollbar {
  width: 15px;
  border-radius: 20px;
}

/* Track */
.events-panel::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
.events-panel::-webkit-scrollbar-thumb {
  background: var(--blue_color);
  border-radius: 10px;
}

/* Handle on hover */
.events-panel::-webkit-scrollbar-thumb:hover {
  background: var(--blue_color);
}

</style>
