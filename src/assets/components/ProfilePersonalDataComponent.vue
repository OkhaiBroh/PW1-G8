<template>
    <form class="personal-data box-shadow">
        <p class="title-text center-text">Personal Data</p>
        <div class="name-lastname-container">
            <div class="container">
                <label class="input-text" for="name"> Name </label>
                <input class="input input-margin" type="text" name="name" id="name"/>
            </div>
            <div class="container">
                <label class="input-text" for="lastname"> Lastname </label>
                <input class="input" type="text" name="lastname" id="lastneme" />
            </div>
        </div>
        <div class="email-container">
            <label class="input-text" for="email"> Email </label>
            <input class="email-input" type="text" name="email" id="email" />
        </div>
        <div class="save-changes-container">
            <button class="save-changes">Save Changes</button>
        </div>
    </form>
</template>

<script>
export default {
    mounted() {
        let url = "http://puigmal.salle.url.edu/api/v2/users/";

        fetch (url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => token = response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

        document.getElementById('name').value = name;
    }
}
</script>