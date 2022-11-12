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
                <div class="event-participants-input">
                    <p class="camp-title participants"> Participants </p>
                    <input class="input participants-input" name="event-participants" type="text">
                </div>
                <div class="event-type-input">
                    <p class="camp-title type"> Type </p>
                    <input class="input type-input" name="event-type" type="text">
                </div>
            </section>
            <div class="button-panel">
                <button class="back-btn"> Back </button>
                <button class="create-btn"> Create </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import '../assets/css/create-event.css';

    /**********************
     PROGRESS BAR & TITLE
    **********************/

    .circle-gray {
        height: 12px;
        width: 12px;
        border-color: var(--blue_color);
    }

    .line {
        border: 2px solid var(--blue_color);
        height: fit-content;
        width: 70px;
        margin-top: 8px;
    }

    .circle3 {
        border-color: var(--dark_gray_color);
    }

    /**********************
          DATA INPUT
    **********************/

    .event-participants-input, .event-type-input {
        margin-right: 30px;
    }

    .camp-title {
        font-weight: bold;
        margin-bottom: 6px;
        margin-left: 15px;
    }

    .input {
        height: 136px;
    }

    /**********************
          BUTTON
    **********************/

    .create-btn, .back-btn {
        width: 180px;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 30px;
    }
    
    .create-btn {
        margin-right: 30px;
    }
    
</style>