<template>
    <div class="general-container">
        <div class="main-panel">
            <div class="title-and-bar">
                <p class="create-event-title"> Create Event </p>
                <div class="progress-bar">
                    <div class="progress">
                        <span class="circle-gray circle1"></span>
                        <hr class="line line1">
                        <span class="circle-gray circle2"></span>
                        <hr class="line line2">
                        <span class="circle-gray circle3"></span>
                    </div>
                    <div class="progress-titles">
                        <p class="circle-name"> Step 1 </p>
                        <p class="circle-name step"> Step 2 </p>
                        <p class="circle-name step"> Step 3 </p>
                    </div>
                </div>
            </div>
            <section class="data-input">
                <div class="dates-camps">
                    <div class="event-start-date-input">
                        <p class="camp-title start-date"> Start Date </p>
                        <input class="input start-date-input" name="event-start-date" type="text">
                    </div>
                    <div class="event-end-date-input">
                        <p class="camp-title end-date"> End Date </p>
                        <input class="input end-date-input" name="event-end-date" type="text">
                    </div>
                </div>
                <div class="event-image-input">
                    <p class="camp-title photo"> Image </p>
                    <img class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="">
                </div>
            </section>
            <div class="button-panel">
                <button class="back-btn"> Back </button>
                <button class="next-btn"> Next </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import '../assets/css/create-event.css';  

    /**********************
     PROGRESS BAR & TITLE
    **********************/

    .circle1, .line1 {
        border-color: var(--blue_color);
    }


    /**********************
          DATA INPUT
    **********************/

    .dates-camps {
        display: flex;
        flex-direction: column;
    }

    .event-image-input {
        margin-right: 30px;
        display: flex;
        flex-direction: column;
    }

    .camp-title {
        font-weight: bold;
        margin-bottom: 6px;
        margin-left: 15px;
    }

    .event-start-date-input {
        margin-top: 2px;
        margin-bottom: 50px;
    }

    .event-image {
        width: 340px;
        height: 148px;
        border: 2px solid var(--black_color);
        border-radius: 20px;
    }

    /**********************
          BUTTON
    **********************/

    .next-btn, .back-btn {
        width: 180px;
        font-weight: bold;
        font-size: 14px;

        margin-bottom: 30px;
    }

    .next-btn {
        margin-right: 30px;
    }
    
</style>