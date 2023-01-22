<script>
//import AuthService from '../assets/js/AuthService.js'
    export default {
        data(){
            return{
                userID: 9/*AuthService.getID()*/,
                token: "ksksksksksk"/*AuthService.getToken()*/,
                friends:[
                    {id: 1, friendname: "Arnau Ros"},
                    {id: 2, friendname: "David Deu"},
                    {id: 3, friendname: "Tomas Uzcudun"},
                ],
            }    
        },
        methods: {
            showInput(){
                let msg = document.getElementById("msg-input").value;
                if (msg != "") {
                    let firstDiv = document.createElement("div");
                    //--------------------firstDiv.className="message_cotainer";-----------------------------//
                    firstDiv.style.cssText = 'position: relative; display: inline-block; width: 100%; margin: 0 0 10px 0; padding: 0;';
                    let secondDiv = document.createElement("div");
                    //--------------------secondDiv.className="message-background other-message-background";-----------------------------//
                    secondDiv.style.cssText = 'display: flex; width: fit-content; border-radius: 10px; margin: 0 0 5px 0; float: right; background-color: var(--blue_color);';
                    let pElement = document.createElement("p");
                    //--------------------pElement.className="message-text";-----------------------------//
                    pElement.style.cssText = 'display: inline-block; font-size: 13px; padding: 10px; color: var(--white_color);';
                    pElement.id = "mi-mensage";
                    pElement.innerText = msg;
                    secondDiv.appendChild(pElement);
                    firstDiv.appendChild(secondDiv);
                    document.getElementById("chatmsgs").appendChild(firstDiv);
                    document.getElementById("msg-input").value = "";

                    //---------------------------------------POST--------------------------------//
                    let senderID = this.userID;
                    let url = 'http://puigmal.salle.url.edu/api/v2/messages';
                    let recivedID = 1;
                    let dataPost = {
                        "content": msg,
                        "user_id_send": senderID,
                        "user_id_recived": recivedID
                    };
                    fetch(url,{
                        hod: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer' + this.token
                        },
                        body: JSON.stringify(dataPost),
                    }).then(response => response.json()
                    ).then(data => {
                    console.log('My data' + data);
                    }).catch(error => console.error(error))
                }
            }
        }
    }
</script>

<template>
    <div>
        <div class="ico-and-name">
            <img class="my_ico" src="../assets/icons/ico_user_chat.svg" />
            <p class="p_style_user" id="friend-name-chat" >Arnau Ros Sánchez</p>
        </div>
        <hr class="line" />
        <div class="chat" id="chatmsgs">
            
        <div class="message_cotainer">
            <div class="message-background other-message-background">
            <p class="message-text">Otro Mensaje</p>
            </div>
        </div>
        </div>
        <div class="write">
        <input
            id="msg-input"
            class="message-input"
            name="message"
            v-model="message"
            type="text"
            autocomplete="on"
            placeholder="Message..."
        />
        <button class="button_ico" @click="showInput()"></button>
        </div>
    </div>
</template>

<style scoped>
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
.p_style_user {
  font-size: 18px;
  margin-left: 15px;
}
.line {
  border: 2px solid var(--black_color);
  margin-bottom: 25px;
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
.chat {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  flex-grow: 1;
}
.write {
  margin-top: 5px;
  border-radius: 20px;
  background-color: var(--light_gray_color);
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