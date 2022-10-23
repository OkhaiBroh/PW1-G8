<template>
    <div class="background">
        <div class="general-container">
            <section class="profile-section">
                <div class="profile-panel">
                    <p class="profile-title"> Profile </p>
                    <img class="ppic" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt="profile pic">
                    <button class="send-request-btn"> Send Request </button>
                </div>
            </section>
            <section class="data-section">
                Personal Data
            </section>
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

    /*************************
              PROFILE
    **************************/

    .profile-section {
        display: flex;
        justify-content: space-between;

        margin-top: 40px;
        margin-right: 30px;
    }

    .profile-panel {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        background-color: white;
        padding: 30px 30px 10px 30px;
    }

    .profile-title {
        font-weight: 900;
        font-size: 25px;

        margin-bottom: 30px;
    }

    .ppic {
        width: 165px;
        height: 165px;
        border-radius: 50%;
    }

    .send-request-btn {
        border: 2px solid var(--bg_button); 
        font-weight: 700;
        height: 40px;
        width: 170px;
        margin: 30px 0 20px 0;
    }


</style>