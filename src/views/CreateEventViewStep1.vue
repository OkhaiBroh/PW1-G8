<template>
    <div class="background">
        <div class="general-container">
            <div class="main-panel">
                <div class="title-and-bar">
                    <p class="create-event-title"> Create Event </p>
                    <div class="progress-bar">
                        <span class="circle-gray"></span>
                        <hr class="line">
                        <span class="circle-gray"></span>
                        <hr class="line">
                        <span class="circle-gray"></span>
                    </div>
                </div>
                <section class="data-input">
                    <div class="name-description-camps">
                        <div class="event-name-input">
                            <p class="camp-title name"> Name </p>
                            <input class="input name-input" name="event-name" type="text">
                        </div>
                        <div class="event-location-input">
                            <p class="camp-title location"> Location </p>
                            <input class="input location-input" name="event-location" type="text">
                        </div>
                    </div>
                    <div class="event-description-input">
                        <p class="camp-title description"> Description </p>
                        <input class="input description-input" name="event-description" type="text">
                    </div>
                </section>
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

    .general-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: row;
    }

    .main-panel {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        background-color: white;
        padding: 30px;
    }

    .title-and-bar, .data-input, .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .name-description-camps {
        display: flex;
        flex-direction: column;
    }

    .create-event-title {
        font-weight: bold;
        font-size: 25px;
    }

    .progress-bar {
        display: flex;
        flex-direction: row;
    }

    .camp-title {
        font-weight: bold;
        margin-bottom: 6px;
        margin-left: 15px;
    }

    .input {
        width: 180px;
        border: 2px solid black;
        border-radius: 20px;
        padding: 5px 15px 5px 15px;
        margin-bottom: 20px;
    }
    
</style>