<script>
export default {
  props: ["id", "name", "image", "location", "date"],
};
</script>

<template>
  <RouterLink
    class="event-container box-shadow"
    :to="{ name: 'events details', params: { id: id } }"
  >
    <img
      id="id"
      class="event-image"
      :src="image"
      onerror="this.src='https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg';"
      alt=""
    />
    <div class="info-container">
      <p class="timeline-title-text">{{ this.name }}</p>
    </div>
    <div class="info-container">
      <img class="ico" src="../icons/ico_location.svg" alt="location ico" />
      <p class="timeline-info-text">{{ this.location }}</p>
    </div>
    <div class="info-container">
      <img class="ico" src="../icons/ico_calendar.svg" alt="calendar ico" />
      <p class="timeline-info-text">{{ this.date }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.timeline-info-text,
.timeline-title-text {
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.timeline-title-text {
  width: 160px;
}

.event-container {
  width: 140px;
  height: 175px;
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
  box-shadow: 5px 15px 20px 5px rgba(0, 0, 0, 0.07);
}

.event-image {
  width: 145px;
  height: 97px;
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
  text-align: center;
}
</style>
