<script>

import Comment from './Comment.vue'

export default {
  data() {
    return {
      comments: [
        { id: 1, username: 'David', text: 'FJAL' },
        { id: 2, username: 'Tomas', text: 'fajdfafa' },
        { id: 3, username: 'Arnau', text: 'baojdafouia' },
      ],
    }
  },
  components: {
    Comment
  },
  mounted: function () {
    let name, fecha;
    let evento;
    let id = 1295;
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4NSwibmFtZSI6Ik9raGFpQnJvaCIsImxhc3RfbmFtZSI6Ik5vbmUiLCJlbWFpbCI6ImFybmF1QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8xMC8wNS8yMi8zNy9ibGFuay1wcm9maWxlLXBpY3R1cmUtOTczNDYwXzk2MF83MjAucG5nIn0.f47aywurpTVpWb6QmpLJoWY3UsLyZy0T-c3OqMO7FTQ";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);
    fetch('http://puigmal.salle.url.edu/api/v2/events/', { headers })
    .then(response => response.json()) 
    .then(data => data.forEach(event =>{
        evento = event;
        // aqui haces algo con la data
        //let event = ;
        

       
    }))
    .catch(error => console.error(error))

  // Assistances

  let assitances = [];
  let comment;
  fetch('http://puigmal.salle.url.edu/api/v2/events/' +id + "/assistances", { headers })
    .then(response => response.json()) 
    .then(data  =>{
        console.log(data);
        data.forEach(assistance =>{
        if (assistance.comentary != null) {
            comment = {
              id : assistance.id,
              username: assistance.name + " " + assistance.last_name,
              text: assistance.comentary
            }
            this.comments.push(comment);
        } 
        })
       
    })

    .catch(error => console.error(error))

  }, 
  methods: {
    rateEvent(rating) {
      console.log(rating);
    }
  }
}
</script>


<template>
  <main class="background">
    <section class="panel">
      <div class="event-details">
        <div class="name-container">
          <b class="event-name">La Fiestita</b>
        </div>
        <div class="event-description">
          Una descripcion muy larga.Una descripcion muy larga.Una descripcion
          muy larga.Una descripcion muy larga.Una descripcion muy larga.Una
          descripcion muy larga.Una descripcion muy larga.Una descripcion muy
          larga.Una descripcion muy larga.Una descripcion muy larga. descripcion
          muy larga.Una descripcion muy larga.
        </div>
        <div class="extra-info">
          <div class="location-info">
            <img
              class="ico-location"
              src="../assets/icons/ico_location.svg"
              alt=""
            />
            <p>Barcelona</p>
          </div>
          <div class="date-info">
            <img
              class="ico-location"
              src="../assets/icons/ico_calendar.svg"
              alt=""
            />
            <p>1/10/2022 - 5/10/2022</p>
          </div>
        </div>

        <section class="buttons">
          <a href="#comments" class="comment-button">
            <b class="button-text">Comment</b>
            <img
              class="comment-ico"
              src="../assets/icons/ico_comment.svg"
              alt=""
            />
          </a>
          <a href="#rating" class="rate-us-button">
            <b class="button-text">Rate Us</b>
            <img
              class="rate-us-ico"
              src="../assets/icons/ico_white_star.svg"
              alt=""
            />
          </a>
          <div class="share-button">
            <b class="button-text">Share</b>
            <img class="share-ico" src="../assets/icons/ico_share.svg" alt="" />
          </div>
        </section>
      </div>
      <div class="right-container">
        <img
          class="ico-event"
          src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
          alt=""
        />
        <div class="join-button">
          <b>Join the event</b>
          <img class="share-ico" src="../assets/icons/ico_plus.svg" />
        </div>
      </div>
    </section>

    <section id="rating" class="panel rating-panel">
      <div class="rating">
        <b>Rating</b>
      </div>

      <div class="rating-div">
        <img class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(1)" />
        <img class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(2)" />
        <img class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(3)" />
        <img class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(4)" />
        <img class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(5)" />
      </div>
    </section>

    <section id="comments" class="panel comment-panel">
      <div class="comments">
        <b>Comments</b>
      </div>
      <!-- Comment-->
      
      <ul>
        <Comment v-for="comment in comments" :key="comment.id" :username="comment.username" :text="comment.text" />
      </ul>
      


      <form method="" class="comment-bar">
        <input
          class="comment-input"
          name="message-query"
          placeholder="Message..."
          type="text"
        />
        <button class="send_button"></button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  padding: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.panel {
  background-color: var(--white_color);

  display: flex;
  flex-direction: row;
  padding: 80px;
  align-content: center;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
}
.rating-panel,
.comment-panel {
  display: flex;
  flex-direction: column;
}
.rating-div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 100px;
  margin-right: 100px;
}
.ico-event {
  width: 500px;
  height: 300px;
  border-radius: 20px;
  margin-top: 20px;
}

