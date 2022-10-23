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

</style>