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
            <section class="successful-creation-message">
                <p class="congrats-mssg"> Congratulations </p>
                <div class="success-mssg">
                    <hr class="mssg-line">
                    <div class="creation-mssg">
                        <p> The event has been</p>
                        <p> successfully created! </p>
                    </div>
                    <hr class="mssg-line">
                </div>
            </section>
            <div class="button-panel">
                <button class="done-btn"> Done </button>
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
        background-color: var(--light_gray_color);
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
        background-color: var(--white_color);
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
        border-color: var(--blue_color);
    }

    .line {
        border: 2px solid var(--blue_color);
        height: fit-content;
        width: 70px;
        margin-top: 8px;
    }

    /**********************
       CREATION MESSAGE
    **********************/

    .successful-creation-message {
        width: 35%;
        height: 40vh;
        display: flex;
        flex-direction: column;

        text-align: center;
        justify-content: space-between;
    }

    .success-mssg {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .congrats-mssg {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .mssg-line {
        border: 2px solid var(--black_color);
        height: fit-content;
        width: 100%;
        margin-top: 8px; 
    }

    /**********************
          BUTTON
    **********************/

    .button-panel {
        width: 86%;
        text-align: center;
    }

    .done-btn {
        width: 180px;
        font-weight: bold;
        font-size: 14px;
    }
    
</style>