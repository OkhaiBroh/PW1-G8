<script>

import Comment from './Comment.vue'
import AuthService from '../assets/js/AuthService.js'

export default {
  data() {
    return {
      userID: AuthService.getID(),
      token: AuthService.getToken(),
      comments: [
        { id: 1, username: 'David', text: 'FJAL' },
        { id: 2, username: 'Tomas', text: 'fajdfafa' },
        { id: 3, username: 'Arnau', text: 'baojdafouia' },
      ],
      name: "La Fiestita",
      description: "Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga. descripcion muy larga.Una descripcion muy larga.",
      location:"Unknown",
      date: "Unknown",
      user_rating: 0,
      user_comment: '',
      new_comment: ''
    }
  },
  components: {
    Comment
  },
  methods: {
    async checkAssistance () {
      let id = 1295;
      let url = 'http://puigmal.salle.url.edu/api/v2/events/' + id + "/assistances/" + this.userID;
      const response = await fetch(url, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        }
      });
      return response.json();

    },
    getComments() {
      // Clear the array of comments
      this.comments.length = 0;
      let comment;
      let id = 1295;
      let url = 'http://puigmal.salle.url.edu/api/v2/events/' + id + "/assistances";
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
      }
      }).then(response => response.json()) 
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
      }).catch(error => console.error(error))
    }, 
    
    updateStars(rating) {
      let s; 
 
      for (let i = 1; i <= 5; i++) {
        s = "star_" + i;

        if ( i <= rating) 
        document.getElementById(s).src = "/src/assets/icons/ico_star_full.svg"; 
        else
        document.getElementById(s).src = "/src/assets/icons/ico_star_empty.svg";
      }
    },

    rateEvent(rating) {
      this.updateStars(rating);

      let id = 1295;
      let url = 'http://puigmal.salle.url.edu/api/v2/events/' + id + "/assistances";
      let assistance = {
        puntuation: rating*2,
      };
      console.log(JSON.stringify(assistance));
      fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(assistance),

      }).then(response => response.json()
      ).then(data => console.log(data)
      ).catch(error => console.error(error))

    }, 
    joinEvent() {
      this.checkAssistance().then(assistance => {
        console.log("MY ASSISTANCE");
        console.log("hola" +assistance);
      if(assistance.length != 0){
        alert("You are already in this event");
        return;
      } else {
          let id = 1295;
          let url = 'http://puigmal.salle.url.edu/api/v2/events/' + id + "/assistances";

          
          fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        
        }).then(response => response.json()
        ).then(data => console.log(data)
        ).catch(error => console.error(error))


      }
      }).catch(error => console.error(error))

      
    
    }, 
    postComment() {
       console.log(this.new_comment);

      let id = 1295;
      let url = 'http://puigmal.salle.url.edu/api/v2/events/' + id + "/assistances";
      let assistance = {
        comentary: this.new_comment,
      }
      fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(assistance),

      }).then(response => response.json()
      ).then(data => {
        console.log('My data' + data);
        getComments();
      }
      ).catch(error => {
        this.getComments();
      })

    }, 

    async copyLink() {
      try {
        await navigator.clipboard.writeText('http://127.0.0.1:5173' + window.location.pathname);
        console.log('Link copied to clipboard');
        console.log(this.$route.fullPath)
      } catch (err) {
        console.error('Failed to copy');
      }
    }
  }, 
  
  mounted: function () {
    
  
    
    this.checkAssistance().then(assistance => {
      if(assistance.length != 0){
        if (assistance[0].puntuation != null) {
          console.log(assistance[0].puntuation);
          this.updateStars(assistance[0].puntuation / 2);
        } else {
          this.updateStars(0);
        } 
        this.user_rating = assistance[0].puntuation;
        this.user_comments = assistance[0].comentary;
      }
    }).catch(error => console.error(error))

    let name, fecha;
    let evento;
    let id = 1295;
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    fetch('http://puigmal.salle.url.edu/api/v2/events/' + id, { headers })
    .then(response => response.json()) 
    .then(data => data.forEach(event =>{
        evento = event;
        console.log(evento);
        this.description = evento.description;
        this.location = evento.location;
        // Format date
        this.name = evento.name;
        this.date = evento.eventStart_date.substring(0, evento.eventStart_date.indexOf('T')).replaceAll("-", "/");
        this.date += " - " + evento.eventEnd_date.substring(0, evento.eventEnd_date.indexOf('T')).replaceAll("-", "/")
        document.getElementById("event-image").src = evento.image;

       
    })).catch(error => console.error(error))

  // 
    this.getComments();
    
  } 
}
</script>


<template>
  <main class="background">
    <section class="panel">
      <div class="event-details">
        <div class="name-container">
          <b class="event-name"> {{ name }}</b>
        </div>
        <div class="event-description">
          <p> {{description}} </p>
        </div>
        <div class="extra-info">
          <div class="location-info">
            <img
              class="ico-location"
              src="../assets/icons/ico_location.svg"
              alt=""
            />
            <p> {{location}} </p>
          </div>
          <div class="date-info">
            <img
              class="ico-location"
              src="../assets/icons/ico_calendar.svg"
              alt=""
            />
            <p> {{date}} </p>
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
          <div class="share-button" v-on:click="copyLink()">
            <b class="button-text">Share</b>
            <img class="share-ico" src="../assets/icons/ico_share.svg" alt="" />
          </div>
        </section>
      </div>
      <div class="right-container">
        <img
          id="event-image"
          class="ico-event"
          src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
          alt=""
        />
        <div class="join-button" v-on:click="joinEvent()">
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
        <img id="star_1" class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(1)" />
        <img id="star_2" class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(2)" />
        <img id="star_3" class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(3)" />
        <img id="star_4" class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(4)" />
        <img id="star_5" class="ico-star" src="../assets/icons/ico_star_empty.svg" v-on:click="rateEvent(5)" />
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
          v-model="this.new_comment"
          class="comment-input"
          name="message-query"
          placeholder="Message..."
          type="text"
         
        />
        
        <img class="send_button" v-on:click="postComment()">
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.event-description {
  text-align: justify;
  font-size: 20px;
}

.extra-info {
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  margin-top: 20px;
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



