<script>

export default{
    props: ["username"]
}
</script>

<template>
    <article class="friend_div">
          <img
            src="../icons/ico_profile_default.svg"
            class="friend_ico"
          />
          <div class="friend_text">
            <b>Arnau Ros Sánchez</b>
          </div>
        </article>    
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