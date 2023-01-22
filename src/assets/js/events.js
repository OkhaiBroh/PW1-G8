import EventComponent from "../components/EventComponent.vue";
import AuthService from "../js/AuthService.js";

export default {
  data() {
    return {
      name: "",
      date: "",
      location: "",
      event_query: [],
    };
  },
  components: {
    EventComponent,
  },
  mounted: function () {
    let url = "http://puigmal.salle.url.edu/api/v2/events";

    console.log(url);
    this.event_query = [];

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + AuthService.getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.forEach((event) => {
          this.event_query.push({
            id: event.id,
            name: event.name,
            image: event.image,
            location: event.location,
            date: event.date.substring(0, 10).replaceAll("-", "/"),
          });
        })
      )
      .catch((error) => console.error(error));
  },
  methods: {
    search(url) {
      console.log(url);
      this.event_query = [];

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + AuthService.getToken(),
        },
      })
        .then((response) => response.json())
        .then((data) =>
          data.forEach((event) => {
            this.event_query.push({
              id: event.id,
              name: event.name,
              image: event.image,
              location: event.location,
              date: event.date.substring(0, 10).replaceAll("-", "/"),
            });
          })
        )
        .catch((error) => console.error(error));
    },
  },
};
