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

    
    
</style>