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
                    <p class="creation-mssg"> The event has been</p><p>successfully created! </p>
                    <hr class="mssg-line">
                </div>
            </section>
            <div class="button-panel">
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

    /**********************
          DATA INPUT
    **********************/

    .successful-creation-message {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /**********************
          BUTTON
    **********************/

    .button-panel {
        width: 86%;
        display: flex;
        justify-content: right;
    }

    .next-btn {
        width: 180px;
        font-weight: bold;
        font-size: 14px;
    }
    
</style>