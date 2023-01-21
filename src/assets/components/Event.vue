<script>

export default{
    props: ["id", "name", "location", "date"]
}
</script>

<template>
    <div class="event-container box-shadow">
        <img
            class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt=""/>
        <p class="timeline-title-text"> {{ name }} </p>
        <div class="info-container">
            <img class="ico" src="../icons/ico_location.svg" alt="location ico"/>
            <p class="timeline-info-text"> {{ location }} </p>
        </div>
        <div class="info-container">
            <img class="ico" src="../icons/ico_calendar.svg" alt="calendar ico"/>
            <p class="timeline-info-text"> {{ date }} </p>
        </div>
    </div>   
</template>

<style scoped>
    .event-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        padding: 35px;
        text-decoration: none;
        color: var(--black_color);
        margin: 10px;
        margin-right: 30px;
    }

    .box-shadow {
        box-shadow: 0px 15px 20px 5px rgba(0, 0, 0, 0.07);
    }

    .event-image {
        max-width: 145px;
        border-radius: 15px;
    }

    .timeline-title-text {
        font-weight: 700;
        font-size: 16px;
        margin-top: 10px;
    }

    .timeline-info-text {
        font-size: 12px;
    }

    .ico {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }

    .info-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top: 10px;
    }

</style>