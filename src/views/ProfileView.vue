<template>
    <div class="background-color">
        <div class="div-container"> 
            <section class="profile-data">
            <div class="profile box-shadow">
                <p class="title-text center-text"> Profile </p>
                <img class="profile-image" src="../assets/icons/ico_user.svg">
                <button class="log-out-button"> Log Out </button>
                <button class="del-acc-button"> Delete Account </button>
            </div>
            <div class="personal-data box-shadow">
                <p class="title-text center-text"> Personal Data </p>
                <div class="name-lastname-container">
                    <div class="container">
                        <label class="input-text" for="name"> Name </label>
                        <input class="input input-margin" type="text" name="name" id="name">
                    </div>
                    <div class="container"> 
                        <label class="input-text" for="lastname"> Lastname </label>
                        <input class="input" type="text" name="lastname" id="lastneme">
                    </div>
                </div>
                <div class="email-container">
                    <label class="input-text" for="email"> Email </label>
                    <input class="input longer" type="text" name="email" id="email">
                </div>
                <div class="save-changes-container">
                    <button class="save-changes"> Save Changes </button>
                </div>    
            </div>
            </section>

            <section class="security">
                <div class="security-container box-shadow">
                    <p class="title-text"> Security </p>
                    <div class="inputs-container"> 
                        <div class="container"> 
                            <label class="input-text" for="lastname"> Current Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                        <div class="container"> 
                            <label class="input-text" for="lastname"> New Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                        <div class="container"> 
                            <label class="input-text" for="lastname"> Confirm Password </label>
                            <input class="input" type="text" name="lastname" id="lastneme">
                        </div>
                    </div>
                    <div class="save-changes-container">
                        <button class="save-changes margin-btn-password"> Change Password </button>
                    </div>   
                </div>
            </section>

            <section class="statistics">
                
            </section>

            <section class="timeline">
                
            </section>
        </div>
    </div>
</template>

<style scoped>
    .div-container {
        width: fit-content;
    }

    .profile-data {
        display: flex;
        justify-content: center;

        margin-top: 50px;
    }

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;

        background-color: white;

        margin-right: 25px;
        padding: 45px;
    }

    .profile-image {
        width: 100px;
        height: 200px;

        margin: 25px 50px 25px 50px;
    }

    .title-text {
        font-size: 30px;
        font-weight: 700;
    }

    .center-text {
        text-align: center;
    }

    .input-text {
        font-size: 15px;
        font-weight: 700;

        margin-left: 20px;
    }

    .input {
        outline: none;
        border: 3px solid black;
        border-radius: 25px;
        width: 200px;
        height: 35px;

        margin-top: 10px;
        padding-left: 15px;
    }

    .input-margin {
        margin-right: 25px;
    }

    .longer {
        width: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .name-lastname-container {
        display: flex;
    }

    .personal-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-radius: 20px;

        background-color: white;

        margin-left: 25px;
        padding: 45px 65px 45px 65px;
    }

    .box-shadow {
        box-shadow: 0px 30px 80px 10px rgba(0, 0, 0, 0.1);
    }

    .email-container {
        display: flex;
        flex-direction: column;
    }

    .save-changes {
        font-weight: 700;
        margin: 0;
        width: fit-content;
        padding: 10px 25px 10px 25px;
    }

    .save-changes-container {
        display: flex;
        justify-content: center;
    }

    .log-out-button {
        font-weight: 700;
        background-color: var(--orange_color);
        margin: 0;
    }

    .del-acc-button {
        font-weight: 700;
        background-color: var(--red_color);
        margin: 25px 0 0 0;
    }

    .del-acc-button:hover {
        background-color: var(--selected_red_color);
    }

    .log-out-button:hover {
        background-color: var(--selected_orange_color);
    }

    .background-color {
        background-color: var(--gray_color);
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .security-container {
        display: flex;
        flex-direction: column;

        border-radius: 20px;

        background-color: white;

        margin-top: 50px;
        padding: 50px;
    }

    .inputs-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }

    .margin-btn-password {
        margin-top: 50px;
    }
</style>