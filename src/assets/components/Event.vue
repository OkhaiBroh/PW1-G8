<script>

export default{
    props: ["name", "location", "date"]
}
</script>

<template>
    <RouterLink class="event-container box-shadow">
        <img
            class="event-image" src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg" alt=""/>
        <p class="timeline-title-text">La Fiestita</p>
        <div class="info-container">
            <img class="ico" src="../assets/icons/ico_location.svg" alt="location ico"/>
            <p class="timeline-info-text">Barcelona</p>
        </div>
        <div class="info-container">
            <img class="ico" src="../assets/icons/ico_calendar.svg" alt="calendar ico"/>
            <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
        </div>
    </RouterLink>   
</template>

<style scoped>
    .event-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        padding: 20px;
        text-decoration: none;
        color: var(--black_color);
    }

    .box-shadow {
        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
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