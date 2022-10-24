<template>
    <div class="background">

        <section class="container">
            <article class="panel">
                <div class="event-details">
                    <div class="name-container">
                        <b class="event-name">La Fiestita</b>
                    </div>
                    <div class="event-description">
                        Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga.Una descripcion muy larga. descripcion muy larga.Una descripcion muy larga.
                    </div>
                    <div class="extra-info">
                        <div class="location-info">
                            <img class="ico-location" src="../assets/icons/ico_location.svg" alt="">
                            <p>Barcelona</p>
                        </div>
                        <div class="date-info">
                            <img class="ico-location" src="../assets/icons/ico_calendar.svg" alt="">
                            <p>1/10/2022 - 5/10/2022</p>
                        </div>
                    </div>

                    <section class="buttons">
                        <a href="#comments" class="comment-button" > 
                            <b class="button-text">Comment</b>
                            <img class="comment-ico" src="../assets/icons/ico_comment.svg" alt="">

                        </a>
                        <a href="#rating" class="rate-us-button">
                            <b class="button-text">Rate Us</b>
                            <img class="rate-us-ico" src="../assets/icons/ico_white_star.svg" alt="">
                        </a>
                        <div class="share-button">
                            <b class="button-text">Share</b>
                            <img class="share-ico" src="../assets/icons/ico_share.svg" alt="">
                        </div>
                    </section>                    
                </div >
                <div class="right-container" >
                <img  class="ico-event" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="">
                <div class="join-button">
                    <b>Join the event</b>
                    <img class="share-ico" src="../assets/icons/ico_star_full.svg">
                </div>

                </div>

                
             </article>

        </section>

        <section id="rating" class="container">
            <div class="rating-panel">
                <div class="rating">
                    <b>Rating</b>
                </div>
                
                <div class="rating-div">
                    <img class="ico-star" src="../assets/icons/ico_star_empty.svg">
                    <img class="ico-star" src="../assets/icons/ico_star_empty.svg">
                    <img class="ico-star" src="../assets/icons/ico_star_empty.svg" >
                    <img class="ico-star" src="../assets/icons/ico_star_empty.svg">
                    <img class="ico-star" src="../assets/icons/ico_star_empty.svg">
                </div>
                    

            </div>
        </section>

        <section id="comments" class="container">
            <div class="comment-panel">
                <div class="comments">
                    <b>Comments</b>
                </div>

                <!-- Comment-->
                <article class="comment-article">
                    <img class="ico-user" src="../assets/icons/ico_profile_default.svg" >
                    <div>
                        <div>
                            <b>Tomas Uzucudn</b>
                        </div>
                        <div class="comment-text">
                            mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :)
                        </div>
                    </div>
                </article>

                <article class="comment-article">
                    <img class="ico-user" src="../assets/icons/ico_profile_default.svg" >
                    <div>
                        <div>
                            <b>Arnau Ros</b>
                        </div>
                        <div class="comment-text">
                            mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :) mucho pero mucho texto :)
                        </div>
                    </div>
                </article>

                <div class="comment-bar">
                        <input class="comment-input" name="message-query" placeholder="Message..." type="text">
                        <img class="send_button" src="../assets/icons/ico_send_message.svg" >

                </div>
            </div>
        </section>

    </div>

</template>

<style scoped>
   
   .background {
        background-color: var(--gray_color);
        display: flex;
        flex-direction: column;
        padding: 200px;
        padding-top: 100px;
    }
    .container {
        display: flex;
        flex-direction: row;
        background-color: white;
        border-radius: 20px ;
        margin-top:20px;
        margin-bottom: 60px;

    }
    .panel {
        flex: 100%;
        display: flex;
        flex-direction: row;
        padding: 80px;
        align-content: center;
    }
    .rating-panel, .comment-panel {
        flex: 100%;
        display: flex;
        flex-direction: column;
        padding: 80px;
        align-content: center;
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
    .event-name, .rating, .comments {
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

    .location-info, .date-info {
        display: flex;
        flex-direction: row;
    }
    .ico-location {
        margin-right: 10px;
        width: 22px;
        height: 28px;
    }

    .buttons {

        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 40px;
    }

    .comment-button, .rate-us-button, .share-button {
        background-color: var(--bg_button);
        padding: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        color:white;
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
        width:60px;
        height: 60px;
    }
    

    .comment-article {
        margin-bottom: 50px;
        display:flex;
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
        display:flex;
        flex-direction: row;
        border-radius: 20px;
        background-color: #13A65F;
        justify-content: space-between;
        padding: 20px;
        color:white;
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
        background-color: #F3F3F5;

        border-radius:20px;
        justify-content: space-between;
    }
    .comment-input {
        display: flex;
        background-color: #F3F3F5;
        border: none;
        padding: 30px;
        width: 100%;
        border-radius: 20px;
        font-size: 15px;
        padding-left: 60px;
        
        
    }
    .comment-input:focus {
        outline: none;
    }
    .send_button {
        padding: 30px;
        width: 40px;
        height: 40px;
    }
   
    
</style>


