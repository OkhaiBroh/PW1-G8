<script>
import events from "../js/events.js";
import AuthService from "../js/AuthService.js";

export default {
  extends: events,
  methods: {
    sortList() {
      this.search(
        "http://puigmal.salle.url.edu/api/v2/events/" +
          AuthService.getID() +
          "/events"
      );
    },
  },
};
</script>

<template>
  <div class="timeline-container box-shadow">
    <p class="title-text center-text">Timeline</p>
    <div class="events-container">
      <Event
        v-for="event in event_query"
        :key="event.id"
        :id="event.id"
        :name="event.name"
        :image="event.image"
        :location="event.location"
        :date="event.date"
      ></Event>
    </div>
  </div>
</template>
