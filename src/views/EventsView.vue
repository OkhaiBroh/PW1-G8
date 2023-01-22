<script>
import EventList from "../assets/components/EventList.vue";
import EventSearch from "../assets/components/EventSearch.vue"

export default {
  components: {
    EventList,
    EventSearch
  }
}
</script>

<template>
  <main class="general-container">
    <section class="sorter-section panel">
      <EventSearch v-on:search="(url) => this.$refs.list.search(url)"></EventSearch>
    </section>
    <section class="searcher-section panel">
      <EventList ref="list"></EventList>
    </section>
  </main>
</template>

<style scoped>
.general-container {
  height: 100%;
  display: flex;

  justify-content: center;
  align-content: center;
  flex-direction: row;

  padding: 70px;
}

.panel {
  height: 88%;
  display: flex;

  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background-color: var(--white_color);

  padding: 40px 60px 40px 60px;
}

.sorter-section {
  margin-right: 80px;
}

@media (max-width: 1000px) {
  .general-container {
    flex-direction: column;

    justify-content: start;
    align-items: center;

    padding: 20px;
  }

  .panel {
    width: 90%;
    height: fit-content;
    margin: 0 0 20px 0;
    padding: 20px;
    align-items: center;
  }

  .searcher-section {
    margin-bottom: 20px;
  }
}
</style>
