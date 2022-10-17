<template>
    <div class="background-color">
        <div class="div-container"> 
            <section class="profile-data">
            <div class="profile box-shadow">
                <p class="title-text center-text"> Profile </p>
                <img class="profile-image" src="../assets/icons/ico_user.svg">
                <button class="log-out-button"> Log Out </button>
                <button class="del-acc-button"> Delete Account </button>
            </div>
            <div class="personal-data box-shadow">
                <p class="title-text center-text"> Personal Data </p>
                <div class="name-lastname-container">
                    <div class="container">
                        <label class="input-text" for="name"> Name </label>
                        <input class="input input-margin" type="text" name="name" id="name">
                    </div>
                    <div class="container"> 
                        <label class="input-text" for="lastname"> Lastname </label>
                        <input class="input" type="text" name="lastname" id="lastneme">
                    </div>
                </div>
                <div class="email-container">
                    <label class="input-text" for="email"> Email </label>
                    <input class="input longer" type="text" name="email" id="email">
                </div>
                <div class="save-changes-container">
                    <button class="save-changes"> Save Changes </button>
                </div>    
            </div>
            </section>

            <section class="security">
                <div class="security-container box-shadow">
                    <p class="title-text"> Security </p>
                    <div class="inputs-container"> 
                        <div class="container"> 
                            <label class="input-text" for="lastname"> Current Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                        <div class="container"> 
                            <label class="input-text" for="lastname"> New Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                        <div class="container"> 
                            <label class="input-text" for="lastname"> Confirm Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                    </div>
                    <div class="save-changes-container">
                        <button class="save-changes margin-btn-password"> Change Password </button>
                    </div>   
                </div>
            </section>

            <section class="statistics">
                <div class="statistics-container box-shadow">
                    <p class="title-text center-text"> Statistics </p>
                    <div class="graphs"> 
                        <div class="statistics-block"> 
                            <p class="statistics-text"> Average Event Score </p>
                            <div class="circle-wrap">
                                <div class="circle">
                                    <div class="mask full">
                                        <div class="fill"></div>
                                    </div>
                                    <div class="mask half">
                                        <div class="fill"></div>
                                    </div>
                                    <div class="inside-circle"> 75 </div>
                                </div>
                            </div>
                        </div>
                        <div class="statistics-block"> 
                            <p class="statistics-text"> Number of Comments </p>
                            <div>
                                <p class="num-comm-text"> 53 </p>
                            </div>
                        </div>
                        <div class="statistics-block"> 
                            <p class="statistics-text"> % Users with lower number of comments </p>
                            <div class="circle-wrap">
                                <div class="circle">
                                    <div class="mask full">
                                        <div class="fill"></div>
                                    </div>
                                    <div class="mask half">
                                        <div class="fill"></div>
                                    </div>
                                    <div class="inside-circle"> 35 % </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="timeline">
                <div class="timeline-container box-shadow">
                    <p class="title-text center-text"> Timeline </p>
                    <div class="events-container">
                        <div class="event-container box-shadow">
                            <img class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="">
                            <p class="timeline-title-text"> La Fiestita </p>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/location_ico.svg" alt="location ico">
                                <p class="timeline-info-text"> Barcelona </p>
                            </div>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/calendar_ico.svg" alt="calendar ico">
                                <p class="timeline-info-text"> 01/10/2022 - 05/10/2022 </p>
                            </div>
                        </div>

                        <div class="event-container box-shadow">
                            <img class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="">
                            <p class="timeline-title-text"> La Fiestita </p>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/location_ico.svg" alt="location ico">
                                <p class="timeline-info-text"> Barcelona </p>
                            </div>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/calendar_ico.svg" alt="calendar ico">
                                <p class="timeline-info-text"> 01/10/2022 - 05/10/2022 </p>
                            </div>
                        </div>

                        <div class="event-container box-shadow">
                            <img class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="">
                            <p class="timeline-title-text"> La Fiestita </p>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/location_ico.svg" alt="location ico">
                                <p class="timeline-info-text"> Barcelona </p>
                            </div>
                            <div class="info-container">
                                <img class="ico" src="../assets/icons/calendar_ico.svg" alt="calendar ico">
                                <p class="timeline-info-text"> 01/10/2022 - 05/10/2022 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

    .circle, .circle-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle-wrap {
        width: 150px;
        height: 150px;
        background-color: var(--statistics_blue_opacity);
        border-radius: 50%;
    }

    .circle-wrap .circle .mask,
    .circle-wrap .circle .fill {
        width: 150px;
        height: 150px;
        position: absolute;
        border-radius: 50%;
    }

    .mask .fill {
        clip: rect(0px, 75px, 150px, 0px);
        background-color: #227ded;
    }

    .circle-wrap .circle .mask {
        clip: rect(0px, 150px, 150px, 75px);
    }

    .mask.full,
    .circle .fill {
        animation: fill ease-in-out 3s;
        transform: rotate(135deg);
    }

    @keyframes fill {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(135deg);
        }
    }

    .circle-wrap .inside-circle {
        width: 112px;
        height: 112px;
        
        border-radius: 50%;
        line-height: 120px;
        background: white;
        text-align: center;

        color: black;
        position: absolute;
        z-index: 100;
        font-weight: 700;
        font-size: 25px;
    }


    .num-comm-text {
        font-size: 35px;
        font-weight: 700;
        margin: 50px;
    }

    .statistics-text {
        font-size: 15px;
        margin-bottom: 25px;
        max-width: 175px;
        text-align: center;
        font-weight: 700;
    }

    .statistics-block {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .graphs {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;

        margin-top: 50px;
    }

    .div-container {
        width: fit-content;
    }

    .profile-data {
        display: flex;
        justify-content: center;

        margin-top: 50px;
    }

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        background-color: white;

        margin-right: 25px;
        padding: 45px;
    }

    .profile-image {
        width: 100px;
        height: 200px;

        margin: 25px 50px 25px 50px;
    }

    .title-text {
        font-size: 30px;
        font-weight: 700;
    }

    .center-text {
        text-align: center;
    }

    .input-text {
        font-size: 15px;
        font-weight: 700;

        margin-left: 20px;
    }

    .input {
        outline: none;
        border: 3px solid black;
        border-radius: 25px;
        width: 200px;
        height: 35px;

        margin-top: 10px;
        padding-left: 15px;
    }

    .input-margin {
        margin-right: 25px;
    }

    .longer {
        width: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .name-lastname-container {
        display: flex;
    }

    .personal-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-radius: 20px;

        background-color: white;

        margin-left: 25px;
        padding: 45px 65px 45px 65px;
    }

    .box-shadow {
        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
    }

    .email-container {
        display: flex;
        flex-direction: column;
    }

    .save-changes {
        font-weight: 700;
        margin: 0;
        width: fit-content;
        padding: 10px 25px 10px 25px;
    }

    .save-changes-container {
        display: flex;
        justify-content: center;
    }

    .log-out-button {
        font-weight: 700;
        background-color: var(--orange_color);
        margin: 0;
    }

    .del-acc-button {
        font-weight: 700;
        background-color: var(--red_color);
        margin: 25px 0 0 0;
    }

    .del-acc-button:hover {
        background-color: var(--selected_red_color);
    }

    .log-out-button:hover {
        background-color: var(--selected_orange_color);
    }

    .background-color {
        background-color: var(--gray_color);
        display: flex;
        justify-content: center;
    }

    .security-container, 
    .statistics-container,
    .timeline-container {
        display: flex;
        flex-direction: column;

        border-radius: 20px;

        background-color: white;

        margin-top: 50px;
        padding: 50px;
    }

    .statistics, .timeline {
        margin-bottom: 50px;
    }

    .inputs-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }

    .margin-btn-password {
        margin-top: 50px;
    }

    /********************************************
    *
    *
    *               TIMELINE SECTION
    * 
    * 
    ********************************************/

    .timeline-title-text {
        font-weight: 700;
        font-size: 20px;

        margin-top: 20px;
    }

    .timeline-info-text {
        font-size: 14px;
    }

    .ico {
        width: 25px;
        height: 25px;

        margin-right: 10px;
    }

    .info-container {
        display: flex;
        justify-content: center;
        flex-direction: row;

        margin-top: 10px;
    }

    .event-image {
        max-width: 175px;
        border-radius: 15px;
    }

    .events-container {
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
    }

    .event-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        padding: 35px;
        margin: 25px;

        border-radius: 25px;
    }
</style>