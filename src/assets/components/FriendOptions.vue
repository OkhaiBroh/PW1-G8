<script>
export default {
    data() {
        return {
            option: "list"
        }
    },
    methods: {
        toList: function(){
            document.getElementById("list").style.backgroundColor = "var(--blue_color)";
            document.getElementById("list").style.color = "var(--white_color)";

            document.getElementById("request_list").style.backgroundColor = "var(--white_color)";
            document.getElementById("request_list").style.color = "var(--black_color)";
            this.$emit('to-list');
        },
        toRequestList: function(){
            document.getElementById("request_list").style.backgroundColor = "var(--blue_color)";
            document.getElementById("request_list").style.color = "var(--white_color)";

            document.getElementById("list").style.backgroundColor = "var(--white_color)";
            document.getElementById("list").style.color = "var(--black_color)";
            this.$emit('to-request-list');
        }
    }
}

</script>

<template>
    <section class="panel">
      <p class="friends">Friends</p>
      <div class="friends_options">
        <div id="list" class="option" v-on:click=toList>
          <b class="option_text">List</b>
          <img src="../icons/ico_user.svg" class="ico" />
        </div>

        <div id="request_list" class="option" v-on:click=toRequestList>
          <b class="option_text">Requests</b>
          <img src="../icons/ico_user.svg" class="ico" />
        </div>
      </div>
    </section>
</template>

<style scoped>

    .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 50px;
    background-color: white;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 20px;
    padding: 100px;
    padding-top: 0px;
    padding-bottom: 0px;
    }
    .friends {
    font-size: 45px;
    font-weight: 700;
    }
    .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: 4px solid var(--blue_color);
    margin-top: 70px;
    width: 80%;
    padding: 30px;
    }

    .option_text {
    margin-bottom: 15px;
    font-size: 20px;
    }
    .ico {
        width: 25px;
        height: 25px;
    }
</style>
