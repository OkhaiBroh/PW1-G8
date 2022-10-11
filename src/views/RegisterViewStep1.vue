<template>
    <div class="row">
        <div class="column center">
            <p class="title"> Open Events </p>
            <div class="bar-container">
                <div class="line-container">
                    <span class="circle-gray"></span>
                    <hr class="line">
                    <span class="circle-gray"></span>
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
                        <input class="text-input" name="name" placeholder="Name" type="text" required>
                        <label class="label-input" for="name"> Name* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_user.svg"/>
                    <div class="input-form">
                        <input class="text-input" name="lastname" placeholder="Lastname" type="text" required>
                        <label class="label-input" for="lastname"> Lastname* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_email.svg"/>
                    <div class="input-form">
                        <input class="text-input" name="email" placeholder="Email" type="email" required>
                        <label class="label-input" for="email"> Email* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_image.svg"/>
                    <div class="input-form">
                        <label class="label-file" for="file-upload"> Select profile picture... </label>
                        <input class="input-file" id="file-upload" type="file">
                    </div>
                </div>
            
                <RouterLink class="link-button" to="/"> Next </RouterLink>
                <RouterLink class="login-text" to="/"> Registered? Log in </RouterLink>
            </div>
        </div>
        <div class="column">
            <img class="image" src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg">
        </div>
    </div> 
</template>

<style scoped>
    .line {
        border: 2px solid var(--gray_color);
        width: 100px;
    }
</style>