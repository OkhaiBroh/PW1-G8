<template>
    <div class="background">
        <div class="left">
            <h1> Messages </h1>
            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
            <p class="p_style"> Tomas Uzcudun </p>
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
        padding: 5px 50px 50px 50px;
        border-radius: 20px;
        margin-left: 5vw;
        background-color: white;
    }

    /****************************************
    *                Left Side              *
    *****************************************/

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 100px;
        border-radius: 20px;
        background-color: white;
    }

    .p_style {
        font-size: 25px;
        text-align: center;
    }

    .ico {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        margin-top: 70px;
        margin-bottom: 70px;
    }
    
    /****************************************
    *             Send Message Bar          *
    *****************************************/
    
    .write {
        margin-top: 10px;
        border-radius: 20px;
        background-color:var(--gray_color);

        display: flex;
        flex-direction: row;
        padding: 15px;
    }

    .button_ico {
        background-color: var(--gray_color);
        background-image: url(../assets/icons/ico_send_message.svg);
        background-size: 35px 30px;
        
        cursor: pointer;
        
        width: 35px;
        height: 30px;

        margin-right: 10px;
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