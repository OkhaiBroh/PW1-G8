<script>
    export default {
        props: ["friendname"]
    }
</script>

<template>
    <div class="user_chat">
        <button class="button_chat" @click="showChatByName()">
          <img class="ico" src="../assets/icons/ico_user_chat.svg" />
          <p class="p_style" id="friend-Name">{{ friendname }}</p>
        </button>
    </div>
</template>

<style scoped>
   .user_chat {
        display: flex;
        align-items: center;
        height: 50px;
    }
    .button_chat {
        background-color: var(--light_gray_color);
        display: flex;
        border: 1px solid var(--white_color);
        align-items: stretch;
        cursor: pointer;
        flex-direction: row;
        align-content: stretch;
        border-radius: 0px;
        font-size: 100%;
    }
    .ico {
        width: 35px;
        height: 30px;
    }
    .p_style {
        color: #000;
        padding-left: 20px;
    }
    @media (max-width: 1000px) {
        .user_chat{
            width: fit-content;
        }
    }
</style>