<script>
export default {
  props: ["id", "username", "image"],
};
</script>

<template>
  <RouterLink
    class="friend_div"
    :to="{ name: 'other profile', params: { id: id } }"
  >
    <img
      :src="image"
      onerror="this.src='src/assets/icons/ico_profile_default.svg'"
      class="friend_ico"
    />
    <div class="friend_text">
      <b> {{ username }} </b>
    </div>
  </RouterLink>
</template>

<style scoped>
.friend_div {
  background-color: var(--white_color);
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 60px;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;

  width: 250px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  text-decoration: none;
  color: var(--black_color);

  box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.08);
}
.friend_text {
  margin-top: 50px;
  font-size: 20px;
}

.friend_ico {
  border-radius: 56px;
  width: 112px;
  height: 112px;
}
</style>
