<script>

export default {
    methods: {
        getURL() {
            let url = "http://puigmal.salle.url.edu/api/v2/events";
           
            if (document.getElementById('name').value != "" || 
                document.getElementById('location').value != "" || 
                document.getElementById('date').value != "") {
                url = url + "/search?";
                if (document.getElementById('location').value) url = url + "location=" + this.location + "&";
                if (document.getElementById('name').value) url = url + "keyword=" + this.name + "&";
                if (document.getElementById('date').value) url = url + "date=" + this.date + "&"; 

                url = url.slice(0, -1);
            }

            return url
        }   
    }
}
</script>


<template>
    <p class="sort-by-text title">Search By</p>
    <div class="input-group">
    <div class="input-pack">
        <label class="input-label" for="name-query"> Name </label>
        <input id="name" class="name-input input" name="name-query" type="text" v-model="name" />
    </div>
    <div class="input-pack">
        <label class="input-label" for="location-query"> Location </label>
        <input id="location" class="location-input input" name="location-query" type="text" v-model="location" />
    </div>
    <div class="input-pack">
        <label class="input-label" for="name-query"> Start Date </label>
        <input id="date" class="date-input input" name="date-query" type="date" v-model="date" />
    </div>
    </div>
    <button class="search-btn" v-on:click="$emit('search', getURL())"> Search </button>
</template>

<style scoped>
    .title {
        font-weight: bold;
        font-size: 25px;

        margin-top: 20px;
        margin-bottom: 60px;
    }

    /*************************
            SEARCHER
    **************************/

    .input-label {
        font-size: 18px;
    }

    .input-group {
        width: 100%;
        height: 340px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .input-pack {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .input {
        border: 2px solid var(--blue_color);
        border-radius: 100px;
        padding: 5px 20px 5px 20px;
    }

    .input-label {
        margin-left: 10px;
        margin-bottom: 10px;
    }
</style>