.name-container {
  margin-bottom: 20px;
}
.event-name,
.rating,
.comments {
  font-size: 40px;
  margin-bottom: 60px;
}

.event-details {
  margin-right: 100px;
}
.event-description {
  text-align: justify;
  font-size: 20px;
}

.extra-info {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
}

.location-info,
.date-info {
  display: flex;
  flex-direction: row;
}
.ico-location {
  margin-right: 10px;
  width: 22px;
  height: 28px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
}

.comment-button,
.rate-us-button,
.share-button {
  height: 40px;
  width: 110px;
  background-color: var(--blue_color);
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  color: var(--white_color);
  text-decoration: none;
  align-items: center;
}
.share-ico {
  height: 31px;
  width: 25px;
}
.rate-us-ico {
  height: 27px;
  width: 25px;
}
.comment-ico {
  height: 27px;
  width: 23px;
}
.button-text {
  margin-right: 10px;
  font-size: 17px;
}

.ico-star {
  width: 60px;
  height: 60px;
}

.comment-article {
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
}
.ico-user {
  width: 100px;
  height: 100px;
  margin-right: 40px;
}
.comment-text {
  text-align: justify;
}
.join-button {
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  background-color: #13a65f;
  justify-content: space-between;
  height: 40px;
  padding: 20px;
  color: white;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
}
.right-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.comment-bar {
  display: flex;
  flex-direction: row;

  justify-content: center;
  background-color: #f3f3f5;
  border-radius: 20px;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.comment-input {
  display: flex;
  background-color: var(--grey_color);
  border: none;
  width: 100%;
  border-radius: 20px;
  font-size: 17px;
}
.comment-input:focus {
  outline: none;
}
.send_button {
  margin: 0;
  width: 40px;
  height: 40px;
  background-image: url("../assets/icons/ico_send_message.svg");
  border-radius: 0px;
  background-color: var(--grey_color);
}

@media (max-width: 1000px) {
  .background {
    margin: 0;
    padding: 20px;
  }
  .panel {
    padding: 20px;
    margin: 0;
    flex-direction: column;
    align-content: unset;
    margin-bottom: 30px;
  }
  .event-details {
    margin: 0;
  }
  .name-container {
    margin: 0;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .extra-info {
    align-self: flex-end;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
  }
  .location-info,
  .date-info {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 10px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .comment-button,
  .rate-us-button,
  .share-button {
    height: 40px;
    width: 310px;

    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0;
    margin-top: 20px;
  }

  .ico-event {
    width: 310px;
    height: 200px;
    border-radius: 20px;
    margin-top: 20px;
  }
  .join-button {
    margin-top: 20px;
  }
  .ico-star {
    width: 40px;
    height: 40px;
  }
  .rating {
    margin: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  .rating-div {
    margin: 0;
    margin-bottom: 10px;
  }

  .comments {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .comment-article {
    flex-direction: column;
  }
  .ico-user {
    display: block;

    margin: auto;
  }
  .comment-info {
    margin-top: 20px;
  }
  .comment-user-name {
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
  }
  .comment-bar {
    padding: 15px;
  }
}
</style>



