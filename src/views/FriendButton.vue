<script>
import AuthService from '../assets/js/AuthService.js'
    export default {
        name: "FriendButton",
        data(){
            return{
                userID: AuthService.getID(),
                token: AuthService.getToken(),
                friends:[
                    {id: 1, friendname: "Arnau Ros"},
                    {id: 2, friendname: "David Deu"},
                    {id: 3, friendname: "Tomas Uzcudun"},
                ],
                messages:[
                    {   id: 1,
                        content: "Hey",
                        userIDSend: 9,
                        userIDRecived: 1,
                        timeStamp: "2022-02-06T06:43:00.000Z"
                    },
                    {   id: 2,
                        content: "Holas",
                        userIDSend: 1,
                        userIDRecived: 9,
                        timeStamp: "2022-02-06T06:43:10.000Z"
                    },
                ],
            }    
        },
        props: {
            friendname: String
        },
        methods:{
            showChatByName(){
                let friendName = document.getElementById("friend-Name").innerText;
                console.log(friendName);
                this.$root.$emit("Friend-Name", this.friendName);

                //------GET chat with user-----//
                let url = 'http://puigmal.salle.url.edu/api/v2/messages/';
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer' + this.token
                    }
                }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.forEach(element =>{
                        message = {
                            id: element.id,
                            content: element.content,
                            userIDSend: element.user_id_send,
                            userIDRecived: element.user_id_recived,
                            timeStamp: element.timeStamp
                        }
                        this.messages.push(message);
                    })
                }) 
            }
        }
    }
</script>

<template>
    <div class="user_chat">
        <button class="button_chat" @click="showChatByName()">
            <router-link to="/ChatBox"></router-link>
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