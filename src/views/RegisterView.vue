<template>
    <div class="row">
        <div class="column center">
            <p class="title"> Open Events </p>
            <div class="bar-container">
                <div class="line-container">
                    <span class="circle"></span>
                    <hr class="line">
                    <span class="circle"></span>
                </div>
                <div class="text-container">
                    <p class="bar-text1"> Account </p>
                    <p class="bar-text2"> Security </p>
                </div>
            </div>
            <div class="panel">
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_user.svg"/>
                    <div class="input-form">
                        <input name="name" placeholder="Name" type="text" required>
                        <label for="name"> Name* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_user.svg"/>
                    <div class="input-form">
                        <input name="lastname" placeholder="Lastname" type="text" required>
                        <label for="lastname"> Lastname* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_email.svg"/>
                    <div class="input-form">
                        <input name="email" placeholder="Email" type="email" required>
                        <label for="email"> Email* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_image.svg"/>
                    <div class="input-form">
                        <label class="label-file" for="file-upload"> Select profile picture... </label>
                        <input id="file-upload" type="file">
                    </div>
                </div>
                <button class="next"> Next </button>
                <p class="login-text"> Registered? Log in </p>
            </div>
        </div>
        <div class="column">
            <img class="image" src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg">
        </div>
    </div> 
</template>