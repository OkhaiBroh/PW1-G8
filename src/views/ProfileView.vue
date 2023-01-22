<script>
import ProfilePersonalDataComponent from '../assets/components/ProfilePersonalDataComponent.vue'
import ProfileSecurityComponent from '../assets/components/ProfileSecurityComponent.vue'
import ProfileStatisticsComponent from '../assets/components/ProfileStatisticsComponent.vue';
import ProfileTimelineComponent from '../assets/components/ProfileTimelineComponent.vue';
  
export default {
  components: {
    ProfilePersonalDataComponent,
    ProfileSecurityComponent,
    ProfileStatisticsComponent,
    ProfileTimelineComponent,
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
      <ProfileTimelineComponent />
    </section>
  </main>
</template>

<style>
  @import '../assets/css/profile.css';
</style>

