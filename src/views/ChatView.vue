<template>
    <div class="main_div">
        <div class="left">
            <h1>Messages</h1>
            <img class="ico" src="../assets/icons/ico_user_chat.svg"/>
            <p class="p_style">Tomas Uzcudun</p>
        </div>
        <div class="right">
            <div>
                <img class="my_ico" src="../assets/icons/ico_user_chat.svg"/>
                <p class="p_style_user">Arnau Ros Sánchez</p>
            </div>
            <hr>
            <div class="chat">
                <article class="message_cotainer">
                    <div class="my_message">
                        <div class="flr">
                            <div class="message">
                                <p class="p_message">Vamos volando en webs</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="message_cotainer">
                    <div class="friend_message">
                        <div class="flr">
                            <div class="message">
                                <p class="p_message">Si jajaj</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="write">
                <img class="send_message_ico" src="../assets/icons/ico_send_message.svg">
                <p class="write_style">Message...</p>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .message{
        flex: 1 0 auto;
    }
    .message_container{
        position: relative;
        display: inline-block;
        width: 100%;
        margin: 0 0 10px 0;
        padding: 0;
    }
    .flr{
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        width: calc(100% - 50px);
    }
    .p_message{
        display: inline-block;
        font-size: 13px;
        padding: 10px;
    }
    .my_message{
        display: flex;
        float: right;
        width:fit-content;
        background-color: #336699;
        border-radius: 20px;
        margin: 0 0 4px 0;
    }
    .friend_message{
        display: flex;
        float: left;
        width:fit-content;
        background-color: gray;
        border-radius: 20px;
        margin: 0 0 4px 0;
    }
    .ico {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: #336699;
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .my_ico {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        background-color: #336699;
        margin-left: 300px;
    }
    .p_style_user{
        float: right;
        font-size: 20px;
        margin-right: 250px;
        margin-top: 5px;
    }
    .p_style{
        font-size: 25px;
    }
    .main_div{
        width: 1335px;
        height: 100%;
        display: flex;
        justify-content: center;
        padding: 30px;
        align-content: center;
        padding: 50px;
        background-color: #F3F3F5;
    }
    .right {
        float: right;
        width: 60%;
        height: 470px;
        padding: 10px;
        border-radius: 20px;
        text-align: center;
        margin-left: 2%;
        background-color: white;
    }
    .left{
        float: left;
        width: 20%;
        height: 470px;
        padding: 10px;
        border-radius: 20px;
        text-align: center;
        background-color: white;
    }
    .write{
        width: 100%;
        height: 40px;
        margin-top: 10px;
        border-radius: 20px;
        text-align: left;
        background-color:#F3F3F5;
    }
    .send_message_ico {
        width: 30px;
        height: 30px;
        float: right;
        padding-right: 15px;
        padding-top: 5px;
    }
    .write_style{
        font-size: 15px;
        padding-top: 7.5px;
        padding-left: 15px;
        color:gray;
    }
    .chat{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 77%;
        margin-top: 5px;
        border-radius: 20px;
    }
</style>