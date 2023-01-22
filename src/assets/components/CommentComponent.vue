<script>
export default {
  props: ["username", "text"],
};
</script>

<template>
  <article class="comment-article">
    <img class="ico-user" src="../icons/ico_profile_default.svg" />
    <div class="comment-info">
      <div class="comment-user-name">
        <b> {{ username }}</b>
      </div>
      <div class="comment-text">
        <p>{{ text }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.comment-article {
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
}
.ico-user {
  width: 100px;
  height: 100px;
  margin-right: 40px;
}
.comment-text {
  text-align: justify;
}
</style>
