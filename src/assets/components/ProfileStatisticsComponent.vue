<script>
import AuthService from "/src/assets/js/AuthService.js";

export default {
  data() {
    return {
      average_score: 0,
      num_comments: 0,
      percentage_comments: 0,
    };
  },
  mounted() {
    let url =
      "http://puigmal.salle.url.edu/api/v2/users/" +
      AuthService.getID() +
      "/statistics";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + AuthService.getToken(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          console.log("avg score: " + element.avg_score);

          this.average_score = element.avg_score;
          this.num_comments = element.num_comments;
          this.percentage_comments = element.percentage_commenters_below;

          if (element.avg_score == null) {
            this.average_score = 0;
          }
          if (element.num_comments == null) {
            this.num_comments = 0;
          }
          if (element.percentage_commenters_below == null) {
            this.percentage_comments = 0;
          }
        });
      })
      .catch((error) => console.error(error));
  },
};
</script>

<template>
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
          <svg id="avg_score" class="aes-progress-circle">
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke-linecap="round"
              pathLength="100"
            ></circle>
          </svg>
          <p class="progress-text">{{ average_score }}</p>
        </div>
      </div>
      <div class="event-container box-shadow statistics-block">
        <p class="statistics-text">Number of Comments</p>
        <div>
          <p class="num-comm-text">{{ num_comments }}</p>
        </div>
      </div>
      <div class="event-container box-shadow statistics-block">
        <p class="statistics-text">% Users with lower number of comments</p>
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
          <p class="progress-text">{{ percentage_comments }} %</p>
        </div>
      </div>
    </div>
  </div>
</template>
