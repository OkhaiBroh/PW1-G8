<script>
import ProfilePersonalDataComponent from '../assets/components/ProfilePersonalDataComponent.vue'
import ProfileSecurityComponent from '../assets/components/ProfileSecurityComponent.vue'
import ProfileStatisticsComponent from '../assets/components/ProfileStatisticsComponent.vue';
  
export default {
  components: {
    ProfilePersonalDataComponent,
    ProfileSecurityComponent,
    ProfileStatisticsComponent
  }
}
</script>

<template>
  <main class="div-container">
    <section class="profile-data">
      <ProfilePersonalDataComponent />
    </section>

    <section class="security">
      <ProfileSecurityComponent />
    </section>

    <section class="statistics">
      <ProfileStatisticsComponent />
    </section>

    <section class="timeline">
      <div class="timeline-container box-shadow">
        <p class="title-text center-text">Timeline</p>
        <div class="events-container">
          <div class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/location_ico.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/calendar_ico.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </div>

          <div class="event-container box-shadow">
            <img
              class="event-image margin-right"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/location_ico.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/calendar_ico.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </div>

          <div class="event-container box-shadow">
            <img
              class="event-image"
              src="https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg"
              alt=""
            />
            <p class="timeline-title-text">La Fiestita</p>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/location_ico.svg"
                alt="location ico"
              />
              <p class="timeline-info-text">Barcelona</p>
            </div>
            <div class="info-container">
              <img
                class="ico-25px margin-right"
                src="../assets/icons/calendar_ico.svg"
                alt="calendar ico"
              />
              <p class="timeline-info-text">01/10/2022 - 05/10/2022</p>
            </div>
          </div>

          <div class="round-button-arrow">
            <button class="rounded-button">
              <img class="ico-25px" src="../assets/icons/ico_right_arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
  @import '../assets/css/profile.css';
</style>

