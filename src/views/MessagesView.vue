<template>
    <div class="background">
        <div class="chat_box">
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
        padding: 5vh;
        background-color: var(--light_gray_color);
    }

    .chat_box{
        height: auto;
        flex: 1 1 auto;
        flex-wrap: wrap;
        min-height: 0;
        min-width: 0;
        justify-content: center;
        flex-direction: row;
        align-items: stretch;
        align-content: stretch;
        display: flex;
    }

    /****************************************
    *                Right Side              *
    *****************************************/

    .right {
        padding: 5px 50px 25px 50px;
        border-radius: 0px;
        margin-left: 2vw;
        margin-top: 2vw;
        margin-right: 2vw;
        margin-bottom: 2vw;
        background-color: white;
        display: flex;
        flex-direction: column;
        width: 50%;
        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
    }

    /****************************************
    *                Left Side              *
    *****************************************/

    .left {
        display: flex;
        margin-left: 2vw;
        margin-top: 2vw;
        margin-right: 2vw;
        margin-bottom: 2vw;
        align-items: center;
        flex-direction: column;
        align-items: stretch;
        align-content: stretch;
        background-color: white;
        border-radius: 0px;
        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
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
        border: 2px solid var(--black_color);
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
        background-color: var(--blue_color);
    }

    .other-message-background {
        float: left;
        background-color: var(--dark_gray_color);
    }

    .message-text {
        display: inline-block;
        font-size: 13px;
        padding: 10px;
        color: var(--white_color);
    }

    .message_container {
        position: relative;
        display: inline-block;
        width: 100%;
        margin: 0 0 10px 0;
        padding: 0;
    }

    /****************************************
    *             Chat users                *
    *****************************************/
    .list_chats{
        list-style: none;
        display: flex;
        height: auto;
    }

    .input_search{
        border: none;
        background-color: var(--light_gray_color);
        height: 50px;
        outline: none;
        border-radius: 0px;
        padding: 0px 0px 0px 5px;
    }
    
    .user_chat{
        display: flex;
        align-items: center;
        height: 50px;
    }

    .button_chat{
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

    .p_style {
        color: #000;
        padding-left: 20px;
    }

    .ico {
        width: 35px;
        height: 30px;
    }

    /****************************************
    *             Send Message Bar          *
    *****************************************/
    
    .write {
        margin-top: 5px;
        border-radius: 20px;
        background-color:var(--light_gray_color);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px;
        height: 20px;
    }

    .button_ico {
        background-color: var(--light_gray_color);
        background-image: url(../assets/icons/ico_send_message.svg);
        background-size: 35px 30px;
        cursor: pointer;
        width: 35px;
        height: 30px;
        margin-bottom: 35px;
    }

    .message-input {
        background-color: var(--light_gray_color);
        border-radius: 20px;
        padding-left: 10px;
        border: none;
        outline: none;
        width: 100%;
        padding-right: 10px;
    }
</style>