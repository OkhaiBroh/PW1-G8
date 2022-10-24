<template>
  <div class="background">
    <div class="bg2">
      <section class="panel">
        
        <p class="friends">Friends</p>

        <div class="option">
          <b class="option_text">Requests</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>

        <div class="option">
          <b class="option_text">List</b>
          <img src="../assets/icons/ico_user.svg" class="ico" />
        </div>
      </section>

      <!-- List of friends-->
      <section class="list_panel">
        <section class="friend_row">
          <!-- Example of a friend -->
          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            <div class="friend_text">
              <b>Tomas Uzcudun</b>
            </div>
          </article>

          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            <div class="friend_text">
              <b>Tomas Uzcudun</b>
            </div>
          </article>

          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            <div class="friend_text">
              <b>Tomas Uzcudun</b>
            </div>
          </article>

        </section>

        <section class="friend_row">
          <!-- Example of a friend -->
          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            <div class="friend_text">
              <b>Tomas Uzcudun Es un boludo</b>
            </div>
          </article>
          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            <div class="friend_text">
              <b>Arnau Ros Sánchez</b>
            </div>
          </article>

          <article class="friend_div">
            <img src="../assets/icons/ico_profile_default.svg" class="friend_ico" />
            
            <div class="friend-text-buttons">
              <b>Tomas </b>
            </div>
            <div class="buttons">
              <div class="accept-button">
                  Accept
              </div>
              <div class="reject-button">
                  Reject
              </div>
            </div>
          </article>

        </section>
      </section>
    </div>
  </div>
</template>


<style scoped>
  html {
    height: 100%;
}
body {
    height: 100%;
}

#app {
    height: 100%;
    
}


.background {
    height: 100%;    
    background: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

}
.panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    margin: 50px;
    background-color: white; 
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 20px;
    padding:100px;
    padding-top: 0px;
    padding-bottom: 0px;
    
}
.friends {
    font-size: 45px;
    font-weight: 700;

}
.option {
    display: flex;
    flex-direction: column;
    align-items:  center;
    border-radius: 20px;
    border: 4px solid #0071F2;
    
    

    margin-top: 70px;
    width: 80%;
    padding: 30px;

}
.option_text {
    margin-bottom: 15px;
    font-size: 20px;

}


.option:active {
    background-color: #0071F2;
}
.list_panel {
    display:flex;
    flex-direction: column;
    flex: 100%;

    align-items: center;
  
    margin: 50px;
    box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.15);

    padding: 30px; 
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 20px;
    padding:30px;
    

}
.ico{
    width: 25px;
    height: 25px;
    
}


.friend_div {
    
    background-color: white;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px; 
    
    width: 250px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.accept-button, .reject-button{
  background-color: green;
  border-radius: 40px;
  padding: 10px;
  margin: 10px;
  
}
.reject-button {
  background-color: red;
}

.friend_row {
    display: flex;
    flex-direction: row;
    flex: 50%; 
}

.bg2 {
    display:flex;
    flex-direction: row;
    padding: 40px;
}
.friend_text {
    margin-top: 50px;
    font-size: 20px;

}

.friend_ico {
    border-radius: 56px;
    width: 112px;
    height: 112px;
}

.buttons{
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}
.friend-text-buttons {
  font-size: 20px;
  margin-top:30px;
}


</style>