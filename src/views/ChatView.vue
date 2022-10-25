<template>
    <div class="background">
        <div class="left">
            <input class="input_search" type="text" placeholder="search"/>
            <ul class="list_chats">
                <li>
                    <div class="user_chat">
                        <button class="button_chat">
                            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
                            <p class="p_style"> Tomas Uzcudun </p>
                        </button>
                    </div>
                    <div class="user_chat">
                        <button class="button_chat">
                            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
                            <p class="p_style"> Arnau Ros </p>
                        </button>
                    </div>
                    <div class="user_chat">
                        <button class="button_chat">
                            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
                            <p class="p_style"> David Deu </p>
                        </button>
                    </div>
                    <div class="user_chat">
                        <button class="button_chat">
                            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
                            <p class="p_style"> Open Events </p>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="ico-and-name">
                <img class="my_ico" src="../assets/icons/ico_user_chat.svg"/>
                <p class="p_style_user"> Arnau Ros Sánchez </p>
            </div>
            <hr class="line">
            <div class="chat">
                <div class="message_cotainer">
                    <div class="message-background my-message-background">
                        <p class="message-text"> Un Mensaje </p>
                    </div>
                </div>
                <div class="message_cotainer">
                    <div class="message-background other-message-background">
                        <p class="message-text"> Otro Mensaje </p>
                    </div>
                </div>
            </div>
            <div class="write">
                <input class="message-input" type="text" autocomplete="on" placeholder="Message..."/>
                <button class="button_ico"></button>
            </div>
        </div>
    </div>
</template>

<style scoped>

    /****************************************
    *          Setting the Background       *
    *****************************************/

    .background {
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 10vh;
        background-color: var(--gray_color);
    }

    /****************************************
    *        Profile Ico and Name Text      *
    *****************************************/
    .ico-and-name {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        margin: 20px 0 20px 0;
    }

    .my_ico {
        width: 40px;
        height: 40px;
    }

    .p_style_user{
        font-size: 18px;
        margin-left: 15px;
    }

    /****************************************
    *             Separation Line           *
    *****************************************/

    .line {
        border: 2px solid black;
        margin-bottom: 25px;
    }

    /****************************************
    *              Chat Messages            *
    *****************************************/

    .chat {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70%;

        flex-grow: 1;
    }

    .message-background {
        display: flex;
        width: fit-content;
        border-radius: 10px;
        margin: 0 0 5px 0;
    }

    .my-message-background {
        float: right;
        background-color: var(--bg_button);
    }

    .other-message-background {
        float: left;
        background-color: var(--message-gray-color);
    }

    .message-text {
        display: inline-block;
        font-size: 13px;
        padding: 10px;
        color: white;
    }

    .message_container {
        position: relative;
        display: inline-block;
        width: 100%;
        margin: 0 0 10px 0;
        padding: 0;
    }

    /****************************************
    *                Right Side              *
    *****************************************/

    .right {
        width: 50%;
        padding: 5px 50px 25px 50px;
        border-radius: 20px;
        margin-left: 5vw;
        background-color: white;

        display: flex;
        flex-direction: column;

        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
    }

    /****************************************
    *                Left Side              *
    *****************************************/

    .left {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;
        width: 300px;
        border-radius: 20px;

        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);

        padding: 50px 25px 50px 25px;
    }

    /****************************************
    *             Chat users                *
    *****************************************/
    .list_chats{
        list-style: none;
        width: 100%;
    }

    .input_search{
        width: 100%;
        border: none;
        background-color: var(--gray_color);
        padding: 20px 0 20px 0px;
        outline: none;
        border-radius: 20px;
        margin-bottom: 25px;
    }
    .user_chat{
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        padding-top: 10px;
    }
    .p_style {
        font-size: 20px;
        color: #000;
        padding-left: 20px;
    }
    .ico {
        width: 30px;
        height: 30px;
    }

    .button_chat{
        background-color: var(--gray_color);
        display: flex;
        border: 1px solid white;
        align-items: center;
        cursor: pointer;
        flex-direction: row;
        width: 100%;
        height: 50px;
        border-radius: 0px;
        margin-bottom: 35px;
        border-radius: 20px;
    }

    /****************************************
    *             Send Message Bar          *
    *****************************************/
    
    .write {
        margin-top: 5px;
        border-radius: 20px;
        background-color:var(--gray_color);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px;
        height: 20px;
    }

    .button_ico {
        background-color: var(--gray_color);
        background-image: url(../assets/icons/ico_send_message.svg);
        background-size: 35px 30px;
        cursor: pointer;
        width: 35px;
        height: 30px;
        margin-bottom: 35px;
    }

    .message-input {
        background-color: var(--gray_color);
        border-radius: 20px;
        padding-left: 10px;
        border: none;
        outline: none;
        width: 100%;
        padding-right: 10px;
    }
</style>