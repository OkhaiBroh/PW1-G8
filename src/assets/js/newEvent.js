let data = {
  name: "",
  image: "",
  location: "",
  latitude: "",
  longitude: "",
  description: "",
  eventStart_date: "",
  eventEnd_date: "",
  n_participators: "",
  type: "",
};

export default {
  data() {
    return {
      name: "",
      image: "",
      location: "",
      latitude: "",
      longitude: "",
      description: "",
      start_date: "",
      end_date: "",
      n_participators: "",
      type: "",
    };
  },
  methods: {
    addEventStep1() {
      data.name = this.name;
      data.location = this.location;
      data.description = this.description;
    },
    addEventStep2() {
      data.eventStart_date = this.start_date;
      data.eventEnd_date = this.end_date;
      data.image = this.image;
    },
    addEvent() {
      data.latitude = this.latitude;
      data.longitude = this.longitude;
      data.n_participators = this.n_participators;
      data.type = this.type;

      let url = "http://puigmal.salle.url.edu/api/v2/events";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4NSwibmFtZSI6Ik9raGFpQnJvaCIsImxhc3RfbmFtZSI6Ik5vbmUiLCJlbWFpbCI6ImFybmF1QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8xMC8wNS8yMi8zNy9ibGFuay1wcm9maWxlLXBpY3R1cmUtOTczNDYwXzk2MF83MjAucG5nIn0.f47aywurpTVpWb6QmpLJoWY3UsLyZy0T-c3OqMO7FTQ",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    },
  },
};
