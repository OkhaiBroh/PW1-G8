<template>
    <div class="background">
        <div class="general-container">
            <section class="sorter-pack">
                <div class="sorter-panel">
                    <p class="sort-by-text"> Sort By </p>
                    <button class="name-sort-but"> Name </button>
                    <button class="date-sort-but"> Date </button>
                    <button class="location-sort-but"> Location </button>
                    <button class="rating-sort-but"> Rating </button>
                </div>
            </section>
            <section class="searcher-panel">
                <div class="upper-searcher-section">
                    <div class="search-bar">
                        <input class="search-input" name="search-query" placeholder="Search..." type="text">
                        <button class="search-btn"> </button>
                    </div>
                    <button class="create-btn"> Create </button>
                </div>
                <div class="events-panel">
                
                </div>
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
             SORTER
    **************************/

    .sorter-pack {
        display: flex;
        justify-content: space-between;

        margin-top: 40px;
        margin-right: 30px;
    }

    .sorter-panel {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        background-color: white;
        padding: 30px 30px 10px 30px;
    }

    .sort-by-text {
        font-weight: 900;
        font-size: 25px;
    }

    .name-sort-but, .date-sort-but, .location-sort-but, .rating-sort-but {
        border: 2px solid var(--bg_button); 
        font-weight: 700;
        height: 40px;
        width: 150px;
        margin: 20px 0 0 0;
    }

    .name-sort-but, .date-sort-but, .location-sort-but {
        background-color: white;
        color: black;
    }

    .name-sort-but {
        margin: 40px 0 0 0;
    }

    .rating-sort-but {
        margin: 20px 0 50px 0;
    }

    
    
</style>