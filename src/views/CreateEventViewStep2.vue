<template>
    <div class="background">
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

    html,
    body {
        margin: 0px;
        height: 100%;
    }
    
    .background {
        background-color: var(--gray_color);
        display: flex;
        justify-content: center;
        height: 100vh;
    }

    .main-panel {
        width: 50vw;
        height: 55vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        margin-top: 40px;
        background-color: white;
        padding: 30px;
    }

    /**********************
     PROGRESS BAR & TITLE
    **********************/

    .title-and-bar {
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .create-event-title {
        font-weight: bold;
        font-size: 25px;
    }

    .progress-bar {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }

    .progress, .progress-titles {
        display: flex;
        flex-direction: row;
    }

    .progress {
        margin-bottom: 5px;
        margin-left: 8px;
    }

    .circle-name {
        font-size: 12px;
    }

    .step {
        margin-left: 60px;
    }

    .circle-gray {
        height: 12px;
        width: 12px;
        border-color: var(--progress_color);
    }

    .line {
        border: 2px solid var(--progress_color);
        height: fit-content;
        width: 70px;
        margin-top: 8px;
    }

    .circle1, .line1 {
        border-color: var(--bg_button);
    }


    /**********************
          DATA INPUT
    **********************/

    .data-input {
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

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

    .input {
        width: 240px;
        border: 2px solid black;
        border-radius: 20px;
        padding: 5px 15px 5px 15px;
    }

    .event-start-date-input {
        margin-top: 2px;
        margin-bottom: 10px;
    }

    .event-image {
        width: 240px;
        height: 112px;
        border: 2px solid black;
        border-radius: 20px;
    }

    /**********************
          BUTTON
    **********************/

    .button-panel {
        width: 96%;
        display: flex;
        justify-content: space-between;
    }

    .next-btn, .back-btn {
        width: 180px;
        font-weight: bold;
        font-size: 14px;
    }

    .next-btn {
        margin-right: 30px;
    }
    
</style>