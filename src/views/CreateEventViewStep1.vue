<template>
    <div class="background">
        <div class="general-container">
            <div class="main-panel">
                <div class="title-and-bar">
                    <p class="create-event-title"> Create Event </p>
                    <div class="progress-bar">
                    </div>
                </div>
                <section class="data-input">
                    <div class="name-description-camps">
                    </div>

                </section>
                <div class="buttons">
                </div>
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
    
</style>