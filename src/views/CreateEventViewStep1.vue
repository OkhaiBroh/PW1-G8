<template>
    <main class="general-container">
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
            <div class="button-panel">
                <RouterLink class="next-btn" to="/create-event-2"> Next </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>

@import '../assets/css/create-event.css';

/**********************
        DATA INPUT
**********************/

.name-description-camps {
    display: flex;
    flex-direction: column;
}

.event-description-input {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
}

.camp-title {
    font-weight: bold;
    margin-bottom: 6px;
    margin-left: 15px;
}

.event-name-input {
    margin-top: 2px;
    margin-bottom: 50px;
}

.description-input {
    height: 136px;
}

/**********************
        BUTTON
**********************/

.next-btn {
    background-color: var(--blue_color);
    color: var(--white_color);
    border-radius: 25px;
    padding: 10px;
    text-decoration: none;
    text-align: center;

    width: 180px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 30px;
}
    
</style>